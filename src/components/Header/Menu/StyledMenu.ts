import styled from "styled-components";
import {} from "../../../styledConstants";

import { Link } from "react-router-dom";
import {
  activeBtnColor,
  backgroundColor,
  colors,
  defaultBtnColor,
  hoverBtnColor,
  typographyColor
} from "../../../styledConstantsColors";

export const StyledNav = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;

  @media (max-width: 1023.5px) {
    display: none;
  }
`

export const StyledLinkWrap = styled.li`
  display: flex;
  gap: 8px;
  cursor: pointer;
  padding: 28px 22px 28px 0px;

  & a:hover {
    color: ${hoverBtnColor.green};
    transition: all 0.5s;
  }

  // &:hover svg {
    //   fill: ${hoverBtnColor.green};
  //   transition: all 0.5s;
  // }

  // &:hover div {
    //   color: ${hoverBtnColor.green};
  //   transition: all 0.5s;
  // }
`

export const StyledSvgWrap = styled.div<{ $isClicked?: boolean }>`
  transform: ${props => props.$isClicked ? 'rotate(180deg)' : 'rotate(0deg)'};
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease-in-out;

  & svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.$isClicked ? activeBtnColor.green : colors.neutral.white}
  }

  & svg:hover {
    fill: ${hoverBtnColor.green};
    transition: all 0.5s;
  }

  @media (max-width: 1439.5px) {
    width: 20px;
    height: 20px;
  }
`

export const StyledLinkContainer = styled.div<{ $clickedTab: string, $title: string }>`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.54px;
  color: ${props => props.$clickedTab === props.$title ? activeBtnColor.green : defaultBtnColor.white};
  @media (max-width: 1439.5px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.28px;
  }
`

export const StyledHeadLinks = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.54px;
  color: ${defaultBtnColor.white};
  @media (max-width: 1439.5px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.28px;
  }
`

export const StyledLinkMain = styled(Link)`
  color: ${defaultBtnColor.white};
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.54px;
  @media (max-width: 1439.5px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.28px;
  }
`
export const StyledTestBtn = styled(Link)`
  border-radius: 35px;
  border: 1px solid ${defaultBtnColor.green};
  height: min-content;
  padding: 10px 16px;
  color: ${colors.brand.green};
  background: ${backgroundColor.green10};
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.54px;
  transition: all 0.5s;

  &:hover {
    background: ${backgroundColor.green50};
  }

  @media (max-width: 1439.5px) {
    padding: 6px 16px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.28px;
  }
`
////TABLET

export const StyledMobMenuWrap = styled.div<{ $isClicked: boolean, $isRunlineClosed: boolean }>`
  position: fixed;
  top: ${props => props.$isRunlineClosed ? '72px' : '107px'};
  left: -360px;
  width: 360px;
  height: ${props => props.$isRunlineClosed ? 'calc(100vh - 72px)' : 'calc(100vh - 107px)'};
  overflow: scroll;
  overflow-x: hidden;
  padding: 24px 24px 24px 32px;
  background: ${colors.neutral.lightBlack};
  z-index: 4;
  visibility: ${props => props.$isClicked ? 'visible' : 'hidden'};
  opacity: ${props => props.$isClicked ? '1' : '0'};
  transform: ${props => props.$isClicked ? 'translateX(360px)' : 'translateX(0px)'};
  transition: all 0.5s;

  @media (max-width: 767.5px) {
    padding: 20px 20px 20px 80px;
    top: ${props => props.$isRunlineClosed ? '56px' : '90px'};
    width: 100%;
    height: ${props => props.$isRunlineClosed ? 'calc(100vh - 48px)' : 'calc(100vh - 82px)'};
    ${props => props.$isClicked ? '' : 'translateX(0px)'};
  }
  @media (max-width: 479.5px) {
    top: ${props => props.$isRunlineClosed ? '55px' : '89px'};
    padding: 20px 20px 30px 30px;
    height: ${props => props.$isRunlineClosed ? 'calc(100vh - 55px)' : 'calc(100vh - 89px)'};
  }
`

