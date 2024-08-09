import React from "react";
import { Container } from "react-bootstrap";
export const AddressMap = () => {
  return (
    <Container className="google-map-code">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8597825292136!2d73.05166591041288!3d19.0258993820941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1716037837718!5m2!1sen!2sin"
        width="500"
        height="400"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      />
    </Container>
  );
};
