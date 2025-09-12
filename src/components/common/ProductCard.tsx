import { Product } from "@/data/types";
import { Link } from "@/i18n/navigation";
import { getColorData, useFormat } from "@/lib/utils";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
  locale: "pt" | "en";
};

const ProductCard = ({ product, locale }: ProductCardProps) => {
  const LocalizedPrice = useFormat({
    number: product.price,
    locale: locale,
    isLocalized: true,
  });

  const productColor = getColorData(product.colorsAvailable[0], locale);

  return (
    <div key={product.id} className="flex flex-col items-center gap-1">
      <Link
        href={`/collection/${product.slug[locale]}`}
        className="relative min-w-3xs min-h-64 aspect-square rounded overflow-hidden mb-4 group"
      >
        <Image
          src={product.image[0]}
          alt={product.alt[locale]}
          placeholder="blur"
          fill
          sizes="(max-width: 768px) 256px, "
          className="object-cover w-full group-hover:opacity-80 transition-opacity duration-300"
        />
      </Link>
      <Link
        href={`/collection/${product.slug[locale]}`}
        className="text-center space-y-1 text-sm"
      >
        <h4 className="text-muted-foreground">{productColor?.name}</h4>
        <h5 className="font-semibold">{product.name[locale]}</h5>
        <h6>{LocalizedPrice}</h6>
      </Link>

      <div className="flex items-center gap-4 mt-4">
        {product.colorsAvailable.map((color) => {
          const colorData = getColorData(color, locale);
          const variation = product.variations.filter(
            (v) => v.key === color
          )[0];
          return (
            <Link
              key={color}
              href={variation.href[locale]}
              className={`size-4.5 rounded-full  border border-neutral-300 ${colorData?.className} hover:border-neutral-500 hover:opacity-80 transition-colors duration-300`}
            ></Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
