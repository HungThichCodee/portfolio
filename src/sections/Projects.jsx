import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PROJECTS } from "../constants/data";
import { useLanguage } from "../i18n/LanguageContext";

function ProjectCard({ project: p, index }) {
  const { t } = useLanguage();
  const prefix = p.i18nKey;
  return (
    <article
      id={`project-${p.id}`}
      aria-labelledby={`${p.id}-title`}
      className={`overflow-hidden rounded-3xl border bg-white shadow-sm dark:bg-zinc-900/60 ${p.featured ? "border-sky-200 dark:border-sky-800" : "border-zinc-200 dark:border-white/10"}`}
    >
      <div className={p.featured ? "grid lg:grid-cols-[1.1fr_1fr]" : ""}>
        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="font-mono text-zinc-500 dark:text-zinc-400">
              0{index + 1}
            </span>
            <span
              className={
                p.featured
                  ? "text-sky-700 dark:text-sky-300"
                  : "text-zinc-600 dark:text-zinc-300"
              }
            >
              {t(p.featured ? "projects_featured" : "projects_type_personal")}
            </span>
            {p.teamSize && (
              <span className="text-zinc-500 dark:text-zinc-400">
                {t("projects_team_size")}: {p.teamSize}
              </span>
            )}
          </div>
          <h3
            id={`${p.id}-title`}
            className={`mt-4 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 ${p.featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}
          >
            {t(`${prefix}_title`)}
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            {t(`${prefix}_summary`)}
          </p>
          <ul
            aria-label={t("projects_technologies")}
            className="mt-5 flex flex-wrap gap-2"
          >
            {p.tags.map((tech) => (
              <li
                key={tech}
                className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-white/5 dark:text-zinc-200"
              >
                {tech}
              </li>
            ))}
          </ul>
          {p.featured && (
            <ul className="mt-6 space-y-3">
              {[1, 2, 3].map((n) => (
                <li
                  key={n}
                  className="flex gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-200"
                >
                  <span
                    aria-hidden="true"
                    className="text-sky-600 dark:text-sky-400"
                  >
                    ✓
                  </span>
                  {t(`foodmatch_highlight_${n}`)}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 dark:bg-sky-400 dark:text-zinc-950 dark:hover:bg-sky-300"
              >
                {t("projects_live_demo")} <span aria-hidden="true">↗︎</span>
              </a>
            )}
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects_view_github")} — ${t(`${prefix}_title`)}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 dark:border-white/15 dark:text-zinc-100 dark:hover:bg-white/10"
            >
              {t("projects_view_github")} <span aria-hidden="true">↗︎</span>
            </a>
          </div>
        </div>
        {p.image && (
          <figure className="flex flex-col justify-center border-t border-sky-100 bg-sky-50/60 p-6 dark:border-white/10 dark:bg-zinc-950/40 sm:p-8 lg:border-l lg:border-t-0">
            <div className="overflow-hidden rounded-xl border border-zinc-300 bg-zinc-950 shadow-xl dark:border-white/15">
              <div
                aria-hidden="true"
                className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5"
              >
                <span className="h-2 w-2 rounded-full bg-zinc-500" />
                <span className="h-2 w-2 rounded-full bg-zinc-500" />
                <span className="h-2 w-2 rounded-full bg-zinc-500" />
                <span className="ml-3 text-[11px] text-zinc-300">
                  foodmatchh.vercel.app
                </span>
              </div>
              <img
                src={p.image}
                alt={t("foodmatch_image_alt")}
                width="1280"
                height="900"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-5 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
              {t("foodmatch_caption")}
            </figcaption>
            <div className="mt-5 border-t border-sky-100 pt-5 dark:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                {t("projects_architecture")}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                React + TypeScript → ASP.NET Core / SignalR → PostgreSQL
              </p>
            </div>
          </figure>
        )}
      </div>
      <details className="group border-t border-zinc-200 dark:border-white/10">
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-semibold text-sky-700 transition hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-white/5 sm:px-8">
          <span>
            <span className="group-open:hidden">
              {t("projects_view_details")}
            </span>
            <span className="hidden group-open:inline">
              {t("projects_show_less")}
            </span>
            <span className="sr-only"> — {t(`${prefix}_title`)}</span>
          </span>
          <span
            aria-hidden="true"
            className="transition-transform group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <div className="space-y-6 px-6 pb-8 sm:px-8">
          <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            {t(`${prefix}_desc`)}
          </p>
          <div>
            <h4 className="text-sm font-semibold">
              {t("projects_technologies")}
            </h4>
            <dl className="mt-3 space-y-3 text-sm leading-6">
              {Object.entries(p.techStack).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-medium text-zinc-800 dark:text-zinc-200">
                    {t(`tech_${key}`)}
                  </dt>
                  <dd className="text-zinc-600 dark:text-zinc-400">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h4 className="text-sm font-semibold">
              {t(
                p.featured
                  ? "projects_implementation"
                  : "projects_responsibilities",
              )}
            </h4>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {p.responsibilities.map((_, n) => (
                <li key={n} className="flex gap-3">
                  <span aria-hidden="true" className="text-sky-600">
                    •
                  </span>
                  <span>{t(`${prefix}_resp_${n + 1}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  return (
    <section
      id="projects"
      className="border-y border-zinc-200/70 bg-zinc-100/60 py-16 dark:border-white/10 dark:bg-zinc-900/20 sm:py-20"
    >
      <Container>
        <SectionHeading
          kicker={t("projects_kicker")}
          title={t("projects_title")}
          subtitle={t("projects_subtitle")}
        />
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <div key={p.id} className={p.featured ? "lg:col-span-3" : ""}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
