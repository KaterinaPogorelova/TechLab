import React from "react";
import styled from "styled-components";

const StyledSvgArrow = styled.svg`
  & {
    path {
      transition: all 0.3s ease-in-out;
    }
  }
`;

const ArrowRight = () => (
  <StyledSvgArrow
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.3668 12L6.7737 18.787C6.40666 19.1151 6.4091 19.6457 6.77909 19.9711L7.6729 20.7573C8.04293 21.0827 8.64129 21.0806 9.00833 20.7526L18.1398 12.5985C18.1993 12.5461 18.5002 12.3241 18.5 12.0024C18.4998 11.7069 18.2669 11.5053 18.1443 11.3975L9.00833 3.24746C8.64129 2.9194 8.04293 2.91724 7.6729 3.24269L6.77909 4.02891C6.4091 4.35435 6.40666 4.8849 6.7737 5.21297L14.3668 12Z"
      fill="#111111"
    />
  </StyledSvgArrow>
);

export default ArrowRight;
