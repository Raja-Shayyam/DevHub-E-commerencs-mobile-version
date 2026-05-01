// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
// import { PencilSquare, CheckCircle, PersonCircle } from "react-bootstrap-icons";
// import { customhook } from "../context/store";
// import { Profileimg } from "./profileimg";
// import { apisME } from "../Axoius/axiousAPI";

// const Profile = () => {
//   const { puser, psetUser, setUlog } = customhook()
//   const [isEditing, setIsEditing] = useState(false);
//   // const [user, setUser] = useState({
//   //   name: "Adrian Khan",
//   //   email: "adrian.khan@example.com",
//   //   phone: "+92 300 1234567",
//   //   role: "Customer",
//   //   address: "Islamabad, Pakistan",
//   //   avatar: "https://i.pravatar.cc/150?img=12",
//   // });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     psetUser({ ...puser, [name]: value });
//   };

//   const handleMYprofile = async () => {
//     // psetUser({
//     //     name: result.data.name,
//     //     email: result.data.email,
//     //     phone: "+92 *** *******",
//     //     role: "Customer",
//     //     address: "Islamabad, Pakistan",
//     //     avatar: "https://i.pravatar.cc/150?img=12"
//     //   })
//   }
//   useEffect(() => {
//     console.log('from profile sectioin');

//     handleMYprofile()
//   }, [])

//   const handleLOGOUT = ()=>{
//     console.log('logout');

//     localStorage.removeItem('tk');
//     setUlog(false)
//   }

//   return (
//     <section
//       className="py-5"
//       style={{
//         background: "linear-gradient(180deg, #0d1b2a 0%, #1b263b 60%, #0a192f 100%)",
//         color: "#e0e0e0",
//         minHeight: "100vh",
//       }}
//     >
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={10} lg={8}>
//             <div
//               className="p-4 rounded-4 mb-4 text-center"
//               style={{
//                 backgroundColor: "rgba(255,255,255,0.05)",
//                 border: "1px solid rgba(0,224,255,0.4)",
//                 boxShadow: "0 0 25px rgba(0,224,255,0.1)",
//               }}
//             >
//               <div>
//                 <Profileimg puser={puser} size={'120px'} />
//               </div>
//               <h3
//                 className="fw-bold mb-1 mt-3"
//                 style={{
//                   color: "#00e0ff",
//                   textShadow: "0 0 12px rgba(0,224,255,0.7)",
//                 }}
//               >
//                 {puser.name}
//               </h3>
//               <p className="text-secondary mb-0">{puser.role}</p>
//               <p className="text-secondary">{puser.email}</p>

//               <div className='d-flex justify-content-evenly'>

//                 <Button
//                   variant="outline-info"
//                   className="rounded-pill mt-3 px-4 py-2 fw-semibold"
//                   style={{
//                     color: "#00e0ff",
//                     borderColor: "#00e0ff",
//                     boxShadow: "0 0 10px rgba(0,224,255,0.4)",
//                   }}
//                   onClick={() => setIsEditing(!isEditing)}
//                 >
//                   {isEditing ? (
//                     <>
//                       <CheckCircle size={18} className="me-2" /> Save Changes
//                     </>
//                   ) : (
//                     <>
//                       <PencilSquare size={18} className="me-2" /> Edit Profile
//                     </>
//                   )}
//                 </Button>

//                 <Button
//                   variant="outline-info"
//                   className="rounded-pill mt-3 px-4 py-2 fw-semibold
//                     text-light  btn-outline-danger
//                   "
//                   style={{
//                     // color: "#00e0ff",
//                     // borderColor: "#00e0ff",
//                     // boxShadow: "0 0 10px rgba(0,224,255,0.4)",
//                   }}
//                   onClick={handleLOGOUT}
//                 >
//                   LogOut
//                 </Button>
//               </div>
//             </div>

