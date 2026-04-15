import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Card } from "../components/Card";
import { JOURNEY } from "../constants/data";
import { useLanguage } from "../i18n/LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16">
      <Container>
        <SectionHeading
          kicker={t("journey_kicker")}
          title={t("journey_title")}
          subtitle={t("journey_subtitle")}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {JOURNEY.map((j, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {t(`journey${idx + 1}_title`)}
                </p>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                  {t(`journey${idx + 1}_body`)}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
