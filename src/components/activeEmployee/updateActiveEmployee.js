import { Col, Row } from "react-bootstrap";
import { Formik, Field, Form } from 'formik';
import { useDispatch } from "react-redux";
import { updateEmployee } from "../../store/employees";
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const UpdateActiveEmployee = ({ employee, setShowUpdate, showUpdate }) => {
    const dispatch = useDispatch()
    const notify = () => {
        // notifies the employees information has been updated
        toast.success(`${employee.activeEmployee.firstName}  ${employee.activeEmployee.lastName} info has been updated`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <>
            {employee.activeEmployee ?
                <Row>

                    <Formik
                        initialValues={{
                            firstName: `${employee.activeEmployee.firstName}`,
                            lastName: `${employee.activeEmployee.lastName}`,
                            middleName: `${employee.activeEmployee.middleName}`,
                            email: `${employee.activeEmployee.email}`,
                            position: `${employee.activeEmployee.position}`,
                            employeeId: `${employee.activeEmployee.employeeId}`,
                            teamLead: `${employee.activeEmployee.teamLead}`,
                            groupLead: `${employee.activeEmployee.groupLead}`,
                            team: `${employee.activeEmployee.team}`,
                            companyName: `${employee.activeEmployee.companyName}`,
                            phoneNumber: `${employee.activeEmployee.phoneNumber}`,
                            status: `${employee.activeEmployee.status}`,
                            _id: `${employee.activeEmployee._id}`
                        }}
                        onSubmit={async (values) => {
                            dispatch(updateEmployee(values))
                            notify()
                            setShowUpdate(showUpdate ? false : true)
                        }}
                    >
                        {({ isSubmitting }) => (

                            <Form id="update-form">
                                <Col md={12} className='card-placement'>
                                    <div className="bg-white p-3 m-2 ms-4 shadow rounded active-employee-card">
                                        <Row className="mx-auto">
                                            <Col md={4}>
                                                <h4 className="border-bottom border-dark border-2">Name</h4>
                                                <Field name='firstName' className='form-control' />
                                                <h4 className="border-bottom border-dark border-2 text-start mt-3">Status</h4>
                                                <Field component="select" id="status" name="status" className="form-control" required >
                                                    <option value="" className="text-muted" disabled>Select Status</option>
                                                    <option value="group-lead">Group-Lead</option>
                                                    <option value="team-lead">Team-Lead</option>
                                                    <option value="team-member">Team-Member</option>
                                                </Field>
                                            </Col>
                                            <Col md={4}>
                                                <div className="text-end me-2">
                                                    <h4 className="border-bottom border-dark border-2 text-start">Last Name</h4>
                                                    <Field name='lastName' className='form-control' />
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="text-end me-2">
                                                    <h4 className="border-bottom border-dark border-2 text-start">ID</h4>
                                                    <Field name='employeeId' className='form-control' />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mt-4 mx-auto">
                                            <Col md={5}>
                                                <h4 className="border-bottom border-dark border-2">Email</h4>
                                                <div className="fs-5"><Field name='email' className='form-control' type='email' /></div>
                                            </Col>
                                            <Col md={3}>
                                                <h4 className="border-bottom border-dark border-2">Phone Number</h4>
                                                <div className="fs-5"><Field name='phoneNumber' className='form-control' placeholder="000-000-0000" /></div>
                                            </Col>
                                            <Col md={3}>
                                                <h4 className="border-bottom border-dark border-2">Department</h4>
                                                <div className="fs-5">
                                                    <Field component="select" id="team" name="team" className="form-control" required >
                                                        <option value="" className="text-muted" disabled>Select Department</option>
                                                        <option value="accounting">Accounting</option>
                                                        <option value="administration">Administration</option>
                                                        <option value="engineering">Engineering</option>
                                                        <option value="hot-rod-iws">Hot Rod IWS</option>
                                                        <option value="it">Information Technology</option>
                                                        <option value="laser">Laser</option>
                                                        <option value="machine-shop">Machine Shop</option>
                                                        <option value="maintenance">Maintenance</option>
                                                        <option value="marketing">Marketing</option>
                                                        <option value="night-shift">Night Shift</option>
                                                        <option value="parts-iws">Parts IWS</option>
                                                        <option value="powder-coating">Powder Coating</option>
                                                        <option value="press-brake">Press Brake</option>
                                                        <option value="production">Production</option>
                                                        <option value="purchasing">purchasing</option>
                                                        <option value="sales">sales</option>
                                                        <option value="service-iws">service IWS</option>
                                                        <option value="shipping">Shipping</option>
                                                        <option value="shop-iws">Shop IWS</option>
                                                        <option value="welding">Welding</option>
                                                    </Field>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mt-5 mx-auto justify-content-between">
                                            <Col md={6}>
                                                <h4 className="border-bottom border-dark border-2">Position</h4>
                                                <div className="fs-5"><Field name='position' className='form-control' /></div>
                                            </Col>
                                            <Col md={6}>
                                                <h4 className="border-bottom border-dark border-2">Company Name</h4>
                                                <div className="fs-5">
                                                    <Field component="select" id="companyName" name="companyName" className="form-control" required >
                                                        <option value="" className="text-muted" disabled>Select Company</option>
                                                        <option value="IG">Inventive Group</option>
                                                        <option value="FFP">Fish Fighter Products</option>
                                                        <option value="IWS">IWS</option>
                                                        <option value="RBO">RazorBack OffRoad</option>
                                                    </Field></div>
                                            </Col>
                                        </Row>
                                        <Row className="mt-5 mx-auto justify-content-between">
                                            <Col md={6}>
                                                <h4 className="border-bottom border-dark border-2">Group Lead</h4>
                                                <div className="fs-5"><Field name='groupLead' className='form-control' /></div>
                                            </Col>
                                            <Col md={6}>
                                                <h4 className="border-bottom border-dark border-2">Team Lead</h4>
                                                <div className="fs-5"><Field name='teamLead' className='form-control' /></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <div className="mt-4 text-end">
                                                <button className="btn btn-success" type="submit" disabled={isSubmitting}>
                                                    Confirm Update
                                                </button>
                                                <button className="btn btn-danger ms-3" onClick={() => setShowUpdate(showUpdate ? false : true)}>
                                                    Cancel
                                                </button>
                                            </div>
                                        </Row>
                                    </div>
                                </Col>
                            </Form>
                        )}
                    </Formik>
                </Row>
                : null}
        </>
    )
}

export default UpdateActiveEmployee;