import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ProductsList from "./ProductsList";
import PromotionsList from "../../Promotions/PromotionsList";
import Button from "../../UI/Button/Button";
import Product from "./Product/Product";

configure({ adapter: new Adapter() });
describe("<ProductsList />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ProductsList
        products={[{ id: 1, name: "ali", price: "100", promotions: [] }]}
      />
    );
  });
  it("it renders the product", () => {
    expect(wrapper.find(Product)).toHaveLength(1);
  });

  it("the promotions list does not get rendered if the promotions are empty", () => {
    expect(wrapper.find(PromotionsList)).toHaveLength(0);
  });
  it("it does not show the button for showing promotions if promotions are empty", () => {
    expect(wrapper.find(Button)).toHaveLength(0);
  });
});
