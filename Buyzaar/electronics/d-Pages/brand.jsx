import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import "../CSS/BrandSection.css"
import { customhook } from "../context/store";
import { CatagryProduct } from "../Components/catagryProduct";

const BrandsPage = () => {
  const { brands, Category } = customhook()

  const [catPro , setcatPro] = useState()

  return (
    <div className="brands-page">
      {/* === Hero Section === */}
      <section className="brands-hero d-flex align-items-center justify-content-center">
        <div className="overlay"></div>
        <div className="text-center text-light position-relative">
          <h1 className="hero-title">Our Trusted Brands</h1>
          <p className="hero-sub">
            Partnering with world-leading innovators.
          </p>
        </div>
      </section>

      {/* === Brands Showcase === */}
      <section className="py-5 brand-showcase">
        <Container>
          <h2 className="text-center mb-5 section-title">
            Explore Leading Brands
          </h2>

          <Row className="g-4">
            {brands.map((brand) => (
              <Col key={brand.id} md={6} lg={3}>
                <Card className="brand-card">
                  <div
                    className="brand-bg"
                    style={{ backgroundImage: `url(${brand.bg})` }}
                  ></div>
                  <div className="brand-content text-center">
                    <img src={brand.logo} alt={brand.name} className="brand-logo" />
                    <h4 className="brand-name">{brand.name}</h4>
                    <p className="brand-tagline">{brand.tagline}</p>
                    <Button variant="outline-light" className="explore-btn">
                      Explore <ArrowRight size={16} className="ms-2" />
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* === Category Grid Example === */}
      <section className="brand-categories py-5">
        <Container>
          <h2 className="text-center mb-4 section-title">Popular Product Lines</h2>
          <Row className="g-4 text-center">
            {Category.map(
              (cat, i) => (
                <Col key={i} xs={6} md={4} lg={2}>
                  <div className="cat-box" onClick={()=>setcatPro(cat.name)}>
                    <h6>{cat.cat}</h6>
                  </div>
                </Col>
              )
            )}
            <CatagryProduct catPro={catPro}/>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BrandsPage;
