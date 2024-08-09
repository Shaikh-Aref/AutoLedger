import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { useState } from "react";
import Footer from "../../library/footer";
import { NavigationBar } from "../NavigationBar";
import { register } from "../../../services/Contact_Us_service";
import '../../../css/RegisterForm.css';
import { Link } from "react-router-dom";
import { Log_In } from "../../../constants/AppRoute";

export function RegisterForm() {
    const initialCredentials = {
        username: "",
        password: "",
    };

    const [credentials, setCredentials] = useState(initialCredentials);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validatePassword(credentials.password)) {
            setError("Password must be 6-10 characters long, contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character.");
            return;
        }

        try {
            const response = await register(credentials);
            setMessage(response.data.message);
            setCredentials(initialCredentials);
            setError(null);
        } catch (error) {
            setError(error.response?.data?.message || "An error occurred");
            setMessage(null);
        }
    };

    return (
        <>
            <NavigationBar />
            <Container className="center-container">
                <div className="form-container">
                    <h1 className="Sign">Sign Up</h1>
                    <Form onSubmit={handleSubmit}>
                        {message && <Alert variant="success">{message}</Alert>}
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Set Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Username"
                                        name="username"
                                        value={credentials.username}
                                        onChange={handleFieldChange}
                                        aria-label="Enter Username"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Set Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        value={credentials.password}
                                        onChange={handleFieldChange}
                                        aria-label="Enter Password"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" type="submit" className="w-100">
                                    Sign Up
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Container className="mt-3 text-center" >
                        <>Already have account.</> <br />
                        <Link to={Log_In} className="text-primary">Sign In</Link>
                    </Container>
                </div>

            </Container>
            <Footer />
        </>
    );
}
