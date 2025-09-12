"use client";

// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import NavbarMobile from "./NavbarMobile";
import Topbar from "./Topbar";
import SearchBar from "./SearchBar";

// Custom Hooks
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
// Assets
import { tailwindLogo } from "@/assets";

// Lucide Icons & Constants
import { ShoppingCart, UserRound } from "lucide-react";
import { navigationLinks } from "@/data/constants";

const Navbar = () => {
  const t = useTranslations("Layout.Navbar");
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useAuth();
  return (
    <header>
      <Topbar />
      <nav className="container-section">
        <div className="hidden lg:flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href={"/"} className="min-h-10 min-w-10 relative">
              <Image
                src={tailwindLogo}
                alt="Tailwind Logo"
                fill
                sizes="40px"
                priority
                className="object-contain"
              />
            </Link>

            <ul className="flex gap-2">
              {navigationLinks.map((link) => (
                <li key={t(link.labelKey)}>
                  <Button
                    variant={"link"}
                    size={"sm"}
                    asChild
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:no-underline"
                  >
                    <Link
                      href={
                        link.href === "order-history-key"
                          ? `/${(user?.name ?? "guest")
                              .replaceAll(" ", "-")
                              .toLocaleLowerCase()}/order-history`
                          : link.href
                      }
                    >
                      {t(link.labelKey)}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center gap-4 text-muted-foreground">
            <SearchBar />

            <Link
              href={
                isAuthenticated
                  ? `/${(user?.name ?? "guest")
                      .replaceAll(" ", "-")
                      .toLocaleLowerCase()}/order-history`
                  : "/auth/sign-in"
              }
            >
              <Button variant={"ghost"} size={"icon"} className="relative">
                <UserRound
                  className="size-5.5 text-neutral-500"
                  strokeWidth={"1.8"}
                />
                <span
                  className={`absolute size-2 rounded-full bottom-2 right-2 ${
                    isAuthenticated ? "bg-green-400" : "bg-red-400"
                  }`}
                ></span>
              </Button>
            </Link>

            <span className="w-px h-5 bg-neutral-300"></span>

            <Link href={"/cart"} className="flex items-center gap-2">
              <ShoppingCart className="size-5" />
              {totalItems}
            </Link>
          </div>
        </div>
        <NavbarMobile />
      </nav>
    </header>
  );
};

export default Navbar;
