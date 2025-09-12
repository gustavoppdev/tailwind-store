import {
  deskAndOffice,
  prospectBriefcaseBlack1,
  selfImprovement,
  travel,
} from "@/assets";
import {
  AllFiltersOptions,
  Colors,
  LocalizedPrice,
  ShippingMethodsConstant,
  StateOption,
} from "./types";

export const navigationLinks = [
  { href: "/", labelKey: "navigationLinks.home" },
  { href: "/collection", labelKey: "navigationLinks.collection" },
  { href: "order-history-key", labelKey: "navigationLinks.orders" },
  { href: "#", labelKey: "navigationLinks.stores" },
];

export const benefitsList = [
  {
    titleKey: "0.title",
    descriptionKey: "0.description",
  },
  {
    titleKey: "1.title",
    descriptionKey: "1.description",
  },
  {
    titleKey: "2.title",
    descriptionKey: "2.description",
  },
];

export const colorsArray: Colors[] = [
  {
    key: "black",
    name: {
      pt: "Preto",
      en: "Black",
    },
    className: "bg-black",
  },
  {
    key: "white",
    name: {
      pt: "Branco",
      en: "White",
    },
    className: "bg-neutral-200",
  },

  {
    key: "olive-green",
    name: {
      pt: "Verde Oliva",
      en: "Olive Green",
    },
    className: "bg-lime-600/90",
  },
  {
    key: "orange",
    name: {
      pt: "Laranja",
      en: "Orange",
    },
    className: "bg-orange-400/90",
  },
  {
    key: "gray",
    name: {
      pt: "Cinza",
      en: "Gray",
    },
    className: "bg-gray-300",
  },

  {
    key: "gold",
    name: {
      pt: "Dourado",
      en: "Gold",
    },
    className: "bg-amber-300",
  },
  {
    key: "walnut",
    name: {
      pt: "Noz",
      en: "Walnut",
    },
    className: "bg-amber-700",
  },
];

export const collections = [
  {
    title: "categories.0.title",
    description: "categories.0.description",
    image: deskAndOffice,
    alt: "categories.0.alt",
    href: "collection?categories=desk_and_office",
  },
  {
    title: "categories.1.title",
    description: "categories.1.description",
    image: selfImprovement,
    alt: "categories.1.alt",
    href: "collection?categories=self_improvement",
  },
  {
    title: "categories.2.title",
    description: "categories.2.description",
    image: travel,
    alt: "categories.2.alt",
    href: "collection?categories=travel",
  },
];

export const testimonials = [
  {
    nameKey: "0.name",
    localeKey: "0.locale",
    textKey: "0.text",
  },
  {
    nameKey: "1.name",
    localeKey: "1.locale",
    textKey: "1.text",
  },
  {
    nameKey: "2.name",
    localeKey: "2.locale",
    textKey: "2.text",
  },
];

export const footerLinks = [];

export const incentives = [
  {
    icon: "garantee",
    title: "incentives.garantee.title",
    description: "incentives.garantee.description",
  },
  {
    icon: "exchange",
    title: "incentives.exchanges.title",
    description: "incentives.exchanges.description",
  },
];

export const countriesOptions = [
  { value: "brazil", labelKey: "countries.brazil" },
  { value: "usa", labelKey: "countries.usa" },
  { value: "canada", labelKey: "countries.canada" },
];

export const statesBR: StateOption[] = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

export const statesUS: StateOption[] = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

export const statesCAN: StateOption[] = [
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "QC", label: "Quebec" },
  { value: "SK", label: "Saskatchewan" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
  { value: "YT", label: "Yukon" },
];

export const shippingMethods: ShippingMethodsConstant[] = [
  {
    key: "standard",
    titleKey: "standard.title",
    descriptionKey: "standard.description",
    price: {
      brl: 27.0,
      usd: 5,
    },
  },
  {
    key: "express",
    titleKey: "express.title",
    descriptionKey: "express.description",
    price: {
      brl: 81.0,
      usd: 15,
    },
  },
];

export const freeShipping: LocalizedPrice = {
  brl: 500,
  usd: 100,
};

export const FILTER_OPTIONS_DATA: AllFiltersOptions[] = [
  {
    key: "categories",
    titleKey: "Pages.Collection.filters.categories",
    items: ["desk_and_office", "self_improvement", "travel"],
  },
  {
    key: "colors",
    titleKey: "Pages.Collection.filters.colors",
    items: [
      "black",
      "gold",
      "gray",
      "olive-green",
      "orange",
      "walnut",
      "white",
    ],
  },
];

export const STATIC_LINKS = [
  { labelKey: "Layout.Navbar.menuMobileLinks.home", href: "/" },
  {
    labelKey: "Layout.Navbar.menuMobileLinks.collections",
    href: "/collection",
  },

  { labelKey: "Layout.Navbar.menuMobileLinks.about", href: "/about" },
];

export const AUTH_LINKS = [
  {
    labelKey: "Layout.Navbar.menuMobileLinks.orders",
    href: "order-history-key",
    auth: "user",
  },
  {
    labelKey: "Layout.Navbar.menuMobileLinks.signIn",
    href: "/auth/sign-in",
    auth: "guest",
  },
  {
    labelKey: "Layout.Navbar.menuMobileLinks.createAccount",
    href: "/auth/sign-up",
    auth: "guest",
  },
  {
    labelKey: "Layout.Navbar.menuMobileLinks.logout",
    href: "/",
    auth: "user",
    isLogout: true,
  },
];

export const COLLECTIONS = [
  {
    labelKey: "Pages.Home.Collections.categories.0.title",
    altKey: "Pages.Home.Collections.categories.0.alt",
    imageUrl: deskAndOffice,
    href: "/collection?categories=desk_and_office",
  },
  {
    labelKey: "Pages.Home.Collections.categories.1.title",
    altKey: "Pages.Home.Collections.categories.1.alt",
    imageUrl: selfImprovement,
    href: "/collection?categories=self_improvement",
  },
  {
    labelKey: "Pages.Home.Collections.categories.2.title",
    altKey: "Pages.Home.Collections.categories.2.alt",
    imageUrl: travel,
    href: "/collection?categories=travel",
  },
  {
    labelKey: "Pages.Home.Collections.title",
    altKey: "Pages.Home.Collections.title",
    imageUrl: prospectBriefcaseBlack1,
    href: "/collection",
  },
];
