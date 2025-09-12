"use client";

import { AllProducts } from "@/data/products";
import { ProductCategory, ColorsKey } from "@/data/types";
import { filterProducts, useProductFilters } from "@/hooks/useFilters";
import { useLocale, useTranslations } from "next-intl";

// Subcomponentes
import CollectionFilters from "./components/CollectionFilters";
import CollectionProducts from "./components/CollectionProducts";

const Collection = () => {
  const t = useTranslations("");
  const locale = useLocale() === "pt" ? "pt" : "en";

  // Hook de filtros
  const { filters, setFilters, clearAll } = useProductFilters();

  // Produtos filtrados
  const filteredProducts = filterProducts(AllProducts, filters);

  // Alternar filtros
  const handleToggleFilter = (type: "categories" | "colors", value: string) => {
    const current = filters[type] || [];
    const exists =
      type === "categories"
        ? (current as ProductCategory[]).includes(value as ProductCategory)
        : (current as ColorsKey[]).includes(value as ColorsKey);

    const updated = exists
      ? current.filter((v) => v !== value)
      : [...current, value];

    setFilters({
      ...filters,
      [type]: updated as ProductCategory[] | ColorsKey[],
    });
  };

  return (
    <section className="container-section min-h-screen">
      {/* Títulos */}
      <div className="space-y-4 border-b pb-8 mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold">
          {t("Pages.Collection.title")}
        </h2>
        <h3 className="text-muted-foreground font-medium">
          {t("Pages.Collection.description")}
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
        <CollectionFilters
          filters={filters}
          onToggle={handleToggleFilter}
          clearFilters={clearAll}
        />
        <CollectionProducts
          products={filteredProducts}
          locale={locale}
          onClearFilters={clearAll}
        />
      </div>
    </section>
  );
};

export default Collection;
