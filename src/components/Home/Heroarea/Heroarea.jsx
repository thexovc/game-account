import React from "react";
import "./Heroarea.css";

import videoBg2 from "../../../assets/Home/bgvideo2.mp4";

const Heroarea = () => {
  return (
    <div className="heroarea__container">
      <video src={videoBg2} autoPlay loop muted />

      <div className="heroarea__content">
        <div className="heroarea__text">
          <p>
            Matrix games is a platform that provides a secure player to player
            trading experience for buyers and sellerd online for gaming
            products.
          </p>
        </div>
        <div className="heroarea__button">
          <p>Get started</p>
        </div>
      </div>
    </div>
  );
};

export default Heroarea;
