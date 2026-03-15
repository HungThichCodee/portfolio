export function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="mb-8">
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">{subtitle}</p>
      ) : null}
    </div>
  );
}

