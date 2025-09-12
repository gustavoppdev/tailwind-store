"use client";

import { tailwindLogo } from "@/assets";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import Newsletter from "./Newsletter";
import GetEarlyAccess from "./GetEarlyAccess";
import { Button } from "@/components/ui/button";
import LanguageCurrencySwitcher from "@/components/common/languageCurrencySwitcher";

const Footer = () => {
  const t = useTranslations();
  const footerLinks = t.raw("Layout.Footer.navigationLinks") as {
    title: string;
    items: string[];
  }[];

  return (
    <footer className="container-section mt-12 mb-6 grid grid-cols-1 gap-16 border-t">
      <Image
        src={tailwindLogo}
        width={40}
        height={40}
        alt="tailwindlogo"
        className="mx-auto mt-6"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 text-muted-foreground gap-8 text-sm">
        {footerLinks.map((group) => (
          <ul key={group.title} className="space-y-4">
            {[group.title, ...group.items].map((link) => (
              <li
                key={link}
                className="first:font-medium first:text-black first:mb-6 hover:text-black/90 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Newsletter />
        <GetEarlyAccess />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-between text-center items-center">
        <p className="text-muted-foreground text-sm">
          {t("Layout.Footer.rights")}
        </p>
        <ul className="flex flex-wrap gap-2.5 items-center justify-center text-muted-foreground">
          {[
            "Layout.Footer.accessibility",
            "Layout.Footer.privacy",
            "Layout.Footer.terms",
          ].map((link) => (
            <li key={t(link)}>
              <Button variant={"link"} className="text-muted-foreground p-0">
                {t(link)}
              </Button>
            </li>
          ))}
          <span className="h-5 w-px bg-neutral-300 hidden sm:block"></span>
          <li>
            <LanguageCurrencySwitcher />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
