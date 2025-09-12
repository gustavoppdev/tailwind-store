// Next-Intl
import { useTranslations } from "next-intl";

// Components
import SummaryCard from "@/components/common/SummaryCard";
import { Button } from "@/components/ui/button";

// Lucide Icons
import { Loader2 } from "lucide-react";

type CartSummaryProps = {
  orderSubtotal: number;
  locale: "pt" | "en";
  shipping: number;
  taxes: number;
  total: number;
  isAuthenticated: boolean;
  loading: boolean;
  handleCheckout: () => void;
  cartEmpty: boolean;
};

const CartSummary = ({
  orderSubtotal,
  locale,
  shipping,
  taxes,
  cartEmpty,
  isAuthenticated,
  loading,
  handleCheckout,
  total,
}: CartSummaryProps) => {
  const t = useTranslations("Pages.Cart.cartSummary");

  return (
    <div className="shadow-sm h-fit">
      <div className="p-6 text-sm space-y-8 ">
        <h2 className="text-xl font-medium ">{t("title")}</h2>

        <SummaryCard
          layout="cardSummary"
          locale={locale}
          orderSubtotal={orderSubtotal}
          shipping={shipping}
          taxes={taxes}
          total={total}
        />

        <Button
          size={"lg"}
          onClick={handleCheckout}
          disabled={(cartEmpty && isAuthenticated) || loading}
          className="bg-indigo-600 hover:bg-indigo-600/90 hover:text-white w-full"
        >
          {loading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : isAuthenticated ? (
            t("continueToPaymentButton")
          ) : (
            t("continueToLoginButton")
          )}
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
