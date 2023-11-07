import React from "react";
import Accordeon from "../Accordeon/Accordeon";
import {  StyledExpectation, StyledExpectationText, StyledH2 } from "./styledExpectationLayout";
import {  StyledContainer, StyledFlex } from "../../styledConstants";

const ExpectationLayout = () => {
  return (
    <StyledExpectation>
      <StyledContainer>
        <StyledH2>What to expect from courses</StyledH2>
        <StyledFlex>
          <StyledExpectationText>
            Our school provides a wide range of learning options. You can study in
            groups, individually, purchase lessons, or seek assistance from a
            mentor.
          </StyledExpectationText>
          <Accordeon isBlack={false}/>
        </StyledFlex>
      </StyledContainer>
    </StyledExpectation>
  );
};

export default ExpectationLayout;
