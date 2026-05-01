// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import { CreditCard, Truck, Cash, ArrowRightCircle } from "react-bootstrap-icons";
// import "../CSS/CheckDetails.css";
// import { customhook } from "../context/store";
// import { myAllDetails } from "../Axoius/axiousAPI";

// const CheckoutSection = () => {
//   const { cartItems, puser } = customhook();
//   const [payment, setPayment] = useState("card");

//   // ✅ USER DATA STATE
//   const [userSaveData, setUserSaveData] = useState({});

//   /* =========================
//      CART CALCULATIONS (UNCHANGED)
//   ========================== */
//   let subtotal = 0;
//   if (cartItems.length >= 1) {
//     subtotal = cartItems.reduce((sum, item) => {
//       const price = Number(item.price.replace(/[^0-9.-]+/g, ""));
//       return sum + price * item.qty;
//     }, 0);
//   }

//   const shipping = 500;
//   const total = subtotal + shipping;

//   /* =========================
//      FETCH USER DETAILS
//   ========================== */
//   const run = async () => {
//     try {
//       const reslt = await myAllDetails(puser.data.userRef);
//       setUserSaveData(reslt.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     run();
//   }, []);

//   /* =========================
//      HANDLE INPUT CHANGE
//   ========================== */
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserSaveData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   /* =========================
//      FINAL BUTTON LOGIC
//   ========================== */
//   const handleSaveAndProceed = () => {
//     const finalCheckoutData = {
//       ...userSaveData,
//       cartItems,
//       paymentMethod: payment,
//       subtotal,
//       shipping,
//       total,
//     };

//     console.log("✅ FINAL CHECKOUT DATA:", finalCheckoutData);
//     // Yahan API call / navigation laga sakte ho
//   };

//   return (
//     <section className="checkout-section text-light py-5">
//       <Container>
//         <h2 className="text-center mb-5 section-title">
//           Secure <span className="brand-glow">Checkout</span>
//         </h2>

//         <Row className="gy-4">
//           {/* ================= LEFT FORM ================= */}
//           <Col lg={8}>
//             <div className="checkout-form p-4 rounded-4">
//               <h5 className="mb-4 fw-semibold brand-glow-text">
//                 Shipping Details
//               </h5>

//               <Form>
//                 <Row className="g-3">
//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label>Full Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         value={`${userSaveData.firstName || ""} ${userSaveData.lastName || ""}`}
//                         onChange={(e) => {
//                           const [firstName, ...last] = e.target.value.split(" ");
//                           setUserSaveData((prev) => ({
//                             ...prev,
//                             firstName,
//                             lastName: last.join(" "),
//                           }));
//                         }}
//                       />
//                     </Form.Group>
//                   </Col>

//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label>Email</Form.Label>
//                       <Form.Control
//                         type="email"
//                         name="email"
//                         value={userSaveData.email || ""}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                   </Col>

//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label>Phone</Form.Label>
//                       <Form.Control
//                         type="tel"
//                         name="phoneNumber"
//                         value={userSaveData.phoneNumber || ""}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                   </Col>

//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label>City</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="city"
//                         value={userSaveData.city || ""}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                   </Col>

//                   <Col md={12}>
//                     <Form.Group>
//                       <Form.Label>Address</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="addressLabel"
//                         value={userSaveData.addressLabel || ""}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                   </Col>

//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label>State</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="state"
//                         value={userSaveData.state || ""}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                   </Col>

//                   <Col md={6}>
//                     <Form.Group>
//                       <Form.Label>Country</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="country"
//                         value={userSaveData.country || ""}
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <hr className="my-4 border-light" />

//                 {/* ================= PAYMENT ================= */}
{/* <h5 className="mb-3 fw-semibold brand-glow-text">Payment Method</h5>
                <div className="payment-options d-flex flex-wrap gap-3 mb-4">
                  <Card
                    className={`payment-card ${payment === "card" ? "active" : ""}`}
                    onClick={() => setPayment("card")}
                  >
                    <CreditCard size={24} />
                    <span>Credit / Debit Card</span>
                  </Card>
                  <Card
                    className={`payment-card ${payment === "cod" ? "active" : ""}`}
                    onClick={() => setPayment("cod")}
                  >
                    <Cash size={24} />
                    <span>Cash on Delivery</span>
                  </Card>
                  <Card
                    className={`payment-card ${payment === "bank" ? "active" : ""}`}
                    onClick={() => setPayment("bank")}
                  >
                    <Truck size={24} />
                    <span>Bank Transfer</span>
                  </Card>
                </div> */}

