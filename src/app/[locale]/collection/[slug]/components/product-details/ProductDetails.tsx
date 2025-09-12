"use client";

// React
import { useState } from "react";

// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Components
import ProductHeaderInfo from "./ProductHeaderInfo";
import ProductColorSelector from "./ProductColorSelector";
import ProductSizeSelector from "./ProductSizeSelector";
import ProductInformations from "./ProductInformations";
import { Button } from "@/components/ui/button";

// Types
import { ColorsKey, LocalizedString, Product } from "@/data/types";
import { useCart } from "@/hooks/useCart";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ProductDetailsProps {
  product: Product;
  locale: "pt" | "en";
}

export const ProductDetails = ({ product, locale }: ProductDetailsProps) => {
  const t = useTranslations("Pages.ProductPage.productDetails");
  const { addItem } = useCart();
  const [colorSelected, setColorSelected] = useState<ColorsKey>(
    product.colorsAvailable[0]
  );
  const [sizeSelected, setSizeSelected] = useState<LocalizedString>(
    product.sizesAvailable[0]
  );
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);

    setTimeout(() => {
      addItem(product, 1, colorSelected, sizeSelected);

      toast.success(t("addedToCart", { product: product.name[locale] }));

      setLoading(false);
    }, 1000);
  };
  return (
    <div className="space-y-8 col-span-2 text-sm">
      <ProductHeaderInfo product={product} locale={locale} layout="desktop" />
      <ProductColorSelector
        product={product}
        locale={locale}
        colorSelected={colorSelected}
        setColorSelected={setColorSelected}
      />

      <ProductSizeSelector
        product={product}
        locale={locale}
        sizeSelected={sizeSelected}
        setSizeSelected={setSizeSelected}
      />

      <Button
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-600/80"
        size={"lg"}
        onClick={handleAddToCart}
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          t("addToCartBtn")
        )}
      </Button>

      <ProductInformations product={product} locale={locale} />
    </div>
  );
};
