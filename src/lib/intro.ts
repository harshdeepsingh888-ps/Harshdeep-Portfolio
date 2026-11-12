// The hero fires this once it mounts; the WebGL field waits for it before rising.
let fired = false;
const listeners = new Set<() => void>();

export function fireIntro() {
  if (fired) return;
  fired = true;
  listeners.forEach((listener) => listener());
  listeners.clear();
}

export function onIntro(listener: () => void) {
  if (fired) {
    listener();
    return () => {};
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
