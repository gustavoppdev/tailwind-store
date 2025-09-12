// React
import { Dispatch, SetStateAction, useEffect } from "react";

// Next.js & Next-Intl
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

// Components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageCurrencySwitcher from "@/components/common/languageCurrencySwitcher";
import SearchBar from "./SearchBar";

// Custom Hooks
import { useAuth } from "@/hooks/useAuth";

// Lucide Icons & Constants
import { Menu } from "lucide-react";
import { AUTH_LINKS, COLLECTIONS, STATIC_LINKS } from "@/data/constants";

type menuMobileProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  openSearchFocus: boolean;
  setOpenSearchFocus: Dispatch<SetStateAction<boolean>>;
};

const MenuMobile = ({
  isMenuOpen,
  setIsMenuOpen,
  openSearchFocus,
  setOpenSearchFocus,
}: menuMobileProps) => {
  const t = useTranslations("");

  const pathname = usePathname();
  const { user, signOut } = useAuth();

  // Unified function to toggle the menu and reset search focus
  const toggleMenu = (open: boolean) => {
    setIsMenuOpen(open);
    if (!open) {
      setOpenSearchFocus(false); // Reset search focus when closing the menu
    }
  };

  useEffect(() => {
    // This effect handles closing the menu when the path changes
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setOpenSearchFocus(false); // Make sure to reset here too
    }
  }, [pathname]);

  return (
    <Sheet open={isMenuOpen} onOpenChange={toggleMenu}>
      <SheetTrigger className="p-1">
        <Menu
          className="size-5.5 text-neutral-500 opacity-70"
          strokeWidth={"1.8"}
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col gap-4 overflow-scroll max-w-xs w-full"
        onOpenAutoFocus={(event) => {
          // Conditionally prevent auto-focus based on state
          if (!openSearchFocus) {
            event.preventDefault();
          }
        }}
      >
        <SheetHeader>
          <SheetTitle className="text-xl">
            {t("Pages.Home.Collections.title")}
          </SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>

        <div className="px-4 -mt-4 ">
          <SearchBar />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 px-4">
          {COLLECTIONS.map((collection) => (
            <div key={t(collection.labelKey)} className="flex flex-col gap-2 ">
              <Link
                href={collection.href}
                className="relative w-full min-w-[135px] max-w-[160px] aspect-square rounded-md overflow-hidden"
              >
                <Image
                  src={collection.imageUrl}
                  alt={t(collection.altKey)}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 640px) 135px, 160px"
                  className="object-cover rounded-md"
                />
              </Link>
              <Link href={"/collection"} className="text-sm truncate">
                {t(collection.labelKey)}
              </Link>
            </div>
          ))}
        </div>

        <ul className="flex flex-col gap-2.5 px-4">
          {STATIC_LINKS.map((link) => (
            <li
              key={link.labelKey}
              onClick={() => toggleMenu(false)}
              className={`first:border-t first:pt-2 first:mt-2 `}
            >
              <Link href={link.href}>{t(link.labelKey)}</Link>
            </li>
          ))}

          {/* Links condicionalmente renderizados */}
          {AUTH_LINKS.map(({ labelKey, href, auth, isLogout }) => {
            const showForUser = user && auth === "user";
            const showForGuest = !user && auth === "guest";

            if (!(showForUser || showForGuest)) return null;

            return (
              <li
                key={labelKey}
                onClick={() => toggleMenu(false)}
                className={`${
                  href === "/auth/sign-in" && "border-t mt-2 pt-2.5"
                }
                ${href === "/auth/sign-up" && "border-b mb-2 pb-2.5"}
                `}
              >
                {isLogout ? (
                  <button
                    onClick={signOut}
                    className="text-left w-full hover:underline border-b my-2.5 py-2.5"
                  >
                    {t(labelKey)}
                  </button>
                ) : (
                  <Link
                    href={
                      href === "order-history-key"
                        ? `/${(user?.name ?? "guest")
                            .replaceAll(" ", "-")
                            .toLocaleLowerCase()}/order-history`
                        : href
                    }
                  >
                    {t(labelKey)}
                  </Link>
                )}
              </li>
            );
          })}

          <li>
            <LanguageCurrencySwitcher />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
