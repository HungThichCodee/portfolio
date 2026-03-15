import { Container } from "../components/Container";
import { DEV } from "../constants/data";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 py-10 dark:border-white/10">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          © {new Date().getFullYear()} {DEV.name}. Built with React + Vite + Tailwind + Framer Motion.
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

