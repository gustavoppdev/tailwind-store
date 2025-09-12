import { shippingMethodType } from "@/data/types";
import { useTranslations } from "next-intl";

import z from "zod";

export function useCheckoutSchema() {
  const t = useTranslations("Pages.Checkout");

  return z.object({
    firstname: z.string().min(1, { message: t("errors.firstname.required") }),
    lastname: z.string().min(1, { message: t("errors.lastname.required") }),
    address: z.string().min(1, { message: t("errors.address.required") }),
    complement: z.string().optional(),
    city: z.string().min(1, { message: t("errors.city.required") }),
    country: z.string().min(1, { message: t("errors.country.required") }),
    state: z.string().min(1, { message: t("errors.state.required") }),
    postalCode: z
      .string()
      .regex(/^\d{5}-?\d{3}$/, { message: t("errors.postalCode.invalid") }), // CEP Brasil
    phone: z
      .string()
      .min(10, { message: t("errors.phone.invalid") })
      .max(15, { message: t("errors.phone.invalid") }),
    shippingMethod: z.enum(shippingMethodType, {
      message: t("errors.shippingMethod.required"),
    }),
    paymentMethod: z
      .string()
      .min(1, { message: t("errors.paymentMethod.required") }),
    creditCard: z.object({
      cardNumber: z
        .string()
        .regex(/^\d{16}$/, { message: t("errors.creditCard.cardNumber") }),
      nameOnCard: z
        .string()
        .min(1, { message: t("errors.creditCard.nameOnCard") }),
      expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
        message: t("errors.creditCard.expirationDate"),
      }),
      cvc: z.string().regex(/^\d{3}$/, { message: t("errors.creditCard.cvc") }),
    }),
  });
}
