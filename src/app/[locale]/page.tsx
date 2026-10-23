
import type { Metadata } from "next";

import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";

import { siteConfig } from "@/config/site";

import styles from "@/styles/home/home.module.css";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

/**
 * Generates localized metadata for search engines
 * and international visitors.
 */
export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        es: "/es",
        en: "/en",
      },
    },
  };
}

/**
 * Homepage sections are ordered consistently with
 * the shared navigation configuration.
 */
export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("Home");

  const experiences = [
    {
      id: "wildlife",
      number: "01",
      title: t("wildlifeTitle"),
      description: t("wildlifeDescription"),
    },
    {
      id: "privacy",
      number: "02",
      title: t("privacyTitle"),
      description: t("privacyDescription"),
    },
    {
      id: "river",
      number: "03",
      title: t("riverTitle"),
      description: t("riverDescription"),
    },
  ];

  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Accommodation introduction */}
        <section
          id="cabins"
          aria-labelledby="cabins-title"
          className={styles.section}
        >
          <div className={styles.container}>
            <div className={styles.centered}>
              <p className={styles.eyebrow}>
                {t("cabinsLabel")}
              </p>

              <h2
                id="cabins-title"
                className={styles.heading}
              >
                {t("cabinsTitle")}
              </h2>

              <p className={styles.description}>
                {t("cabinsDescription")}
              </p>
            </div>

            <div className={styles.placeholder}>
              <p>{t("cabinsPlaceholder")}</p>
            </div>
          </div>
        </section>

        {/* Nature and guest experience */}
        <section
          id="about"
          aria-labelledby="about-title"
          className={`${styles.section} ${styles.sectionAlt}`}
        >
          <div className={styles.container}>
            <div className={styles.centered}>
              <p className={styles.eyebrow}>
                {t("aboutLabel")}
              </p>

              <h2
                id="about-title"
                className={styles.heading}
              >
                {t("aboutTitle")}
              </h2>

              <p className={styles.description}>
                {t("aboutDescription")}
              </p>
            </div>

            <div className={styles.experienceGrid}>
              {experiences.map((experience) => (
                <article
                  key={experience.id}
                  className={styles.experienceCard}
                >
                  <span
                    aria-hidden="true"
                    className={styles.experienceNumber}
                  >
                    {experience.number}
                  </span>

                  <h3 className={styles.experienceTitle}>
                    {experience.title}
                  </h3>

                  <p className={styles.experienceDescription}>
                    {experience.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Regional tourism connection */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.regionPanel}>
              <div className={styles.regionContent}>
                <p className={styles.regionEyebrow}>
                  {t("regionLabel")}
                </p>

                <h2 className={styles.regionTitle}>
                  {t("regionTitle")}
                </h2>

                <p className={styles.regionDescription}>
                  {t("regionDescription")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact and location */}
        <section
          id="contact"
          aria-labelledby="contact-title"
          className={`${styles.section} ${styles.sectionAlt}`}
        >
          <div className={styles.centered}>
            <p className={styles.eyebrow}>
              {t("contactLabel")}
            </p>

            <h2
              id="contact-title"
              className={styles.heading}
            >
              {t("contactTitle")}
            </h2>

            <p className={styles.description}>
              {t("contactDescription")}
            </p>

            <p className={styles.locationText}>
              {t("location")}
            </p>

            <a
              href={siteConfig.maps.searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              {t("viewMap")}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
