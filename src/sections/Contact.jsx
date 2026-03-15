import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { SocialLinks } from "../components/SocialLinks";
import { DEV } from "../constants/data";

export function Contact() {
  const [status, setStatus] = useState("idle");
  const mailto = useMemo(() => `mailto:${DEV.email}`, []);

  return (
    <section id="contact" className="py-16">
      <Container>
        <SectionHeading
          kicker="Contact"
          title="Let’s build something great"
          subtitle="Send a message or reach me via GitHub/LinkedIn. (This form is front-end only; wire it to an API later if needed.)"
        />

        <div className="grid gap-4 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Links</p>
              <div className="mt-4">
                <SocialLinks github={DEV.github} linkedin={DEV.linkedin} email={DEV.email} />
              </div>
              <div className="mt-6 text-sm text-zinc-700 dark:text-zinc-200">
                Prefer email?{" "}
                <a className="font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-400" href={mailto}>
                  {DEV.email}
                </a>
              </div>
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <Card>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStatus("sent");
                }}
                className="grid gap-3"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-100">Name</span>
                    <input
                      className="rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 outline-none backdrop-blur focus:ring-2 focus:ring-sky-500/60 dark:border-white/10 dark:bg-zinc-950/30 dark:text-zinc-50"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label className="grid gap-1 text-sm">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-100">Email</span>
                    <input
                      type="email"
                      className="rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 outline-none backdrop-blur focus:ring-2 focus:ring-sky-500/60 dark:border-white/10 dark:bg-zinc-950/30 dark:text-zinc-50"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>

                <label className="grid gap-1 text-sm">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-100">Message</span>
                  <textarea
                    rows={5}
                    className="rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 outline-none backdrop-blur focus:ring-2 focus:ring-sky-500/60 dark:border-white/10 dark:bg-zinc-950/30 dark:text-zinc-50"
                    placeholder="Tell me about your project..."
                    required
                  />
                </label>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Button type="submit">Send message</Button>
                  <Button as="a" href={mailto} variant="ghost">
                    Email instead
                  </Button>
                  {status === "sent" ? (
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      Message ready (wire to backend later).
                    </span>
                  ) : null}
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

