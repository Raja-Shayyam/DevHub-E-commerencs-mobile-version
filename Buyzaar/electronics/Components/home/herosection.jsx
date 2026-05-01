import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import '../../CSS/HomeSection.css'
import { NavLink } from "react-router-dom";
import useNav from "../Navbar";

export const Herosection = () => {
  const {navgate} = useNav()
  return (
    <section className="home-section d-flex align-items-center text-light">
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-5 fw-bold mb-3 hero-title">
              Discover <span className="brand-glow">Innovation</span><br />
              that Powers Your Lifestyle
            </h1>
            <p className="lead mb-4 text-secondary hero-desc">
              Experience the future of smart living with our premium range of
              home electronics — designed for performance, style, and
              sustainability.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start"
              style={{ zIndex: '2', position: 'relative' }}
            >
              <NavLink to="/product" >
                <Button variant="light" className="cta-btn px-4 py-3 fw-semibold">
                  Explore Products <ArrowRightCircle size={20} className="ms-2" />
                </Button>
              </NavLink>
              <Button variant="outline-light" className="cta-btn-outline px-4 py-2"
                onClick={() => navgate('/about')}
              >
                Learn More
              </Button>
            </div>
          </Col>

          {/* Right Side Illustration */}
          <Col md={6} className="text-center mt-5 mt-md-0">
            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1680292783974-a9a336c10366?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1988"
                // src="https://plus.unsplash.com/premium_photo-1682124905227-cec770a2ef4a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
                alt="Smart Living Devices"
                className="img-fluid hero-image"
              />
              <div className="hero-glow"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
