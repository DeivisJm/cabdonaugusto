
"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  useTransition,
} from "react";

import { useLocale } from "next-intl";

import {
  usePathname,
  useRouter,
} from "@/i18n/navigation";

import { routing } from "@/i18n/routing";

import styles from "@/styles/layout/language-switcher.module.css";

type Locale = (typeof routing.locales)[number];

const languageNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

/**
 * Reusable language dropdown.
 *
 * Uses custom styling instead of native select options
 * to maintain a consistent visual identity.
 */
export function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  /**
   * Closes the dropdown when the user clicks
   * or taps outside the language selector.
   */
  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(event: PointerEvent) {
      const target = event.target;

      if (
        target instanceof Node &&
        !containerRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, [isOpen]);

  /**
   * Changes the current locale without navigating
   * back to the homepage.
   */
  function handleLanguageChange(nextLocale: Locale) {
    setIsOpen(false);

    if (nextLocale === currentLocale) return;

    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale,
      });
    });
  }

  /**
   * Restores keyboard focus when closing the dropdown
   * with the Escape key.
   */
  function handleKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>
  ) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  }

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onKeyDown={handleKeyDown}
    >
      {/* Dropdown trigger */}
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.trigger} ${
          isOpen ? styles.triggerOpen : ""
        }`}
        aria-label={
          currentLocale === "es"
            ? "Seleccionar idioma"
            : "Select language"
        }
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        disabled={isPending}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <span>{languageNames[currentLocale]}</span>

        <svg
          aria-hidden="true"
          className={`${styles.chevron} ${
            isOpen ? styles.chevronOpen : ""
          }`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Language options */}
      {isOpen && (
        <div
          id={menuId}
          className={styles.dropdown}
          role="group"
          aria-label={
            currentLocale === "es"
              ? "Idiomas disponibles"
              : "Available languages"
          }
        >
          {routing.locales.map((locale) => {
            const isSelected = locale === currentLocale;

            return (
              <button
                key={locale}
                type="button"
                className={`${styles.option} ${
                  isSelected ? styles.selected : ""
                }`}
                aria-pressed={isSelected}
                onClick={() =>
                  handleLanguageChange(locale)
                }
              >
                <span>{languageNames[locale]}</span>

                {isSelected && (
                  <span
                    aria-hidden="true"
                    className={styles.check}
                  >
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
