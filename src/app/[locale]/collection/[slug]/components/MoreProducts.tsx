import ProductCard from "@/components/common/ProductCard";
import { AllProducts } from "@/data/products";

import { useLocale } from "next-intl";

import React from "react";

const MoreProducts = () => {
  const locale = useLocale() === "pt" ? "pt" : "en";

  return (
    <section className="my-24">
      <h4 className="text-xl font-medium mb-8 pb-6">
        Produtos que você pode gostar
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {AllProducts.slice(0, 4).map((product) => {
          return (
            <ProductCard product={product} locale={locale} key={product.id} />
          );
        })}
      </div>
    </section>
  );
};

export default MoreProducts;
