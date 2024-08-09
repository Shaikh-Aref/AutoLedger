import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";
import Footer from "../library/footer";
import oilChangeImage from "../../images/oil-change.jpg";
import carServiceImage from "../../images/car-service.jpg";
import carWashingImage from "../../images/car-washing.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import { Carousel } from 'react-bootstrap';

export function Admin() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="d-block w-100" src={img1} alt="Image 1" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="d-block w-100" src={img2} alt="Image 2" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="d-block w-100" src={img3} alt="Image 3" />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="mb-4">
                <div>
                    <section className="hero__form-section">
                        <Container>
                            <Row className="form__row justify-content-center">
                                <Col lg="8" md="8" sm="12" className="text-center">
                                    <div className="find__service-left">
                                        <h1>ASP Automobiles</h1>
                                        <h2>Find the best service for your car</h2>
                                        At ASP Automobiles, we understand the importance of your
                                        vehicle to your daily life. Our team of certified
                                        professionals is committed to providing top-notch services
                                        with a focus on quality and reliability. Trust us to keep your
                                        vehicle running smoothly and safely on the road. Your
                                        satisfaction is our highest priority.
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container className="mt-4">
                            <Row className="text-center">
                                <Col>
                                    <h2 className="section__title">Special Service Offers</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4" md="6" sm="12">
                                    <Card className="service__card">
                                        <Card.Img variant="top" src={oilChangeImage} alt="Oil Change" />
                                        <Card.Body>
                                            <Card.Title>Oil Change</Card.Title>
                                            <Card.Text>
                                                Keep your engine running smoothly with our comprehensive oil
                                                change service, including filter replacement and a thorough
                                                checkup.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <Card className="service__card">
                                        <Card.Img
                                            variant="top"
                                            src={carServiceImage}
                                            alt="Car Service"
                                        />
                                        <Card.Body>
                                            <Card.Title>Car Service</Card.Title>
                                            <Card.Text>
                                                Our expert mechanics provide top-notch service for all car
                                                models, ensuring your vehicle is in top condition.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4" md="6" sm="12">
                                    <Card className="service__card">
                                        <Card.Img
                                            variant="top"
                                            src={carWashingImage}
                                            alt="Car Washing"
                                        />
                                        <Card.Body>
                                            <Card.Title>Car Washing</Card.Title>
                                            <Card.Text>
                                                Treat your car to a thorough cleaning with our car washing
                                                service, leaving it sparkling clean inside and out.
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </Container>
            <Footer />
        </>
    )
}