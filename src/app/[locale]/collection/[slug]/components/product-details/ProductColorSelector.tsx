// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Types & Utils
import { ColorsKey, Product } from "@/data/types";
import { getColorData } from "@/lib/utils";

type ProductColorSelectorProps = {
  product: Product;
  locale: "pt" | "en";
  colorSelected: ColorsKey;
  setColorSelected: React.Dispatch<React.SetStateAction<ColorsKey>>;
};

const ProductColorSelector = ({
  product,
  locale,
  colorSelected,
  setColorSelected,
}: ProductColorSelectorProps) => {
  const t = useTranslations("Pages.ProductPage.productDetails");

  return (
    <div className="space-y-2">
      <h3 className="font-medium">{t("colors")}</h3>
      <div className="flex gap-2">
        {product.colorsAvailable.map((colorKey) => {
          const colorData = getColorData(colorKey, locale);
          const variations = product.variations
            ? product.variations.find((v) => v.key === colorKey)
            : null;

          return (
            <Link href={variations?.href[locale] ?? "#"} key={colorKey}>
              <button
                onClick={() => setColorSelected(colorKey)}
                title={colorData?.name}
                className={`grid place-content-center size-10 rounded-full bg-transparent border-2 transition-all ease-in-out duration-300 cursor-pointer ${
                  colorSelected === colorKey
                    ? " border-black/70"
                    : " border-transparent"
                }`}
              >
                <span
                  className={`size-8 rounded-full ${colorData?.className}`}
                ></span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColorSelector;
