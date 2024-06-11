import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { dataCourses, IdataCourse } from "../data/dataCourses";

type IdataCourses = {
  courses: IdataCourse[]
}

const initialState: IdataCourses = {
  courses: dataCourses
}

export const dataCoursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setDataCourses: (state, action: PayloadAction<IdataCourse[]>) => {
      state.courses = action.payload
    }
  }
})

export const {setDataCourses} = dataCoursesSlice.actions;

export const dataCourseReducer = dataCoursesSlice.reducer;