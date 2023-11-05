import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Tab = {
    title: string,
    linkSections?: string[],
    path?: string
}

type NavState = {
    clickedTab: string,
    tabs: Tab[]
}

const initialState: NavState = {
    clickedTab: '',
    tabs: [{ title: 'Contacts', linkSections: ['Content1.1', 'Content2.1'] }, { title: 'Free Courses', linkSections: ['Content2.1', 'Content2.2'] }, { path: '/', title: 'About school' }]
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