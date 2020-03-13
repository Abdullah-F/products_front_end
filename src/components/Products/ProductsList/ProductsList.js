import React from "react";
import Product from "./Product/Product";
import PromotionsList from "../../Promotions/PromotionsList";
import Classes from "./ProductsList.module.css";
import Button from "../../UI/Button/Button";
const productsList = props => {
  const showPromotionsHandler = productId => {
    console.log("[FROM SHOW PROMO HANDLER]", productId);
    const elem = document.getElementById(`product_${productId}`);

    // If the element is visible, hide it
    if (elem.style.display === "block") {
      hide(elem);
      return;
    }

    // Otherwise, show it
    show(elem);
  };

  // Show an element
  const show = elem => {
    elem.style.display = "block";
  };

  // Hide an element
  const hide = elem => {
    elem.style.display = "none";
  };

  console.log("[FROM PRODUCTS LIST]", props.products);
  const products = () => {
    return props.products.map(product => {
      return (
        <div key={product.id}>
          <Product product={product} />
          <Button
            buttonType="Success"
            clicked={() => showPromotionsHandler(product.id)}
          >
            show Promotions
          </Button>
          <PromotionsList
            productId={`product_${product.id}`}
            classes={"Hide"}
            promotions={product.promotions}
          />
        </div>
      );
    });
  };
  return <div className={Classes.ProductsList}>{products()}</div>;
};

export default productsList;
