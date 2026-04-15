import { Container } from "../components/Container";
import { DEV } from "../constants/data";
import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-200/60 py-10 dark:border-white/10">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          &copy; {new Date().getFullYear()} {DEV.name}. {t("footer_built_with")}
        </p>
        <a
          className="text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-400"
          href={DEV.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </Container>
    </footer>
  );
}
