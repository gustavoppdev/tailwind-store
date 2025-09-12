import { StaticImageData } from "next/image";

export type LocalizedString = {
  pt: string;
  en: string;
};

export type LocalizedPrice = {
  brl: number;
  usd: number;
};

export type ProductCategory = "desk_and_office" | "self_improvement" | "travel";

export type ColorsKey =
  | "black"
  | "white"
  | "olive-green"
  | "orange"
  | "gray"
  | "gold"
  | "walnut";

export type Colors = {
  key: ColorsKey;
  name: LocalizedString;
  className: string;
};

export type Variation = {
  key: ColorsKey;
  href: LocalizedString;
};

export type Product = {
  id: string;
  slug: LocalizedString;
  name: LocalizedString;
  description: LocalizedString;

  details: LocalizedString[];
  price: LocalizedPrice;
  image: StaticImageData[];
  alt: LocalizedString;
  category: ProductCategory;
  colorsAvailable: ColorsKey[];
  sizesAvailable: LocalizedString[];
  variations: Variation[];
  rating: number;
};

export type CartItem = {
  id: string; // produto + cor + tamanho (único)
  product: Product;
  quantity: number;
  selectedColor: ColorsKey;
  selectedSize: LocalizedString;
};

export type CartState = {
  items: CartItem[];
};

export type ReviewType = {
  name: string;
  date: string;
  rate: number;
  title: string;
  description1: string;
  description2?: string;
};

export type StateOption = { value: string; label: string };

export const shippingMethodType = ["standard", "express"];

export type DeliveryMethodTypes = "standard" | "express";

export type ShippingMethodsConstant = {
  key: DeliveryMethodTypes;
  titleKey: string;
  descriptionKey: string;
  price: LocalizedPrice;
};

export type CurrencyType = "brl" | "usd";

// Pedidos
export interface Order {
  id: string;
  date: string;
  subtotal: number;
  taxes: number;
  total: number;
  items: CartItem[];
  currency: CurrencyType;
  shippingAddress?: {
    firstName: string;
    lastName: string;
    address: string;
    complement?: string;
    city: string;
    country: string;
    state: string;
    postalCode: string;
    phone: string;
  };
  paymentInformation?: {
    cardLast4: string;
    expirationDate: string;
  };
  shippingMethod: DeliveryMethodTypes;
}

export type OrdersContextType = {
  lastOrder: Order | null;
  orders: Order[];
  createOrder: (order: Omit<Order, "id" | "date">) => void;
  isLoadingOrders: boolean;
};

export type AllFiltersOptions = {
  key: "colors" | "categories";
  titleKey: string;
  items: ProductCategory[] | ColorsKey[];
};

export type MetadataMessages = {
  title: string;
  description: string;
  keywords: string[];
  favicon: string;
  openGraph: {
    title: string;
    description: string;
    type: string;
    url: string;
    image: string;
    locale: string;
    site_name: string;
  };
};
