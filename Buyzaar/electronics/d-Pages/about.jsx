import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { CheckCircle, Cpu, LightningCharge, ShieldLock } from "react-bootstrap-icons";
import { CheckCircleFill, GraphUp, HeartFill, ShieldFill } from "react-bootstrap-icons";

import "../CSS/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section text-light py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Image */}
          <Col md={6} className="mb-5 mb-md-0">
            <div className="about-image-wrap position-relative">
              <img
                src="https://www.monaco.edu/wp-content/uploads/sites/4/2021/09/Luxury_management.jpg"
                alt="About BuyZaar Fashion"
                className="img-fluid rounded-4 shadow-lg about-image"
              />
              {/* <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1073"
                alt="About BuyZaar Fashion"
                className="img-fluid rounded-4 shadow-lg about-image"
              /> */}
              <div className="about-glow"></div>
            </div>
          </Col>

          {/* Right Content */}
          <Col md={6} className="about-image-wrap">
            <h2 className="fw-bold mb-3">
              About <span className="brand-glow">BuyZaar</span>
            </h2>
            <p className="text-secondary mb-4">
              BuyZaar is your go-to destination for premium fashion essentials —
              from timeless shirts and cozy hoodies to elegant luxury watches.
              We bring together the world’s top brands like ZARA, Puma, Rolex, and Casio,
              offering authentic quality and unbeatable style for every occasion.
            </p>

            <Row className="mb-4">
              <Col xs={6} className="mb-3">
                <div className="d-flex align-items-center gap-2">
                  <CheckCircleFill size={22} color="#00c6ff" />
                  <span>Authentic Brands</span>
                </div>
              </Col>
              <Col xs={6} className="mb-3">
                <div className="d-flex align-items-center gap-2">
                  <GraphUp size={22} color="#00c6ff" />
                  <span>Latest Trends</span>
                </div>
              </Col>
              <br />
              <br />
              <Col xs={6} className="mb-3">
                <div className="d-flex align-items-center gap-2">
                  <HeartFill size={22} color="#00c6ff" />
                  <span>Customer-Favorite Styles</span>
                </div>
              </Col>
              <Col xs={6} className="mb-3">
                <div className="d-flex align-items-center gap-2">
                  <ShieldFill size={22} color="#00c6ff" />
                  <span>Guaranteed Quality</span>
                </div>
              </Col>
            </Row>

            <Button variant="light" className="px-4 py-2 fw-semibold cta-btn">
              Explore Collection
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
