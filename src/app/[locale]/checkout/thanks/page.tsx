"use client";

// Lucide Icons
import { ArrowRight } from "lucide-react";

// Next & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";

// Custom Hooks
import { useOrders } from "@/hooks/UseOrders";

// Components
import { Button } from "@/components/ui/button";
import { ItemCard } from "./components/ItemCard";
import { ShippingDetails } from "./components/ShippingDetails";
import SummaryCard from "@/components/common/SummaryCard";

// Assets
import { heroImage } from "@/assets/index";
import { shippingMethods } from "@/data/constants";
import { useAuth } from "@/hooks/useAuth";

const Thanks = () => {
  const { lastOrder } = useOrders();
  const { isAuthenticated, user } = useAuth();

  const t = useTranslations("Pages.Thanks");
  const locale = lastOrder?.currency === "brl" ? "pt" : "en";

  if (!lastOrder) {
    return notFound();
  }

  const shipping = shippingMethods.find(
    (m) => m.key === lastOrder.shippingMethod
  );

  return (
    <section className="container-section grid grid-cols-1 lg:grid-cols-7 gap-12">
      <div className="relative lg:col-span-4 max-lg:order-2 aspect-auto">
        <Image
          src={heroImage}
          alt={t("imageAlt")}
          fill
          placeholder="blur"
          sizes="57vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mx-auto lg:col-span-3 flex max-w-2xl flex-col gap-4 lg:max-w-full">
        {/* Cabeçalho */}
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-indigo-600">
            {t("paymentSuccessful")}
          </h2>
          <h3 className="text-3xl font-bold tracking-tight ">{t("title")}</h3>
          <p className=" text-muted-foreground">{t("description")}</p>
        </div>

        {/* Número de Rastreio */}
        <div className="mt-4 space-y-2 text-sm font-medium">
          <div className="flex items-center justify-between">
            <h4>{t("trackingNumber")}</h4>
            <Link
              href={`/${(user?.name ?? "guest")
                .replaceAll(" ", "-")
                .toLocaleLowerCase()}/order-history`}
            >
              <Button
                variant={"link"}
                className="text-indigo-600 hover:text-indigo-600/90 w-fit block whitespace-normal m-0 p-0"
              >
                Ver Pedido
              </Button>
            </Link>
          </div>

          <p className="text-indigo-600">{lastOrder.id}</p>
        </div>

        {/* Lista de Itens */}
        <div className="flex flex-col gap-2 pb-4">
          {lastOrder.items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              currency={lastOrder.currency}
              locale={locale}
            />
          ))}
        </div>

        {/* Resumo do Pedido */}

        <div className="space-y-6 text-sm ">
          <SummaryCard
            layout="thankSummary"
            locale={locale}
            orderSubtotal={lastOrder.subtotal}
            shipping={shipping?.price[lastOrder.currency] ?? 0}
            taxes={lastOrder.taxes}
            total={lastOrder.total}
          />
        </div>

        {/* Detalhes de Entrega e Pagamento */}
        <ShippingDetails order={lastOrder} />

        {/* Botão para continuar comprando */}
        <Button variant={"link"} asChild className="self-end text-indigo-600">
          <Link href={"/collection"}>
            {t("continueShopping")} <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Thanks;
