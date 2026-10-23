
import { getTranslations } from "next-intl/server";

import { siteConfig } from "@/config/site";

import { SiteNavigation } from "./site-navigation";

import styles from "@/styles/layout/footer.module.css";

/**
 * Shared website footer.
 *
 * Reuses the same navigation component as the header
 * to maintain consistent active-section behavior.
 */
export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand information */}
          <div className={styles.brandColumn}>
            <h2 className={styles.brandName}>
              {siteConfig.name}
            </h2>

            <p className={styles.description}>
              {t("description")}
            </p>
          </div>

          {/* Shared navigation */}
          <div className={styles.navigationColumn}>
            <h3 className={styles.heading}>
              {t("explore")}
            </h3>

            <nav aria-label={t("footerNavigation")}>
              <SiteNavigation variant="vertical" />
            </nav>
          </div>

          {/* Property location */}
          <div className={styles.locationColumn}>
            <h3 className={styles.heading}>
              {t("locationTitle")}
            </h3>

            <address className={styles.location}>
              {t("location")}
            </address>
          </div>
        </div>

        {/* Copyright information */}
        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()}{" "}
            {siteConfig.name}.
          </span>

          <span>{t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
