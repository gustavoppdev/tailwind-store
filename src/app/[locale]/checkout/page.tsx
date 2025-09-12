"use client";

// React
import { useState } from "react";

// Next-Intl
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";

// Zod & Reac-Hook-Form
import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Custom Hooks
import { useOrders } from "@/hooks/UseOrders";
import { useCart } from "@/hooks/useCart";

// Components
import {
  DeliveryMethod,
  PaymentMethod,
  ShippingInformation,
} from "./components/form";
import { OrderSummary } from "./components/order-summary";

// Constants & Types
import { DeliveryMethodTypes } from "@/data/types";
import { freeShipping, shippingMethods } from "@/data/constants";

// Schema
import { useCheckoutSchema } from "@/lib/validations/checkoutSchema";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [deliveryMethod, setDeliveryMethod] =
    useState<DeliveryMethodTypes>("standard");
  const { items, clearCart, subtotal } = useCart();
  const { createOrder } = useOrders();
  const checkoutSchema = useCheckoutSchema();
  const locale = useLocale() === "pt" ? "pt" : "en";
  const router = useRouter();

  const currency = locale === "pt" ? "brl" : "usd";

  // Obtenha o subtotal na moeda correta
  const orderSubtotal = subtotal[currency];
  // Calcule o valor do frete com a lógica de frete grátis
  const shipping =
    orderSubtotal >= freeShipping[currency]
      ? 0
      : shippingMethods.find((method) => method.key === deliveryMethod)?.price[
          currency
        ] ?? 0;

  // Calcule os impostos
  const taxes = orderSubtotal * 0.05;
  // Calcule o total do pedido
  const total = orderSubtotal + shipping + taxes;

  const checkoutForm = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    mode: "onSubmit",
    defaultValues: {
      firstname: "",
      lastname: "",
      address: "",
      complement: "",
      city: "",
      state: "",
      postalCode: "",
      creditCard: {
        cardNumber: "",
        cvc: "",
        expirationDate: "",
        nameOnCard: "",
      },
      phone: "",
      shippingMethod: "standard",
      paymentMethod: "creditCard",
      country: locale === "pt" ? "brazil" : "usa",
    },
  });

  function onSubmit(values: z.infer<typeof checkoutSchema>) {
    setIsLoading(true);
    setTimeout(() => {
      createOrder({
        items,
        subtotal: orderSubtotal,
        taxes,
        total,
        currency,
        shippingMethod: values.shippingMethod as DeliveryMethodTypes,
        paymentInformation: {
          cardLast4: values.creditCard.cardNumber.slice(-4),
          expirationDate: values.creditCard.expirationDate,
        },
        shippingAddress: {
          firstName: values.firstname,
          lastName: values.lastname,
          address: values.address,
          city: values.city,
          country: values.country,
          phone: values.phone,
          postalCode: values.postalCode,
          state: values.state,
          complement: values.complement,
        },
      });
      setIsLoading(false);
      router.push("/checkout/thanks");
      clearCart();
      console.log({ values });
    }, 1000);
  }

  // Dados de teste para o formulário
  const testData = {
    firstname: "John",
    lastname: "Doe",
    address: "Rua Exemplo, 123",
    complement: "Apartamento 4",
    city: "São Paulo",
    state: "SP",
    postalCode: "01000-000",
    creditCard: {
      cardNumber: "1111222233334444",
      cvc: "123",
      expirationDate: "12/26",
      nameOnCard: "John Doe",
    },
    phone: "11999998888",
    shippingMethod: "standard",
    paymentMethod: "creditCard",
    country: "brazil",
  };

  // Função para preencher o formulário com dados de teste
  const handleAutofill = () => {
    checkoutForm.reset(testData);
  };

  return (
    <section className="container-section">
      <FormProvider {...checkoutForm}>
        <form onSubmit={checkoutForm.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-x-16 gap-y-8">
            {/* Lado esquerdo: Campos do Formulário */}
            <div className="space-y-8 lg:col-span-4">
              <ShippingInformation handleAutoFill={handleAutofill} />
              <span className="h-px w-full bg-zinc-200" />
              <DeliveryMethod
                deliveryMethod={deliveryMethod}
                setDeliveryMethod={setDeliveryMethod}
                locale={locale}
                shipping={shipping}
              />
              <span className="h-px w-full bg-zinc-200" />
              <PaymentMethod />
            </div>

            {/* Lado direito: Resumo do Pedido com o Botão de Submit */}
            <div className="lg:col-span-3">
              <OrderSummary
                orderSubtotal={orderSubtotal}
                shipping={shipping}
                taxes={taxes}
                total={total}
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default Checkout;
