import React from "react";
import "./Card.scss";
import info from "../../assets/shape.svg";
const Card = ({ icon, heading, price, border }) => {
  return (
    <>
      <div className={`card_main card_main-${border}`}>
        <div className="card_main-container">
          <img src={icon} alt="Icon" />
          <div className="card_main-container-flex">
            <p>{heading}</p>
            <img src={info} alt="info" />
          </div>
          <h4>{price}</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
