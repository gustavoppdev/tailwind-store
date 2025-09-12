import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export const NoOrders = () => {
  const t = useTranslations("Pages.OrderHistory");

  return (
    <section className="container mx-auto max-w-full p-6 px-[8%] text-center py-40 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">{t("noOrdersTitle")}</h2>
      <p className="text-muted-foreground mb-8">{t("noOrdersDescription")}</p>
      <Button asChild>
        <Link href="/collection">{t("continueShopping")}</Link>
      </Button>
    </section>
  );
};
