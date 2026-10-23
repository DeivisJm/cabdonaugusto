
"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { navigationItems } from "@/config/navigation";
import type { SectionId } from "@/config/navigation";
import { Link } from "@/i18n/navigation";

import styles from "@/styles/layout/site-navigation.module.css";

type SiteNavigationProps = {
  variant?: "horizontal" | "vertical";
};

/**
 * Reusable section-aware navigation.
 *
 * Tracks the visible section and highlights its link.
 * The same component is shared across the header,
 * mobile menu, and footer.
 */
export function SiteNavigation({
  variant = "horizontal",
}: SiteNavigationProps) {
  const t = useTranslations("Navigation");

  const [activeSection, setActiveSection] =
    useState<SectionId>("home");

  useEffect(() => {
    let frameId: number | null = null;

    /**
     * Finds the section currently reached by the user.
     *
     * The threshold accounts for the sticky header
     * and keeps the final section active at page bottom.
     */
    function updateActiveSection() {
      const headerHeight = 88;
      const threshold = headerHeight + 72;

      let currentSection: SectionId = "home";

      for (const item of navigationItems) {
        const element = document.getElementById(item.id);

        if (!element) continue;

        if (
          element.getBoundingClientRect().top <= threshold
        ) {
          currentSection = item.id;
        }
      }

      const documentHeight =
        document.documentElement.scrollHeight;

      const isAtBottom =
        window.scrollY + window.innerHeight >=
        documentHeight - 8;

      if (isAtBottom) {
        const lastSection = navigationItems.at(-1);

        if (lastSection) {
          currentSection = lastSection.id;
        }
      }

      setActiveSection((previous) =>
        previous === currentSection
          ? previous
          : currentSection
      );
    }

    /**
     * Schedules a single update per animation frame
     * instead of calculating positions on every event.
     */
    function scheduleUpdate() {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveSection();
      });
    }

    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      window.removeEventListener(
        "scroll",
        scheduleUpdate
      );

      window.removeEventListener(
        "resize",
        scheduleUpdate
      );

      window.removeEventListener(
        "hashchange",
        scheduleUpdate
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const navigationClass =
    variant === "vertical"
      ? styles.vertical
      : styles.horizontal;

  return (
    <div className={navigationClass}>
      {navigationItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <Link
            key={item.id}
            href={`/#${item.id}`}
            className={[
              styles.link,
              isActive ? styles.active : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-current={
              isActive ? "location" : undefined
            }
            onClick={() => setActiveSection(item.id)}
          >
            {t(item.translationKey)}
          </Link>
        );
      })}
    </div>
  );
}
