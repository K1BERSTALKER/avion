import React, { createContext, useState } from "react";
import { furnitureBrands } from "../data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < furnitureBrands.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newCount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newCount }));
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = furnitureBrands.find(
          (product) => product.id === Number(item)
        );
        totalPrice += cartItems[item] * itemInfo.price;
      }
    }

    return totalPrice;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalPrice,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
