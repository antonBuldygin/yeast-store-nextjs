import isSignedIn from "@/actions/user/is-signed-in";
import { redirect, RedirectType } from "next/navigation";
import Checkout from "./components/checkout";
import getCartItems from "@/actions/cart/get-cart-items";
import getProducts from "@/actions/products/get-products";

export default async function Cart() {
  const isUserSignedIn = await isSignedIn();

  if (!isUserSignedIn) {
    redirect("/signin/?returnTo=/cart", RedirectType.replace);
  }

  const cartItems = await getCartItems();
  const products = await getProducts();

  return <Checkout
    cartItems={cartItems}
    products={products}
  />;
}