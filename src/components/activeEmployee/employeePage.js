import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeEmployees } from "../../store/employees";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import UpdateActiveEmployee from "./updateActiveEmployee";
import { useState } from "react";


const EmployeePage = ({ employee }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [showUpdate, setShowUpdate] = useState(true)
    // brings up alert to confirm deletion, brings in _id, firstName, lastName, employeeId
    const removeEmployee = async (id, name, last, shopId) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: `Are you sure that you want to remove ${name} ${last}?`,
            icon: "warning",
            dangerMode: true,
            buttons: {
                cancel: true,
                confirm: true,
            },
        });
        if (await willDelete) {
            dispatch(removeEmployees(id))
            swal({
                title: `Removed ${name} ${last}`,
                icon: "success",
                buttons: { visible: false },
                text: `ID: ${shopId}`,
                timer: 2000,
            })
            // Navigates back to dashBoard
            setTimeout(navigate('/'), 3000)
        }
    }

    return (
        <>
            {showUpdate === true ?
                <Row>
                    <Col md={12} className='card-placement'>
                        <div className="bg-white p-3 m-2 mx-4 shadow rounded active-employee-card">
                            <Row>
                                <Col md={6}>
                                    <h2 className="mb-0">{employee.activeEmployee.firstName} {employee.activeEmployee.lastName}
                                    </h2>
                                    <h4 className="text-muted ms-1">
                                        {employee.activeEmployee.status}
                                    </h4>
                                </Col>
                                <Col md={6}>
                                    <div className="text-end me-2">
                                        <h3><span>ID:</span> {employee.activeEmployee.employeeId}</h3>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-4 mx-auto">
                                <Col md={5}>
                                    <h4 className="border-bottom border-secondary border-2">Email</h4>
                                    <div className="fs-5">{employee.activeEmployee.email}</div>
                                </Col>
                                <Col md={3}>
                                    <h4 className="border-bottom border-secondary border-2">Phone Number</h4>
                                    <div className="fs-5">{employee.activeEmployee.phoneNumber === '' ? 'N/A' : employee.activeEmployee.phoneNumber}</div>
                                </Col>
                                <Col md={3}>
                                    <h4 className="border-bottom border-secondary border-2">Department</h4>
                                    <div className="fs-5">{employee.activeEmployee.team}</div>
                                </Col>
                            </Row>
                            <Row className="mt-5 mx-auto justify-content-between">
                                <Col md={6}>
                                    <h4 className="border-bottom border-secondary border-2">Position</h4>
                                    <div className="fs-5">{employee.activeEmployee.position}</div>
                                </Col>
                                <Col md={6}>
                                    <h4 className="border-bottom border-secondary border-2">Company Name</h4>
                                    <div className="fs-5">{employee.activeEmployee.companyName}</div>
                                </Col>
                            </Row>
                            <Row className="mt-5 mx-auto justify-content-between">
                                <Col md={6}>
                                    <h4 className="border-bottom border-secondary border-2">Group Lead</h4>
                                    <div className="fs-5">{employee.activeEmployee.groupLead === '' ? 'N/A' : employee.activeEmployee.groupLead}</div>
                                </Col>
                                <Col md={6}>
                                    <h4 className="border-bottom border-secondary border-2">Team Lead</h4>
                                    <div className="fs-5">{employee.activeEmployee.teamLead === '' ? 'N/A' : employee.activeEmployee.groupLead}</div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="text-end active-employee-btn">
                                    <button className="btn bg-primary  text-white px-3 py-2" onClick={() => setShowUpdate(showUpdate ? false : true)}>Update</button>
                                    <button className="btn bg-danger ms-2 me-3 text-white px-3 py-2" onClick={() => removeEmployee({ id: employee.activeEmployee._id },
                                        employee.activeEmployee.firstName, employee.activeEmployee.lastName, employee.activeEmployee.employeeId)}>Delete</button>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row> : <UpdateActiveEmployee employee={employee} setShowUpdate={setShowUpdate} showUpdate={showUpdate} />
            }
        </>
    )
}



export default EmployeePage;