export enum ToyCategory {
  Educational = "Educational Toys",
  ActionFigures = "Action Figures & Collectibles",
  Dolls = "Dolls & Dollhouses",
  BoardGames = "Board Games & Puzzles",
  Outdoor = "Outdoor & Sports Toys",
  Electronic = "Electronic & Remote-Controlled Toys",
  Plushies = "Soft Toys & Plushies",
  ArtsCrafts = "Arts & Crafts",
  Musical = "Musical Toys",
  BabyToddler = "Baby & Toddler Toys",
}

export interface ProductData {
  _id: string;
  productCode: string;
  name: string;
  description: string;
  price: number;
  mainImage: string;
  subImages: string[];
  category: ToyCategory;
  isNewProduct: boolean;
  discount: number;
  stock: number;
  averageRating: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductCart {
  imageUrl: string;
  productCode: number;
  title: string;
  price: number;
  quantity: number;
  color: string;
}
