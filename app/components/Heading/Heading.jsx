import React from "react";
import "./Heading.scss";
import info from "../../assets/shape.svg";
const Heading = ({ heading }) => {
  return (
    <>
      <div className="heading">
        <h1>{heading}</h1>
        <img src={info} alt="info" />
      </div>
    </>
  );
};

export default Heading;
