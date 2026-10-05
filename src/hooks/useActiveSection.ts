import { useEffect, useState } from "react";

// Extra space below the header before a section counts as "being read"
const READING_OFFSET = 120;

/**
 * Scroll-spy: returns the id of the last section whose top crossed the reading line
 * just below the sticky header. Returns null above the first section (hero) or when disabled.
 */
export const useActiveSection = (ids: readonly string[], enabled = true) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActiveId(null);
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const header = document.querySelector<HTMLElement>(".navbar")?.offsetHeight ?? 0;
      const line = header + READING_OFFSET;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      let current: string | null = null;
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
      }
      // Short last sections may never reach the line: the end of the page activates the last one
      if (atBottom && document.getElementById(ids[ids.length - 1])) current = ids[ids.length - 1];

      setActiveId(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids, enabled]);

  return activeId;
};
