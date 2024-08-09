import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../../css/footer.css'; // Import your custom CSS for Footer

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md="4">
            <h5>About Us</h5>
            <p>
              ASP Automobiles is committed to providing top-notch services
              with a focus on quality and reliability. Trust us to keep your
              vehicle running smoothly and safely on the road.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md="4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cars</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Contact Info Section */}
          <Col md="4">
            <h5>Contact Info</h5>
            <p>
              <i className="ri-map-pin-line"></i> KHARGHAR
            </p>
            <p>
              <i className="ri-phone-line"></i> +1-202-555-0149
            </p>
            <p>
              <i className="ri-mail-line"></i> asp@aspautomobiles.com
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 ASP Automobiles. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
