// Components
import { CountryField } from "./CountryField";
import FormInputField from "./FormInputField";
import { StateField } from "./StateField";
import { Button } from "@/components/ui/button";

// Next-Intl
import { useTranslations } from "next-intl";

type ShippingInformationProps = {
  handleAutoFill: () => void;
};

export const ShippingInformation = ({
  handleAutoFill,
}: ShippingInformationProps) => {
  const t = useTranslations("Pages.Checkout.shippingInformation");
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start">
        <h2 className="text-xl font-medium">{t("title")}</h2>
        <Button
          type="button"
          variant={"ghost"}
          onClick={handleAutoFill}
          className="text-indigo-600 hover:text-indigo-600/90 max-sm:pl-0"
        >
          {t("autofill")}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormInputField
          label={t("firstName")}
          name="firstname"
          autoComplete="shipping given-name"
        />
        <FormInputField
          label={t("lastName")}
          name="lastname"
          autoComplete="shipping family-name"
        />
      </div>

      <FormInputField
        label={t("address")}
        name="address"
        autoComplete="shipping street-address"
      />

      <FormInputField
        label={t("addressComplement")}
        name="complement"
        autoComplete="shipping address-line2"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormInputField
          label={t("city")}
          name="city"
          autoComplete="shipping address-level2"
        />

        <CountryField />

        <StateField />

        <FormInputField
          label={t("postalCode")}
          name="postalCode"
          autoComplete="shipping postal-code"
        />
      </div>

      <FormInputField
        label={t("phone")}
        name="phone"
        type="tel"
        autoComplete="shipping tel"
      />
    </div>
  );
};
