import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { SocialLinks } from "../components/SocialLinks";
import { DEV, PROJECTS } from "../constants/data";
import { scrollToId } from "../utils/scrollToId";
import { useLanguage } from "../i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-900/20"
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
              {t("hero_role")}
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              {DEV.name}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              {t("hero_tagline")}
            </p>
            <div
              className="mt-6 flex flex-wrap gap-2"
              aria-label={t("skills_kicker")}
            >
              {["C# / .NET", "Java / Spring Boot", "React / TypeScript"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-white/15 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                className="min-h-12 px-6"
                onClick={() => scrollToId("projects")}
              >
                {t("hero_view_projects")}{" "}
                <span aria-hidden="true" className="ml-3">
                  ↓
                </span>
              </Button>
              <Button
                className="min-h-12 px-6"
                onClick={() => scrollToId("contact")}
                variant="ghost"
              >
                {t("hero_contact")}
              </Button>
            </div>
            <div className="mt-6">
              <SocialLinks
                github={DEV.github}
                linkedin={DEV.linkedin}
                email={DEV.email}
              />
            </div>
          </div>
          <aside
            className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/60 sm:p-8"
            aria-label={t("hero_focus")}
          >
            <div className="flex items-center gap-5">
              <img
                src={DEV.image}
                alt={DEV.name}
                width="88"
                height="88"
                className="h-[88px] w-[88px] rounded-2xl object-cover ring-1 ring-zinc-200 dark:ring-white/15"
              />
              <div>
                <p className="text-sm font-semibold">{t("hero_focus")}</p>
                <p className="mt-2 text-xs leading-5 text-emerald-700 dark:text-emerald-400">
                  <span aria-hidden="true">● </span>
                  {t("hero_available")}
                </p>
              </div>
            </div>
            <dl className="mt-6 space-y-4 border-t border-zinc-200 pt-6 dark:border-white/10">
              {[1, 2, 3].map((n) => (
                <div key={n}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {t(`hero_area_${n}`)}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                    {t(`hero_focus_${n}`)}
                  </dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              onClick={() => scrollToId("project-foodmatch")}
              className="mt-6 flex w-full items-center justify-between gap-4 rounded-xl bg-sky-50 p-4 text-left transition hover:bg-sky-100 dark:bg-sky-900/20 dark:hover:bg-sky-900/40"
            >
              <span>
                <span className="block text-xs text-sky-700 dark:text-sky-300">
                  {t("projects_featured")}
                </span>
                <span className="mt-1 block text-sm font-semibold">
                  FoodMatch / Random Food
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-sky-700 dark:text-sky-300"
              >
                ↗︎
              </span>
            </button>
          </aside>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-zinc-200 pt-6 text-xs font-medium text-zinc-600 dark:border-white/10 dark:text-zinc-400">
          <span>
            <strong className="mr-2 text-zinc-900 dark:text-zinc-100">
              {PROJECTS.length.toString().padStart(2, "0")}
            </strong>
            {t("hero_project_count")}
          </span>
          <span>{t("hero_evidence")}</span>
        </div>
      </Container>
    </section>
  );
}
