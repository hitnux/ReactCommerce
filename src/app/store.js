import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './reducers/categoryReducer'
import counterReducer from './reducers/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoryReducer
  },
})