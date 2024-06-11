import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { dataUnits, IdataUnit } from "../data/dataUnits";

type IdataUnits = {
  units: IdataUnit[]
}

const initialState: IdataUnits = {
  units: [...dataUnits]
}

export const dataUnitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    setDataUnits: (state, action: PayloadAction<IdataUnit[]>) => {
      state.units = action.payload
    }
  }
})

export const {setDataUnits} = dataUnitsSlice.actions;

export const dataUnitsReducer = dataUnitsSlice.reducer;