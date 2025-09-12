// Next.js & Next-Intl

import Image from "next/image";
import { Link } from "@/i18n/navigation";

// Components
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Lucide Icons & Types
import { CartItem } from "@/data/types";
import { X } from "lucide-react";
import { getColorData, useFormat } from "@/lib/utils";

type OrderSummaryItemProps = {
  item: CartItem;
  locale: "pt" | "en";
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  layout?: "OrderSummaryItems" | "CartItems";
};

const OrderSummaryItem = ({
  item,
  locale,
  updateQuantity,
  removeItem,
  layout = "OrderSummaryItems",
}: OrderSummaryItemProps) => {
  const colorData = getColorData(item.selectedColor, locale);

  const localizedPrice = useFormat({
    number: item.product.price,
    locale: locale,
    isLocalized: true,
  });

  return (
    <li key={item.id} className="flex py-6 px-4 gap-2 md:gap-4 border-b">
      <Link
        href={`/collection/${item.product.slug[locale]}`}
        className="relative min-w-24 min-h-24 aspect-[4/5] rounded overflow-hidden"
      >
        <Image
          src={item.product.image[0]}
          alt={item.product.alt[locale]}
          fill
          sizes="(max-width: 768px) 96px"
          priority
          placeholder="blur"
          className="object-cover"
        />
      </Link>

      <div className="flex justify-between w-full">
        <div className="text-sm flex flex-col justify-between">
          <div>
            <Link href={`/collection/${item.product.slug[locale]}`}>
              <h4 className="line-clamp-2 mr-2 mb-1 font-medium">
                {item.product.name[locale]}
              </h4>
            </Link>

            <h5 className="text-muted-foreground mb-1">{colorData?.name}</h5>
            <h5 className="text-muted-foreground">
              {item.selectedSize?.[locale]}
            </h5>
          </div>

          <h4 className="font-medium">{localizedPrice}</h4>
        </div>

        <div
          className={`flex justify-between  ${
            layout === "CartItems"
              ? "flex-col items-end md:flex-row-reverse md:min-w-2xs xl:min-w-sm md:items-start"
              : "flex-col items-end"
          }`}
        >
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => removeItem(item.id)}
          >
            <X className="size-4" />
          </Button>
          <Select
            defaultValue={String(item.quantity)}
            onValueChange={(value) => updateQuantity(item.id, Number(value))}
          >
            <SelectTrigger className="w-fit sm:w-[80px] max-sm:pr-2">
              <SelectValue placeholder={item.quantity} />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((qty) => (
                <SelectItem key={qty} value={String(qty)}>
                  {qty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </li>
  );
};

export default OrderSummaryItem;
