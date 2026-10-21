
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export async function Hero() {
  const t = await getTranslations("Home");

  return (
    <section
      id="home"
      className="relative flex min-h-[75vh] items-center bg-gradient-to-br from-[#102B1E] via-[#183D2C] to-[#52734D] px-6 py-24 text-white"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#D7B47C]">
            {t("location")}
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            {t("title")}
          </h1>

          <p className="mt-6 text-2xl font-medium text-[#D7B47C]">
            {t("subtitle")}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
            {t("description")}
          </p>

          <Link
            href="/#cabins"
            className="mt-10 inline-flex rounded-full bg-[#D7B47C] px-8 py-4 font-semibold text-[#183D2C] transition hover:bg-[#E9C995]"
          >
            {t("explore")}
          </Link>
        </div>
      </div>
    </section>
  );
}
