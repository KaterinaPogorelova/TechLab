import type { IdataCourse } from "../../../data/dataCourses";
import type { IdataUnit } from "../../../data/dataUnits";
import { shuffle } from "../../../data/dataActions";

export const filterCourseLevel = (dataArr: any, checkedItems: string[]) => {
  let newDataFormat: any[] = [];
  if (!((!checkedItems.includes('Self-paced') && !checkedItems.includes('In group'))) &&
    !((checkedItems.includes('Self-paced') && checkedItems.includes('In group'))) &&
    (checkedItems.includes('In group') && ('price' in dataArr[0]))) {
    return [];
  }
  newDataFormat = [...dataArr];

  let newDataType: any[] = [];
  if ((!checkedItems.includes('Courses') && !checkedItems.includes('Units')) ||
    (checkedItems.includes('Courses') && checkedItems.includes('Units'))) {
    newDataType = newDataFormat;
  } else {
    if (checkedItems.includes('Courses') && ('price' in dataArr[0])) {
      return [];
    }
    if (checkedItems.includes('Units') && !('price' in dataArr[0])) {
      return [];
    }
    newDataType = newDataFormat;
  }

  let newDataSubject: any[] = [];
  if (!checkedItems.includes('Data science') &&
    !checkedItems.includes('Design') &&
    !checkedItems.includes('Programming')) {
    newDataSubject = newDataType;
  } else {
    for (let i = 0; i < checkedItems.length; i++) {
      newDataSubject = newDataSubject.concat(newDataType.filter((course: IdataCourse | IdataUnit) =>
        (course.course === checkedItems[i])));
    }
  }
  let newDataLevel: any[] = [];
  if (!checkedItems.includes('Beginner') && !checkedItems.includes('Intermediate')) {
    newDataLevel = newDataSubject;
  } else {
    for (let i = 0; i < checkedItems.length; i++) {
      newDataLevel = newDataLevel.concat(newDataSubject.filter((course: IdataCourse | IdataUnit) =>
        (course.level.includes(checkedItems[i]))));
    }
  }

  if (dataArr.length === newDataLevel.length) {
    return newDataLevel;
  } else {
    return shuffle(newDataLevel);
  }
}