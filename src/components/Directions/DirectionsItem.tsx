import { StyledDirectionsItem, StyledDirectionTitle, StyledDirectionCoursesList, StyledDirectionsCoursesItem } from "./StyledDirections"
import { RightSideLink } from "../LinkWithRightArrow/LinkWithRightArrow"

type DirectionsItemType = {
    title: string;
    color: string;
    links: string[];
    count: number;
}

export const DirectionsItem = ({ title, color, links, count }: DirectionsItemType) => {
    return (<StyledDirectionsItem $color={color}>
        <StyledDirectionTitle>{title}</StyledDirectionTitle>
        <StyledDirectionCoursesList>
            {links.map((item) => <StyledDirectionsCoursesItem key={item}>{item}</StyledDirectionsCoursesItem>)}
        </StyledDirectionCoursesList>
        <RightSideLink path={'/'} text={count + ' courses'} isBlack mobileNotChanged></RightSideLink>
    </StyledDirectionsItem>)
}