//             {/* === Editable Form === */}
//             <Card
//               className="p-4 mb-4 rounded-4"
//               style={{
//                 backgroundColor: "rgba(17,34,64,0.7)",
//                 border: "1px solid rgba(0,224,255,0.3)",
//                 boxShadow: "0 0 20px rgba(0,224,255,0.1)",
//               }}
//             >
//               <h4
//                 className="fw-bold mb-4"
//                 style={{ color: "#00e0ff", textShadow: "0 0 8px rgba(0,224,255,0.6)" }}
//               >
//                 Profile Information
//               </h4>
//               <Form>
//                 <Form.Group className="mb-3">
//                   <Form.Label style={{ color: "#9baec8" }}>Full Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     value={puser.name}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                     style={{
//                       backgroundColor: "#112240",
//                       border: "1px solid rgba(0,224,255,0.4)",
//                       color: "#e0e0e0",
//                     }}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label style={{ color: "#9baec8" }}>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={puser.email}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                     style={{
//                       backgroundColor: "#112240",
//                       border: "1px solid rgba(0,224,255,0.4)",
//                       color: "#e0e0e0",
//                     }}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label style={{ color: "#9baec8" }}>Phone</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="phone"
//                     value={puser.phone}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                     style={{
//                       backgroundColor: "#112240",
//                       border: "1px solid rgba(0,224,255,0.4)",
//                       color: "#e0e0e0 !important",
//                     }}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label style={{ color: "#9baec8" }}>Address</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={2}
//                     name="address"
//                     value={puser.address}
//                     onChange={handleChange}
//                     disabled={!isEditing}
//                     style={{
//                       backgroundColor: "#112240",
//                       border: "1px solid rgba(0,224,255,0.4)",
//                       color: "#e0e0e0",
//                       resize: "none",
//                     }}
//                   />
//                 </Form.Group>
//               </Form>
//             </Card>

//             {/* === Stats Section === */}
//             <Row>
//               {[
//                 { title: "Orders", value: 12, icon: "📦" },
//                 { title: "Wishlist", value: 5, icon: "💎" },
//                 { title: "Comments", value: 8, icon: "💬" },
//               ].map((stat, i) => (
//                 <Col md={4} key={i}>
//                   <div
//                     className="text-center p-4 rounded-4 mb-4"
//                     style={{
//                       backgroundColor: "#1b263b",
//                       border: "1px solid rgba(0,224,255,0.3)",
//                       boxShadow: "0 0 15px rgba(0,224,255,0.1)",
//                       transition: "0.3s ease",
//                     }}
//                   >
//                     <div
//                       style={{
//                         fontSize: "32px",
//                         color: "#00e0ff",
//                         textShadow: "0 0 10px rgba(0,224,255,0.6)",
//                       }}
//                     >
//                       {stat.icon}
//                     </div>
//                     <h5 className="fw-bold mt-2 mb-1" style={{ color: "#e0e0e0" }}>
//                       {stat.value}
//                     </h5>
//                     <p className="text-secondary">{stat.title}</p>
//                   </div>
//                 </Col>
//               ))}
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { PencilSquare, CheckCircle, BoxArrowRight } from "react-bootstrap-icons";
import { toast, ToastContainer } from "react-toastify";
import { myAllDetails, myDetails, myDetailsUpdate, prodInWISHlist, WISHlist } from "../Axoius/axiousAPI";
import useNav from "./NavLink";
import { customhook } from "../context/store";
import { Wsh } from "./wishes";

