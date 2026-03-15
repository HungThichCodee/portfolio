import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";
import { SKILLS } from "../constants/data";

function Progress({ value }) {
  return (
    <div className="mt-2 h-2 w-full rounded-full bg-zinc-200/70 dark:bg-white/10">
      <motion.div
        className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <Container>
        <SectionHeading
          kicker="Tech Stack"
          title="Tools I use to ship production systems"
          subtitle="Frontend, backend, databases, and the integrations that power modern full-stack apps."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {SKILLS.map((group, idx) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{group.group}</p>
                <div className="mt-4 space-y-3">
                  {group.items.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-800 dark:text-zinc-100">{s.name}</span>
                        <span className="text-zinc-500 dark:text-zinc-400">{s.level}%</span>
                      </div>
                      <Progress value={s.level} />
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

