import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { PROJECTS } from "../constants/data";

/* ── tiny helper: section label ──────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">
      {children}
    </p>
  );
}

/* ── tech badge row ──────────────────────────────────────────── */
function TechGroup({ label, value }) {
  if (!value) return null;
  const items = value.split(",").map((s) => s.trim());
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1.5">
      <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 min-w-[70px]">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full border border-zinc-200/80 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-white/10 dark:bg-zinc-800/60 dark:text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── project card ────────────────────────────────────────────── */
function ProjectCard({ p, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <div
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg hover:border-zinc-300/80 dark:border-white/10 dark:bg-zinc-900/40 dark:hover:border-white/30 sm:p-8"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* ── Header: Title + Meta ─────────────────────────── */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-sky-600 dark:text-zinc-50 dark:group-hover:text-sky-400 sm:text-2xl">
              {p.title}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-semibold text-sky-700 ring-1 ring-inset ring-sky-600/20 dark:bg-sky-900/30 dark:text-sky-300 dark:ring-sky-400/20">
                {p.type}
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                •
              </span>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Team size: {p.teamSize}
              </span>
            </div>
          </div>
          <button className="hidden shrink-0 items-center gap-2 rounded-xl bg-zinc-100/50 px-4 py-2 text-sm font-semibold text-zinc-600 transition hover:bg-zinc-200/50 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 sm:inline-flex">
            {isExpanded ? "Show Less" : "View Details"}
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* ── Short Description (Clamped when collapsed) ─────────────────────────────────── */}
        <div className="mt-5">
          <p className={`text-sm leading-relaxed text-zinc-600 transition-all duration-300 dark:text-zinc-300 sm:text-base sm:leading-7 ${isExpanded ? "" : "line-clamp-2"}`}>
            {p.description}
          </p>
        </div>

        {/* ── Expanded Content ─────────────────────────────────── */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* ── Divider ─────────────────────────────────────── */}
              <div className="my-5 border-t border-zinc-100 dark:border-white/5 sm:my-6" />

              {/* ── Technologies ────────────────────────────────── */}
              <div>
                <SectionLabel>Technologies</SectionLabel>
                <div className="mt-2 space-y-2.5">
                  <TechGroup label="Frontend" value={p.techStack.frontend} />
                  <TechGroup label="Backend" value={p.techStack.backend} />
                  <TechGroup label="Database" value={p.techStack.database} />
                  <TechGroup label="Others" value={p.techStack.others} />
                </div>
              </div>

              {/* ── Divider ─────────────────────────────────────── */}
              <div className="my-5 border-t border-zinc-100 dark:border-white/5 sm:my-6" />

              {/* ── Responsibilities ────────────────────────────── */}
              <div>
                <SectionLabel>Responsibilities</SectionLabel>
                <ul className="mt-2 max-w-3xl space-y-2.5">
                  {p.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="group/item flex gap-3 rounded-lg px-1 py-0.5 text-sm leading-relaxed text-zinc-600 transition-colors hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800/40"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── GitHub Link ────────────────────────────────── */}
              <div className="mt-6 border-t border-zinc-100 pt-6 dark:border-white/5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Mobile toggle button ─────────────────────────── */}
        <div className="mt-5 flex justify-center border-t border-zinc-100 pt-4 dark:border-white/5 sm:hidden">
          <button className="text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300">
            {isExpanded ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* ── section ─────────────────────────────────────────────────── */
export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          kicker="Projects"
          title="Selected work"
          subtitle="Three flagship projects highlighting backend architecture, real-time systems, and AI integration."
        />

        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
