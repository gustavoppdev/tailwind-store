// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Utils & Types
import { CartItem, CurrencyType } from "@/data/types";
import { getColorData, useFormat } from "@/lib/utils";

type OrderItemTableProps = {
  items: CartItem[];
  orderCurrency: CurrencyType;
  locale: "pt" | "en";
};

export const OrderItemTable = ({
  items,
  orderCurrency,
  locale,
}: OrderItemTableProps) => {
  const t = useTranslations("Pages.OrderHistory");
  const format = useFormat;

  return (
    <Table className="bg-white rounded-b-md">
      <TableHeader className="hidden md:table-header-group">
        <TableRow className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center text-left pt-4 px-4 border-b">
          <TableHead className="text-muted-foreground">
            {t("product")}
          </TableHead>
          <TableHead className="text-muted-foreground text-right mr-8">
            {t("price")}
          </TableHead>
          <TableHead className="text-muted-foreground text-right mr-8">
            {t("status")}
          </TableHead>
          <TableHead className="text-muted-foreground text-right mr-8">
            {t("actions")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => {
          const localizedPrice = format({
            number:
              orderCurrency === "brl"
                ? item.product.price.brl
                : item.product.price.usd,
            locale: orderCurrency === "brl" ? "pt" : "en",
            isLocalized: false,
          });

          const colorData = getColorData(item.selectedColor, locale);

          return (
            <TableRow
              key={item.id}
              className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] sm:gap-4 items-center justify-between p-4 border-b last:border-b-0"
            >
              {/* Coluna do Produto (Imagem e Nome) */}
              <TableCell className="flex items-center gap-4 col-span-full sm:col-span-1">
                <Link
                  href={`/collection/${item.product.slug[locale]}`}
                  className="relative h-20 w-20 rounded overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={item.product.image[0]}
                    alt={item.product.alt[locale]}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-col gap-1 overflow-hidden">
                  <Button
                    variant={"link"}
                    asChild
                    className="p-0 m-0 h-auto self-start whitespace-normal "
                  >
                    <Link
                      href={`/collection/${item.product.slug[locale]}`}
                      className="text-wrap font-medium text-left "
                    >
                      {item.product.name[locale]}
                    </Link>
                  </Button>
                  {/* Cor do produto */}
                  <p className="text-muted-foreground text-sm">
                    {colorData?.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t("quantity", { qty: item.quantity ?? "" })}
                  </p>
                  {/* Preço visível apenas em mobile */}
                  <p className="text-muted-foreground block sm:hidden text-sm">
                    {localizedPrice}
                  </p>
                </div>
              </TableCell>

              {/* Coluna do Preço (visível em desktop) */}
              <TableCell className="hidden sm:block text-right text-muted-foreground font-medium">
                {localizedPrice}
              </TableCell>

              {/* Coluna do Status */}
              <TableCell className="hidden sm:block text-right text-muted-foreground font-medium">
                <p>{t("statusPreparing")}</p>
              </TableCell>

              {/* Coluna de Ações (Link Ver Produto) */}
              <TableCell className="text-right col-span-full sm:col-span-1">
                <Button
                  variant={"link"}
                  asChild
                  className="text-indigo-600 h-auto"
                >
                  <Link href={`/collection/${item.product.slug[locale]}`}>
                    {t("viewProduct")}
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
