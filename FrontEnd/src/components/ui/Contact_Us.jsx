import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { AddressMap } from "../../Iframe/map";
import { Save_Contact_Us } from "../../services/Contact_Us_service";
import address from "../../images/Address.jpg";
import time from "../../images/watch.avif";
import call from "../../images/call.jpg";
import "../../css/cards.css";
import Footer from "../library/footer";
import { NavigationBar } from "./NavigationBar";

export function ContactUs() {
  const [contactusfield, setContactusfield] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setContactusfield((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!contactusfield.first_name) {
      newErrors.first_name = "First Name is required";
    } else if (contactusfield.first_name.length < 3) {
      newErrors.first_name = "First Name must be at least 3 characters long";
    }
    if (!contactusfield.last_name) {
      newErrors.last_name = "Last Name is required";
    } else if (contactusfield.last_name.length < 3) {
      newErrors.last_name = "Last Name must be at least 3 characters long";
    }
    if (!contactusfield.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(contactusfield.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!contactusfield.message) {
      newErrors.message = "Message is required";
    } else if (contactusfield.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await Save_Contact_Us(contactusfield);
      console.log(response);
      alert("Thanks for Contacting Us, Check Your Mail!!!");
      setContactusfield({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <>
      <div>
        <NavigationBar />
        <Container className="contact-section">
          <Row>
            <Col lg={4}>
              <Card className="mb-4 contact-card">
                <Card.Img variant="top" src={address} />
                <Card.Body>
                  <Card.Title>Address</Card.Title>
                  <Card.Text>
                    Unit no.4, Reality Warehousing Pvt. Ltd., Behind Reliance Smart,
                    Wagholi, Pune, Maharastra - 412207
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="mb-4 contact-card">
                <Card.Img variant="top" src={time} />
                <Card.Body>
                  <Card.Title>Time</Card.Title>
                  <Card.Text>7 am - 10 pm </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="mb-4 contact-card">
                <Card.Img variant="top" src={call} />
                <Card.Body>
                  <Card.Title>Important Links</Card.Title>
                  <Card.Text>
                    <Nav className="me-auto">
                      <Nav.Link href="https://www.linkedin.com/feed/">
                        LinkedIn
                      </Nav.Link>
                      <Nav.Link href="https://cdac.in/index.aspx?id=MB">
                        C-DAC
                      </Nav.Link>
                      <Nav.Link href="#">
                        Contact Us
                      </Nav.Link>
                    </Nav>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="contact-form-container">
            <Col lg={6} className="contact-map">
              <AddressMap />
            </Col>
            <Col lg={6}>
              <h1>Connect With Us</h1>
              <Form className="mt-4" onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        name="first_name"
                        value={contactusfield.first_name}
                        onChange={handleFieldChange}
                        isInvalid={!!errors.first_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.first_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        name="last_name"
                        value={contactusfield.last_name}
                        onChange={handleFieldChange}
                        isInvalid={!!errors.last_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.last_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email id"
                    name="email"
                    value={contactusfield.email}
                    onChange={handleFieldChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Text"
                    name="message"
                    value={contactusfield.message}
                    onChange={handleFieldChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  type="submit"
                  variant="info"
                  size="lg"
                  className="d-block mt-4"
                >
                  Contact
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
