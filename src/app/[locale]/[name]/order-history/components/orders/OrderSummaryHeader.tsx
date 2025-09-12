// Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

// Utils & Types
import { formatOrderDate, useFormat } from "@/lib/utils";
import { Order } from "@/data/types";

type OrderSummaryHeaderProps = {
  order: Order;
  locale: "pt" | "en";
};

export const OrderSummaryHeader = ({
  order,
  locale,
}: OrderSummaryHeaderProps) => {
  const t = useTranslations("Pages.OrderHistory");

  const localizedPrice = useFormat({
    number: order.total,
    locale: order.currency === "brl" ? "pt" : "en",
    isLocalized: false,
  });

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 font-medium bg-zinc-100/50 py-4 px-6 justify-between lg:justify-start text-sm">
      {/* Grupo dos 3 primeiros itens */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 flex-wrap">
        {/* Item: Data */}
        <div className="flex md:flex-col justify-between py-2 md:py-0 border-b md:border-none md:w-auto">
          <h3 className="font-semibold text-zinc-700">{t("date")}</h3>
          <p className="text-muted-foreground">
            {formatOrderDate(order.date, locale)}
          </p>
        </div>
        {/* Item: Número do Pedido */}
        <div className="flex md:flex-col justify-between py-2 md:py-0 border-b md:border-none">
          <h3 className="font-semibold text-zinc-700">{t("orderNumber")}</h3>
          <p className="text-muted-foreground">
            {order.id.slice(0, 12).toLocaleUpperCase()}
          </p>
        </div>
        {/* Item: Total */}
        <div className="flex md:flex-col justify-between py-2 md:py-0">
          <h3 className="font-semibold text-zinc-700">{t("total")}</h3>
          <p>{localizedPrice}</p>
        </div>
      </div>
      {/* Botão de Fatura */}
      <Button variant={"outline"} className="w-full md:w-fit lg:ml-auto">
        {t("viewInvoice")}
      </Button>
    </div>
  );
};