export const StyledLinksCategory = styled.div<{ $isClicked: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  width: 100%;

  & svg {
    width: 32px;
    height: 32px;
    fill: ${props => props.$isClicked ? hoverBtnColor.green : colors.neutral.white};
    transform: ${props => props.$isClicked ? 'rotate(0deg)' : 'rotate(-90deg)'};
  }

  & h4 {
    color: ${props => props.$isClicked ? hoverBtnColor.green : colors.neutral.white};
  }
`
export const StyledCategoryName = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`

export const StyledMenuLink = styled(Link)`
  display: block;
  color: ${colors.neutral.white};
  padding: 8px 0;
  width: 100%;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.5px;
  margin-bottom: 16px;

  &:hover {
    color: ${hoverBtnColor.green};
  }
`

export const StyledSignUpLink = styled(Link)`
  width: 161px;
  display: block;
  text-align: center;
  border-radius: 100px;
  padding: 10px 24px;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: 0.1px;
  border: 1px solid ${defaultBtnColor.white};
  background: none;
  color: ${typographyColor.darkBG.white};
  transition: all 0.5s;

  &:hover {
    background: none;
    color: ${hoverBtnColor.green};
    border: 1px solid ${hoverBtnColor.green};
  }

  @media (max-width: 767.5px) {
    width: 200px;
  }
`

export const StyledLogInLink = styled(StyledSignUpLink)`
  width: 161px;
  background: ${colors.brand.green};
  color: ${typographyColor.lightBG.black};
  display: flex;
  justify-content: center;
  border: none;
  transition: all 0.5s;

  &:hover {
    background: ${hoverBtnColor.green};
    color: ${typographyColor.lightBG.black};
  }

  @media (max-width: 767.5px) {
    width: 200px;
  }
`
export const StyledLinkText = styled.p`
  color: ${typographyColor.darkBG.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
`

export const StyledHelp = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.neutral.mediumGray};
  padding: 4px 8px;
  transition: all 0.5s;

  &:hover {
    color: ${hoverBtnColor.green};
  }
`
////Mobile

export const StyledQuestion = styled.p`
  color: ${colors.neutral.white};
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  margin-bottom: 8px;
`

export const StyledLinksCategoryMob = styled.div`
  display: flex;
  max-width: 216px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;

  & h4 {
    color: ${colors.neutral.white};
  }

  & svg {
    width: 20px;
    height: 20px;
    transform: rotate(-90deg);
  }

  @media (max-width: 767.5px) {
    max-width: 300px;
  }
`

export const StyledMenuLinkMob = styled(Link) <{ $isTest: boolean | undefined }>`
  display: block;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.4px;
  margin-bottom: ${props => props.$isTest ? '30px' : '10px'};
  height: 40px;
  color: ${props => props.$isTest ? colors.brand.green : colors.neutral.white};

  &:hover {
    color: ${hoverBtnColor.green}
  }
`

export const StyledLinksListPanel = styled.div<{
  $isMenuOpened: boolean,
  $hasLinks: boolean,
  $isRunlineClosed: boolean
}>`
  position: absolute;
  top: 72px;
  left: -360px;
  width: 360px;
  height: ${props => props.$isRunlineClosed ? 'calc(100vh - 72px)' : 'calc(100vh - 107px)'};
  overflow: scroll;
  overflow-x: hidden;
  padding: 24px 32px;
  background: ${colors.neutral.lightBlack};
  visibility: ${props => (props.$isMenuOpened && props.$hasLinks) ? 'visible' : 'hidden'};
  opacity: ${props => (props.$isMenuOpened && props.$hasLinks) ? '1' : '0'};
  transform: ${props => (props.$isMenuOpened && props.$hasLinks) ? 'translateX(360px)' : 'translateX(-360px)'};
  z-index: 5;
  transition: all 0.5s;

  @media (max-width: 767.5px) {
    top: 56px;
    left: -100%;
    width: 100%;
    padding: 20px 20px 20px 80px;
    height: ${props => props.$isRunlineClosed ? 'calc(100vh - 56px)' : 'calc(100vh - 90px)'};
    ${props => (props.$isMenuOpened && props.$hasLinks) && 'transform: translateX(100%)'};
  }
  @media (max-width: 479.5px) {
    top: 55px;
    padding: 20px 20px 30px 30px;
    height: ${props => props.$isRunlineClosed ? 'calc(100vh - 55px)' : 'calc(100vh - 89px)'};
  }
`
export const StyledBtnBack = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 16px;

  & svg {
    width: 20px;
    height: 20px;
    fill: ${colors.neutral.darkGray};
    transform: rotate(90deg);
  }
`

export const StyledBtnBackText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: ${colors.neutral.darkGray};
`

export const StyledLinkSection = styled.h4`
  display: block;
  margin: 0 30px 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${colors.neutral.white};
`

export const StyledLinksWrap = styled.div`
  margin-right: 64px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  & div {
    margin-top: 2px;
  }

  & svg {
    width: 20px;
    height: 20px;
    fill: ${colors.neutral.white};
    transform: rotate(-90deg);
  }
`
export const StyledLinkAll = styled(Link)`
  margin: 0px 64px 16px;
  display: block;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.36px;
  color: ${colors.neutral.white};
  transition: all 0.5s;

  &:hover {
    color: ${hoverBtnColor.green};
  }

  @media (max-width: 767.5px) {
    font-size: 18px;
  }
`

export const StyledLink = styled.h5`
  margin: 0 0px 16px 64px;
  display: block;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.36px;
  color: ${colors.neutral.white};

  @media (max-width: 767.5px) {
    font-size: 18px;
  }
`
export const StyledSemiLinksListPanel = styled(StyledLinksListPanel)`
  z-index: 6;

  & a {
    margin-left: 40px;
  }
`