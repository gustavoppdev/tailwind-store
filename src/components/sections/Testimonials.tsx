// Next-Intl
import { useTranslations } from "next-intl";

// Constants
import { testimonials } from "@/data/constants";

// Lucide Icons
import { Quote } from "lucide-react";

const Testimonials = () => {
  const t = useTranslations("Pages.Home.Testimonials");
  return (
    <section className="container-section space-y-16 lg:py-24">
      <h3 className="font-bold text-2xl tracking-tight">{t("title")}</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {testimonials.map((testimonials) => (
          <div
            key={t(testimonials.nameKey)}
            className="flex flex-col gap-4 items-start"
          >
            <Quote className="size-7 rotate-180 fill-neutral-200 text-neutral-200" />

            <p className="text-muted-foreground ">{t(testimonials.textKey)}</p>

            <h4 className="font-semibold">
              {t(testimonials.nameKey)}, {t(testimonials.localeKey)}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
