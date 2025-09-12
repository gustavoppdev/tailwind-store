// Next.js
import Image from "next/image";

// Components
import ProductHeaderInfo from "./product-details/ProductHeaderInfo";

// Types
import { Product } from "@/data/types";

interface ProductImagesProps {
  product: Product;
  locale: "pt" | "en";
}

const ProductImages = ({ product, locale }: ProductImagesProps) => {
  return (
    <div className="space-y-4 w-full mx-auto col-span-3 ">
      <ProductHeaderInfo product={product} locale={locale} layout="mobile" />

      <div className="relative mt-8 lg:mt-0 min-w-[18rem] min-h-64 aspect-[4/5] xl:aspect-square rounded overflow-hidden">
        <Image
          src={product.image[0]}
          alt={product.alt[locale]}
          fill
          sizes="(max-width: 1024px) 100vw, 720px "
          priority
          placeholder="blur"
          className="object-cover "
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative min-w-[8rem]  min-h-[8rem] aspect-[4/5] xl:aspect-square rounded overflow-hidden">
          <Image
            src={product.image[1]}
            alt={product.alt[locale]}
            fill
            sizes="(max-width: 1024px) 50vw, 344px"
            priority
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div className="relative min-w-[8rem]  min-h-[8rem] aspect-[4/5] xl:aspect-square rounded overflow-hidden">
          <Image
            src={product.image[2]}
            alt={product.alt[locale]}
            fill
            sizes="(max-width: 1024px) 50vw, 344px"
            priority
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
