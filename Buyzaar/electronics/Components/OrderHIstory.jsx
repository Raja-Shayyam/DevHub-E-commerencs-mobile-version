import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { customhook } from "../context/store";

const OrderHistory = ({ orders = [] }) => {
    const [openOrderId, setOpenOrderId] = useState(null);

    const { finalCheckoutData } = customhook()

    const toggleDetails = (id) => {
        console.log(id,openOrderId);
        
        setOpenOrderId(openOrderId === id ? null : id);
    };

    useEffect(()=>{
        console.log(finalCheckoutData);
        
    })
    return (
        <section
            style={{
                minHeight: "100vh",
                background: "#0d1b2a",
                color: "#e0e0e0",
            }}
            className="py-5"
        >
            <Container>
                <h3 className="text-center mb-4 neon-title">Order History</h3>

                {finalCheckoutData.map((order) => (
                    <div
                        key={order.iiiD}
                        className="mb-4 p-3 rounded-4"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(0,224,255,0.3)",
                            boxShadow: "0 0 20px rgba(0,224,255,0.15)",
                        }}
                    >
                        {/* SUMMARY */}
                        <Row className="align-items-center">
                            <Col md={8}>
                                <p className="mb-1">
                                    <strong>Order ID:</strong>{" "}
                                    <span style={{ color: "#00e0ff" }}>
                                        {((order.iiiD).toString()).slice(-6)}
                                    </span>
                                </p>
                                <p className="mb-1">
                                    <strong>Date:</strong>{" "}
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </p>
                                <p className="mb-0">
                                    <strong>Total:</strong>{" "}
                                    <span style={{ color: "#0aff9d" }}>
                                        PKR {order.total.toLocaleString()}
                                    </span>
                                </p>
                            </Col>

                            <Col md={4} className="text-md-end mt-3 mt-md-0">
                                <Badge bg="info" className="me-2">
                                    {order.paymentMethod.toUpperCase()}
                                </Badge>
                                <Button
                                    size="sm"
                                    className="neon-btn rounded-pill px-3"
                                    onClick={() => toggleDetails(order.iiiD)}
                                >
                                    {openOrderId === order.iiiD
                                        ? "Hide Details"
                                        : "View Details"}
                                </Button>
                            </Col>
                        </Row>

                        {/* DETAILS */}
                        {openOrderId === order.iiiD && (
                            <div className="mt-4">
                                <hr style={{ borderColor: "rgba(0,224,255,0.3)" }} />

                                {/* CUSTOMER INFO */}
                                <h6 className="section-heading">Customer Info</h6>
                                <p>
                                    {order.firstName} {order.lastName} ({order.gender})
                                </p>
                                <p>Email: {order.email}</p>
                                <p>Phone: {order.phoneNumber}</p>

                                {/* ADDRESS */}
                                <h6 className="section-heading mt-3">Delivery Address</h6>
                                <p>
                                    <strong>{order.addressLabel}</strong> —{" "}
                                    {order.recipientName}
                                </p>
                                <p>
                                    {order.city}, {order.state}, {order.country}
                                </p>
                                <p>Delivery Phone: {order.deliveryPhone}</p>

                                {/* ITEMS */}
                                <h6 className="section-heading mt-3">Items</h6>
                                {order.cartItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="d-flex justify-content-between mb-2"
                                    >
                                        <span>
                                            {item.name} × {item.quantity}
                                        </span>
                                        <span>PKR {item.price.toLocaleString()}</span>
                                    </div>
                                ))}

                                {/* TOTALS */}
                                <h6 className="section-heading mt-3">Payment Summary</h6>
                                <p>Subtotal: PKR {order.subtotal.toLocaleString()}</p>
                                <p>Shipping: PKR {order.shipping.toLocaleString()}</p>
                                <p className="fw-bold">
                                    Total:{" "}
                                    <span style={{ color: "#00e0ff" }}>
                                        PKR {order.total.toLocaleString()}
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </Container>
        </section>
    );
};

export default OrderHistory;
