import React from "react";
import "./Carousel.css";

const Card = ({ name, title, review }) => {
  return (
    <div className="card ">
      <div className="card-header">
        <div className="name">{name}</div>
        <div className="title">{title}</div>
      </div>
      <div className="card-body">
        <p className="review">{review}</p>
      </div>
    </div>
  );
};

export default Card;
