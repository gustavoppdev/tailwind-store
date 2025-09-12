import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const CartEmpty = () => {
  const t = useTranslations("Pages.Cart.cartEmpty");
  return (
    <div className="flex flex-col items-center justify-center my-24 text-center text-gray-600 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 mb-4 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <h3 className="text-xl font-medium mb-2">{t("title")}</h3>
      <p className="mb-6 text-sm">{t("description")}</p>
      <Button type="button" className="bg-indigo-600 hover:bg-indigo-600/90">
        <Link href={"/collection"}>{t("goShoppingBtn")}</Link>
      </Button>
    </div>
  );
};

export default CartEmpty;
