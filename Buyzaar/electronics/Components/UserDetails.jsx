import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { myDetails } from "../Axoius/axiousAPI";
import useNav from "./NavLink";
import { customhook } from "../context/store";

const UserDetailsForm = () => {
  const { navgate } = useNav()
  const { user } = customhook()

  const [formData, setformData] = useState({
    firstName: "123",
    lastName: "123",
    // email: "",
    phone: "+92 ",
    dob: "123",
    gender: "123",
    avatar: "https://i.pravatar.cc/150?img=12",

    addressLabel: "Home",
    recipientName: "123",
    address1: "123",
    address2: "123",
    city: "123",
    state: "123",
    zip: "123",
    country: "Pakistan",
    deliveryPhone: "+92 ",
    userRef :user._id
  });
  
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleAvatarUpload = (e) => {
    const MAX_AVATAR_SIZE = 2 * 10 ; // 2MB
    const file = e.target.files[0];
    console.log(file);
    if (!file) return;
    
    if(!file.type.startsWith('image/')){
      toast.dark('íts not image')
    }

    if(file.size > MAX_AVATAR_SIZE){
      toast.dark('Larger than 2MB ')
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setformData({ ...formData, avatar: reader.result });
    };
    reader.readAsDataURL(file);
    console.log('avatar: ',reader.result, formData);
    
    toast.success('uploaded sucessfully that image of size '+ file.size / 1024 +' kb')
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Data:", formData, user);
    await myDetails(formData)
    // s
  };

  return (
  <section
    className="py-4 py-md-5"
    style={{
      minHeight: "100vh",
      background:
        "linear-gradient(180deg, #0d1b2a 0%, #1b263b 60%, #0a192f 100%)",
      color: "#e0e0e0",
    }}
  >
    <Container fluid="md">
      <Row className="justify-content-center px-2 px-md-0">
        <Col xl={7} lg={8} md={10} sm={12}>
          <div
            className="rounded-4 p-3 p-md-4"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(0,224,255,0.35)",
              boxShadow: "0 0 35px rgba(0,224,255,0.15)",
            }}
          >
            {/* HEADER */}
            <div className="text-center mb-4">
              <h3 className="fw-bold neon-title mb-1">
                Customer Information
              </h3>
              <small style={{ color: "#9baec8" }}>
                Manage your personal & delivery details
              </small>
            </div>

            {/* AVATAR */}
            <div className="d-flex flex-column align-items-center mb-4">
              <img
                src={formData.avatar}
                alt="Avatar"
                className="rounded-circle mb-3"
                style={{
                  width: 100,
                  height: 100,
                  border: "3px solid #00e0ff",
                  boxShadow: "0 0 18px rgba(0,224,255,.6)",
                }}
              />
              <label
                htmlFor="avatar"
                className="btn btn-outline-info btn-sm rounded-pill px-4"
              >
                Upload Photo
              </label>
              <input
                type="file"
                id="avatar"
                hidden
                accept="image/*"
                onChange={handleAvatarUpload}
              />
            </div>

            <Form onSubmit={handleSubmit}>
              {/* PERSONAL INFO */}
              <div className="mb-4">
                <h6 className="section-heading mb-3">
                  Personal Information
                </h6>

                <Row className="gy-3">
                  <Col md={6}>
                    <Form.Control
                      placeholder="First Name"
                      name="firstName"
                      onChange={handleChange}
                      style={inputStyle}
                      // required
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      placeholder="Last Name"
                      name="lastName"
                      onChange={handleChange}
                      style={inputStyle}
                      // required
                    />
                  </Col>

                  <Col xs={12}>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      onChange={handleChange}
                      style={inputStyle}
                      // required
                    />
                  </Col>

                  <Col xs={12}>
                    <Form.Control
                      placeholder="Phone Number"
                      name="phone"
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="date"
                      name="dob"
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Select
                      name="gender"
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Prefer not to say</option>
                    </Form.Select>
                  </Col>
                </Row>
              </div>

              {/* DIVIDER */}
              <div
                className="my-4"
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, #00e0ff, transparent)",
                }}
              />

              {/* ADDRESS */}
              <div>
                <h6 className="section-heading mb-3">
                  Delivery Address
                </h6>

                <Row className="gy-3">
                  <Col xs={12}>
                    <Form.Select
                      name="addressLabel"
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option>Home</option>
                      <option>Office</option>
                    </Form.Select>
                  </Col>

                  <Col xs={12}>
                    <Form.Control
                      placeholder="Recipient Full Name"
                      name="recipientName"
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </Col>

                  <Col xs={12}>
                    <Form.Control
                      placeholder="Address Line 1"
                      name="address1"
                      onChange={handleChange}
                      style={inputStyle}
                      // required
                    />
                  </Col>

                  <Col xs={12}>
                    <Form.Control
                      placeholder="Address Line 2 (Optional)"
                      name="address2"
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      placeholder="City"
                      name="city"
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      placeholder="State / Province"
                      name="state"
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      placeholder="ZIP / Postal Code"
                      name="zip"
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Select
                      name="country"
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option>Pakistan</option>
                      <option>India</option>
                      <option>UAE</option>
                      <option>USA</option>
                    </Form.Select>
                  </Col>

                  <Col xs={12}>
                    <Form.Control
                      placeholder="Delivery Phone Number"
                      name="deliveryPhone"
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </Col>
                </Row>
              </div>

              {/* ACTION */}
              <div className="text-center mt-4">
                <Button
                  type="submit"
                  className="px-5 py-2 rounded-pill fw-semibold neon-btn w-100 w-md-auto"
                >
                  Save & Continue
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

};

const inputStyle = {
  backgroundColor: "#112240",
  border: "1px solid rgba(0,224,255,0.4)",
  color: "#e0e0e0",
};

export default UserDetailsForm;