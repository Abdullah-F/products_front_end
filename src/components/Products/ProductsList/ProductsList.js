import React from "react";
import Product from "./Product/Product";
import Classes from "./ProductsList.module.css";
const productsList = props => {
  console.log("[FROM PRODUCTS LIST]", props.products);
  const products = () => {
    return props.products.map(product => {
      return <Product key={product.id} product={product} />;
    });
  };
  return <div className={Classes.ProductsList}>{products()}</div>;
};

export default productsList;
