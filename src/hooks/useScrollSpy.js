import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds = [], offset = 96) {
  const [active, setActive] = useState(sectionIds?.[0] ?? "home");

  useEffect(() => {
    if (!sectionIds.length) return;

    const handler = () => {
      const y = window.scrollY + offset;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }
      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return active;
}

