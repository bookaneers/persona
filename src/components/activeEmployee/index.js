import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../store/employees";
import EmployeePage from "./employeePage";


const ActiveEmployee = () => {
    let params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getEmployeeById(params.id))
    }, [dispatch, params.id])
    // brings in all employees from store
    const employee = useSelector((state) => state.employees)
    return (
        <>
            <EmployeePage employee={employee} />
        </>
    )
}



export default ActiveEmployee;