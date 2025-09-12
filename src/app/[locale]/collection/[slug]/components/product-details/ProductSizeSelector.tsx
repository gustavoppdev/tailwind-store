// React
import { SetStateAction } from "react";

// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

// Types & Lucide Icons
import { LocalizedString, Product } from "@/data/types";
import { Check } from "lucide-react";

type ProductSizeSelector = {
  product: Product;
  locale: "pt" | "en";
  sizeSelected: LocalizedString;
  setSizeSelected: React.Dispatch<SetStateAction<LocalizedString>>;
};

const ProductSizeSelector = ({
  product,
  locale,
  sizeSelected,
  setSizeSelected,
}: ProductSizeSelector) => {
  const t = useTranslations("Pages.ProductPage.productDetails");
  return (
    <div className="space-y-4 mb-4">
      <h3 className="font-medium">{t("sizes")}</h3>
      <div className={`grid grid-cols-3 xl:grid-cols-5 gap-4 `}>
        {product.sizesAvailable.map((size) => (
          <Button
            key={size[locale]}
            onClick={() => setSizeSelected(size)}
            variant={"ghost"}
            className={`border h-12 w-fit ${
              sizeSelected === size
                ? "border-indigo-600 bg-indigo-600 text-white hover:text-white hover:bg-indigo-600/90"
                : ""
            }`}
          >
            {size[locale]}
          </Button>
        ))}
      </div>
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <Check className="text-green-500 size-4" />
        {t("inStock")}
      </p>
    </div>
  );
};

export default ProductSizeSelector;
