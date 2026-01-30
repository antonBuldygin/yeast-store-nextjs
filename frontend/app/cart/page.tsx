import isSignedIn from "@/actions/user/is-signed-in";
import { redirect, RedirectType } from "next/navigation";

export default async function Cart(props: PageProps<"/cart">) {
  const isUserSignedIn = await isSignedIn();

  if (!isUserSignedIn) {
    redirect("/signin/?returnTo=/cart", RedirectType.replace);
  }

  return <main className="cart-page-wrapper">
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-items-list" id="cart-items-list">
        <div className="cart-item" data-price="5.99">
          <img src="/img/products/citra_hops.jpg" alt="Citra Hops" className="cart-item__image" />
          <div className="cart-item__body">
            <div className="cart-item__details">
              <h2 className="cart-item__name">Citra Hops</h2>
              <div className="cart-item__price-info">
                <p className="cart-item__price" data-item-total-price>
                  $29.95
                </p>
                <span className="cart-item__price-tag">per 100g</span>
              </div>
            </div>
            <div className="cart-item__actions">
              <div className="cart-item__quantity-selector">
                <button className="quantity-btn-cart" data-action="decrease"><i className="fa-solid fa-minus"></i></button>
                <span className="quantity-value-cart">5</span>
                <button className="quantity-btn-cart" data-action="increase"><i className="fa-solid fa-plus"></i></button>
              </div>
              <button className="button--remove" data-action="remove">
                Remove <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="cart-item" data-price="3.00">
          <img src="/img/products/caramel_malt.jpg" alt="Caramel Malt 60L" className="cart-item__image" />
          <div className="cart-item__body">
            <div className="cart-item__details">
              <h2 className="cart-item__name">Caramel Malt 60L</h2>
              <div className="cart-item__price-info">
                <p className="cart-item__price" data-item-total-price>
                  $3.00
                </p>
                <span className="cart-item__price-tag">per 1 lb</span>
              </div>
            </div>
            <div className="cart-item__actions">
              <div className="cart-item__quantity-selector">
                <button className="quantity-btn-cart" data-action="decrease"><i className="fa-solid fa-minus"></i></button>
                <span className="quantity-value-cart">1</span>
                <button className="quantity-btn-cart" data-action="increase"><i className="fa-solid fa-plus"></i></button>
              </div>
              <button className="button--remove" data-action="remove">
                Remove <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-summary">
        <div className="cart-summary__total">
          <p>Total</p>
          <p id="cart-total-price">$32.95</p>
        </div>
        <a href="checkout.html" className="button button--primary button--checkout">Proceed to Checkout</a>
      </div>
    </div>
  </main>;
}