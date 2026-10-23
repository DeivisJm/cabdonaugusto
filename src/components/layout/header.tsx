
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { LanguageSwitcher } from "./language-switcher";
import { SiteNavigation } from "./site-navigation";

import styles from "@/styles/layout/header.module.css";

/**
 * Shared website header.
 *
 * Provides branding, localized navigation,
 * responsive menu controls, and language selection.
 */
export async function Header() {
  const t = await getTranslations("Navigation");

  return (
    <header className={styles.header}>
      <nav
        className={styles.container}
        aria-label={t("mainNavigation")}
      >
        {/* Temporary brand identity */}
        <Link href="/" className={styles.brand}>
          <span
            className={styles.brandIcon}
            aria-hidden="true"
          >
            DA
          </span>

          <span className={styles.brandText}>
            <span className={styles.brandName}>
              Don Augusto
            </span>

            <span className={styles.brandCategory}>
              CABAÑAS
            </span>
          </span>
        </Link>

        {/* Desktop navigation and language selector */}
        <div className={styles.desktopActions}>
          <SiteNavigation variant="horizontal" />

          <LanguageSwitcher />
        </div>

        {/* Responsive mobile navigation */}
        <details className={styles.mobileMenu}>
          <summary className={styles.menuTrigger}>
            <span>{t("menu")}</span>

            <span
              aria-hidden="true"
              className={styles.menuIcon}
            >
              ☰
            </span>
          </summary>

          <div className={styles.mobilePanel}>
            <SiteNavigation variant="vertical" />

            <LanguageSwitcher />
          </div>
        </details>
      </nav>
    </header>
  );
}
