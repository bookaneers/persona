import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from 'formik';
import { addEmployee, fetchEmployees } from "../../store/employees";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
    const dispatch = useDispatch()
    // Lets the user know the employee has been added to the list
    const notify = (values) => {
        toast.success(`${values.firstName}  ${values.lastName} is now an employee`, {
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
    const idError = (id) => {
        toast.error(`ID: ${id} is already taken`, {
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

    useEffect(() => {
        dispatch(fetchEmployees())
    }, [])

    const employees = useSelector((state) => state.employees)

    // Finds if typed in id is already taken by another user
    // If it is it will stop return false which then stops the submissions and notifies the use the Id is already taken
    // If not proceed
    const generateRandom = (val) => {
        let IDS = []
        employees.employees.forEach(element => {
            IDS.push(element.employeeId)
        });
        if (IDS.includes(val)) {
            return false
        }
        return true

    }

    return (
        <Row className="form-card rounded shadow-lg p-3 ">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    middleName: '',
                    email: '',
                    position: '',
                    employeeId: '',
                    teamLead: '',
                    groupLead: '',
                    team: '',
                    companyName: '',
                    phoneNumber: '',
                    status: ''
                }}
                onSubmit={async (values) => {
                    // if (values.middleName === '') {
                    //     values.middleName = null
                    // }
                    let validate = generateRandom(values.employeeId)
                    if (validate == false) {
                        idError(values.employeeId)
                        return
                    }
                    console.log('Perfect')
                    dispatch(addEmployee(values))
                    notify(values)
                    // resets form after adding
                    document.getElementById("employee-form").reset();
                }}>
                {({ isSubmitting }) => (
                    <Form id="employee-form">
                        <Row className="add-employee-card">
                            <Col md={4}>
                                <label>First Name</label>
                                <Field className="form-control" name="firstName" required />
                            </Col>
                            <Col md={4}> <label>Last Name</label><Field className="form-control" name="lastName" required /></Col>
                            <Col md={4}> <label>MI</label><Field className="form-control" placeholder="optional" name="middleName" /></Col>
                        </Row>
                        <Row className="mt-4 ">
                            <Col md={6}>
                                <label>Email</label>
                                <Field className="form-control" type='email' placeholder="employee@inventive-group.com" name="email" required />
                            </Col>
                            <Col md={3}> <label>Position</label><Field className="form-control" name="position" required /></Col>
                            <Col md={3}> <label>ID</label><Field className="form-control" placeholder="4-digits" name="employeeId" /></Col>
                        </Row>
                        <Row className="mt-4 ">
                            <Col md={4}> <label>Group Lead (optional)</label><Field className="form-control" name="groupLead" /></Col>
                            <Col md={4}> <label>Team Lead (optional)</label><Field className="form-control" name="teamLead" /></Col>
                            <Col md={4}> <label>Department</label>
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
                            </Col>
                        </Row>
                        <Row className="mt-4 ">
                            <Col md={4}> <label>Company Name</label>
                                <Field component="select" id="companyName" name="companyName" className="form-control" required >
                                    <option value="" className="text-muted" disabled>Select Company</option>
                                    <option value="IG">Inventive Group</option>
                                    <option value="FFP">Fish Fighter Products</option>
                                    <option value="IWS">IWS</option>
                                    <option value="RBO">RazorBack OffRoad</option>
                                </Field>
                            </Col>
                            <Col md={4}> <label>Phone Number</label><Field className="form-control" placeholder="000-000-0000" name="phoneNumber" /></Col>
                            <Col md={4} >
                                <label>Status</label>
                                <Field component="select" id="status" name="status" className="form-control" required >
                                    <option value="" className="text-muted" disabled>Select Status</option>
                                    <option value="group-lead">Group-Lead</option>
                                    <option value="team-lead">Team-Lead</option>
                                    <option value="team-member">Team-Member</option>
                                </Field>
                            </Col>
                            <div className="mt-5 text-end">
                                <button className="btn bg-danger text-white px-3 py-2" type="submit" disabled={isSubmitting}>Submit</button>
                            </div>
                        </Row>
                    </Form>
                )}
            </Formik>
        </Row>
    )
}
export default AddEmployee;