// Next-Intl
import { useFormatter, useTranslations } from "next-intl";

// Components
import StarRating from "@/components/common/StarRating";

// Types
import { Product } from "@/data/types";

interface ProductImagesProps {
  product: Product;
  locale: "pt" | "en";
  layout: "desktop" | "mobile";
}

const ProductHeaderInfo = ({ product, locale, layout }: ProductImagesProps) => {
  const format = useFormatter();
  const t = useTranslations("Pages.ProductPage.productDetails");

  return (
    <div
      className={`space-y-4 ${
        layout === "mobile" ? "lg:hidden" : "hidden lg:block"
      }`}
    >
      <div className="flex justify-between items-start font-medium text-xl 2xl:text-2xl tracking-tight">
        <h2 className="mr-4">{product.name[locale]}</h2>
        <h3 className="">
          {format.number(product.price[locale === "pt" ? "brl" : "usd"], {
            style: "currency",
            currency: locale === "pt" ? "BRL" : "USD",
          })}
        </h3>
      </div>
      <div className="flex items-center gap-2 text-sm ">
        <span>{product.rating}</span>
        <StarRating rate={product.rating} />
        <span className="h-1 w-1 rounded-full bg-neutral-200 mx-2"></span>
        <p className="text-indigo-600 font-medium">
          {t("seeAllReviews", {
            count: Math.floor(product.rating * 50),
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductHeaderInfo;
