import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 200px;
  height: 100px;
  background-color: #8b4513;
  padding: 15px;
  margin: 5px;
  font-weight: bold;

  span {
    color: whitesmoke;
  }
`;
const product = props => {
  return (
    <StyledDiv>
      <p>
        Name: <span>{props.product.name}</span>
      </p>
      <p>
        Price: <span>{props.product.price}</span>
      </p>
    </StyledDiv>
  );
};

export default product;
