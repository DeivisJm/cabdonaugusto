
import type { Metadata } from "next";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  const descriptions = {
    es: "Cabañas circulares rodeadas de naturaleza junto a un río en San Isidro, Peñas Blancas.",
    en: "Unique round cabins surrounded by nature next to a river in San Isidro, Peñas Blancas.",
  };

  const description =
    locale === "en" ? descriptions.en : descriptions.es;

  return {
    title: "Cabañas Don Augusto",
    description,
    alternates: {
      languages: {
        es: "/es",
        en: "/en",
      },
    },
  };
}

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("Home");

  return (
    <>
      <Header />

      <main>
        <Hero />

        <section
          id="about"
          className="scroll-mt-24 bg-[#F7F5EF] px-6 py-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-[#183D2C] md:text-4xl">
              {t("welcome")}
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              {t("welcomeDescription")}
            </p>
          </div>
        </section>

        <section
          id="cabins"
          className="scroll-mt-24 px-6 py-24"
        >
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold text-[#183D2C] md:text-4xl">
              {t("cabinsTitle")}
            </h2>

            <p className="mt-6 text-stone-600">
              {t("cabinsDescription")}
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 bg-[#F7F5EF] px-6 py-20 text-center"
        >
          <p className="font-medium text-[#183D2C]">
            {t("location")}
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
