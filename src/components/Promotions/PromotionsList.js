import React from "react";
import Promotion from "./Promotion/Promotion";
const promotionList = props => {
  const classes = [props.classes];
  const getPromotions = () => {
    return props.promotions.map(promo => {
      return <Promotion key={promo.id} promotion={promo} />;
    });
  };
  return (
    <div id={props.productId} className={classes.join(" ")}>
      {getPromotions()}
    </div>
  );
};

export default promotionList;
