import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type RunLineType = {
    runlineList: string[],
    isClosed: boolean
}

const initialState: RunLineType = {
    runlineList: ['Starting soon: “Frontend developer” - 21.11.2023', 'Starting soon: “Frontend developer” - 21.11.2023', 'Starting soon: “Frontend developer” - 21.11.2023', 'Starting soon: “Frontend developer” - 21.11.2023'],
    isClosed: false
}

export const runLineSlice = createSlice({
    name: 'runline',
    initialState,
    reducers: {
        setRunlineClosed: (state, action: PayloadAction<boolean>) => {
            state.isClosed = action.payload
        }
    }
})

export const { setRunlineClosed } = runLineSlice.actions
export const runlineReducer = runLineSlice.reducer