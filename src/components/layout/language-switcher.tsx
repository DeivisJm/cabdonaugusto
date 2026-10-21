
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

type Locale = "es" | "en";

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  /**
   * Switches the active locale while preserving
   * the current route.
   */
  function handleLanguageChange(locale: Locale) {
    if (locale === currentLocale) return;

    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="text-[#D7B47C]"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>

      <label htmlFor="language-selector" className="sr-only">
        {currentLocale === "es"
          ? "Seleccionar idioma"
          : "Select language"}
      </label>

      <select
        id="language-selector"
        value={currentLocale}
        onChange={(event) =>
          handleLanguageChange(event.target.value as Locale)
        }
        disabled={isPending}
        className="cursor-pointer rounded-lg border border-white/30 bg-[#183D2C] px-3 py-2 text-sm font-medium text-white outline-none transition hover:border-[#D7B47C] focus-visible:ring-2 focus-visible:ring-[#D7B47C] disabled:opacity-60"
      >
        <option value="es">🇨🇷 Español</option>
        <option value="en">🇺🇸 English</option>
      </select>
    </div>
  );
}
