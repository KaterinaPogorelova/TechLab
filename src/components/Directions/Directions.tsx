import { StyledContainer, StyledFrameHeader, StyledSectionSeparator } from "../../styledConstants"
import { backgroundColor } from "../../styledConstantsColors"
import { RightSideLink } from "../LinkWithRightArrow/LinkWithRightArrow"
import { DirectionsItem } from "./DirectionsItem"
import { StyledDirectionsWrap, StyledDirectionsSubtitle, StyledDirectionsList } from "./StyledDirections"

const directionsList =
    [{ title: 'Design', links: ['Mobile App Design', 'User Interface Design', 'Web Design'], count: 15, color: 'violet' },
    { title: 'Programming', links: ['Front-End', 'Phyton', 'JavaScript'], count: 22, color: 'green' },
    { title: 'Data Science', links: ['Data Analysis', 'Deep Learning', 'Artificial Intelligence'], count: 12, color: 'orange' }]

export const Directions = () => {
    return (<><StyledSectionSeparator $background={backgroundColor.black}></StyledSectionSeparator>
        <StyledDirectionsWrap>
            <StyledContainer>
                <StyledFrameHeader>We know <span>everything</span> about IT</StyledFrameHeader>
                <StyledDirectionsSubtitle>See the courses most commonly chosen by students</StyledDirectionsSubtitle>
                <StyledDirectionsList>
                    {directionsList.map((item) =>
                        <DirectionsItem key={item.title} title={item.title} links={item.links} color={item.color} count={item.count}></DirectionsItem>)
                    }
                </StyledDirectionsList>
                <RightSideLink text={'All popular courses'} path={'/'} isRightSided mobileNotChanged></RightSideLink>
            </StyledContainer>
        </StyledDirectionsWrap></>)
}