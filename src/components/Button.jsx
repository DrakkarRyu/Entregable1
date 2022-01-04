import React from "react";
import "./button.css";

const Button = ({ handleQuote, background }) => {
  return (
    <div className="arrow-container">
      <button
        style={{ background }}
        onClick={handleQuote}
        className="arrow-button"
      >
        <i class="fa-solid fa-shuffle"></i>
      </button>
    </div>
  );
};

export default Button;