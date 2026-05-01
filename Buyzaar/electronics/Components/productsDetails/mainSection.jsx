import React, { useState } from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import { StarFill, CartPlus, ChatDots } from 'react-bootstrap-icons'
import useNav from '../NavLink';
import { customhook } from '../../context/store';

export const MainSection = ({ product, quantity, setQuantity }) => {
  console.log(product);
  const { navgate } = useNav()
  const [show, setShow] = useState({
    isShow: false,
    Show: ''
  })
  const { setcartItems } = customhook()

  // console.log('product.gallery ', product.gallery['0'], indx)
  return (
    <Row className="align-items-center">
      <Col md={6} className="text-center mb-5 mb-md-0">
        <div
          className="main-image border rounded-4 shadow-lg overflow-hidden mb-3"
          style={{
            backgroundColor: "#112240",
            border: "1px solid rgba(0, 224, 255, 0.3)",
            width: "100%",
            height: "400px", // unified height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {show.isShow ? (
            <img
              src={product.gallery[show.Show]}
              alt="Product view"
              className="img-fluid"
              style={{
                width: "100%",
                height: "70%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          ) : (
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid"
              style={{
                width: "90%",
                height: "90%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          )}
        </div>


        <div className="d-flex justify-content-center gap-3">
          {product.gallery.map((g, i) => (
            <img
              key={i}
              src={g}
              alt={`thumb-${i}`}
              className="img-thumbnail"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                backgroundColor: "#112240",
                border: "1px solid rgba(0, 224, 255, 0.2)",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
              onMouseOver={
                (e) => {
                  (e.target.style.border = "1px solid #00e0ff")
                  setShow({
                    isShow: true,
                    Show: i
                  })
                }}
              onMouseOut={(e) => {
                (e.target.style.border = "1px solid rgba(0, 224, 255, 0.2)")
                setShow({
                  isShow: false,
                  Show: ''
                })

              }
              }
            />
          ))}
        </div>
      </Col>

      <Col md={6}>
        <h2
          className="fw-bold mb-3"
          style={{
            color: "#00e0ff",
            textShadow: "0 0 10px rgba(0,224,255,0.6)",
          }}
        >
          {product.name}
        </h2>
        <p className="text-secondary">{product.category}</p>

        <div className="mb-3">
          {[...Array(5)].map((_, i) => (
            <StarFill
              key={i}
              size={20}
              color={i < Math.round(product.rating) ? "#00e0ff" : "#9baec8"}
              className="me-1"
            />
          ))}
          <span className="ms-2 text-secondary">({product.rating})</span>
        </div>

        <h4
          className="fw-bold mb-4"
          style={{ color: "#0aff9d", textShadow: "0 0 8px rgba(10,255,157,0.4)" }}
        >
          {product.price}
        </h4>

        <p className="text-light mb-4">{product.description}</p>

        <div className="d-flex align-items-center mb-4">
          <div
            className="d-flex align-items-center me-3"
            style={{
              backgroundColor: "#112240",
              border: "1px solid rgba(0,224,255,0.4)",
              borderRadius: "8px",
            }}
          >
            <button
              className="btn text-light"
              style={{
                background: "none",
                border: "none",
                color: "#00e0ff",
                fontSize: "20px",
              }}
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              −
            </button>
            <span
              style={{
                padding: "0 15px",
                fontWeight: "bold",
                color: "#00e0ff",
              }}
            >
              {quantity}
            </span>
            <button
              className="btn text-light"
              style={{
                background: "none",
                border: "none",
                color: "#00e0ff",
                fontSize: "20px",
              }}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <Button
            variant="outline-info"
            className="fw-semibold d-flex align-items-center gap-2 rounded-pill px-4 py-2"
            style={{
              // color: "#00e0ff",
              borderColor: "#00e0ff",
              boxShadow: "0 0 10px rgba(0,224,255,0.4)",
              transition: "all 0.3s ease",
            }}
            onClick={
              () => {
                setcartItems([product])
                navgate('/CheckDetails')
              }}
          >
            <CartPlus size={18} />
            Add to Cart
          </Button>
        </div>
      </Col>
    </Row>
  )
}
