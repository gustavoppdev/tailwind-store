// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

// Lucide Icons
import { ArrowRight } from "lucide-react";

const GetEarlyAccess = () => {
  const t = useTranslations("Layout.Footer.getEarlyAccess");
  return (
    <div className="bg-[url('../../assets/images/home/footer-02-exclusive-sale.jpg')] bg-center bg-cover relative rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600/90 z-0" aria-hidden></div>
      <div className="relative max-w-sm mx-auto px-4 py-12 z-10 text-center text-white space-y-4">
        <h4 className="text-xl font-bold">{t("title")}</h4>
        <p>
          {t("description")}
          <Button
            variant={"link"}
            className="text-sm font-bold text-white !px-[4px]"
          >
            {t("goNowBtn")} <ArrowRight className="size-4" />
          </Button>
        </p>
      </div>
    </div>
  );
};

export default GetEarlyAccess;
