import React, { useEffect, useState } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { StyledCatalogue } from "./styledCatalogueContent";
import { StyledContainer, StyledFrameHeader } from "../../../styledConstants";
import { CourseCards } from "../CourseCards/CourseCards";
import { UnitCards } from "../CourseCards/UnitCards";
import { FiltersItems } from "../FiltersItems/FiltersItems";
import { dataCourses, IdataCourse } from "../../../data/dataCourses";
import { dataUnits, IdataUnit } from "../../../data/dataUnits";
import { setDataCourses } from "../../../store/listCourses";
import { setDataUnits } from "../../../store/listUnits";
import { filterCourseLevel } from "../FiltersItems/filtersCourses";

export const CatalogueContent = () => {
  const navigate = useNavigate();
  const isRunlineClosed = useAppSelector((state) => state.runline.isClosed);
  const dataCardsView: IdataCourse[] = useAppSelector(state => state.dataCourses.courses);
  const dataUnitsView: IdataUnit[] = useAppSelector(state => state.dataUnits.units);
  const dispatch = useAppDispatch();
  const params: Readonly<Params> = useParams();
  const param: string = params.catalogue as string;
  const filtersParam: string[] = param.split(',');
  const [typesCourses, setTypesCourses] = useState<string>('All courses');
  const [typesUnits, setTypesUnits] = useState<string>('All units');
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [filterItems, setFilterItems] = useState<string[]>([]);

  const handlerToggleChecked = (item: string) => {
    let newCheckedItems: string[] = [];
    if (filterItems.includes(item)) {
      newCheckedItems = filterItems.filter(elem => elem !== item);
    } else {
      newCheckedItems = [...filterItems, item];
    }
    if (!newCheckedItems.includes('filters')) {
      newCheckedItems.push('filters');
    }
    setFilterItems(newCheckedItems);
    navigate(`/catalogue/${newCheckedItems.join(',')}`);
  }

  const toggleFilterMenu = () => {
    setIsFiltersOpen(prevState => !prevState);
  }

  useEffect(() => {
    setFilterItems([...filtersParam]);
  }, []);

  useEffect(() => {
    if (!filtersParam.includes('filters')) {
      setIsFiltersOpen(false);
    }
    if (filtersParam.includes('all')) {
      dispatch(setDataCourses(dataCourses));
      dispatch(setDataUnits(dataUnits));
      setFilterItems([]);
      setTypesCourses('All courses');
      setTypesUnits('All units');
      return;
    }
    const filtersAdd: string[] = [];
    if (!filtersParam.includes('filters')) {
      filtersParam.forEach((item, i) => {
        if (item === 'Design' ||
          item === 'Programming' ||
          item === 'Data science' ||
          item === 'Courses' ||
          item === 'Units') {
          filtersAdd.push(item);
        }
      });
      setFilterItems(filtersAdd);
    }
    let dataCoursesFilter: IdataCourse[] = filterCourseLevel(dataCourses, filtersParam);
    let dataUnitsFilter: IdataUnit[] = filterCourseLevel(dataUnits, filtersParam);
    // чтобы не перемешивались карточки при выборе фильтра, не меняющего весь набор карточек:
    if (dataCoursesFilter.length === dataCardsView.length) {
      dataCoursesFilter = dataCardsView;
    }
    if (dataUnitsFilter.length === dataUnitsView.length) {
      dataUnitsFilter = dataUnitsView;
    }
    if (dataCoursesFilter.length === 0 && dataUnitsFilter.length === 0) {
      dispatch(setDataCourses([]));
      dispatch(setDataUnits([]));
      setTypesCourses('Not found');
      setTypesUnits('');
      return;
    }
    const typesCU: string[] = filtersParam.filter(item => item === 'Design' || item === 'Programming' || item === 'Data science');
    if (typesCU.length >= 3 || typesCU.length === 0) {
      if ((filtersParam.includes('Courses') && filtersParam.includes('Units')) ||
        (!filtersParam.includes('Courses') && !filtersParam.includes('Units'))) {
        dispatch(setDataCourses(dataCoursesFilter));
        dispatch(setDataUnits(dataUnitsFilter));
        setTypesCourses('All courses');
        if (dataUnitsFilter.length === 0) {
          setTypesUnits('');
        } else {
          setTypesUnits('All units');
        }
        return;
      }
      if (filtersParam.includes('Courses')) {
        dispatch(setDataCourses(dataCoursesFilter));
        dispatch(setDataUnits([]));
        setTypesCourses('All courses');
        setTypesUnits('');
        return;
      }
      if (filtersParam.includes('Units')) {
        dispatch(setDataCourses([]));
        dispatch(setDataUnits(dataUnitsFilter));
        setTypesCourses('');
        setTypesUnits('All units');
        return;
      }
    }
    let typesNames: string = '';
    typesCU.forEach((item, i) => {
      if (typesNames === '') {
        typesNames = item;
      } else {
        typesNames = typesNames + ', ' + item;
      }
    });
    if (dataCoursesFilter.length === 0) {
      dispatch(setDataCourses([]));
      setTypesCourses('');
    } else {
      dispatch(setDataCourses(dataCoursesFilter));
      if (typesNames === '') {
        setTypesCourses('All courses');
      } else {
        setTypesCourses(typesNames + ' courses');
      }
    }
    if (dataUnitsFilter.length === 0) {
      dispatch(setDataUnits([]));
      setTypesUnits('');
    } else {
      dispatch(setDataUnits(dataUnitsFilter));
      if (typesNames === '') {
        setTypesUnits('All units');
      } else {
        setTypesUnits(typesNames + ' units');
      }
    }
  }, [params]);

  return (
    <StyledCatalogue $isRunlineClosed={isRunlineClosed}>
      <StyledContainer>
        <StyledFrameHeader><span>Catalogue</span></StyledFrameHeader>
        <FiltersItems
          toggleFilterMenu={toggleFilterMenu}
          isFiltersOpen={isFiltersOpen}
          checkedItems={filterItems}
          handlerToggleChecked={handlerToggleChecked}
        />
        {
          (typesCourses !== '') && <CourseCards nameGroup={typesCourses} />
        }
        {
          (typesUnits !== '') && <UnitCards nameGroup={typesUnits} />
        }
      </StyledContainer>
    </StyledCatalogue>
  );
}