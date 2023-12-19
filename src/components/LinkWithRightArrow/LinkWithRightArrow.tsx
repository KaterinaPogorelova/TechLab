import { StyledArrowWrap, StyledArrowText } from "./StyledLinkWithRightArrow"
import { ReactComponent as Arrow } from "../../assets/icons/RightLinkArrow.svg"
import { useWindowSize } from "../../hooks/useWindowSize";
import { DownArrow } from "../../assets/icons/Arrows";

type ArrowProps = {
    isBlack?: boolean,
    isRightSided?: boolean,
    mobileNotChanged?: boolean,
    text: string,
    path: string
}

export const RightSideLink = ({ isBlack, isRightSided, text, path, mobileNotChanged }: ArrowProps) => {
    const { width = 0 } = useWindowSize()
    return (<StyledArrowWrap to={path} $isBlack={isBlack} $isRightSided={isRightSided} $mobileNotChanged={mobileNotChanged}>
        <StyledArrowText>{text}</StyledArrowText>
        {width > 1024 && <Arrow></Arrow>}
        {width < 1025 && mobileNotChanged && <DownArrow></DownArrow>}
        {width < 1025 && !mobileNotChanged && <Arrow></Arrow>}
    </StyledArrowWrap>)
}