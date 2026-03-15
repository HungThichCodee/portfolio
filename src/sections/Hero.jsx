import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { SocialLinks } from "../components/SocialLinks";
import { DEV } from "../constants/data";
import { scrollToId } from "../utils/scrollToId";

function Glow() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl dark:bg-sky-400/15" />
      <div className="absolute -bottom-24 right-10 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl dark:bg-fuchsia-400/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.10),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_55%)]" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <Glow />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-300">
              {DEV.title}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              {DEV.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-200">
              {DEV.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => scrollToId("projects")}>View Projects</Button>
              <Button as="a" href={DEV.github} target="_blank" rel="noreferrer" variant="ghost">
                GitHub
              </Button>
              <Button onClick={() => scrollToId("contact")} variant="ghost">
                Contact
              </Button>
            </div>

            <div className="mt-6">
              <SocialLinks github={DEV.github} linkedin={DEV.linkedin} email={DEV.email} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-zinc-900/40">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Focus</p>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Available for collaboration
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                <li>Backend systems, APIs, authentication, and data modeling</li>
                <li>Full-stack delivery with clean UI and robust architecture</li>
                <li>AI recommendations + real-time features + background processing</li>
              </ul>
              <div className="mt-6 rounded-2xl bg-zinc-950/5 p-4 text-xs text-zinc-700 dark:bg-white/5 dark:text-zinc-200">
                <span className="font-semibold">Now building:</span> scalable services, real-time apps, and AI-enhanced
                products.
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="mt-16 border-t border-zinc-200/60 dark:border-white/10" />
    </section>
  );
}

