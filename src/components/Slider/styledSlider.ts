import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { hoverBtnColor } from '../../styledConstantsColors';

export const SliderContainer = styled.div`

  position: relative;
  width: 100%;
  @media (max-width: 1023.5px) {
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
  display:flex;
  align-items:center;
  gap:10px;
  padding: 10px 31px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.6px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${hoverBtnColor.yellow};

    svg {
      path {
        fill: ${hoverBtnColor.yellow};
      }
    }
  }
  @media (max-width: 1439.5px) {
    font-size: 16px;
    & svg:last-child{
      width:36px;
      height:36px;
    }
  }

  @media (max-width: 1023.5px) {
    bottom: -16px;
    & svg:last-child {
      width:20px;
      height:20px;
      display: inline;
      position: relative;
    }
  }
   @media (max-width: 767.5px) {
    font-size: 16px;
    bottom: -8px;
    & svg:last-child {
      display: inline;
      position: relative;
      top: 0px;
    }
  }
  @media (max-width: 479.5px) {
    
  }
`;
