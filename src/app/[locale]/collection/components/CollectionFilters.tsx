"use client";

// Next-Intl
import { useLocale, useTranslations } from "next-intl";

// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Constants & Types
import { FILTER_OPTIONS_DATA } from "@/data/constants";
import { ColorsKey, ProductCategory } from "@/data/types";

// Utils
import { getCategoryName, getColorData } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CollectionFiltersProps = {
  filters: {
    categories: ProductCategory[];
    colors: ColorsKey[];
  };
  onToggle: (type: "categories" | "colors", value: string) => void;
  clearFilters: () => void;
};

export default function CollectionFilters({
  filters,
  onToggle,
  clearFilters,
}: CollectionFiltersProps) {
  const t = useTranslations("");
  const locale = useLocale() === "pt" ? "pt" : "en";

  return (
    <div className="lg:col-span-1">
      {/* Mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>{t("Pages.Collection.filters.title")}</SheetTrigger>

          {/* Chips de filtros ativos */}
          {(filters.categories.length > 0 || filters.colors.length > 0) && (
            <div className="flex flex-wrap gap-2 mt-4">
              {/* Categorias ativas */}
              {filters.categories.map((cat) => (
                <Button
                  key={cat}
                  variant="secondary"
                  size="sm"
                  className="rounded-full text-xs"
                  onClick={() => onToggle("categories", cat)}
                >
                  {t(getCategoryName(cat))} ✕
                </Button>
              ))}

              {/* Cores ativas */}
              {filters.colors.map((color) => (
                <Button
                  key={color}
                  variant="secondary"
                  size="sm"
                  className="rounded-full text-xs"
                  onClick={() => onToggle("colors", color)}
                >
                  {getColorData(color, locale)?.name} ✕
                </Button>
              ))}
            </div>
          )}

          <SheetContent className="max-w-3xs w-full">
            <SheetHeader>
              <SheetTitle>{t("Pages.Collection.filters.title")}</SheetTitle>
              <SheetDescription className="sr-only" />
            </SheetHeader>

            <ul className="px-4">
              {FILTER_OPTIONS_DATA.map((filter) => (
                <Accordion key={filter.key} type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="border-t py-6">
                      {t(filter.titleKey)}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-4 text-muted-foreground">
                        {filter.items.map((item) => {
                          const itemName =
                            filter.key === "colors"
                              ? getColorData(item as ColorsKey, locale)?.name
                              : t(getCategoryName(item as ProductCategory));

                          const isChecked =
                            filter.key === "colors"
                              ? filters.colors.includes(item as ColorsKey)
                              : filters.categories.includes(
                                  item as ProductCategory
                                );

                          return (
                            <li
                              key={itemName}
                              className="flex gap-2 items-center"
                            >
                              <Checkbox
                                id={`${filter.key}-${item}`}
                                checked={isChecked}
                                onCheckedChange={() =>
                                  onToggle(
                                    filter.key as "colors" | "categories",
                                    item
                                  )
                                }
                              />
                              <Label
                                htmlFor={`${filter.key}-${item}`}
                                className="font-normal"
                              >
                                {itemName}
                              </Label>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
              <Button
                variant={"outline"}
                onClick={clearFilters}
                className="w-full mt-6"
              >
                {t("Pages.Collection.noResultsFound.clearFiltersButton")}
              </Button>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block space-y-8 text-sm">
        {FILTER_OPTIONS_DATA.map((filter) => (
          <div
            key={filter.key}
            className="space-y-4 border-b last:border-b-0 pb-8"
          >
            <h3 className="font-medium">{t(filter.titleKey)}</h3>
            <ul className="space-y-4 text-muted-foreground">
              {filter.items.map((item) => {
                const itemName =
                  filter.key === "colors"
                    ? getColorData(item as ColorsKey, locale)?.name
                    : t(getCategoryName(item as ProductCategory));

                const isChecked =
                  filter.key === "colors"
                    ? filters.colors.includes(item as ColorsKey)
                    : filters.categories.includes(item as ProductCategory);

                return (
                  <li key={itemName} className="flex gap-2 items-center">
                    <Checkbox
                      id={`${filter.key}-${item}`}
                      checked={isChecked}
                      onCheckedChange={() =>
                        onToggle(filter.key as "colors" | "categories", item)
                      }
                    />
                    <Label
                      htmlFor={`${filter.key}-${item}`}
                      className="font-normal"
                    >
                      {itemName}
                    </Label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <Button variant={"outline"} onClick={clearFilters} className="w-full ">
          {t("Pages.Collection.noResultsFound.clearFiltersButton")}
        </Button>
      </div>
    </div>
  );
}