//                 <h5 className="mb-3 fw-semibold brand-glow-text">
//                   Payment Method
//                 </h5>

//                 <div className="payment-options d-flex gap-3 mb-4">
//                   <Card
//                     className={`payment-card ${payment === "card" ? "active" : ""}`}
//                     onClick={() => setPayment("card")}
//                   >
//                     <CreditCard size={22} /> Card
//                   </Card>

//                   <Card
//                     className={`payment-card ${payment === "cod" ? "active" : ""}`}
//                     onClick={() => setPayment("cod")}
//                   >
//                     <Cash size={22} /> COD
//                   </Card>

//                   <Card
//                     className={`payment-card ${payment === "bank" ? "active" : ""}`}
//                     onClick={() => setPayment("bank")}
//                   >
//                     <Truck size={22} /> Bank
//                   </Card>
//                 </div>

//                 <Button
//                   type="button"
//                   className="checkout-btn mt-2"
//                   onClick={handleSaveAndProceed}
//                 >
//                   Save & Proceed <ArrowRightCircle className="ms-2" />
//                 </Button>
//               </Form>
//             </div>
//           </Col>

//           {/* ================= RIGHT SUMMARY ================= */}
//           <Col lg={4}>
//             <div className="order-summary p-4 rounded-4">
//               <h5 className="fw-bold mb-3 text-danger">Final Summary</h5>

//               <ul className="list-unstyled mb-3">
//                 {cartItems.map((item) => (
//                   <li key={item.id} className="d-flex justify-content-between">
//                     <span>
//                       {item.name} x{item.qty}
//                     </span>
//                     <span>
//                       Rs. {(Number(item.price.replace(/,/g, "")) * item.qty).toLocaleString()}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <hr className="border-light" />

//               <div className="d-flex justify-content-between">
//                 <span>Subtotal</span>
//                 <span>Rs. {subtotal.toLocaleString()}</span>
//               </div>

//               <div className="d-flex justify-content-between">
//                 <span>Shipping</span>
//                 <span>Rs. {shipping}</span>
//               </div>

//               <hr className="border-light" />

//               <div className="d-flex justify-content-between fw-bold fs-5">
//                 <span>Total</span>
//                 <span className="brand-glow-text">
//                   Rs. {total.toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default CheckoutSection;



/*!   */

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { CreditCard, Truck, Cash, ArrowRightCircle } from "react-bootstrap-icons";
import "../CSS/CheckDetails.css";
import { customhook } from "../context/store";
import { myAllDetails } from "../Axoius/axiousAPI";

