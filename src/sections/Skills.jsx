import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { SKILLS } from "../constants/data";
import { useLanguage } from "../i18n/LanguageContext";

const GROUP_KEYS = {
  Frontend: "tech_frontend",
  Backend: "tech_backend",
  Database: "tech_database",
  Other: "tech_others",
};

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-16">
      <Container>
        <SectionHeading
          kicker={t("skills_kicker")}
          title={t("skills_title")}
          subtitle={t("skills_subtitle")}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((group, idx) => (
            <div
              key={group.group}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900/60"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {t(GROUP_KEYS[group.group])}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 dark:bg-white/5 dark:text-zinc-200"
                  >
                    {skill.name === "Docker (optional)" ? "Docker" : skill.name}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-zinc-100 pt-4 text-xs leading-6 text-zinc-600 dark:border-white/10 dark:text-zinc-400">
                {t(`skills_evidence_${idx + 1}`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
