import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { SocialLinks } from "../components/SocialLinks";
import { DEV } from "../constants/data";
import { useLanguage } from "../i18n/LanguageContext";

export function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const mailto = useMemo(() => `mailto:${DEV.email}`, []);
  const { t } = useLanguage();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-16">
      <Container>
        <SectionHeading
          kicker={t("contact_kicker")}
          title={t("contact_title")}
          subtitle={t("contact_subtitle")}
        />

        <div className="grid gap-4 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{t("contact_links")}</p>
              <div className="mt-4">
                <SocialLinks github={DEV.github} linkedin={DEV.linkedin} email={DEV.email} />
              </div>
              <div className="mt-6 text-sm text-zinc-700 dark:text-zinc-200">
                {t("contact_prefer_email")}{" "}
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
              <form onSubmit={handleSubmit} className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-100">{t("contact_name")}</span>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 outline-none backdrop-blur focus:ring-2 focus:ring-sky-500/60 dark:border-white/10 dark:bg-zinc-950/30 dark:text-zinc-50"
                      placeholder={t("contact_name_placeholder")}
                      required
                    />
                  </label>

                  <label className="grid gap-1 text-sm">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-100">{t("contact_email")}</span>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 outline-none backdrop-blur focus:ring-2 focus:ring-sky-500/60 dark:border-white/10 dark:bg-zinc-950/30 dark:text-zinc-50"
                      placeholder={t("contact_email_placeholder")}
                      required
                    />
                  </label>
                </div>

                <label className="grid gap-1 text-sm">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-100">{t("contact_message")}</span>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-xl border border-zinc-200/70 bg-white/60 px-3 py-2 outline-none backdrop-blur focus:ring-2 focus:ring-sky-500/60 dark:border-white/10 dark:bg-zinc-950/30 dark:text-zinc-50"
                    placeholder={t("contact_message_placeholder")}
                    required
                  />
                </label>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? t("contact_sending") : t("contact_send")}
                  </Button>
                  {status === "sent" && (
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      {t("contact_sent")}
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                      {t("contact_error")}
                    </span>
                  )}
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
