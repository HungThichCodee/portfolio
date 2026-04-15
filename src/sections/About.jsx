import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";
import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16">
      <Container>
        <SectionHeading
          kicker={t("about_kicker")}
          title={t("about_title")}
          subtitle={t("about_subtitle")}
        />

        <div className="grid gap-4 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{t("about_card1_title")}</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                {t("about_card1_body")}
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
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{t("about_card2_title")}</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                {t("about_card2_body")}
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
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{t("about_card3_title")}</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                {t("about_card3_body")}
              </p>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
