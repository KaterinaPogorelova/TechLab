import type { ISoonCourse } from './SoonCourseCard/SoonCourseCard';

export const dataSoonCourses: ISoonCourse[] = [
  {
    name: 'Java',
    duration: '12 Months\\ 120 lessons',
    startDate: '10 October',
    price: 1350,
    type: 'Programming'
  },
  {
    name: 'Machine Learning',
    duration: '12 Months\\ 120 lessons',
    startDate: '30 November',
    price: 1200,
    type: 'Data Science'
  },
  {
    name: 'Web Design',
    duration: '12 Months\\ 120 lessons',
    startDate: '10 November',
    price: 1350,
    type: 'Design'
  },
  {
    name: 'Python',
    duration: '12 Months\\ 120 lessons',
    startDate: '30 November',
    price: 1200,
    type: 'Data Science'
  },
  {
    name: 'Frontend',
    duration: '12 Months\\ 120 lessons',
    startDate: '10 October',
    price: 1350,
    type: 'Programming'
  },
  {
    name: 'Graphic Design',
    duration: '12 Months\\ 120 lessons',
    startDate: '10 November',
    price: 1720,
    type: 'Design'
  },
  {
    name: 'Java',
    duration: '12 Months\\ 120 lessons',
    startDate: '10 October',
    price: 1350,
    type: 'Programming'
  },
  {
    name: 'Machine Learning',
    duration: '12 Months\\ 120 lessons',
    startDate: '30 November',
    price: 1200,
    type: 'Data Science'
  },
  {
    name: 'Web Design',
    duration: '12 Months\\ 120 lessons',
    startDate: '10 November',
    price: 1350,
    type: 'Design'
  },
  {
    name: 'Python',
    duration: '12 Months\\ 120 lessons',
    startDate: '30 November',
    price: 1200,
    type: 'Data Science'
  },
  {
    name: 'Frontend',
    duration: '12 Months\\ 120 lessons',
    startDate: '10 October',
    price: 1350,
    type: 'Programming'
  },
]

export const dataSoonCoursesUpper: ISoonCourse[] = dataSoonCourses.slice(0, dataSoonCourses.length / 2);
export const dataSoonCoursesLower: ISoonCourse[] = dataSoonCourses.slice(dataSoonCourses.length / 2);