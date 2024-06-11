import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Tab = {
  title: string,
  linkSections?: Tab[],
  path?: string
}

type NavState = {
  clickedTab: string,
  tabs: Tab[]
}

const initialState: NavState = {
  clickedTab: '',
  tabs: [{
    title: 'Catalogue', path: '/catalogue/all', linkSections: [{
      title: 'All courses', path: '/catalogue/Courses',
      linkSections: [
        {
          title: 'Design', path: '/catalogue/Courses,Design',
          // linkSections: [
          //   {title: 'Web Design', path: '/'},
          //   {title: 'User Interface Design', path: '/'},
          //   {title: 'Mobile App Design', path: '/'},
          //   {title: 'Graphic Design', path: '/'},
          //   {title: 'UX/UI Design', path: '/'}
          // ]
        },
        {title: 'Programming', path: '/catalogue/Courses,Programming'},
        {title: 'Data Science', path: '/catalogue/Courses,Data science'}]
    },
      {
        title: 'All units', path: '/catalogue/Units',
        linkSections: [
          {title: 'Design', path: '/catalogue/Units,Design'},
          {title: 'Programming', path: '/catalogue/Units,Programming'},
          {title: 'Data Science', path: '/catalogue/Units,Data science'}
        ]
      },
      {title: 'All mentors', path: '/aboutschool#ourexperts'}]
  },
    {title: 'Free Courses', path: '/catalogue/All units'},
    {title: 'About school', path: '/aboutschool'}]
}

export const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setClickedTab: (state, action: PayloadAction<string>) => {
      state.clickedTab = action.payload
    },
  }
})

export const {setClickedTab} = navSlice.actions
export const navReducer = navSlice.reducer