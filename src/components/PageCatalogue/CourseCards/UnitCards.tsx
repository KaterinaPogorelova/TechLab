import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import {
  StyledViewMoreBtn, StyledViewMoreText
} from "../../PageAboutSchool/AboutSchoolOurExperts/styledAboutSchoolOurExperts";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { UnitCard } from "../CourseCard/UnitCard";
import { StyledCourseHead, StyledCoursesContainer } from "./styledCourseCards";
import { useAppSelector } from "../../../store/store";
import { DownArrow, UpArrow } from "../../../assets/icons/Arrows";
import type { IdataUnit } from "../../../data/dataUnits";

interface UnitCardsProps {
  nameGroup: string
}

export const UnitCards: React.FC<UnitCardsProps> = ({nameGroup}) => {
  const params: Readonly<Params> = useParams();
  const param: string = params.catalogue as string;
  const filtersParam: string[] = param.split(',');
  const {width = 0} = useWindowSize();
  const dataUnitsView: IdataUnit[] = useAppSelector(state => state.dataUnits.units);
  const [isAllCards, setIsAllCards] = useState<boolean>(false);
  const [nCardsAdd, setNCardsAdd] = useState<number>(1);
  const [cardsView, setCardsView] = useState<IdataUnit[]>(dataUnitsView.slice(0, nCardsAdd));

  useEffect(() => {
    setNCardsAdd((width >= 1024) ? 3 : ((width < 480) ? 1 : 2));
  }, [width]);

  useEffect(() => {
    if (isAllCards) {
      setCardsView(dataUnitsView);
      setIsAllCards(true);
    } else {
      setCardsView(dataUnitsView.slice(0, nCardsAdd));
      setIsAllCards(false);
    }
  }, [nCardsAdd, dataUnitsView]);

  // useEffect(() => {
  //   if (cardsView.length >= dataUnitsView.length) {
  //     setIsAllCards(true);
  //   }
  // }, [cardsView]);

  useEffect(() => {
    if (!filtersParam.includes('filters')) {
      setCardsView(dataUnitsView.slice(0, nCardsAdd));
      setIsAllCards(false);
    }
  }, [params]);

  const handlerAll = () => {
    setCardsView(dataUnitsView);
    setIsAllCards(true);
  }

  const handlerLess = () => {
    setCardsView(dataUnitsView.slice(0, nCardsAdd));
    setIsAllCards(false);
    setTimeout(() => {
      window.scrollBy(0, -400);
    }, 0);
  }

  return (
    <>
      <StyledCourseHead>{nameGroup}</StyledCourseHead>
      <StyledCoursesContainer>
        {
          cardsView.map((course: IdataUnit) =>
            <UnitCard
              key={course.id}
              {...course}
            />
          )
        }
      </StyledCoursesContainer>
      {
        (dataUnitsView.length > nCardsAdd) &&
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