import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslations } from "next-intl";

import { useFormContext } from "react-hook-form";
import FormInputField from "./FormInputField";

export const PaymentMethod = () => {
  const t = useTranslations("Pages.Checkout.payment");

  const { watch, setValue } = useFormContext();
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-medium">{t("title")}</h2>

      <RadioGroup
        value={watch("paymentMethod")}
        onValueChange={(value: "creditCard") =>
          setValue("paymentMethod", value)
        }
        className="sm:flex gap-6 text-zinc-700"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="creditCard" id="r1" />
          <Label htmlFor="r1">{t("creditCard.title")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem disabled value="PayPal" id="r2" />
          <Label htmlFor="r2">PayPal</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem disabled value="eTransfer" id="r3" />
          <Label htmlFor="r3">eTransfer</Label>
        </div>
      </RadioGroup>

      <FormInputField
        label={t("creditCard.cardNumber")}
        name="creditCard.cardNumber"
        autoComplete="shipping cc-number"
      />
      <FormInputField
        label={t("creditCard.nameOnCard")}
        name="creditCard.nameOnCard"
        autoComplete="shipping cc-name"
      />

      <div className="grid grid-cols-4 gap-4 md:gap-8">
        <FormInputField
          label={t("creditCard.expirationDate")}
          name="creditCard.expirationDate"
          autoComplete="shipping cc-exp"
          styles="col-span-3"
        />
        <FormInputField
          label={t("creditCard.cvc")}
          name="creditCard.cvc"
          autoComplete="shipping cc-csc"
          styles="col-span-1"
          type="text"
          inputProps={{ maxLength: 3, pattern: "[0-9]{3}" }}
        />
      </div>
    </div>
  );
};
