import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

import { furnitureBrands } from "../data";

const Home = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper slider"
      >
        {furnitureBrands.map((furniture) => {
          return (
            <SwiperSlide key={furniture.id} className="slide">
              <div className="slide__content">
                <div className="slide__text">
                  <h4 className="slide__title">{furniture.title}</h4>
                  <Link to={`/product/${furniture.id}`}>
                    <button className="btn btn__outline">
                      View Collection
                    </button>
                  </Link>
                </div>
                <p className="slide__desc">{furniture.description}</p>
              </div>
              <div className="slide__img">
                <img src={furniture.img} alt={furniture.title} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Home;
