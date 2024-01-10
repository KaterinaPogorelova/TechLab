import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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
        title: 'Catalogue', linkSections: [{
            title: 'All courses', path: '/',
            linkSections: [{
                title: 'Design', path: '/', linkSections: [{ title: 'Web Design', path: '/' },
                { title: 'User Interface Design', path: '/' },
                { title: 'Mobile App Design', path: '/' },
                { title: 'Graphic Design', path: '/' },
                { title: 'UX/UI Design', path: '/' }]
            }, { title: 'Programming', path: '/' }, { title: 'Data Science', path: '/' }]
        },
        {
            title: 'All lessons', path: '/',
            linkSections: [{ title: 'Design', path: '/' }, { title: 'Programming', path: '/' }, { title: 'Data Science', path: '/' }]
        },
        { title: 'All mentors', path: '/' }]
    },
    { title: 'Free Courses', path: '/' },
    { title: 'About school', path: '/' }]
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

export const { setClickedTab } = navSlice.actions
export const navReducer = navSlice.reducer