import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { hoverBtnColor } from '../../styledConstantsColors';

export const SliderContainer = styled.div`

  position: relative;
  width: 100%;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  min-height: 340px;
  padding-bottom: 80px;
`;

export const StyledSliderLink = styled(NavLink)`
  position: absolute;
  right: 0;
  bottom: 15px;
  z-index: 3;
  padding: 10px 31px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.6px;
  transition: all 0.3s ease-in-out;
  & svg {
    transform: translate(7px, 18px);
  }

  &:hover {
    color: ${hoverBtnColor.yellow};

    svg {
      path {
        fill: ${hoverBtnColor.yellow};
      }
    }
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    bottom: -16px;
    & svg:last-child {
      display: inline;
      position: relative;
      top: -11px;
    }
  }
   @media (max-width: 768px) {
    font-size: 16px;
    bottom: -16px;
    & svg:last-child {
      display: inline;
      position: relative;
      top: -11px;
    }
  }
  @media (max-width: 480px) {
    font-size: 16px;
    bottom: -30px;
  }
`;
