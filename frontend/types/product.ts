export interface Product {
  id: string,
  image:  string,
  name: string,
  price: {
    value: number,
    currency: "USD" | "EUR",
  },
  tagline: string,
}
