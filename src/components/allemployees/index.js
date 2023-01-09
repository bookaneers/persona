import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployees } from '../../store/employees'
import AllEmployees from './employees'

const Employees = () => {
    // gets all employees from store
    const employees = useSelector((state) => state.employees)
    // used to call the function form the reducers, have to import the function form the reducers
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEmployees())
    }, [dispatch])

    const [filtered, setFiltered] = useState([])

    // Search function
    const search = (event) => {
        // getting what the user is type
        let keywords = event.target.value
        // filtering
        let filtering = employees.employees.filter((employee) => {
            // get what I want to filter by
            let name = employee.firstName.toLowerCase()
            // finds by what im searching by foreach employee
            // gets the index of each character of the string 
            // compares to what the user is typing
            return name.indexOf(keywords.toLowerCase()) > -1
        })
        // if the input box is empty set filtered to empty
        // this will cause all employees to show, other logic can be found in allemployees/employees.js
        if (event.target.value === "") {
            setFiltered([])
        }
        // if filtering array find one match or more set that to the state
        if (filtering.length >= 1) {
            setFiltered(filtering)
        }
        // repetitive code forward
        //! FIXME | find solution for shorter code //

        //////////////////// Search by lastName  ////////////////////
        filtering = employees.employees.filter((employee) => {
            let lastName = employee.lastName.toLowerCase()
            return lastName.indexOf(keywords.toLowerCase()) > -1
        })
        if (filtering.length >= 1) {
            setFiltered(filtering)
        }

        //////////////////// Search by id  ////////////////////
        filtering = employees.employees.filter((employee) => {
            let id = employee.employeeId.toLowerCase()
            return id.indexOf(keywords.toLowerCase()) > -1
        })
        if (filtering.length >= 1) {
            setFiltered(filtering)
        }

        //////////////////// Search by status  ////////////////////
        filtering = employees.employees.filter((employee) => {
            let status = employee.status.toLowerCase()
            return status.indexOf(keywords.toLowerCase()) > -1
        })
        if (filtering.length >= 1) {
            setFiltered(filtering)
        }

        //////////////////// Search by team  ////////////////////
        filtering = employees.employees.filter((employee) => {
            let team = employee.team.toLowerCase()
            return team.indexOf(keywords.toLowerCase()) > -1
        })
        if (filtering.length >= 1) {
            setFiltered(filtering)
        }

        //////////////////// Search by position  ////////////////////
        filtering = employees.employees.filter((employee) => {
            let position = employee.position.toLowerCase()
            return position.indexOf(keywords.toLowerCase()) > -1
        })
        if (filtering.length >= 1) {
            setFiltered(filtering)
        }
        // if nothing is found set target value back to zero for sort function to work
        if (event.target.value === "") {
            setFiltered([])
        }
    }
    return (
        <>
            <AllEmployees employees={employees} filtered={filtered} setFiltered={setFiltered} search={search} />
        </>
    )
}


export default Employees;