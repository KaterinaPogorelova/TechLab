import { IdataCourse } from "./dataCourses";
import { IdataUnit } from "./dataUnits";

export interface Ifilter {
  name: string,
  items: string[]
}

export const dataActions: Ifilter[] = [
  {
    name: 'Type',
    items: ['Courses', 'Units']
  },
  {
    name: 'Subject',
    items: ['Data science', 'Design', 'Programming']
  },
  {
    name: 'Level',
    items: ['Beginner', 'Intermediate']
  },
  {
    name: 'Learning format',
    items: ['Self-paced', 'In group']
  },
]

export const shuffle = (dataArray: any): any => {
  const array: IdataCourse[] | IdataUnit[] = [...dataArray] as IdataCourse[] | IdataUnit[];
  let m: number = array.length, t, i;

  // Пока есть элементы для перемешивания
  while (m) {

    // Взять оставшийся элемент
    i = Math.floor(Math.random() * m--);

    // И поменять его местами с текущим элементом
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}