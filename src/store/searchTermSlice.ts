import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface searchTermState {
  value: string
}

const initialState: searchTermState = {
  value: "",
}

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setValue } = searchTermSlice.actions

export const selectValue = (state: RootState) => state.searchTerm.value

export default searchTermSlice.reducer;