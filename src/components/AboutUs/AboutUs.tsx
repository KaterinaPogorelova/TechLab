import { useWindowSize } from "../../hooks/useWindowSize";

import { StyledAboutContainer, StyledAboutUsWrap, StyledImgWrap, StyledInfo, StyledInfoWrap } from "./StyledAboutUs"

import { StyledFrameHeader, StyledSectionSeparator } from "../../styledConstants"
import { backgroundColor } from "../../styledConstantsColors";
import aboutusPic from '../../assets/img/zeusaboutuscopy.png'

import { RightSideLink } from "../LinkWithRightArrow/LinkWithRightArrow"

export const AboutUs = () => {
    const { width = 0 } = useWindowSize()
    return (<>
        <StyledSectionSeparator $background={backgroundColor.champagne}></StyledSectionSeparator>
        <StyledAboutUsWrap>
            <StyledAboutContainer>
                {width > 767 && <StyledImgWrap>
                    <img src={aboutusPic} alt="zeus-about"></img>
                </StyledImgWrap>}
                <StyledInfoWrap>
                    <StyledFrameHeader>We <span>share knowledge</span> with the world</StyledFrameHeader>
                    {width < 768 && width > 479 && <StyledImgWrap>
                        <img src={aboutusPic} alt="zeus-about"></img>
                    </StyledImgWrap>}
                    <StyledInfo><span>TechLab</span> is an online learning community with hundreds of classes for curious people,
                        on topics including programming, design, data science. On TechLab, members come together to find inspiration
                        and take the next steps in their creative journey.
                    </StyledInfo>
                    {width < 480 && <StyledImgWrap>
                        <img src={aboutusPic} alt="zeus-about"></img>
                    </StyledImgWrap>}
                    <RightSideLink text={'Learn More'} path={'/'} isRightSided isBlack></RightSideLink>
                </StyledInfoWrap>
            </StyledAboutContainer>
        </StyledAboutUsWrap></>)
}