import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ABOUT_US, BASE_ROUTE, CONTACT_US, CUSTOMER_LIST_ROUTE, Log_In, REGISTRATION_ROUTE } from "../../constants/AppRoute";
import { useNavigate } from "react-router-dom";


export function NavigationBar() {

    const navigate = useNavigate();

    const handlelogOut = () => {
        navigate(Log_In)
    }
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" expand='lg'>
                <Container className="mb-4 pt-4">
                    <Navbar.Brand href="/">ASP SERVICES</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={BASE_ROUTE}>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={REGISTRATION_ROUTE}>
                                <Nav.Link>Register a Customer</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={CUSTOMER_LIST_ROUTE}>
                                <Nav.Link>Customer List</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={ABOUT_US}>
                                <Nav.Link>About Us</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={CONTACT_US}>
                                <Nav.Link>Contact Us</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to={Log_In}>
                                <Nav.Link>Log In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                    <Button type="submit" variant="success" onClick={handlelogOut}>Log Out</Button>
                </Container>
            </Navbar>
        </div>
    )
}

