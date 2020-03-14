import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Product from "./Product";

configure({ adapter: new Adapter() });
describe("<Product />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Product product={{ name: "ali", price: "100" }} />);
  });
  it("it renders one div which have two p elements inside it", () => {
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("div > p")).toHaveLength(2);
  });

  it("contains a p element displaying the price correclty", () => {
    expect(
      wrapper.contains(
        <p>
          Price: <span>100</span>
        </p>
      )
    ).toEqual(true);
  });

  it("contains a p elelment displaying the name correctly", () => {
    expect(
      wrapper.contains(
        <p>
          Name: <span>ali</span>
        </p>
      )
    ).toEqual(true);
  });
});
