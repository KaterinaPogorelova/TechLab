import { useAppSelector } from "../../store/store"

import { StyledInfoWrap, StyledMainContainer, StyledMainInfoWrap, StyledText, StyledTitle, StyledSvgWrap, StyledTextWrap, StyledCoursesList, StyledCoursesItem, StyledCoursesItemWrap, StyledExpertsWrap, StyledExpertsText, StyledExpertsList, StyledExpertsItem, StyledImgWrap } from "./StyledMainInfo"

import { ReactComponent as Arrow } from "../../assets/MainArrow.svg"

import expert1 from '../../assets/img/expert1.png'
import expert2 from '../../assets/img/expert2.png'
import expert3 from '../../assets/img/expert3.png'
import expert4 from '../../assets/img/expert4.png'
import expert5 from '../../assets/img/expert5.png'
import background from '../../assets/img/ManMainPic.png'

import { colors } from "../../styledConstantsColors"

const coursesList = [
    { title: 'UI/UX', color: 'violet' },
    { title: 'Frontend', color: 'violet' },
    { title: 'Java', color: 'green' },
    { title: 'Data Science', color: 'orange' },
    { title: 'Web Design', color: 'violet' },
    { title: 'Python', color: 'green' },
    { title: 'Data Analysis', color: 'orange' },
    { title: 'View all', color: 'gradient' }
]
const experts = [
    { color: colors.brand.violet, id: '1', src: expert1 },
    { color: colors.brand.orange, id: '2', src: expert2 },
    { color: colors.brand.green, id: '3', src: expert3 },
    { color: colors.brand.violet, id: '4', src: expert4 },
    { color: colors.brand.turquoise, id: '5', src: expert5 },
]

export const MainInfo = () => {
    const isClosedRunLine = useAppSelector((state) => state.runline.isClosed)
    return (<StyledMainInfoWrap $isClosedRunline={isClosedRunLine}>
        <StyledMainContainer>
            <StyledInfoWrap>
                <StyledTitle>Your path to a successful career in IT</StyledTitle>
                <StyledTextWrap>
                    <StyledText>Choose your course</StyledText>
                    <StyledSvgWrap><Arrow></Arrow></StyledSvgWrap>
                </StyledTextWrap>
                <StyledCoursesList>
                    {coursesList.map((item) =>
                        <StyledCoursesItemWrap $color={item.color}>
                            <StyledCoursesItem to='/' $color={item.color}>{item.title}</StyledCoursesItem>
                        </StyledCoursesItemWrap>
                    )}
                </StyledCoursesList>
                <StyledExpertsWrap>
                    <StyledExpertsText>Only TOP Experts</StyledExpertsText>
                    <StyledExpertsList>
                        {experts.map((expert) => <StyledExpertsItem key={expert.id} $color={expert.color}>
                            <img src={expert.src} alt={expert.id}></img>
                        </StyledExpertsItem>)}
                    </StyledExpertsList>
                </StyledExpertsWrap>
            </StyledInfoWrap>
            <StyledImgWrap>
                <img src={background} alt="mainback"></img>
            </StyledImgWrap>
        </StyledMainContainer>
    </StyledMainInfoWrap>)
}