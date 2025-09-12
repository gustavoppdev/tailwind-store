"use client";

// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

// Types & Utils
import { CartItem, CurrencyType } from "@/data/types";
import { getColorData, useFormat } from "@/lib/utils";

interface ItemCardProps {
  item: CartItem;
  currency: CurrencyType;
  locale: "pt" | "en";
}

export const ItemCard = ({ item, currency, locale }: ItemCardProps) => {
  const t = useTranslations("Pages.Thanks");
  const colorData = getColorData(item.selectedColor, locale);

  const localizedPrice = useFormat({
    number:
      currency === "brl" ? item.product.price.brl : item.product.price.usd,
    locale: currency === "brl" ? "pt" : "en",
    isLocalized: false,
  });

  return (
    <div className="flex justify-between gap-2.5 border-t py-6 last:border-b">
      <div className="flex w-full gap-4">
        <Link
          href={item.product.slug[locale]}
          className="relative min-w-22 aspect-square rounded "
        >
          <Image
            src={item.product.image[0]}
            alt={item.product.alt[locale]}
            width={88}
            placeholder="blur"
            height={88}
            className="object-cover"
          />
        </Link>
        <div className="space-y-2 text-sm">
          <Link href={item.product.slug[locale]} className="block ">
            <h5 className="font-medium">{item.product.name[locale]}</h5>
          </Link>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 text-muted-foreground">
            <h5>{colorData?.name}</h5>
            <span className="hidden lg:block h-4 w-px bg-neutral-400"></span>
            <h5>{item.selectedSize[locale]}</h5>
          </div>
          <h5 className="text-muted-foreground">
            {t("quantity", { qty: item.quantity })}
          </h5>
        </div>
      </div>
      <h5 className="text-sm font-medium">{localizedPrice}</h5>
    </div>
  );
};
