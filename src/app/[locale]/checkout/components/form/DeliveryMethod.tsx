// React
import { Dispatch, SetStateAction } from "react";

// Next-Intl
import { useTranslations } from "next-intl";

// Utils & Constants
import { shippingMethods } from "@/data/constants";
import { useFormat } from "@/lib/utils";

// Types & Lucide Icons
import { DeliveryMethodTypes } from "@/data/types";
import { Check } from "lucide-react";

type deliveryMethodProps = {
  locale: "pt" | "en";
  deliveryMethod: DeliveryMethodTypes;
  setDeliveryMethod: Dispatch<SetStateAction<DeliveryMethodTypes>>;
  shipping: number;
};

export const DeliveryMethod = ({
  locale,
  deliveryMethod,
  setDeliveryMethod,
  shipping,
}: deliveryMethodProps) => {
  const t = useTranslations("Pages.Checkout.deliveryMethod");
  const formater = useFormat;

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-medium">{t("title")}</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {shippingMethods.map((method) => {
          const localizedPrice = formater({
            number: method.price,
            locale: locale,
            isLocalized: true,
          });
          return (
            <button
              key={method.key}
              type="button"
              title={t(method.titleKey)}
              onClick={() => setDeliveryMethod(method.key)}
              className={`p-4 flex justify-between items-start border-2 rounded-lg text-start ${
                deliveryMethod === method.key ? "border-indigo-600" : ""
              }`}
            >
              <div className="flex flex-col text-sm">
                <h3 className="font-medium">{t(method.titleKey)}</h3>
                <h4 className="text-muted-foreground mb-3 mt-1">
                  {t(method.descriptionKey)}
                </h4>

                <h3
                  className={`${
                    shipping === 0 && "text-indigo-600 font-normal "
                  }font-medium `}
                >
                  {shipping === 0 ? t("freeShipping") : localizedPrice}
                </h3>
              </div>
              {deliveryMethod === method.key && (
                <Check
                  className="size-4.5 bg-indigo-600 rounded-full text-white p-[2px]"
                  strokeWidth={2.5}
                />
              )}
            </button>
          );
        })}
      </ul>
    </div>
  );
};
