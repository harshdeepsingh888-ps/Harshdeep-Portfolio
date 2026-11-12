import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const fontDir = path.join(process.cwd(), "src/app/fonts/og");

/** Shared 1200×630 card used for the site and every case study. */
export async function renderOg({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  const [display, sans] = await Promise.all([
    readFile(path.join(fontDir, "clash-display-600.ttf")),
    readFile(path.join(fontDir, "general-sans-400.ttf")),
  ]);

  // A deterministic field of dots echoing the WebGL hero.
  const dots = Array.from({ length: 220 }, (_, i) => {
    const col = i % 22;
    const row = Math.floor(i / 22);
    const x = 40 + col * 54;
    const wave = Math.sin(col * 0.55 + row * 0.35) * 22;
    const y = 360 + row * 26 + wave;
    const heat = Math.max(0, Math.sin(col * 0.4 - row * 0.2));
    return { x, y, size: 3 + heat * 3, color: heat > 0.55 ? "#ff5b1f" : "rgba(242,239,234,0.22)" };
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "#060606",
          color: "#f2efea",
          fontFamily: "General Sans",
          position: "relative",
        }}
      >
        {dots.map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size,
              borderRadius: 999,
              background: dot.color,
            }}
          />
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#8a8680" }}>
          <span style={{ fontFamily: "Clash Display", fontSize: 30, color: "#f2efea" }}>HS©</span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 12, height: 12, borderRadius: 999, background: "#3ddc97" }} />
            {eyebrow}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Clash Display",
              fontSize: title.length > 12 ? 104 : 140,
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 26, fontSize: 28, color: "#cfcac3", maxWidth: 900 }}>{footer}</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Clash Display", data: display, weight: 600, style: "normal" },
        { name: "General Sans", data: sans, weight: 400, style: "normal" },
      ],
    },
  );
}
