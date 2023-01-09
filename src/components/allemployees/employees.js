import { Row, Col } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import logo from "../../images/Persona-Logo-01.png"
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";


// Brings in all employees, the filtered employees, setFiltered function, and search function
const AllEmployees = ({ employees, filtered, setFiltered, search }) => {
    const [sorting, setSort] = useState([])
    const [order, setOrder] = useState(true)

    // useEffect is implemented set a state to the employees props that is coming in 
    // this allows the list of employees to be sortable in the functions below
    useEffect(() => {
        setSort(employees.employees)
    }, [employees])

    //////////////////// Sort by ID ////////////////////
    const idSort = () => {
        // set sort to a variable
        const startSort = [...sorting].sort((a, b) => {
            // this if & else statement is to switch back and forth between sorting
            // will allow you to sort 1-100 or 100 - 1
            if (order === false) {
                // returns sorted lists depending on boolean order
                // if false it will return a-z
                return (a.employeeId - b.employeeId ? -1 : 1)
            } else {
                // else will return z-a
                return (b.employeeId - a.employeeId ? -1 : 1)
            }

        })
        // set state to sorted list
        setSort(startSort)
        // change boolean to change the sort pattern for next time function is calles
        setOrder(!order)
    }
    //////////////////// Sort by first name ////////////////////
    const firstNameSort = () => {
        const startSort = [...sorting].sort((a, b) => {
            // allows you to sort from a-z or z-a
            if (order === false) {
                return (a.firstName > b.firstName ? 1 : -1)
            } else {
                return (a.firstName < b.firstName ? 1 : -1)
            }

        })
        setSort(startSort)
        setOrder(!order)
    }
    //////////////////// Sort by department ////////////////////
    const departmentSort = () => {
        const startSort = [...sorting].sort((a, b) => {
            if (order === false) {
                return (a.team > b.team ? 1 : -1)
            } else {
                return (a.team < b.team ? 1 : -1)
            }
        })
        setSort(startSort)
        setOrder(!order)
    }

    //////////////////// Sort by position ////////////////////
    const positionSort = () => {
        const startSort = [...sorting].sort((a, b) => {
            if (order === false) {
                return (a.position > b.position ? 1 : -1)
            } else {
                return (a.position < b.position ? 1 : -1)
            }
        })
        setSort(startSort)
        setOrder(!order)
    }

    //////////////////// Sort by contact ////////////////////
    const contactSort = () => {
        const startSort = [...sorting].sort((a, b) => {
            if (order === false) {
                return (a.email > b.email ? 1 : -1)
            } else {
                return (a.email < b.email ? 1 : -1)
            }
        })
        setSort(startSort)
        setOrder(!order)
    }

    //////////////////// Sort by status ////////////////////
    const statusSort = () => {
        const startSort = [...sorting].sort((a, b) => {
            if (order === false) {
                return (a.status > b.status ? 1 : -1)
            } else {
                return (a.status < b.status ? 1 : -1)
            }
        })
        setSort(startSort)
        setOrder(!order)
    }
    return (
        <Row className='text-center' >
            <Col md={12}>
                <div className="m-3 mt-3 px-5  rounded pt-1 ">
                    <div className="d-flex justify-content-between mt-3">
                        <div className="justify-content-center">
                            <Image alt="inventive logo" src={logo} className="inventive-logo" />
                        </div>
                        <div className="mt-5 d-flex phone-input">
                            <div className="input-group">
                                <input onChange={(e) => search(e)} className="form-control search-input p-2" placeholder="  Search Employee" type="search" />
                                <FaSearch className="border-right p-2 search-icon" size={42} />
                            </div>
                        </div>
                    </div>
                    <Col xs={12} md={12} className='mt-4 computer-nav '>
                        <div className="bg-secondary py-2 rounded text-white pt-3" >
                            <Row>
                                <Col md={1} onClick={() => idSort()} className='selectable sort-icon'>ID <FaSort size={15} /></Col>
                                <Col md={2} onClick={() => firstNameSort()} className='selectable sort-icon' >Name <FaSort size={15} /></Col>
                                <Col md={2} onClick={() => departmentSort()} className='selectable sort-icon'>Department <FaSort size={15} /></Col>
                                <Col md={2} onClick={() => positionSort()} className='selectable sort-icon'>Position <FaSort size={15} /></Col>
                                <Col md={3} onClick={() => contactSort()} className='selectable sort-icon'>Contact <FaSort size={15} /></Col>
                                <Col md={2} onClick={() => statusSort()} className='selectable sort-icon'>Status <FaSort size={15} /></Col>
                            </Row>
                        </div>
                    </Col>
                    <div className="employee-show">
                        {filtered.length === 0 ?
                            <>
                                {
                                    sorting ?
                                        sorting.map((employee) =>
                                            <Col key={employee.employeeId} xs={12} md={12}>
                                                <LinkContainer to={'/employee/' + employee._id}>
                                                    <div className=' bg-white border-bottom border-muted shadow-sm employee-card'>
                                                        <Row >
                                                            <Col md={1}>{employee.employeeId}</Col>
                                                            <Col md={2}>{employee.firstName} {employee.lastName}</Col>
                                                            <Col md={2}>{employee.team}</Col>
                                                            <Col md={2}>{employee.position}</Col>
                                                            <Col md={3}>
                                                                <div>
                                                                    {employee.email}
                                                                </div>
                                                                <div className="phone-number">
                                                                    {employee.phoneNumber}
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>{employee.status}</Col>
                                                        </Row>
                                                    </div>
                                                </LinkContainer>

                                            </Col>

                                        )

                                        : null}
                            </>
                            :
                            <>
                                {
                                    filtered ?
                                        filtered.map((employee) =>
                                            <Col key={employee.employeeId} xs={12} md={12}>
                                                <div className='py-3 bg-white border-bottom border-muted shadow-sm employee-card'>
                                                    <LinkContainer to={'/employee/' + employee._id}>
                                                        <Row >
                                                            <Col md={1}>{employee.employeeId}</Col>
                                                            <Col md={2}>{employee.firstName} {employee.lastName}</Col>
                                                            <Col md={2}>{employee.team}</Col>
                                                            <Col md={2}>{employee.position}</Col>
                                                            <Col md={3}>
                                                                <div>
                                                                    {employee.email}
                                                                </div>
                                                                <div className="phone-number">
                                                                    {employee.phoneNumber}
                                                                </div>
                                                            </Col>
                                                            <Col md={2}>{employee.status}</Col>
                                                        </Row>
                                                    </LinkContainer>
                                                </div>
                                            </Col>
                                        )
                                        : null}
                            </>
                        }
                    </div>
                </div>
            </Col>
        </Row >
    )
}




export default AllEmployees;