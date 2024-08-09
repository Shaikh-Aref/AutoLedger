import React from "react";
import { Button, Col, Container, Form, Row, Toast, ToastContainer } from "react-bootstrap";
import { Header } from "../library/Header";
import { useState } from "react";
import { saveCustomer } from "../../services/CustomerService";
import Footer from "../library/footer";
import { NavigationBar } from "./NavigationBar";
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../../css/CustomerRegistration.css"; // Import the custom CSS file
import { useNavigate } from "react-router-dom";
import { CUSTOMER_LIST_ROUTE } from "../../constants/AppRoute";

export function CustomerRegistrationForm() {
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const handleCloseToast = () => {
        setShowToast(false);
    }

    return (
        <>
            <NavigationBar />
            <Header title="Register Customers" />
            <Container className="custom-container">
                <Formik
                    initialValues={{
                        customer_name: '',
                        vehicle_name: '',
                        last_service_date: '',
                        last_km: '',
                        due_date: '',
                        due_km: '',
                        full_service: '',
                        oil_change: '',
                        washing: '',
                        charges: ''
                    }}
                    validationSchema={Yup.object().shape({
                        customer_name: Yup.string().required('Customer name is required'),
                        vehicle_name: Yup.string().required('Vehicle name is required'),
                        last_service_date: Yup.date().required('Last service date is required'),
                        last_km: Yup.number().required('Last Km is required').positive('Last Km must be a positive number'),
                        due_date: Yup.date().required('Due date is required'),
                        due_km: Yup.number().required('Due Km is required').positive('Due Km must be a positive number'),
                        full_service: Yup.string().required('Please specify if full service is required'),
                        oil_change: Yup.string().required('Please specify if oil change is required'),
                        washing: Yup.string().required('Please specify if washing is required'),
                        charges: Yup.number().required('Charges are required').positive('Charges must be a positive number')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        saveCustomer(values)
                            .then((response) => {
                                setShowToast(true);
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                            .finally(() => {
                                setSubmitting(false);
                            });
                    }}
                >
                    {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Customer Name</Form.Label>
                                        <Field type="text" name="customer_name" className={`form-control ${touched.customer_name && errors.customer_name ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name="customer_name" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Vehicle Name</Form.Label>
                                        <Field type="text" name="vehicle_name" className={`form-control ${touched.vehicle_name && errors.vehicle_name ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name="vehicle_name" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last Service Date</Form.Label>
                                        <Field type="date" name="last_service_date" className={`form-control ${touched.last_service_date && errors.last_service_date ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name="last_service_date" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last Km</Form.Label>
                                        <Field type="number" name="last_km" className={`form-control ${touched.last_km && errors.last_km ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name="last_km" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Due Date</Form.Label>
                                        <Field type="date" name="due_date" className={`form-control ${touched.due_date && errors.due_date ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name="due_date" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Due Km</Form.Label>
                                        <Field type="number" name="due_km" className={`form-control ${touched.due_km && errors.due_km ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name="due_km" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Full Service</Form.Label>
                                        <Field type="text" name="full_service" className={`form-control ${touched.full_service && errors.full_service ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name="full_service" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Oil Change</Form.Label>
                                        <Field type="text" name="oil_change" className={`form-control ${touched.oil_change && errors.oil_change ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name="oil_change" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Washing</Form.Label>
                                        <Field type="text" name="washing" className={`form-control ${touched.washing && errors.washing ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name="washing" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Charges</Form.Label>
                                        <Field type="number" name="charges" className={`form-control ${touched.charges && errors.charges ? 'is-invalid' : ''}`} />
                                        <ErrorMessage name="charges" component="div" className="invalid-feedback" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <Button className="mb-4" type="submit" variant="primary" disabled={isSubmitting}>Register Customer</Button>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Container>
            <ToastContainer position="top-end">
                <
                    Toast bg="success" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Customer registered</Toast.Body>
                    {navigate(CUSTOMER_LIST_ROUTE)}
                </Toast>
            </ToastContainer>
            <Footer />
        </>
    );
}
