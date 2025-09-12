"use client";

// React
import { use, useEffect } from "react";

// Next.js & Next-Intl
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { useRouter } from "@/i18n/navigation";

// Components
import ProductImages from "./components/ProductImages";
import { ProductDetails } from "./components/product-details";
import Testimonials from "./components/Testimonials";
import MoreProducts from "./components/MoreProducts";

// Products
import { AllProducts } from "@/data/products";

const ProductPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const locale = useLocale() === "pt" ? "pt" : "en";
  const router = useRouter();
  const product =
    AllProducts.find((p) => Object.values(p.slug).includes(slug)) || notFound();

  useEffect(() => {
    if (!product) return;
    const correctSlug = product.slug[locale];
    if (slug !== correctSlug) {
      router.replace(`/collection/${correctSlug}`);
    }
  }, [locale, slug, product, router]);

  if (!product) {
    return notFound();
  }

  return (
    <section className="container-section mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-x-8">
        <ProductImages product={product} locale={locale} />
        <ProductDetails product={product} locale={locale} />
      </div>
      <Testimonials />
      <MoreProducts />
    </section>
  );
};

export default ProductPage;
