import { StyledArrowWrap, StyledArrowText } from "./StyledLinkWithRightArrow"
import { ReactComponent as Arrow } from "../../assets/icons/RightLinkArrow.svg"

type ArrowProps = {
    isBlack?: boolean,
    isRightSided?: boolean;
    text: string,
    path: string
}

export const RightSideLink = ({ isBlack, isRightSided, text, path }: ArrowProps) => {
    return (<StyledArrowWrap to={path} $isBlack={isBlack} $isRightSided={isRightSided}>
        <StyledArrowText>{text}</StyledArrowText>
        <Arrow />
    </StyledArrowWrap>)
}