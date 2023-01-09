import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../services/axiosService';


// Get All Employees
export const fetchEmployees = createAsyncThunk(
    // the slice it belongs to 
    'employees/fetchEmployees',
    // obj is where you can find data that you sent
    // can use it to get by id, just sending in the id in front end
    async (obj, thunkAPI) => {
        try {
            const res = await api.get('/api5/employees')
                .then((res) => res.data)
            return res
        } catch (error) {
            return error
        }
    }
)

// Remove Employee
export const removeEmployees = createAsyncThunk(
    'employees/removerEmployees',
    async (obj, thunkAPI) => {
        try {
            const res = await api.delete(`/api5/employee/${obj.id}`)
                .then((res) => res.data)
            return res
        } catch (error) {
            return error.message
        }
    }
)

// Get Employee By ID
export const getEmployeeById = createAsyncThunk(
    'employees/getEmployeeById',
    async (id, thunkAPI) => {
        try {
            const res = await api.get(`/api5/employee/${id}`)
                .then((res) => res.data)
            return res
        } catch (error) {
            return error.message
        }
    }
)

//  Add Employee
export const addEmployee = createAsyncThunk(
    'employees/addEmployee',
    async (employeeData, { dispatch }) => {
        try {
            const res = await api.post('api5/employees', employeeData)
                .then((res) => res.data)
            return res
        } catch (error) {
            return error.message
        }
    }
)

// Update employee
export const updateEmployee = createAsyncThunk(
    'employee/updateEmployee',
    async (employeeData) => {
        try {
            const res = await api.put(`api5/employee/${employeeData._id}`, employeeData)
                .then((res) => res.data)
            return res
        } catch (error) {
            return error.message
        }
    }
)

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: [],
        activeEmployee: {},
        loading: false
    },
    // functions that are sync not async go in reducers
    reducers: {

    },
    // functions that are async go in the extra reducers
    extraReducers: (builder) => {
        builder
            //////////////////// fetching employees ////////////////////
            .addCase(fetchEmployees.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.employees = action.payload
                state.loading = false
            })
            .addCase(fetchEmployees.rejected, (state, error) => {
                console.log(error.message)
                state.loading = true
            })

            //////////////////// removing employees ////////////////////
            .addCase(removeEmployees.pending, (state) => {
                state.loading = true
            })
            .addCase(removeEmployees.fulfilled, (state, action, obj) => {
                state.employees = state.employees.filter(e => e._id !== action.payload)
                state.loading = false

            })
            .addCase(removeEmployees.rejected, (state, error) => {
                state.loading = true
                console.log(error.message)
            })

            //////////////////// adding employees ////////////////////
            .addCase(addEmployee.pending, (state) => {
                state.loading = true
            })
            .addCase(addEmployee.fulfilled, (state, action) => {
                console.log('fulfilled')
                console.log(action.payload)
            })
            .addCase(addEmployee.rejected, (state, error) => {
                console.log(error.message)
                state.loading = true
            })

            //////////////////// getting employees by id ////////////////////
            .addCase(getEmployeeById.pending, (state) => {
                state.loading = true
            })
            .addCase(getEmployeeById.fulfilled, (state, action) => {
                state.activeEmployee = action.payload
                state.loading = false

            })
            .addCase(getEmployeeById.rejected, (state, error) => {
                console.log(error.message)
                state.loading = true
            })

            //////////////////// updating employee ////////////////////
            .addCase(updateEmployee.pending, (state) => {
                state.loading = true
            })
            .addCase(updateEmployee.fulfilled, (state, action) => {
                state.activeEmployee = action.payload
                state.loading = false
            })
            .addCase(updateEmployee.rejected, (state, error) => {
                console.log(error.message)
                state.loading = true
            })
    }
})

// have to export all the function that you are going to call in other files
export default employeesSlice.reducer;