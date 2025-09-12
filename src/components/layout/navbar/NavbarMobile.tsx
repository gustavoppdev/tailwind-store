// React
import { useState } from "react";

// Next.ts & Next-Intl
import { Link } from "@/i18n/navigation";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import MenuMobile from "./MenuMobile";

// Custom Hooks
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";

// Lucide Icons & Assets
import { Search, ShoppingCart, UserRound } from "lucide-react";
import { tailwindLogo } from "@/assets";

const NavbarMobile = () => {
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSearchFocus, setOpenSearchFocus] = useState(false);

  const handleOpenSearch = () => {
    setIsMenuOpen(true);
    setOpenSearchFocus(true);
  };

  return (
    <div className="flex justify-between items-center lg:hidden relative">
      {/*  */}
      <div className="flex items-center gap-2">
        <MenuMobile
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setOpenSearchFocus={setOpenSearchFocus}
          openSearchFocus={openSearchFocus}
        />
        <Button variant={"ghost"} size={"icon"} onClick={handleOpenSearch}>
          <Search
            className="size-5.5 text-neutral-500 opacity-70"
            strokeWidth={"1.8"}
          />
        </Button>
      </div>

      {/*  */}
      <Link href={"/"} className="absolute left-1/2 -translate-x-1/2">
        <Image
          src={tailwindLogo}
          alt="Tailwind Logo"
          width={32}
          height={32}
          sizes="32px"
          className="object-contain"
        />
      </Link>

      {/*  */}
      <div className="flex justify-between items-center gap-1 text-neutral-500">
        <Link
          href={
            isAuthenticated
              ? `/${(user?.name ?? "guest")
                  .replaceAll(" ", "-")
                  .toLocaleLowerCase()}/order-history`
              : "/auth/sign-in"
          }
        >
          {" "}
          <Button variant={"ghost"} size={"icon"} className="relative">
            <UserRound
              className="size-5.5 text-neutral-500 opacity-70"
              strokeWidth={"1.8"}
            />
            <span
              className={`absolute size-2 rounded-full bottom-2 right-2 ${
                isAuthenticated ? "bg-green-400" : "bg-red-400"
              }`}
            ></span>
          </Button>
        </Link>

        <span className="w-px h-5 bg-neutral-300 mr-2"></span>
        <Button variant={"ghost"} size={"icon"}>
          <Link
            href={"/cart"}
            className="flex items-center gap-2 text-neutral-500 opacity-70"
          >
            <ShoppingCart className="size-5.5" />
            {totalItems}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NavbarMobile;
