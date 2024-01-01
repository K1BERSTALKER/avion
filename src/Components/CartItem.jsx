import React, { useContext } from "react";

import { FaPlus, FaMinus } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";

export const CartItem = (props) => {
  const { id, title, description, img, price } = props.data;
  const { cartItems, removeFromCart, addToCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem" key={id}>
      <div className="cartItem__content">
        <img src={img} alt={title} />
        <div className="cartItem__text">
          <h4 className="cartItem__title">{title.slice(0, 20)}</h4>
          <p className="cartItem__desc">{description.slice(0, 80)}</p>
          <h5 className="cartItem__price">£{price}</h5>
        </div>
      </div>
      <div className="cartItem__quantity">
        <form className="cartItem__form">
          <FaMinus
            className="cartItem__quantityIcon"
            onClick={() => {
              removeFromCart(id);
            }}
          />
          <input
            className="cartItem__input"
            value={cartItems[id]}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value), id);
            }}
          />
          <FaPlus
            className="cartItem__quantityIcon"
            onClick={() => {
              addToCart(addToCart(id));
            }}
          />
        </form>
      </div>
      <h5 className="cartItem__price cartItem__priceEnd hide__onMobile">
        £{price}
      </h5>
    </div>
  );
};
