// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";

const Discount = () => {
  const t = useTranslations("Pages.Home.Discount");
  return (
    <section
      id="discountSection"
      className="grid place-content-center bg-[url('../../assets/images/home/home-page-02-sale-full-width.jpg')] bg-cover bg-center relative py-24"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white z-10"
        aria-hidden
      ></div>
      <div className="container-section flex flex-col gap-8 items-center text-center z-20">
        <h2 className={`font-bold tracking-tight max-w-4xl text-4xl`}>
          {t("title")}
        </h2>
        <p className="text-neutral-700 text-lg max-w-3xl">{t("description")}</p>
        <Link href={"/collection"}>
          <Button
            size={"lg"}
            className="w-full sm:w-fit md:text-base h-12 whitespace-normal"
          >
            {t("shopNowBtn")}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Discount;
