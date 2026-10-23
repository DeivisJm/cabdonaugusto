
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

import styles from "@/styles/home/hero.module.css";

/**
 * Main landing section.
 *
 * Presents the accommodation as a nature destination
 * through real photography and localized marketing copy.
 *
 * This Server Component avoids unnecessary client-side
 * JavaScript and reuses the shared booking button.
 */
export async function Hero() {
  const t = await getTranslations("Home");

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className={styles.hero}
    >
      {/* Optimized property photograph */}
      <Image
        src={siteConfig.images.hero}
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className={styles.background}
      />

      {/* Forest-colored contrast overlay */}
      <div
        aria-hidden="true"
        className={styles.overlay}
      />

      {/* Main content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.location}>
            <span
              aria-hidden="true"
              className={styles.locationLine}
            />

            {t("location")}
          </p>

          <h1
            id="hero-title"
            className={styles.title}
          >
            {t("title")}
          </h1>

          <p className={styles.subtitle}>
            {t("subtitle")}
          </p>

          <p className={styles.description}>
            {t("description")}
          </p>

          {/* Single primary booking action */}
          <div className={styles.actions}>
            <ButtonLink href="/#contact">
              {t("book")}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
