// Next-Intl
import { useTranslations } from "next-intl";

// Types
import { Product } from "@/data/types";
import { DollarSign, Earth } from "lucide-react";
import { incentives } from "@/data/constants";

type ProductInformationsProps = {
  product: Product;
  locale: "pt" | "en";
};

const ProductInformations = ({ product, locale }: ProductInformationsProps) => {
  const t = useTranslations("Pages.ProductPage.productDetails");
  return (
    <>
      <div className="space-y-4  border-b pb-8 ">
        <h3 className="font-medium">{t("description")}</h3>
        <p className="text-muted-foreground">{product.description[locale]}</p>
        {/* <p className="text-muted-foreground">
          {product.shortDescription[locale]}
        </p> */}
      </div>
      <div className=" mt-8">
        <h4 className="font-medium">{t("details")}</h4>
        <ul className="text-zinc-500 space-y-1 ml-4 mt-4">
          {product.details.map((item, index) => (
            <li key={item[locale] || index}>- {item[locale]}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {incentives.map((incentive) => (
          <div
            key={t(incentive.title)}
            className="flex flex-col gap-2 text-center items-center bg-neutral-100 rounded-md border px-2 py-6 text-sm"
          >
            {incentive.icon === "garantee" ? (
              <Earth className="size-5 opacity-70 bg-neutral-200 border rounded-full" />
            ) : (
              <DollarSign className="size-5 opacity-70 bg-neutral-200 border rounded-full" />
            )}
            <h4 className="font-medium">{t(incentive.title)}</h4>
            <p className="text-muted-foreground">{t(incentive.description)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductInformations;
