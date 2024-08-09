import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "../library/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCustomerByID, updateCustomer } from "../../services/CustomerService";
import { CUSTOMER_LIST_ROUTE } from "../../constants/AppRoute";
import { NavigationBar } from "./NavigationBar";

export function CustomerEditForm() {
    const params = useParams();
    const navigate = useNavigate();

    const [Customer, setCustomer] = useState({ Sr_No: '', customer_name: '', vehicle_name: '', last_service_date: '', last_km: '', due_date: '', due_km: '', full_service: '', oil_change: '', washing: '', charges: '' });

    const getCustomerById = async () => {
        const response = await fetchCustomerByID(params.Sr_No);

        if (response.status === 200) {
            setCustomer(response.data);
        }
    }

    useEffect(() => {
        getCustomerById();
    }, [] );

    const handleFieldChange = (e) => {
        setCustomer({ ...Customer, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await updateCustomer(Customer);
        if (response.status === 200) {
            navigate(CUSTOMER_LIST_ROUTE);
        }
        else {
            //error handling
        }
    }
    return (

        <><NavigationBar />
            <Container>
                <Header title="Edit the customer data here" />
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Sr No</Form.Label>
                                <Form.Control type="text" placeholder="Enter customer name" name="Sr_No" value={Customer.Sr_No} readOnly/>
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Customer_name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter customer name" name="customer_name" value={Customer.customer_name} onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Vehicle_name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Vehicle Name" name="vehicle_name" value={Customer.vehicle_name} onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last_service_date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Last service date" name="last_service_date" value={Customer.last_service_date} onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last_km</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Last_km" name="last_km" value={Customer.last_km} onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Due_date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter Due_date" name="due_date" value={Customer.due_date} onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Due_km</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Due_Km" name="due_km" value={Customer.due_km} onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full_service</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Yes/No" name="full_service" value={Customer.full_service} onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Oil_change</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Yes/No" name="oil_change" value={Customer.oil_change} onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Washing</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Yes/No" name="washing" value={Customer.washing} onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Charges</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Charges" name="charges" value={Customer.charges} onChange={handleFieldChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Button type="submit" variant="primary">Update Customer</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </>
    )
}