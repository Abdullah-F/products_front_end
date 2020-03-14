import React from "react";
import Classes from "./Promotion.module.css";

const promotion = props => {
  return (
    <div className={Classes.Promotion}>
      <p>
        amount: <span> {props.promotion.discount * 100}%</span>
      </p>
      <p>
        status: <span> {props.promotion.active ? "active" : "inactive"}</span>
      </p>
    </div>
  );
};

export default promotion;
