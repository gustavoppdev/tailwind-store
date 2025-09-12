// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server"; // Para Server Components

// Componentes
import { Button } from "@/components/ui/button";

// Icones
import { ArrowLeft } from "lucide-react";

interface NotFoundPageProps {
  locale: string;
}

const NotFoundPage = ({ locale }: NotFoundPageProps) => {
  // Necessário para Server Components que usam traduções
  setRequestLocale(locale);

  const t = useTranslations("Pages.notFoundPage");

  return (
    <div className="grid place-content-center my-24 px-6 lg:px-[8%] container mx-auto text-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-indigo-600 font-semibold text-lg">{t("code")}</h2>
        <h3 className="text-3xl font-bold">{t("title")}</h3>
        <p className="text-muted-foreground font-medium  max-w-2xl">
          {t("description")}
        </p>
        <Button variant={"link"} className="text-indigo-600 " asChild>
          <Link href={"/"}>
            <ArrowLeft className="size-4" /> {t("backToHome")}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
