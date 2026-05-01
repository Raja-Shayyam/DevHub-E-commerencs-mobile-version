import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { customhook } from '../context/store';

export const CatagryProduct = ({ catPro }) => {
  const { products } = customhook()

  return (
    <>
      <Container>
        <p className="text-center my-3 section-sub">
          Explore our best-selling product categories from top electronic brands. {catPro}
        </p>

        <Row className="g-4 text-center">
          {products
            .filter((p) => p.category === catPro)
            .map((cat, i) => (
              <Col key={i} xs={6} md={4} lg={2}>
                <div className="cat-box">
                  <Card.Img src={cat.img} alt={cat.name} className="cat-icon" />
                  <h6 className="cat-title">{cat.name}</h6>
                  <p className="cat-desc">{cat.desc}</p>
                </div>
              </Col>
            ))}

        </Row>

        <div className="text-center mt-5">
          <Button className="explore-all-btn px-4 py-2">
            View All Product Categories
          </Button>
        </div>
      </Container>
    </>
  )
}



// [
//   { name: "Smart TVs", icon: "/images/icons/tv.png", desc: "Crystal-clear 4K & OLED Displays" },
//   { name: "Air Conditioners", icon: "/images/icons/ac.png", desc: "Energy-efficient cooling systems" },
//   { name: "Refrigerators", icon: "/images/icons/fridge.png", desc: "Modern frost-free designs" },
//   { name: "Audio Systems", icon: "/images/icons/audio.png", desc: "Premium surround sound" },
//   { name: "Laptops", icon: "/images/icons/laptop.png", desc: "Powerful and portable performance" },
//   { name: "Microwaves", icon: "/images/icons/microwave.png", desc: "Fast, efficient, and stylish" },
// ] 