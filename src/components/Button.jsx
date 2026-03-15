import { cn } from "../utils/cn";

export function Button({ as: Comp = "button", variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70 " +
    "disabled:opacity-60 disabled:cursor-not-allowed";

  const styles = {
    primary:
      "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100",
    ghost:
      "bg-white/60 text-zinc-900 hover:bg-white/80 dark:bg-zinc-900/40 dark:text-zinc-50 dark:hover:bg-zinc-900/60 " +
      "backdrop-blur border border-zinc-200/70 dark:border-white/10",
    link: "text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300",
  };

  return <Comp className={cn(base, styles[variant], className)} {...props} />;
}

