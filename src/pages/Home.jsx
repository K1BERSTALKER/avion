import React from "react";

import { Hero, Card } from "../Components";
import { difference, furnitureBrands } from "../data";

const Home = () => {
  const popular = furnitureBrands.filter((item) => item.info === "popular");
  return (
    <>
      <Hero />
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

      <div className="ceramics">
        <div className="ceramics__title">New ceramics</div>
        <div className="ceramics__cards">
          {furnitureBrands.slice(0, 4).map((furniture) => {
            return (
              <Card
                key={furniture.id}
                id={furniture.id}
                img={furniture.img}
                title={furniture.title}
                price={furniture.price}
                landscape={furniture?.landscape}
              />
            );
          })}
        </div>
        <button className="btn btn__fill">View Collection</button>
      </div>

      <div className="ceramics">
        <h3 className="ceramics__title">Our popular products</h3>
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

      <div className="brand">
        <div className="brand__content">
          <div className="brand__text">
            <h3 className="brand__title">
              From a studio in London to a global brand with over 400 outlets
            </h3>
            <p className="brand__desc">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>
            <p className="brand__desc">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>
          <button className="btn btn__fill">Get in touch</button>
        </div>
        <div className="brand__img">
          <img
            src="https://s3-alpha-sig.figma.com/img/dfed/c272/6ec9d1d8cc3cbaace9b398067e11a4af?Expires=1704672000&Signature=Oy-v9w-XSDPH5wGTWMaZoqUQ5Rvpv5JgD8jUrJIYbTwOmspbYqzCbMG4-zr50fW8ZYwEbQnUZLJhyyCISw7L~yNeJWg5zq2dEfueblSxv7m23OEJ1nTYQnhKPd6uY3turR9HQ7c8BwYyWvmPRQW7fsQ6uNvJ6XGS3SXJVNF~vKsMttfhToBiRY94Qgs3q2NBRnjeWoPFJEHIBGxVHzt-FGdWje~kUzDruPHTp~7XRWpy1v-vVo0XhlIuJW4CSvg-UQJT2CgU-bjCcYBbrRw7dgoujdwE-zUFA4lKUSd0LFU6EFi2bshVaBFcfMeXwhDSBa6pHAC6hRCr~oPUy4eeWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
