"use client";

// Next-Intl
import { useLocale, useTranslations } from "next-intl";

// Custom Hooks
import { useOrders } from "@/hooks/UseOrders";

// Components
import { LoadingOrders } from "./components/LoadingOrders";
import { NoOrders } from "./components/NoOrders";
import { OrderItem } from "./components/orders/OrderItem";

const OrderHistory = () => {
  const { orders, isLoadingOrders } = useOrders();
  const t = useTranslations("Pages.OrderHistory");
  const locale = useLocale() === "pt" ? "pt" : "en";

  if (isLoadingOrders) return <LoadingOrders />;

  if (!orders || orders.length === 0) return <NoOrders />;

  const sortedOrders = [...orders].reverse(); // Cria uma cópia e inverte para ter os mais recentes primeiro

  return (
    <section className="container-section min-h-screen">
      <div className="space-y-4 pb-8">
        <h2 className="text-2xl lg:text-3xl font-bold">{t("title")}</h2>
        <p className="text-muted-foreground font-medium">{t("description")}</p>
      </div>

      <div className="space-y-12 lg:space-y-24">
        {sortedOrders.map((order) => (
          <OrderItem key={order.id} order={order} locale={locale} />
        ))}
      </div>
    </section>
  );
};

export default OrderHistory;
