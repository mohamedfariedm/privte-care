export type PricingFilter = "all" | "men" | "women" | "children";

export type PricingItem = {
  name: string;
  price: string;
  filters?: PricingFilter[];
};

export type PricingCategory = {
  id: string;
  icon?: string;
  items?: PricingItem[];
  hasFilters?: boolean;
};

export const pricingCategories: PricingCategory[] = [
  {
    id: "cleanPress",
    icon: "/images/prices/icon-hanger.svg",
    hasFilters: true,
    items: [
      { name: "Jeans", price: "15 AED", filters: ["all", "men", "women"] },
      { name: "Tank Top", price: "16 AED", filters: ["all", "men", "women"] },
      { name: "Suit Jacket", price: "18 AED", filters: ["all", "men", "women"] },
      { name: "Socks", price: "17 AED", filters: ["all", "men", "women", "children"] },
      { name: "Shorts", price: "11 AED", filters: ["all", "men", "children"] },
      { name: "Polo Shirt", price: "10 AED", filters: ["all", "men", "women"] },
      { name: "Hat", price: "7 AED", filters: ["all", "men", "women", "children"] },
      { name: "Vest", price: "8 AED", filters: ["all", "men", "women"] },
    ],
  },
  {
    id: "washFold",
    items: [
      { name: "T-Shirt", price: "8 AED" },
      { name: "Trousers", price: "12 AED" },
      { name: "Dress", price: "18 AED" },
    ],
  },
  {
    id: "pressOnly",
    icon: "/images/prices/icon-hanger.svg",
    items: [
      { name: "Shirt", price: "6 AED" },
      { name: "Trousers", price: "8 AED" },
      { name: "Abaya", price: "15 AED" },
    ],
  },
  {
    id: "shoeCleaning",
    items: [
      { name: "Sneakers", price: "35 AED" },
      { name: "Leather Shoes", price: "45 AED" },
      { name: "Boots", price: "55 AED" },
    ],
  },
  {
    id: "bagsCleaning",
    items: [
      { name: "Handbag", price: "60 AED" },
      { name: "Travel Bag", price: "80 AED" },
    ],
  },
  {
    id: "homeItems",
    items: [
      { name: "Blanket", price: "45 AED" },
      { name: "Curtain (per panel)", price: "35 AED" },
      { name: "Bedsheet", price: "25 AED" },
    ],
  },
  {
    id: "carpetCleaning",
    items: [
      { name: "Small Rug", price: "40 AED" },
      { name: "Medium Carpet", price: "75 AED" },
      { name: "Large Carpet", price: "120 AED" },
    ],
  },
  {
    id: "savingBags",
    items: [
      { name: "Saving Bag (up to 15 items)", price: "99 AED" },
    ],
  },
];
