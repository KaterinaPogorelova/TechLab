import { StyledFrameHeader, StyledFrameText } from "../../styledConstants"
import { StyledAdContainer, StyledAdWrap, StyledAdInfoWrap, StyledImgWrap, StyledAdButton } from "./StyledAdvertisement"
import zeus from '../../assets/img/zeusAdPic.png'

export const Advertisement = () => {
    return (<StyledAdWrap>
        <StyledAdContainer>
            <StyledAdInfoWrap>
                <StyledFrameHeader>Get Started For Free With TechLab</StyledFrameHeader>
                <StyledFrameText $black>Start a free to access hundreds of online classes and find what fascinates you.</StyledFrameText>
                <StyledAdButton to={'/'}>View All</StyledAdButton>
            </StyledAdInfoWrap>
            <StyledImgWrap>
                <img src={zeus} alt="zeus-ad"></img>
            </StyledImgWrap>
        </StyledAdContainer>
    </StyledAdWrap>)
}