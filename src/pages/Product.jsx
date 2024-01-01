import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { furnitureBrands, difference } from "../data/index";

import { ShopContext } from "../context/ShopContext";

// icons
import { FaPlus, FaMinus } from "react-icons/fa6";

import { Card } from "../Components";

const Product = () => {
  const [inputValue, setInputValue] = useState(1);
  const id = useParams();
  const product = id.id;
  const object = furnitureBrands.filter(
    (item) => parseInt(item.id) === parseInt(product)
  );
  const popular = furnitureBrands.filter((item) => item.info === "popular");

  const handleIncrement = () => {
    setInputValue(inputValue + 1);
  };
  const handleDecrement = () => {
    if (inputValue === 1) return;
    else setInputValue(inputValue - 1);
  };

  const { addToCart } = useContext(ShopContext);
  return (
    <>
      {object.map((product) => {
        return (
          <div className="product" key={product.id}>
            <div className="product__img">
              <img src={product.img} alt="" />
            </div>
            <div className="product__content">
              <div className="product__contentHead">
                <h2 className="product__title">{product.title}</h2>
                <h4 className="product__price">£{product.price}</h4>
              </div>
              <div className="product__contentDesc">
                <h5 className="product__descHead">Product description</h5>
                <p className="product__desc">{product.description}</p>
              </div>
              <div className="product__dimensions">
                <h5 className="product__descHead">Dimensions</h5>
                <div className="product__dimensionsBoxes">
                  <div className="product__dimensionsBox">
                    <h6 className="product__dimensionsTitle">Height</h6>
                    <h6 className="product__dimensionsSize">110cm</h6>
                  </div>
                  <div className="product__dimensionsHr"></div>
                  <div className="product__dimensionsBox">
                    <h6 className="product__dimensionsTitle">Width</h6>
                    <h6 className="product__dimensionsSize">75cm</h6>
                  </div>
                  <div className="product__dimensionsHr"></div>
                  <div className="product__dimensionsBox">
                    <h6 className="product__dimensionsTitle">Depth</h6>
                    <h6 className="product__dimensionsSize">50cm</h6>
                  </div>
                </div>
              </div>
              <div className="product__quantity">
                <h5 className="product__descHead">Quantity</h5>
                <form className="product__quantityForm">
                  <FaMinus
                    onClick={handleDecrement}
                    className="product__quantityIcon"
                  />
                  <p className="product__quantityInput">{inputValue}</p>
                  <FaPlus
                    onClick={handleIncrement}
                    className="product__quantityIcon"
                  />
                </form>
              </div>
              <button
                className="btn btn__fill"
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}

      <div className="ceramics">
        <h3 className="ceramics__title">You might also love these</h3>
        <div className="ceramics__cards">
          {popular.map((popular) => {
            return (
              <Card
                key={popular.id}
                id={popular.id}
                img={popular.img}
                title={popular.title}
                price={popular.price}
                landscape={popular?.landscape}
              />
            );
          })}
        </div>
        <button className="btn btn__fill">View Collection</button>
      </div>
      <div className="difference">
        <h3 className="difference__headTitle">
          What makes our brand different
        </h3>
        <div className="difference__items">
          {difference.map((difference) => {
            return (
              <div className="difference__item" key={difference.id}>
                <span className="difference__icon">{difference.icon}</span>
                <h4 className="difference__title">{difference.title}</h4>
                <p className="difference__desc">{difference.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="club">
        <div className="club__wrapper">
          <div className="club__content">
            <h3 className="club__title">Join the club and get the benefits</h3>
            <p className="club__desc">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
          </div>
          <form className="club__form">
            <input
              type="email"
              className="club__input"
              placeholder="your@gmail.com"
            />
            <button className="btn btn__fill">Sing up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
