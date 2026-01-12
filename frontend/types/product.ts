export enum ProductType {
  HOP = "hop",
  MALT = "malt",
  YEAST = "yeast",
  ADJUNCT = "adjunct",
}

export const ProductTypeName:readonly [ProductType, string][] = Object.freeze([
  [ProductType.HOP, "Hops"],
  [ProductType.MALT, "Malts"],
  [ProductType.YEAST, "Yeasts"],
  [ProductType.ADJUNCT, "Adjunct"],
]);

export interface Product {
  id: string,
  image:  string,
  name: string,
  price: {
    value: number,
    currency: "USD" | "EUR",
  },
  tagline: string,
  type: ProductType,
}
