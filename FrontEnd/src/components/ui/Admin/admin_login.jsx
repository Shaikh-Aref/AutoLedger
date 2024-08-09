import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { adminLogin } from "../../../services/Contact_Us_service";
// import { NavigationBar } from "../NavigationBar";
import Footer from "../../library/footer";
import { Link, useNavigate } from "react-router-dom";
import '../../../css/LoginForm.css'; // Import the CSS file
import { BASE_ROUTE, Sign_Up } from "../../../constants/AppRoute";


export function LoginForm() {
  const initialCredentials = {
    username: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate()

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setLoginError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!credentials.username) {
      newErrors.username = "Username is required";
    }
    if (!credentials.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await adminLogin(credentials);
      console.log(response.data.message);
      setLoginSuccess(true);
      setCredentials(initialCredentials);
      // Handle successful login (e.g., redirect, show success message)
    } catch (error) {
      console.log(error);
      setLoginError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      {/* <NavigationBar /> */}
      <Container className="login-container">
        <div className="login-form">
          <h1 className="log">Sign In</h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={credentials.username}
                    onChange={handleFieldChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={credentials.password}
                    onChange={handleFieldChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Col>
            </Row>
            <Container className="mt-3 text-center">
              <>Don't Have an Account</><br />
              <Link to={Sign_Up} className="text-primary">Sign Up</Link>
            </Container>
          </Form>

          {loginError && (
            <Row className="mt-4">
              <Col lg={12}>
                <Alert variant="danger">{loginError}</Alert>
              </Col>
            </Row>
          )}
          {loginSuccess && (
            <Row className="mt-4">
              <Col lg={12}>
                <Alert variant="success">Login Successful!</Alert>
                {navigate(BASE_ROUTE)}
              </Col>
            </Row>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}
