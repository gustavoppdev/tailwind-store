"use client";

import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/data/types";
import NoResultsFound from "./NoResultsFound";

type CollectionProductsProps = {
  products: Product[];
  locale: "pt" | "en";
  onClearFilters: () => void;
};

export default function CollectionProducts({
  products,
  locale,
  onClearFilters,
}: CollectionProductsProps) {
  return (
    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-12">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard product={product} locale={locale} key={product.id} />
        ))
      ) : (
        <NoResultsFound onClearFilters={onClearFilters} />
      )}
    </div>
  );
}
