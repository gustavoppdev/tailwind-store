import { useFormat } from "@/lib/utils";

import { useTranslations } from "next-intl";

type SummaryCardProps = {
  layout: "cardSummary" | "orderSummary" | "thankSummary";
  orderSubtotal: number;
  shipping: number;
  taxes: number;
  total: number;
  locale: "pt" | "en";
};

const SummaryCard = ({
  layout,
  orderSubtotal,
  shipping,
  taxes,
  total,
  locale,
}: SummaryCardProps) => {
  const t = useTranslations(
    layout === "cardSummary"
      ? "Pages.Cart.cartSummary"
      : "Pages.Checkout.orderSummary"
  );

  const formattedSubtotal = useFormat({
    number: orderSubtotal,
    locale: locale,
    isLocalized: false,
  });

  const formattedShipping = useFormat({
    number: shipping,
    locale: locale,
    isLocalized: false,
  });

  const formattedTaxes = useFormat({
    number: taxes,
    locale: locale,
    isLocalized: false,
  });

  const formattedTotal = useFormat({
    number: total,
    locale: locale,
    isLocalized: false,
  });

  return (
    <>
      {/* Subtotal */}
      <div className="flex items-center justify-between">
        <p>{t("subtotal")}</p>
        <p>{formattedSubtotal}</p>
      </div>
      {/* Frete */}
      <div className="flex items-center justify-between">
        <p>
          {t(
            layout === "orderSummary" || layout === "thankSummary"
              ? "shipping"
              : "standardDeliveryFee"
          )}
        </p>
        <p className={`${shipping === 0 && "text-indigo-600"}`}>
          {shipping === 0 ? t("freeShipping") : formattedShipping}
        </p>
      </div>
      {/* Impostos */}
      <div className="flex items-center justify-between border-b pb-6">
        <p>{t("taxes")}</p>
        <p>{formattedTaxes}</p>
      </div>
      {/* Total */}
      <div
        className={`flex items-center justify-between font-medium text-base ${
          layout === "orderSummary" ? "border-b pb-6" : "pb-4"
        } ${layout === "thankSummary" && "text-sm mb-6"}`}
      >
        <p>{t("total")}</p>
        <p>{formattedTotal}</p>
      </div>
    </>
  );
};

export default SummaryCard;
