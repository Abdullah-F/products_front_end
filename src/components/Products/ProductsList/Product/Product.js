import React from "react";
import Classes from "./Product.module.css";
const product = props => {
  return (
    <div className={Classes.Product}>
      <p>
        Name: <span>{props.product.name}</span>{" "}
      </p>
      <p>
        Price: <span>{props.product.price}</span>
      </p>
    </div>
  );
};

export default product;
