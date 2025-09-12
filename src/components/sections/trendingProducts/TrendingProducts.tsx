// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/common/ProductCard";

// Products
import { AllProducts } from "@/data/products";

// Lucide Icons
import { ArrowRight } from "lucide-react";

export const TrendingProducts = () => {
  const locale = useLocale() === "pt" ? "pt" : "en";
  const t = useTranslations("Pages.Home.TrendingProducts");

  const products = [
    AllProducts[0],
    AllProducts[2],
    AllProducts[4],
    AllProducts[1],
  ];

  return (
    <section className="container-section my-24 space-y-12">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl tracking-tight">{t("title")}</h3>
        <Link href={"/collection"} passHref className="hidden sm:block">
          <Button
            variant={"link"}
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            {t("viewAllBtn")} <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>

      <div className="flex justify-between gap-8 overflow-x-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </div>
      <Link href={"/collection"} passHref className="sm:hidden">
        <Button
          variant={"link"}
          className="text-indigo-600 hover:text-indigo-700 font-semibold"
        >
          {t("viewAllBtn")} <ArrowRight className="size-4" />
        </Button>
      </Link>
    </section>
  );
};
