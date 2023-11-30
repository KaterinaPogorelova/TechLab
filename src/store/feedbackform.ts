import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FeedbackFormType = {
    userName: string,
    userEmail: string,
    userMessage: string
}

const initialState: FeedbackFormType = {
    userName: '',
    userEmail: '',
    userMessage: ''
}

export const feedbackFormSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        },
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.userEmail = action.payload
        },
        setUserMessage: (state, action: PayloadAction<string>) => {
            state.userMessage = action.payload
        }
    }
})

export const { setUserName, setUserEmail, setUserMessage } = feedbackFormSlice.actions
export const feedbackReducer = feedbackFormSlice.reducer