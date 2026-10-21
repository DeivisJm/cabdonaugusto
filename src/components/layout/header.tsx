
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";

export async function Header() {
  const t = await getTranslations("Navigation");

  /**
   * Primary navigation links.
   * Labels are resolved through the active locale.
   */
  const navigationItems = [
    {
      label: t("home"),
      href: "/#home",
    },
    {
      label: t("cabins"),
      href: "/#cabins",
    },
    {
      label: t("about"),
      href: "/#about",
    },
    {
      label: t("contact"),
      href: "/#contact",
    },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#102B1E] text-white shadow-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-4 lg:px-8"
      >
        {/* Brand identity */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D7B47C]/50 text-lg font-bold text-[#D7B47C]">
            DA
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight">
              Don Augusto
            </span>

            <span className="text-xs uppercase tracking-[0.25em] text-[#D7B47C]">
              Cabañas
            </span>
          </div>
        </Link>

        {/* Navigation and language preferences */}
        <div className="flex flex-wrap items-center gap-5 lg:gap-8">
          <div className="flex flex-wrap items-center gap-4 lg:gap-7">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-[#D7B47C]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <LanguageSwitcher />

          <Link
            href="/#contact"
            className="rounded-full bg-[#D7B47C] px-5 py-2.5 text-sm font-semibold text-[#102B1E] transition-colors hover:bg-[#E9C995]"
          >
            {t("book")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
