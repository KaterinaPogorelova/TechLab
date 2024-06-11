import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { CourseCard } from "../CourseCard/CourseCard";
import {
  StyledViewMoreBtn, StyledViewMoreText
} from "../../PageAboutSchool/AboutSchoolOurExperts/styledAboutSchoolOurExperts";
import { StyledCourseHead, StyledCoursesContainer } from "./styledCourseCards";
import { useAppSelector } from "../../../store/store";
import { DownArrow, UpArrow } from "../../../assets/icons/Arrows";
import type { IdataCourse } from "../../../data/dataCourses";

interface CourseCardsProps {
  nameGroup: string
}

export const CourseCards: React.FC<CourseCardsProps> = ({nameGroup}) => {
  const params: Readonly<Params> = useParams();
  const param: string = params.catalogue as string;
  const filtersParam: string[] = param.split(',');
  const {width = 0} = useWindowSize();
  const dataCardsView: IdataCourse[] = useAppSelector(state => state.dataCourses.courses);
  const [isAllCards, setIsAllCards] = useState<boolean>(false);
  const [nCardsAdd, setNCardsAdd] = useState<number>(1);
  const [cardsView, setCardsView] = useState<IdataCourse[]>(dataCardsView.slice(0, nCardsAdd));

  useEffect(() => {
    setNCardsAdd((width >= 1024) ? 3 : ((width < 480) ? 1 : 2));
  }, [width]);

  useEffect(() => {
    if (isAllCards) {
      setCardsView(dataCardsView);
      setIsAllCards(true);
    } else {
      setCardsView(dataCardsView.slice(0, nCardsAdd));
      setIsAllCards(false);
    }
  }, [nCardsAdd, dataCardsView]);

  useEffect(() => {
    if (!filtersParam.includes('filters')) {
      setCardsView(dataCardsView.slice(0, nCardsAdd));
      setIsAllCards(false);
    }
  }, [params]);

  const handlerAll = () => {
    setCardsView(dataCardsView);
    setIsAllCards(true);
  }

  const handlerLess = () => {
    setCardsView(dataCardsView.slice(0, nCardsAdd));
    setIsAllCards(false);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  return (
    <>
      <StyledCourseHead>{nameGroup}</StyledCourseHead>
      <StyledCoursesContainer>
        {
          cardsView.map((course: IdataCourse) =>
            <CourseCard
              key={course.id}
              {...course}
            />
          )
        }
      </StyledCoursesContainer>
      {
        (dataCardsView.length > nCardsAdd) &&
        <>
          {
            (!isAllCards) ?
              <StyledViewMoreBtn onClick={handlerAll}>
                <StyledViewMoreText>See all</StyledViewMoreText>
                <DownArrow />
              </StyledViewMoreBtn>
              :
              <StyledViewMoreBtn onClick={handlerLess}>
                <StyledViewMoreText>View less</StyledViewMoreText>
                <UpArrow />
              </StyledViewMoreBtn>
          }
        </>
      }
    </>
  )
}