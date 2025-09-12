"use client";

// Next-Intl
import { useTranslations } from "next-intl";

// Constants
import { benefitsList } from "@/data/constants";

const Benefits = () => {
  const t = useTranslations("Pages.Home.Hero.benefits");
  return (
    <div className="bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 order-3 lg:order-1 lg:col-span-2 text-sm">
        {benefitsList.map((benefit) => (
          <div
            key={t(benefit.titleKey)}
            className="p-6 text-center border-b lg:first:border-x lg:last:border-x lg:border-t"
          >
            <h3 className="text-muted-foreground">{t(benefit.titleKey)}</h3>
            <p className="font-semibold">{t(benefit.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
