import React from "react";
import styled from "styled-components";

const StyledSvgLongArrow = styled.svg`
  & {
    path {
      transition: all 0.3s ease-in-out;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LongArrowRight = () => (
  <StyledSvgLongArrow
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.8431 16.9286L46.2071 23.2926C46.5976 23.6831 46.5976 24.3163 46.2071 24.7068L39.8431 31.0708C39.4526 31.4613 38.8195 31.4613 38.4289 31.0708C38.0384 30.6802 38.0384 30.0471 38.4289 29.6566L43.0858 24.9997H2V22.9997H43.0858L38.4289 18.3428C38.0384 17.9523 38.0384 17.3192 38.4289 16.9286C38.8195 16.5381 39.4526 16.5381 39.8431 16.9286Z"
      fill="#111111"
    />
  </StyledSvgLongArrow>
);

export default LongArrowRight;
