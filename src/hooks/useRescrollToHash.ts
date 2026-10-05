import { useEffect } from "react";

/**
 * Async sections grow after the router already scrolled to the URL hash,
 * pushing the target out of view. Re-anchor once the section finishes loading.
 */
export const useRescrollToHash = (ready: boolean) => {
  useEffect(() => {
    if (!ready) return;
    const id = window.location.hash.slice(1);
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [ready]);
};
