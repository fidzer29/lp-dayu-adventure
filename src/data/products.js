export const products = [
  {
    id: "puffer-green",
    name: "Puffer Jacket Green",
    slug: "puffer-jacket-green",
    category: "Puffer Jacket",
    price: 799000,
    image:
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=900&q=85",
    colors: ["#314b38", "#24292b", "#c4b39c"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Jaket puffer untuk kenyamanan dan aktivitas outdoor.",
    featured: true,
    orderLinks: {
      whatsapp: "",
      tiktokShop: "",
      shopee: "",
    },
  },
  {
    id: "puffer-black",
    name: "Puffer Jacket Black",
    slug: "puffer-jacket-black",
    category: "Puffer Jacket",
    price: 799000,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    colors: ["#111719", "#183c43", "#767c7d"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Puffer jacket ringan untuk menemani perjalanan dan aktivitas harian.",
    featured: false,
    orderLinks: {
      whatsapp: "",
      tiktokShop: "",
      shopee: "",
    },
  },
  {
    id: "puffer-light-grey",
    name: "Puffer Jacket Light Grey",
    slug: "puffer-jacket-light-grey",
    category: "Puffer Jacket",
    price: 799000,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",
    colors: ["#a9c1bd", "#21282a", "#a5a9aa"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Puffer jacket hangat dan fleksibel dengan tampilan minimal.",
    featured: false,
    orderLinks: {
      whatsapp: "",
      tiktokShop: "",
      shopee: "",
    },
  },
  {
    id: "outdoor-dark-green",
    name: "Outdoor Jacket Dark Green",
    slug: "outdoor-jacket-dark-green",
    category: "Outdoor Jacket",
    price: 749000,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    colors: ["#233b31", "#bbc3c0", "#20282b"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Jaket outdoor serbaguna untuk perlindungan di berbagai kondisi.",
    featured: false,
    orderLinks: {
      whatsapp: "",
      tiktokShop: "",
      shopee: "",
    },
  },
];

export const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
