/* eslint-disable array-callback-return */
import React, { useContext } from "react";

import { furnitureBrands } from "../data";
import { ShopContext } from "../context/ShopContext";
import { CartItem } from "../Components";

const Basket = () => {
  const { cartItems, getTotalPrice } = useContext(ShopContext);
  const totalPrice = getTotalPrice();
  return (
    <div className="basket">
      <h3 className="basket__title">Your shopping cart</h3>
      <div className="basket__cards">
        <div className="basket__cardHead hide__onMobile">
          <h5>Product</h5>
          <h5>Quantity</h5>
          <h5>Total</h5>
        </div>
        {furnitureBrands.map((basket) => {
          if (cartItems[basket.id] !== 0) {
            return <CartItem data={basket} key={basket.id} />;
          }
        })}
      </div>
      <div className="basket__checkout">
        <h4 className="basket__subtotal">
          <span>Subtotal</span>£{totalPrice}
        </h4>
        <p className="basket__desc">
          Taxes and shipping are calculated at checkout
        </p>
        <button className="btn btn__fill">Go to checkout</button>
      </div>
    </div>
  );
};

export default Basket;
