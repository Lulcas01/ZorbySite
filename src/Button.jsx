import React from "react";
import "./button.css";

const Button = ({ children, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;