import { StyledTestBlock, StyledTestContainer, StyledImgWrap, StyledTestInfoWrap, StyledTestBlockTitle, StyledTestBlockSubtitle, StyledYellowBtn } from "./StyledtestBlock"
import woman from '../../assets/img/WomanTestPic.png'

export const TestBlock = () => {
    return (<StyledTestBlock>
        <StyledTestContainer>
            <StyledImgWrap>
                <img src={woman} alt="WomanTestPic" />
            </StyledImgWrap>
            <StyledTestInfoWrap>
                <StyledTestBlockTitle>Take the test</StyledTestBlockTitle>
                <StyledTestBlockSubtitle>And find out which profession is right for you!</StyledTestBlockSubtitle>
                <StyledYellowBtn to={'/'}>Take the test</StyledYellowBtn>
            </StyledTestInfoWrap>
        </StyledTestContainer>
    </StyledTestBlock>)
}