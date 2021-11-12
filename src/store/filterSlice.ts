import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface setFilterState {
  value: boolean | undefined
}

const initialState: setFilterState = {
  value: undefined,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<boolean | undefined>) => {
      state.value = action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions

export const selectFilter = (state: RootState) => state.filter.value

export default filterSlice.reducer;
