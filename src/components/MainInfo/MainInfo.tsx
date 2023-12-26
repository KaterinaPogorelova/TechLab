import { useWindowSize } from "../../hooks/useWindowSize"

import { useAppSelector } from "../../store/store"

import {
    StyledInfoWrap, StyledMainContainer, StyledMainInfoWrap,
    StyledText, StyledTitle, StyledSvgWrap, StyledTextWrap, StyledCoursesList, StyledCoursesItem,
    StyledCoursesItemWrap, StyledExpertsWrap, StyledExpertsText, StyledExpertsList,
    StyledExpertsItem, StyledImgWrap, StyledSmTestWrap, StyledLinkText
} from "./StyledMainInfo"

import { ReactComponent as Arrow } from "../../assets/MainArrow.svg"

import expert1 from '../../assets/img/expert1.png'
import expert2 from '../../assets/img/expert2.png'
import expert3 from '../../assets/img/expert3.png'
import expert4 from '../../assets/img/expert4.png'
import expert5 from '../../assets/img/expert5.png'
import background from '../../assets/img/ManMainPic.png'
import backgroundMob from '../../assets/img/ManMainPicMobile.png'
import { colors } from "../../styledConstantsColors"
import { DownArrow } from "../../assets/icons/Arrows"

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
    const { width = 0 } = useWindowSize()
    const isClosedRunLine = useAppSelector((state) => state.runline.isClosed)
    return (<><StyledMainInfoWrap $isClosedRunline={isClosedRunLine}>
        <StyledMainContainer>
            <StyledInfoWrap>
                <StyledTitle>Your path to a successful career in IT</StyledTitle>
                {width > 767 && <StyledTextWrap>
                    <StyledText>Choose your course</StyledText>
                    <StyledSvgWrap><Arrow></Arrow></StyledSvgWrap>
                </StyledTextWrap>}
                <StyledCoursesList>
                    {coursesList.map((item) =>
                        <StyledCoursesItemWrap $color={item.color} key={item.title}>
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
                {width > 767 ? <img src={background} alt="mainback"></img> : <img src={backgroundMob} alt="mainback"></img>}
            </StyledImgWrap>
        </StyledMainContainer>
    </StyledMainInfoWrap>
        {width < 768 && <StyledSmTestWrap to='/'>
            <StyledLinkText>Take a career test </StyledLinkText>
            <DownArrow></DownArrow>
        </StyledSmTestWrap>}
    </>)
}