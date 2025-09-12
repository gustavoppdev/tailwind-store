"use client";

// React
import { useState } from "react";

// Next-Intl
import { Link, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

// Custom Hooks
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

// Components
import OrderSummaryItem from "../checkout/components/order-summary/OrderSummaryItem";
import CartSummary from "./components/CartSummary";
import CartEmpty from "./components/CartEmpty";

// Utils & Constants
import { freeShipping, shippingMethods } from "@/data/constants";

const Cart = () => {
  const { items, updateQuantity, subtotal, removeItem } = useCart();
  const { isAuthenticated } = useAuth();
  const t = useTranslations("Pages.Cart");
  const locale = useLocale() === "pt" ? "pt" : "en";
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      if (isAuthenticated) {
        router.push("/checkout");
      } else {
        router.push("/auth/sign-in");
      }
      setLoading(false);
    }, 1000);
  };

  const currency = locale === "pt" ? "brl" : "usd";

  const cartEmpty = items.length === 0;

  const orderSubtotal = subtotal[currency];

  const shipping =
    orderSubtotal >= freeShipping[currency]
      ? 0
      : shippingMethods.find((method) => method.key === "standard")?.price[
          currency
        ] ?? 0;

  // Calcule os impostos
  const taxes = orderSubtotal * 0.05;

  // Calcule o total do pedido
  const total = orderSubtotal + shipping + taxes;

  return (
    <section className="container-section space-y-12 min-h-screen">
      <div className="space-y-4 border-b pb-8 mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold">{t("title")}</h2>
        <h3 className="text-muted-foreground font-medium">
          {t.rich("description", {
            link: (chunks) => (
              <Link
                href={"/collection"}
                className="text-indigo-600 hover:text-indigo-600/90"
              >
                {chunks}
              </Link>
            ),
          })}
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Lista de itens */}
        <ul className="lg:col-span-2 space-y-4 max-h-[600px] overflow-y-auto ">
          {items.length === 0 ? (
            <CartEmpty />
          ) : (
            items.map((item) => (
              <OrderSummaryItem
                key={item.id}
                item={item}
                locale={locale}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
                layout="CartItems"
              />
            ))
          )}
        </ul>

        {/* Resumo */}
        <div className="lg:col-span-1">
          <CartSummary
            orderSubtotal={orderSubtotal}
            taxes={taxes}
            isAuthenticated={isAuthenticated}
            loading={loading}
            handleCheckout={handleCheckout}
            cartEmpty={cartEmpty}
            locale={locale}
            shipping={shipping}
            total={total}
          />
        </div>
      </div>
    </section>
  );
};

export default Cart;
