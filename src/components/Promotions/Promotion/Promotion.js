import React from "react";
import Classes from "./Promotion.module.css";
import Button from "../../UI/Button/Button"

const promotion = props => {
  return (
    <div className={Classes.Promotion}>
      <p>
        amount: <span> {props.promotion.discount * 100}%</span>
      </p>
      <p>
        status: <span> {props.promotion.active ? "active" : "inactive"}</span>
      </p>
        <Button buttonType="Success" >
          apply
          </Button>

    </div>
  );
};

export default promotion;
