import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";
import { JOURNEY } from "../constants/data";

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <Container>
        <SectionHeading
          kicker="Journey"
          title="How I think about building products"
          subtitle="A few themes that show up across my work—especially in backend-heavy systems."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {JOURNEY.map((j, idx) => (
            <motion.div
              key={j.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{j.title}</p>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">{j.body}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

