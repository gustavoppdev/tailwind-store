// Next-Intl
import { useLocale, useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";
import OrderSummaryItem from "./OrderSummaryItem";
import CartEmpty from "@/app/[locale]/cart/components/CartEmpty";
import SummaryCard from "@/components/common/SummaryCard";

// Custom Hooks
import { useCart } from "@/hooks/useCart";

// Utils & Lucide Icons
import { Loader2 } from "lucide-react";

type OrderSummaryProps = {
  isLoading: boolean;
  orderSubtotal: number;
  shipping: number;
  taxes: number;
  total: number;
};

export const OrderSummary = ({
  isLoading,
  orderSubtotal,
  shipping,
  taxes,
  total,
}: OrderSummaryProps) => {
  const t = useTranslations("Pages.Checkout.orderSummary");
  const { items, removeItem, updateQuantity } = useCart();
  const locale = useLocale() === "pt" ? "pt" : "en";

  return (
    <div className="space-y-8 lg:col-span-3 w-full">
      <h2 className="text-xl font-medium">{t("title")}</h2>

      <div className="border rounded-lg">
        {items.length === 0 ? (
          <CartEmpty />
        ) : (
          <ul>
            {items.map((item) => (
              <OrderSummaryItem
                key={item.id}
                item={item}
                locale={locale}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))}
          </ul>
        )}

        <div className="p-4 text-sm space-y-4 ">
          <SummaryCard
            layout="orderSummary"
            locale={locale}
            orderSubtotal={orderSubtotal}
            shipping={shipping}
            taxes={taxes}
            total={total}
          />

          <Button
            size={"lg"}
            type="submit"
            disabled={isLoading || items.length === 0}
            className="bg-indigo-600 hover:bg-indigo-600/90 hover:text-white w-full"
          >
            {isLoading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              t("confirmOrderButton")
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