const CheckoutSection = () => {
  const { cartItems, puser, setfinalCheckoutData } = customhook()
  const [payment, setPayment] = useState("card");

  const [userSaveData, setUserSaveData] = useState({});
  console.log(cartItems);

  // const cartItems = [
  //   { id: 1, name: "Smart LED TV 55”", qty: 1, price: 95000 },
  //   // { id: 2, name: "Wireless Headphones", qty: 2, price: 18000 },
  // ];
  let subtotal = "";
  if (cartItems.length >= 1) {
    console.log(cartItems.length);
    // subtotal = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
    subtotal = cartItems.reduce((sum, item) => {
      const numericPrice = Number(item.price.replace(/[^0-9.-]+/g, ""));
      return sum + numericPrice;
    }, 0);
  }
  const [shipping, setShpping] = useState('')
  const [total, seTotal] = useState('')

  const run = async () => {
    try {
      const reslt = await myAllDetails(puser.data.userRef)
      console.log(reslt.data.data);
      setUserSaveData(reslt.data.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    run()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSaveData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveAndProceed = () => {
    const finalCheckoutData = {
      ...userSaveData,
      iiiD:Math.floor(10000000*200 + total/Math.random() * 900000),
      cartItems,
      paymentMethod: payment,
      subtotal,
      shipping,
      total,
    };

    console.log("✅ FINAL CHECKOUT DATA:", finalCheckoutData);
    // setfinalCheckoutData(finalCheckoutData)
    setfinalCheckoutData((prev) => [...prev, finalCheckoutData]);

    // Yahan API call / navigation laga sakte ho
  };

  const handleRadiobtn = (e) => {
    let ship
    if (e.target.value === 'standard') {
      ship = 3000
    } else {
      ship = 8000 
    }
    setShpping(ship)
    seTotal(subtotal + ship)
  }

  return (
    <section className="checkout-section text-light py-5">
      <Container>
        <h2 className="text-center mb-5 section-title">
          Secure <span className="brand-glow">Checkout</span>
        </h2>

        <Row className="gy-4">
          {/* Left Column — Form */}
          <Col lg={8}>
            <div className="checkout-form p-4 rounded-4">
              <h5 className="mb-4 fw-semibold brand-glow-text">Shipping Details</h5>

              <Form>
                <Row className="g-3">

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={`${userSaveData.firstName || ""} ${userSaveData.lastName || ""}`}
                        onChange={(e) => {
                          const [firstName, ...last] = e.target.value.split(" ");
                          setUserSaveData((prev) => ({
                            ...prev,
                            firstName,
                            lastName: last.join(" "),
                          }));
                        }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={userSaveData.email || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phoneNumber"
                        value={userSaveData.phoneNumber || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={userSaveData.city || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="addressLabel"
                        value={userSaveData.addressLabel || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={userSaveData.state || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        name="country"
                        value={userSaveData.country || ""}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>


                  <hr className="my-4 border-light" />


                  <Col md={12} className="mt-3">
                    <Form.Label>Delivery Option's</Form.Label>
                    <div className="d-flex justify-content-between mt-2">
                      <div className="d-inline-flex">
                        <Form.Check
                          type="radio"
                          name="delivery"
                          id="standard"
                          value="standard"
                          label="Standard (4–5 days)"
                          onChange={handleRadiobtn}
                        />
                        <span style={{ textDecorationLine: 'underline', color: '#0087ff', marginLeft: '8px' }}> *no rates</span>
                      </div>
                      <div className="d-inline-flex">
                        <Form.Check
                          type="radio"
                          name="delivery"
                          id="express"
                          value="express"
                          label="Express (1–2 days)"
                          onChange={handleRadiobtn}
                        />
                        <span style={{ textDecorationLine: 'underline', color: '#0087ff', marginLeft: '8px' }}> *extra 10%</span>
                      </div>

                    </div>
                  </Col>
                </Row>

                <hr className="my-4 border-light" />

                <h5 className="mb-3 fw-semibold brand-glow-text">Payment Method</h5>
                <div className="payment-options d-flex flex-wrap gap-3 mb-4">
                  <Card
                    className={`payment-card ${payment === "card" ? "active" : ""}`}
                    onClick={() => setPayment("card")}
                  >
                    <CreditCard size={24} />
                    <span>Credit / Debit Card</span>
                  </Card>
                  <Card
                    className={`payment-card ${payment === "cod" ? "active" : ""}`}
                    onClick={() => setPayment("cod")}
                  >
                    <Cash size={24} />
                    <span>Cash on Delivery</span>
                  </Card>
                  <Card
                    className={`payment-card ${payment === "bank" ? "active" : ""}`}
                    onClick={() => setPayment("bank")}
                  >
                    <Truck size={24} />
                    <span>Bank Transfer</span>
                  </Card>
                </div>

                {payment === "card" && (
                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <Form.Group controlId="cardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group controlId="expiry">
                        <Form.Label>Expiry</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" required />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group controlId="cvv">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="password" placeholder="***" required />
                      </Form.Group>
                    </Col>
                  </Row>
                )}

                {/* <Button type="submit" className="checkout-btn mt-2">
                  Place Order <ArrowRightCircle className="ms-2" />
                </Button> */}
                <Button
                  type="button"
                  className="checkout-btn mt-2"
                  onClick={handleSaveAndProceed}
                >
                  Save & Proceed <ArrowRightCircle className="ms-2" />
                </Button>
              </Form>
            </div>
          </Col>

          {/* Right Column — Order Summary */}
          <Col lg={4}>
            <div className="order-summary p-4 rounded-4">
              <h5 className="fw-bold mb-3 text-danger">Final Summary !</h5>
              <ul className="list-unstyled mb-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="d-flex justify-content-between mb-2">
                    <span>
                      {item.name} <small>x{item.quantity}</small>
                    </span>
                    <span>Rs. {(Number(item.price.replace(/,/g, "")) * item.quantity).toLocaleString()}</span>
                    {/* <span>Rs. {item.price.toLocaleString()+"  "+ item.qty}</span>{console.log(item)} */}
                  </li>
                ))}
              </ul>
              <hr className="border-light" />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>Rs. {shipping}</span>
              </div>
              <hr className="border-light" />
              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span className="brand-glow-text">Rs. {total.toLocaleString()}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  );
};

export default CheckoutSection;
