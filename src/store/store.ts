import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { navReducer } from './navigation'
import { searchReducer } from './search'
import { runlineReducer } from './runline'
import { feedbackReducer } from './feedbackform'
import { dataCourseReducer } from "./listCourses";
import { dataUnitsReducer } from "./listUnits";


export const store = configureStore({
  reducer: {
    nav: navReducer,
    search: searchReducer,
    runline: runlineReducer,
    feedback: feedbackReducer,
    dataCourses: dataCourseReducer,
    dataUnits: dataUnitsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector