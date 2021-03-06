import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: space-around;
  align-content: space-between;
  padding: 0px 5px;
  font-size: 15px;
  width: 200px;
  height: 50px;
  background-color: black;
  color: white;
  margin: 5px;
`;

const promotion = props => {
  return (
    <StyledDiv>
      <p>
        amount: <span> {props.promotion.discount * 100}%</span>
      </p>
      <p>
        status: <span> {props.promotion.active ? "active" : "inactive"}</span>
      </p>
    </StyledDiv>
  );
};

export default promotion;
