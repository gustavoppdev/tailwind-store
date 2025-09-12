"use client";

// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";
import Benefits from "./Benefits";

// Assets
import { heroImage } from "@/assets";
import { Link } from "@/i18n/navigation";

export const Hero = () => {
  const t = useTranslations("Pages.Home.Hero");
  return (
    <div className="bg-neutral-100 flex flex-col lg:flex-col-reverse">
      <section className="container lg:max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 justify-center">
        <div className="lg:order-2 p-4 lg:p-6 py-20 grid place-content-start lg:place-content-center">
          <div className="flex flex-col items-start gap-4 lg:gap-6 max-w-xl mx-auto">
            <h1 className="font-bold text-4xl md:text-5xl tracking-tight">
              {t("title")}
            </h1>
            <p className="text-neutral-600 text-lg">{t("paragraph")}</p>
            <Link href={"/collection"}>
              <Button
                size={"lg"}
                className="bg-indigo-600 hover:bg-indigo-600/90 font-semibold h-12"
              >
                {t("shopBtn")}
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:order-3 relative min-h-66 aspect-auto lg:aspect-[4/5] lg:max-w-[600px]">
          <Image
            src={heroImage}
            alt={t("altImage")}
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            placeholder="blur"
            className="object-cover"
            priority
          />
        </div>
      </section>
      <Benefits />
    </div>
  );
};
