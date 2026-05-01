import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { myAllDetails, WISHlist } from "../Axoius/axiousAPI";
import useNav from "./NavLink";
import { customhook } from "../context/store";

export const Wsh = ({ id }) => {
    const { navgate } = useNav();
    const { wishes, setWishes } = customhook()

    const run = async () => {
        const wih = await WISHlist(id)
        console.log("wih z^^^^^^^^^^^^^ ", wih);
        setWishes(wih.data.item)
    }
    // wishlistItems 
    useEffect(() => {
        run()
    }, [id])

    return <>

        <div className="mt-2 p-2"
            style={{
                cursor: "pointer",
                // transform:'translateY(-20px)'
            }}
        // onMouseOver={(e)=>{e.target.style.cursur = "pointer"}}
        >
            <Row>
                {/* {wishes.map((stat, i) => { */}
                <Col md={4} >
                    <div
                        className="text-center p-4 rounded-4 mb-4"
                        style={{
                            backgroundColor: "#1b263b",
                            border: "1px solid rgba(0,224,255,0.3)",
                            boxShadow: "0 0 15px rgba(0,224,255,0.1)",
                            transition: "0.3s ease",
                        }}
                        onClick={() => navgate('/orderhistory')}
                    >
                        <div
                            style={{
                                fontSize: "32px",
                                color: "#00e0ff",
                                textShadow: "0 0 10px rgba(0,224,255,0.6)",
                            }}
                        >
                            📦
                        </div>
                        <h5 className="fw-bold mt-2 mb-1" style={{ color: "#e0e0e0" }}>
                            12
                        </h5>
                        <p className="text-secondary">Orders</p>
                    </div>
                </Col>
                <Col md={4}
                    onClick={() => navgate('/wishdetail')}
                >
                    <div
                        className="text-center p-4 rounded-4 mb-4"
                        style={{
                            backgroundColor: "#1b263b",
                            border: "1px solid rgba(0,224,255,0.3)",
                            boxShadow: "0 0 15px rgba(0,224,255,0.1)",
                            transition: "0.3s ease",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "32px",
                                color: "#00e0ff",
                                textShadow: "0 0 10px rgba(0,224,255,0.6)",
                            }}
                        >
                            💎
                        </div>
                        <h5 className="fw-bold mt-2 mb-1" style={{ color: "#e0e0e0" }}>
                            {0}
                        </h5>
                        <p className="text-secondary">Wishlist</p>
                    </div>
                </Col>
                <Col md={4} >
                    <div
                        className="text-center p-4 rounded-4 mb-4"
                        style={{
                            backgroundColor: "#1b263b",
                            border: "1px solid rgba(0,224,255,0.3)",
                            boxShadow: "0 0 15px rgba(0,224,255,0.1)",
                            transition: "0.3s ease",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "32px",
                                color: "#00e0ff",
                                textShadow: "0 0 10px rgba(0,224,255,0.6)",
                            }}
                        >
                            💬
                        </div>
                        <h5 className="fw-bold mt-2 mb-1" style={{ color: "#e0e0e0" }}>
                            {0}
                        </h5>
                        <p className="text-secondary">Comments</p>
                    </div>
                </Col>
                {/* })} */}
            </Row>
        </div>
    </>
};