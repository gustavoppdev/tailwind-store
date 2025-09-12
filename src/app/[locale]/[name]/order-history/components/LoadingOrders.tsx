import { useTranslations } from "next-intl";

export const LoadingOrders = () => {
  const t = useTranslations("Pages.OrderHistory");

  return (
    <section className="container mx-auto flex items-center justify-center min-h-[calc(100vh-200px)]">
      <p>{t("loadingOrders")}</p>
    </section>
  );
};
