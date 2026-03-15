import { cn } from "../utils/cn";

export function Card({ className = "", children }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-zinc-200/70 bg-white/70 p-5 shadow-sm backdrop-blur " +
          "dark:border-white/10 dark:bg-zinc-900/40",
        className
      )}
    >
      {children}
    </div>
  );
}

