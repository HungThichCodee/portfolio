import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";

export function About() {
  return (
    <section id="about" className="py-16">
      <Container>
        <SectionHeading
          kicker="About"
          title="Building systems that scale—end to end"
          subtitle="I specialize in backend-heavy full-stack development: designing APIs, data models, and secure auth flows, then shipping polished UIs on top."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Backend-first mindset</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                Clean architecture, performance, concurrency, and maintainability—especially for real product workflows.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <Card>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Full-stack delivery</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                From REST APIs and JWT/OAuth to responsive UIs with smooth animations and clean component architecture.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Modern integrations</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                AI recommendations (ML.NET), background jobs (Hangfire), media (Cloudinary), and notifications
                (Twilio/SendGrid).
              </p>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

