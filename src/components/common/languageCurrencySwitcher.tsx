"use client";

// Next.js & Next-Intl
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

// Lucide Icons & Assets
import { ChevronDown } from "lucide-react";
import { brazilFlag, usaFlag } from "@/assets";

export default function LanguageCurrencySwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLocaleChange = (newLocale: "pt" | "en") => {
    const newPath = `/${newLocale}${pathname.substring(3)}`;
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="cursor-pointer w-fit gap-2 hover:bg-transparent hover:text-current/90"
        >
          <Image
            src={locale === "pt" ? brazilFlag : usaFlag}
            alt={locale === "pt" ? "Português - BRL" : "English - USD"}
            width={24}
            height={24}
            className="object-contain"
          />
          {locale === "pt" ? "Português - BRL" : "English - USD"}
          <ChevronDown className="size-4 text-neutral-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLocaleChange("pt")}>
          Português - BRL
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange("en")}>
          English - USD
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
