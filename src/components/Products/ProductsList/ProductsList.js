import React from "react";
import Product from "./Product/Product";
import PromotionsList from "../../Promotions/PromotionsList";
import Classes from "./ProductsList.module.css";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Aux/Aux";
const productsList = props => {
  const showPromotionsHandler = productId => {
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

  const getPromotions = product => {
    let promotions = null;
    if (product.promotions.length > 0) {
      promotions = (
        <Aux>
          <Button
            buttonType="Success"
            clicked={() => showPromotionsHandler(product.id)}
          >
            show applied Promotions
          </Button>
          <PromotionsList
            productId={product.id}
            classes={"Hide"}
            promotions={product.promotions}
          />
        </Aux>
      );
    }
    return promotions;
  };

  const products = () => {
    return props.products.map(product => {
      return (
        <div key={product.id}>
          <Product product={product} />
          {getPromotions(product)}
        </div>
      );
    });
  };
  return <div className={Classes.ProductsList}>{products()}</div>;
};

export default productsList;
