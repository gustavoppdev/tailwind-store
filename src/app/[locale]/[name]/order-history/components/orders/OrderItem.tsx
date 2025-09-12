import { Order } from "@/data/types";
import { OrderSummaryHeader } from "./OrderSummaryHeader";
import { OrderItemTable } from "./OrderItemTable";

type OrderItemProps = {
  order: Order;
  locale: "pt" | "en";
};

export const OrderItem = ({ order, locale }: OrderItemProps) => {
  return (
    <div className="border rounded-md shadow-sm">
      <OrderSummaryHeader order={order} locale={locale} />
      <OrderItemTable
        items={order.items}
        orderCurrency={order.currency}
        locale={locale}
      />
    </div>
  );
};
