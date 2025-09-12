// Next.js & Next-Intl
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { OrderProvider } from "@/contexts/OrdersContext";
import { getLocale, getMessages } from "next-intl/server";
import { MetadataMessages } from "@/data/types";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Inter({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages();

  const metadata = messages.metadata as MetadataMessages;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    metadataBase: new URL("https://tailwind-store-three.vercel.app/pt"),
    icons: {
      icon: metadata.favicon,
      shortcut: metadata.favicon,
      apple: metadata.favicon,
    },
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      url: metadata.openGraph.url,
      siteName: metadata.openGraph.site_name,
      locale: locale === "pt" ? "pt" : "en",
      type: "website",
    },
    authors: [{ name: "Gustavo Henrique" }],
    creator: "Gustavo Henrique",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        data-theme="light"
        className={`${montserrat.className} antialiased light`}
      >
        <NextIntlClientProvider>
          <AuthProvider>
            <OrderProvider>
              <CartProvider>
                <Navbar />
                <main>
                  {children}
                  <SpeedInsights />
                </main>
                <Toaster
                  theme="light"
                  toastOptions={{
                    classNames: {
                      title: `!font-medium`,
                      description: `!text-black`,
                    },
                  }}
                />
                <Footer />
              </CartProvider>
            </OrderProvider>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
