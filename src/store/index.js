import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './employees'


// for every file or collection that you are going to manipulate
// create a new reducer
export const store = configureStore({
    reducer: {
        employees: employeeReducer
    }
})

