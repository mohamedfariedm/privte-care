export type PricingFilter = "all" | "men" | "women" | "children";

export type PricingItem = {
  id: string;
  name: string;
  price: string;
  icon: string;
  filters?: PricingFilter[];
};

export type PricingCategory = {
  id: string;
  icon: string;
  items: PricingItem[];
  hasFilters?: boolean;
};

const itemIcons = {
  jeans: "/images/prices/items/jeans.png",
  tankTop: "/images/prices/items/tank-top.png",
  suitJacket: "/images/prices/items/suit-jacket.png",
  socks: "/images/prices/items/socks.png",
  shorts: "/images/prices/items/shorts.png",
  poloShirt: "/images/prices/items/polo-shirt.png",
  hat: "/images/prices/items/hat.png",
  vest: "/images/prices/items/vest.png",
} as const;

export const pricingCategories: PricingCategory[] = [
  {
    id: "cleanPress",
    icon: "/images/prices/icon-hanger.svg",
    hasFilters: true,
    items: [
      {
        id: "jeans",
        name: "Jeans",
        price: "15 AED",
        icon: itemIcons.jeans,
        filters: ["all", "men", "women"],
      },
      {
        id: "tankTop",
        name: "Tank Top",
        price: "16 AED",
        icon: itemIcons.tankTop,
        filters: ["all", "men", "women"],
      },
      {
        id: "suitJacket",
        name: "Suit Jacket",
        price: "18 AED",
        icon: itemIcons.suitJacket,
        filters: ["all", "men", "women"],
      },
      {
        id: "socks",
        name: "Socks",
        price: "17 AED",
        icon: itemIcons.socks,
        filters: ["all", "men", "women", "children"],
      },
      {
        id: "shorts",
        name: "Shorts",
        price: "11 AED",
        icon: itemIcons.shorts,
        filters: ["all", "men", "children"],
      },
      {
        id: "poloShirt",
        name: "Polo Shirt",
        price: "10 AED",
        icon: itemIcons.poloShirt,
        filters: ["all", "men", "women"],
      },
      {
        id: "hat",
        name: "Hat",
        price: "7 AED",
        icon: itemIcons.hat,
        filters: ["all", "men", "women", "children"],
      },
      {
        id: "vest",
        name: "Vest",
        price: "8 AED",
        icon: itemIcons.vest,
        filters: ["all", "men", "women"],
      },
    ],
  },
  {
    id: "washFold",
    icon: "/images/prices/categories/icon-wash-fold.svg",
    items: [
      {
        id: "tShirt",
        name: "T-Shirt",
        price: "8 AED",
        icon: itemIcons.tankTop,
      },
      {
        id: "trousers",
        name: "Trousers",
        price: "12 AED",
        icon: itemIcons.jeans,
      },
      {
        id: "dress",
        name: "Dress",
        price: "18 AED",
        icon: itemIcons.vest,
      },
    ],
  },
  {
    id: "pressOnly",
    icon: "/images/prices/icon-hanger.svg",
    items: [
      {
        id: "shirt",
        name: "Shirt",
        price: "6 AED",
        icon: itemIcons.poloShirt,
      },
      {
        id: "trousers",
        name: "Trousers",
        price: "8 AED",
        icon: itemIcons.jeans,
      },
      {
        id: "abaya",
        name: "Abaya",
        price: "15 AED",
        icon: itemIcons.vest,
      },
    ],
  },
  {
    id: "shoeCleaning",
    icon: "/images/prices/categories/icon-shoes.svg",
    items: [
      {
        id: "sneakers",
        name: "Sneakers",
        price: "35 AED",
        icon: itemIcons.socks,
      },
      {
        id: "leatherShoes",
        name: "Leather Shoes",
        price: "45 AED",
        icon: itemIcons.socks,
      },
      {
        id: "boots",
        name: "Boots",
        price: "55 AED",
        icon: itemIcons.socks,
      },
    ],
  },
  {
    id: "bagsCleaning",
    icon: "/images/prices/categories/icon-bag.svg",
    items: [
      {
        id: "handbag",
        name: "Handbag",
        price: "60 AED",
        icon: itemIcons.hat,
      },
      {
        id: "travelBag",
        name: "Travel Bag",
        price: "80 AED",
        icon: itemIcons.hat,
      },
    ],
  },
  {
    id: "homeItems",
    icon: "/images/prices/categories/icon-towels.svg",
    items: [
      {
        id: "blanket",
        name: "Blanket",
        price: "45 AED",
        icon: itemIcons.tankTop,
      },
      {
        id: "curtain",
        name: "Curtain (per panel)",
        price: "35 AED",
        icon: itemIcons.vest,
      },
      {
        id: "bedsheet",
        name: "Bedsheet",
        price: "25 AED",
        icon: itemIcons.tankTop,
      },
    ],
  },
  {
    id: "carpetCleaning",
    icon: "/images/prices/categories/icon-carpet.svg",
    items: [
      {
        id: "smallRug",
        name: "Small Rug",
        price: "40 AED",
        icon: itemIcons.shorts,
      },
      {
        id: "mediumCarpet",
        name: "Medium Carpet",
        price: "75 AED",
        icon: itemIcons.shorts,
      },
      {
        id: "largeCarpet",
        name: "Large Carpet",
        price: "120 AED",
        icon: itemIcons.shorts,
      },
    ],
  },
  {
    id: "savingBags",
    icon: "/images/prices/categories/icon-saving-bag.svg",
    items: [
      {
        id: "savingBag",
        name: "Saving Bag (up to 15 items)",
        price: "99 AED",
        icon: itemIcons.hat,
      },
    ],
  },
];

export const ITEMS_PER_CARD = 4;

export function chunkItems<T>(items: T[], size = ITEMS_PER_CARD): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}
