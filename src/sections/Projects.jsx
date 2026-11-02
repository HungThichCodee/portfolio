import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PROJECTS } from "../constants/data";
import { useLanguage } from "../i18n/LanguageContext";

function ProjectCard({ project: p, index, onViewDetails }) {
  const { t } = useLanguage();
  const prefix = p.i18nKey;
  return (
    <article
      id={`project-${p.id}`}
      aria-labelledby={`${p.id}-title`}
      className={`flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-sm dark:bg-zinc-900/60 ${p.featured ? "border-sky-200 dark:border-sky-800" : "border-zinc-200 dark:border-white/10"}`}
    >
      <div
        className={
          p.featured
            ? "grid flex-1 lg:grid-cols-[1.1fr_1fr]"
            : "flex flex-1 flex-col"
        }
      >
        <div className="flex flex-1 flex-col p-6 sm:p-8">
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
            className={`mt-4 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 ${p.featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl lg:min-h-24"}`}
          >
            {t(`${prefix}_title`)}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
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
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => onViewDetails(p)}
        className="flex min-h-14 w-full items-center justify-between gap-4 border-t border-zinc-200 px-6 py-4 text-left text-sm font-semibold text-sky-700 transition hover:bg-sky-50 dark:border-white/10 dark:text-sky-300 dark:hover:bg-white/5 sm:px-8"
      >
        <span>
          {t("projects_view_details")}
          <span className="sr-only"> — {t(`${prefix}_title`)}</span>
        </span>
        <span aria-hidden="true">↗︎</span>
      </button>
    </article>
  );
}

function ProjectDialog({ project: p, onClose }) {
  const { t } = useLanguage();
  const prefix = p.i18nKey;
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected)
        trigger.focus({ preventScroll: true });
    };
  }, []);

  function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      onClose();
  }

  function handleKeyDown(event) {
    if (event.key !== "Tab") return;
    const focusable = [
      ...event.currentTarget.querySelectorAll(
        'button, a[href], [tabindex="0"]',
      ),
    ];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClose={() => {
        if (!dialogRef.current?.open) onClose();
      }}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-0 text-zinc-900 shadow-2xl backdrop:bg-zinc-950/60 backdrop:backdrop-blur-sm open:flex dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-50 sm:rounded-3xl"
    >
      <header className="flex shrink-0 items-start justify-between gap-4 border-b border-zinc-200 p-6 dark:border-white/10 sm:px-8">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
            {t("projects_view_details")}
          </p>
          <h2
            id="project-dialog-title"
            className="mt-2 text-xl font-semibold leading-snug tracking-tight sm:text-2xl"
          >
            {t(`${prefix}_title`)}
          </h2>
        </div>
        <button
          autoFocus
          type="button"
          onClick={onClose}
          aria-label={t("projects_close_dialog")}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 text-2xl transition hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-white/10"
        >
          <span aria-hidden="true">×</span>
        </button>
      </header>
      <div
        tabIndex={0}
        aria-label={t("projects_view_details")}
        className="min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain p-6 sm:p-8"
      >
        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          {t(`${prefix}_desc`)}
        </p>
        <div>
          <h3 className="text-sm font-semibold">
            {t("projects_technologies")}
          </h3>
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
          <h3 className="text-sm font-semibold">
            {t(
              p.featured
                ? "projects_implementation"
                : "projects_responsibilities",
            )}
          </h3>
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
    </dialog>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const closeDetails = useCallback(() => setSelectedProject(null), []);
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
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <div key={p.id} className={p.featured ? "lg:col-span-3" : ""}>
              <ProjectCard
                project={p}
                index={i}
                onViewDetails={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </Container>
      {selectedProject && (
        <ProjectDialog project={selectedProject} onClose={closeDetails} />
      )}
    </section>
  );
}
