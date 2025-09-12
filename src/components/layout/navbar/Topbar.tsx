"use client";

// Next-Intl
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import { Button } from "@/components/ui/button";
import LanguageCurrencySwitcher from "@/components/common/languageCurrencySwitcher";

// Custom Hooks
import { useAuth } from "@/hooks/useAuth";

// Lucide Icons & Constants
import { LogOut } from "lucide-react";
import { freeShipping } from "@/data/constants";

// Utils
import { useFormat } from "@/lib/utils";

const Topbar = () => {
  const t = useTranslations("Layout.Topbar");
  const { isAuthenticated, user, signOut } = useAuth();
  const locale = useLocale() === "pt" ? "pt" : "en";
  const localizedPrice = useFormat({
    number: freeShipping,
    locale: locale,
    isLocalized: true,
  });

  return (
    <div className="bg-neutral-800">
      <div className="flex justify-between items-center font-medium text-sm text-white container-section !py-2">
        <div className="hidden lg:flex gap-2 items-center">
          <LanguageCurrencySwitcher />
        </div>
        <p className="lg:absolute lg:left-1/2 lg:-translate-x-1/2  max-lg:w-full text-center">
          {t("freeShipping", {
            value: localizedPrice,
          })}
        </p>

        {isAuthenticated ? (
          <span className="hidden lg:flex gap-2 items-center ">
            {user?.name}
            <Button size={"icon"} variant={"ghost"} onClick={signOut}>
              <LogOut className="size-4" />
            </Button>
          </span>
        ) : (
          <div className="hidden lg:flex items-center gap-2 ">
            <Button variant={"link"} size={"sm"} asChild className="text-white">
              <Link href={"/auth/sign-up"}>{t("createAccount")}</Link>
            </Button>
            <span className="h-6 w-px bg-neutral-700"></span>
            <Button variant={"link"} size={"sm"} asChild className="text-white">
              <Link href={"/auth/sign-in"}> {t("signIn")}</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
