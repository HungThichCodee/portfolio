import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { PROJECTS } from "../constants/data";

function ProjectCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
    >
      <Card>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200">{p.description}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Key features
            </p>
            <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button as="a" href={p.github} target="_blank" rel="noreferrer">
            View on GitHub
          </Button>
          <Button as="a" href={p.github} target="_blank" rel="noreferrer" variant="ghost">
            Repository
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <Container>
        <SectionHeading
          kicker="Projects"
          title="Selected work"
          subtitle="Three flagship projects highlighting backend architecture, real-time systems, and AI integration."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

