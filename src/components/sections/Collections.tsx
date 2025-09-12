// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Constants
import { collections } from "@/data/constants";

const Collections = () => {
  const t = useTranslations("Pages.Home.Collections");
  return (
    <div className="bg-neutral-100 mt-12 py-12">
      <div className="container-section space-y-12 ">
        <h3 className="font-bold text-2xl tracking-tight">{t("title")}</h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
          {collections.map((collection) => (
            <Link
              href={collection.href}
              key={t(collection.title)}
              className="group"
            >
              <div className="relative min-w-2xs max-w-[352px] min-h-74 rounded overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 352px"
                  placeholder="blur"
                  className="object-cover w-full group-hover:opacity-80 transition-opacity duration-200"
                />
              </div>

              <h4 className="text-muted-foreground mt-6">
                {t(collection.title)}
              </h4>
              <h5 className="font-semibold ">{t(collection.description)}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
