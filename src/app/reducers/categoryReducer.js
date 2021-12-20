import { createSlice } from '@reduxjs/toolkit'
import { getCategories } from '../services/Api'

export const categoryReducer = createSlice({
    name: 'categories',
    initialState: {
        list: getCategories()
    },
    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = categoryReducer.actions

export default categoryReducer.reducer