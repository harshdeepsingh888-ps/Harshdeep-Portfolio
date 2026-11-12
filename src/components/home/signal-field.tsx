"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { onIntro } from "@/lib/intro";
import { prefersReducedMotion } from "@/lib/scroll";

import s from "./hero.module.css";

const noise = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;
vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`;

const vertexShader = /* glsl */ `
uniform float uTime, uScroll, uPixel, uIntro, uMouseAmp;
uniform vec2 uMouse;
varying float vH;
varying float vA;
${noise}
void main() {
  vec3 p = position;
  float t = uTime * 0.11;
  float n = snoise(vec3(p.x * 0.16, p.z * 0.26, t)) * 0.85 + snoise(vec3(p.x * 0.55, p.z * 0.6, t * 1.7)) * 0.16;
  float ridge = sin(p.x * 1.05 - uTime * 1.25) * exp(-pow((p.z + 1.4) * 0.7, 2.0)) * 0.55;
  float d = distance(p.xz, uMouse);
  float ripple = sin(d * 5.0 - uTime * 5.0) * exp(-d * 0.75) * 0.32 * uMouseAmp;
  float h = (n + ridge + ripple) * uIntro;
  p.y = h * (1.0 - uScroll * 0.5) - uScroll * 1.2;
  vH = h;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = (1.9 + max(h, 0.0) * 2.6) * uPixel * (7.0 / -mv.z);
  vA = smoothstep(17.0, 4.0, -mv.z) * smoothstep(-10.0, -7.0, p.x) * smoothstep(10.0, 7.0, p.x);
}`;

const fragmentShader = /* glsl */ `
uniform vec3 uColA, uColB;
varying float vH;
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  if (r > 0.5) discard;
  float a = smoothstep(0.5, 0.0, r);
  float heat = smoothstep(-0.05, 0.75, vH);
  vec3 col = mix(uColA * 0.42, uColB * 1.25, heat);
  gl_FragColor = vec4(col, a * vA * (0.42 + heat * 0.95));
}`;

/** The hero's particle terrain. Loads three.js lazily, pauses off-screen, and renders one still frame for reduced motion. */
export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const canvas = canvasRef.current;
      if (disposed || !canvas) return;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
      } catch {
        return; // No WebGL: the CSS glow behind the hero stays as the backdrop.
      }

      const reduce = prefersReducedMotion();
      const small = window.innerWidth < 760;
      const finePointer = window.matchMedia("(pointer: fine)").matches;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x060606, 1);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(small ? 55 : 42, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 2.4, 7.4);
      camera.lookAt(0, -1.1, 0);

      const cols = small ? 150 : 320;
      const rows = small ? 120 : 200;
      const width = 20;
      const depth = 16;
      const positions = new Float32Array(cols * rows * 3);
      let k = 0;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          positions[k++] = (x / (cols - 1) - 0.5) * width;
          positions[k++] = 0;
          positions[k++] = (y / (rows - 1) - 0.5) * depth;
        }
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const uniforms = {
        uTime: { value: reduce ? 6 : 0 },
        uMouse: { value: new THREE.Vector2(99, 99) },
        uMouseAmp: { value: 0 },
        uScroll: { value: 0 },
        uPixel: { value: renderer.getPixelRatio() },
        uIntro: { value: reduce ? 1 : 0 },
        uColA: { value: new THREE.Color("#F2EFEA") },
        uColB: { value: new THREE.Color("#FF5B1F") },
      };
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      scene.add(new THREE.Points(geometry, material));

      const raycaster = new THREE.Raycaster();
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const ndc = new THREE.Vector2();
      const hit = new THREE.Vector3();
      const mouseTarget = new THREE.Vector2(99, 99);
      let mx = 0;
      let my = 0;
      let ampTarget = 0;
      let visible = true;

      const onPointer = (event: PointerEvent) => {
        mx = (event.clientX / window.innerWidth) * 2 - 1;
        my = -(event.clientY / window.innerHeight) * 2 + 1;
        ndc.set(mx, my);
        raycaster.setFromCamera(ndc, camera);
        if (raycaster.ray.intersectPlane(plane, hit)) {
          mouseTarget.set(hit.x, hit.z);
          ampTarget = 1;
        }
      };
      const onScroll = () => {
        const progress = Math.min(window.scrollY / (window.innerHeight * 1.1), 1);
        uniforms.uScroll.value = progress;
        canvas.style.opacity = String(1 - progress * 0.9);
        visible = progress < 1;
      };
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (reduce) renderer.render(scene, camera);
      };

      window.addEventListener("resize", onResize);
      window.addEventListener("scroll", onScroll, { passive: true });
      if (finePointer && !reduce) window.addEventListener("pointermove", onPointer, { passive: true });
      onScroll();

      const offIntro = onIntro(() => {
        if (!reduce) gsap.to(uniforms.uIntro, { value: 1, duration: 2.6, ease: "expo.out" });
      });

      let frame = 0;
      const clock = new THREE.Clock();
      const loop = () => {
        frame = requestAnimationFrame(loop);
        if (!visible) return;
        uniforms.uTime.value = clock.getElapsedTime();
        uniforms.uMouse.value.lerp(mouseTarget, 0.08);
        uniforms.uMouseAmp.value += (ampTarget - uniforms.uMouseAmp.value) * 0.05;
        camera.position.x += (mx * 0.5 - camera.position.x) * 0.03;
        camera.position.y += (2.4 + my * 0.25 - camera.position.y) * 0.03;
        camera.lookAt(0, -1.1, 0);
        renderer.render(scene, camera);
      };

      if (reduce) renderer.render(scene, camera);
      else loop();
      canvas.dataset.ready = "true";

      cleanup = () => {
        cancelAnimationFrame(frame);
        offIntro();
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onPointer);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} className={s.canvas} aria-hidden="true" />;
}
