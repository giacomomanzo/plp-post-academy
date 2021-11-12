import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import searchTermSlice from './searchTermSlice'
import filterSlice from './filterSlice'


const store = configureStore({
  reducer: {
    searchTerm: searchTermSlice,
    filter: filterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 

export default store