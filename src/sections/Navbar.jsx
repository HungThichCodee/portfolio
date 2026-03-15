import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { NAV } from "../constants/data";
import { scrollToId } from "../utils/scrollToId";
import { useScrollSpy } from "../hooks/useScrollSpy";

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="inline-flex items-center justify-center rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 text-sm font-semibold text-zinc-800 backdrop-blur hover:bg-white/80 dark:border-white/10 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-900/60"
      aria-label="Toggle dark mode"
      type="button"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}

export function Navbar({ isDark, onToggleTheme }) {
  const sectionIds = useMemo(() => NAV.map((n) => n.id), []);
  const active = useScrollSpy(sectionIds, 110);
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-zinc-200/60 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-zinc-950/40">
        <Container className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToId("home")}
            className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
            type="button"
          >
            Portfolio
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {NAV.map((item) => (
              <Button
                key={item.id}
                variant="link"
                onClick={() => scrollToId(item.id)}
                className={active === item.id ? "font-extrabold" : "font-semibold"}
              >
                {item.label}
              </Button>
            ))}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 text-sm font-semibold backdrop-blur dark:border-white/10 dark:bg-zinc-900/40"
              type="button"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </Container>

        {open ? (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="md:hidden">
            <Container className="pb-4 pt-2">
              <div className="grid gap-1">
                {NAV.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToId(item.id);
                      setOpen(false);
                    }}
                    className="rounded-xl px-3 py-2 text-left text-sm font-semibold text-zinc-800 hover:bg-zinc-900/5 dark:text-zinc-100 dark:hover:bg-white/10"
                    type="button"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </Container>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}

