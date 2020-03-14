import React from "react";
import Promotion from "./Promotion/Promotion";
const promotionList = props => {
  const classes = [props.classes];
  const getPromotions = () => {
    return props.promotions.map(promo => {
      return (
        <Promotion
          key={promo.id}
          promotion={promo}
          onApplyPromotion={props.onApplyPromotion}
        />
      );
    });
  };

  const getId = () => {
    if (props.productId === undefined) {
      return "";
    }
    return `product_${props.productId}`;
  };

  return (
    <div id={getId()} className={classes.join(" ")}>
      {getPromotions()}
    </div>
  );
};

export default promotionList;
