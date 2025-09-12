"use client";

import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countriesOptions } from "@/data/constants";

export const CountryField = () => {
  const t = useTranslations("Pages.Checkout.shippingInformation");
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedCountry = watch("country");

  return (
    <div className="space-y-2">
      <label htmlFor="country" className="text-sm font-medium">
        {t("country")}
      </label>
      <Select
        onValueChange={(value) => {
          setValue("country", value, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
        value={selectedCountry}
      >
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder={t("country")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {countriesOptions.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                {t(country.labelKey)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {errors.country && (
        <p className="text-red-600 text-sm">{errors.root?.message}</p>
      )}
    </div>
  );
};