const UserDetailsForm = () => {
  const { navgate } = useNav();
  const { user, puser, setUlog } = customhook();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "my_first name",
    lastName: "my_last name",
    email: "my_email name",
    phoneNumber: "my_phone number",
    dateOfBirth: "",
    gender: "male",
    profilePicture: "https://i.pravatar.cc/150?img=12",

    addressLabel: "Home",
    recipientName: "my_name as recipnt",
    address1: "my_Address name",
    address2: "my_Address 2 name",
    city: "my_City name",
    state: "my_state name",
    zip: "23",
    country: "Pakistan",
    deliveryPhone: "3",
    userRef: user._id,
  });


  const run = async () => {
    console.log(puser, user);
    const reslt = await myAllDetails(user._id)
    // psetUser(reslt.data);
    console.log(reslt);
   

    // if(!reslt){
    // setFormData(puser.data)
    setFormData(reslt.data.data)
    // }

  }

  useEffect(() => {
    run()
  }, [user, puser])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarUpload = (e) => {
    if (!isEditing) return;

    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Only image files allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be under 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, avatar: reader.result });
    };
    reader.readAsDataURL(file);

    toast.success("Avatar updated");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEditing) return;
    try {
      const cond = await myDetails(user._id, formData);
      console.log(cond);

      if (cond.data.message == 'foundThatUser') {
        console.log(cond.data.message);

        const cnd = await myDetailsUpdate(user._id, formData);
        console.log(cnd);

        toast.success("Profile updated successfully");
      }
      toast.success("Profile data added successfully");

    } catch (error) {
      toast.error(error)
    }
    setIsEditing(false);
    // navgate("/Profile");
  };


  const handleLogout = () => {
    localStorage.removeItem("tk");
    setUlog(false);
    navgate("/login");
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
        <ToastContainer autoClose={2000} />

        <Row className="justify-content-center">
          <Col xl={7} lg={8} md={10}>

            {/* ===== PROFILE HEADER ===== */}
            <div
              className="text-center p-4 mb-4 rounded-4"
              style={cardStyle}
            >
              <img
                src={formData.profilePicture}
                alt="avatar"
                className="rounded-circle mb-3"
                style={avatarStyle}
              />

              <h3 className="fw-bold text-info">
                {formData.firstName} {formData.lastName}
              </h3>
              <p className="text-secondary mb-1">{formData.email}</p>

              <div className="d-flex justify-content-center gap-3 mt-3">
                <Button
                  variant="outline-info"
                  className="rounded-pill px-4"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? (
                    <>
                      <CheckCircle className="me-2" /> Save Mode
                    </>
                  ) : (
                    <>
                      <PencilSquare className="me-2" /> Edit Profile
                    </>
                  )}
                </Button>

                <Button
                  variant="outline-danger"
                  className="rounded-pill px-4"
                  onClick={handleLogout}
                >
                  <BoxArrowRight className="me-2" />
                  Logout
                </Button>
              </div>
            </div>

            {/* ===== FORM ===== */}
            <div className="rounded-4 p-4" style={cardStyle}>
              <Form onSubmit={handleSubmit}>

                {/* AVATAR UPLOAD */}
                <div className="text-center mb-4">
                  <label
                    htmlFor="avatar"
                    className={`btn btn-sm rounded-pill ${isEditing ? "btn-outline-info" : "btn-secondary"
                      }`}
                  >
                    Upload Photo
                  </label>
                  <input
                    type="file"
                    id="avatar"
                    hidden
                    disabled={!isEditing}
                    onChange={handleAvatarUpload}
                  />
                </div>

                {/* PERSONAL INFO */}
                <h6 className="mb-3 text-info">Personal Information</h6>
                <Row className="gy-3">
                  <Col md={6}>
                    <Form.Control
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={inputStyle}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={inputStyle}
                    />
                  </Col>

                  <Col xs={12}>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={inputStyle}
                    />
                  </Col>

                  <Col xs={12}>
                    <Form.Control
                      placeholder="+92 Phone Number "
                      name="phone"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={inputStyle}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth.split("T")[0]}
                      onChange={handleChange}
                      disabled={!isEditing}
                      style={inputStyle}
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      disabled={!isEditing}
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
                        value={formData.addressLabel}
                        onChange={handleChange}
                        disabled={!isEditing}
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
                        value={formData.recipientName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        style={inputStyle}
                      />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        placeholder="Address Line 1"
                        name="address1"
                        value={formData.address1}
                        onChange={handleChange}
                        disabled={!isEditing}
                        style={inputStyle}
                      />
                    </Col>

                    <Col xs={12}>
                      <Form.Control
                        placeholder="Address Line 2 (Optional)"
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                        disabled={!isEditing}
                        style={inputStyle}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Control
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={!isEditing}
                        style={inputStyle}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Control
                        placeholder="State / Province"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        disabled={!isEditing}
                        style={inputStyle}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Control
                        placeholder="ZIP / Postal Code"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        disabled={!isEditing}
                        style={inputStyle}
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        disabled={!isEditing}
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
                        placeholder="+92 Delivery Phone Number"
                        name="deliveryPhone"
                        value={formData.deliveryPhone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        style={inputStyle}
                      />
                    </Col>
                  </Row>
                </div>

                {isEditing && (
                  <div className="text-center mt-4">
                    <Button
                      type="submit"
                      className="px-5 rounded-pill neon-btn"
                    >
                      Save Changes
                    </Button>
                  </div>
                )}
              </Form>
            </div>
          </Col>

          <Wsh id={user._id}/>

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

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(0,224,255,0.35)",
  boxShadow: "0 0 30px rgba(0,224,255,0.15)",
};

const avatarStyle = {
  width: 110,
  height: 110,
  border: "3px solid #00e0ff",
  boxShadow: "0 0 18px rgba(0,224,255,.6)",
};

export default UserDetailsForm;
