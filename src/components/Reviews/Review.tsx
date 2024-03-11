import { useState } from "react"
import { StyledPreview, StyledVideoText, StyledVideoQuote, StyledVideoWrap, StyledImgWrap, StyledVideo } from "./StyledReviews"
import { ReactComponent as Play } from '../../assets/icons/play.svg'

type ReviewProps = {
    desc: string,
    imgSrc: string,
    videoSrc: string,
    color: string
}

export const Review = ({ desc, imgSrc, videoSrc, color }: ReviewProps) => {
    const [isVisible, setIsVisible] = useState(false)
    return (<StyledVideoWrap onClick={() => setIsVisible(true)}>
        <StyledPreview $isVisible={isVisible} $color={color}>
            <StyledVideoText>
                <StyledVideoQuote>{desc}</StyledVideoQuote>
                <Play></Play>
            </StyledVideoText>
            <StyledImgWrap>
                <img src={imgSrc} alt="student"></img>
            </StyledImgWrap>
        </StyledPreview>
        <StyledVideo allow='autoplay' src={isVisible ? videoSrc : ""}></StyledVideo>
    </StyledVideoWrap>)
}