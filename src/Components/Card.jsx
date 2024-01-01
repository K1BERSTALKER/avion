import React from "react";

import { Link } from "react-router-dom";

const Card = ({ id, img, title, price, landscape }) => {
  const width = {
    width: landscape ? "630px" : "305px",
  };

  let locate = `/product/${id}`;

  return (
    <div className="card" style={width}>
      <div className="card__img">
        <Link to={locate}>
          <img src={img} alt={title} />
        </Link>
      </div>
      <div className="card__content">
        <h3 className="card__title">{title.slice(0, 20)}</h3>
        <p className="card__price">£{price}</p>
      </div>
    </div>
  );
};

export default Card;
