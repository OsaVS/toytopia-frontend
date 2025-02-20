export const TP_BASE = "http://localhost:3000/";

export const navItems = [
  { name: "Home", path: "/home" },
  { name: "Shop", path: "/shop" },
  { name: "Product", path: "/examplecart" },
  { name: "Contact Us", path: "/contact" },
];

export const mobileNavItems = [
  { name: "Home", path: "/home" },
  { name: "Shop", path: "/shop" },
  { name: "Product", path: "/examplecart" },
  { name: "Contact Us", path: "/contact" },
  { name: "Cart", path: "/cart" },
  { name: "Profile", path: "/profile" },
];

export const priceRanges = [
  "Rs.0 - 249",
  "Rs.250 - 499",
  "Rs.500 - 749",
  "Rs.750 - 999",
  "Rs.1000 - 5000",
  "Rs.5000 above",
];

import image from "./assets/shopItems/image.png";
import product from "./assets/thumbnail2.png";

export const productList = [
  {
    imageUrl: image,
    title: "Loveseat Sofa",
    originalPrice: 400,
    discountedPrice: 199,
    isNew: true,
    rating: 4,
    discountPercentage: 50,
  },
  {
    imageUrl: image,
    title: "Lovehot ganja",
    originalPrice: 500,
    discountedPrice: 299,
    isNew: true,
    rating: 4,
    discountPercentage: 30,
  },
  {
    imageUrl: image,
    title: "Love island",
    originalPrice: 399,
    discountedPrice: 209,
    isNew: true,
    rating: 3,
    discountPercentage: 45,
  },
  {
    imageUrl: image,
    title: "Lovesick Sofa",
    originalPrice: 299,
    discountedPrice: 199,
    isNew: true,
    rating: 2,
    discountPercentage: 66.7,
  },
  {
    imageUrl: image,
    title: "Loveseat Sofa",
    originalPrice: 400,
    discountedPrice: 199,
    isNew: true,
    rating: 4,
    discountPercentage: 50,
  },
  {
    imageUrl: image,
    title: "Loveseat Sofa",
    originalPrice: 400,
    discountedPrice: 199,
    isNew: true,
    rating: 4,
    discountPercentage: 50,
  },
  {
    imageUrl: image,
    title: "Loveseat Sofa",
    originalPrice: 400,
    discountedPrice: 199,
    isNew: true,
    rating: 4,
    discountPercentage: 50,
  },
];

export const cartList = [
  {
    imageUrl: product,
    productCode: 1010,
    title: "Loveseat Sofa",
    price: 199,
    quantity: 1,
    color: "Black",
  },
  {
    imageUrl: product,
    productCode: 1010,
    title: "Loveseat Sofa",
    price: 199,
    quantity: 1,
    color: "Black",
  },
  {
    imageUrl: product,
    productCode: 1010,
    title: "Loveseat Sofa",
    price: 199,
    quantity: 1,
    color: "Black",
  },
];
