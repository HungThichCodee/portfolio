export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200/70 bg-white/60 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-900/40 dark:text-zinc-200">
      {children}
    </span>
  );
}

