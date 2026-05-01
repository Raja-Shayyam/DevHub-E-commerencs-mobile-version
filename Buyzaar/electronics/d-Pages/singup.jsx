// // import React from 'react'

// // export const Singup = () => {
// //   return (
// //     <div>Singup</div>
// //   )
// // }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../CSS/SignupSection.css'
import { customhook } from "../context/store";
import useNav from "../Components/NavLink";
import { apiRegister } from "../Axoius/axiousAPI";
import { ToastContainer, toast } from 'react-toastify'

const Singup = () => {
  const { setUser, user } = customhook()
  const { navgate } = useNav()
  const [passShow, setPassShow] = useState(true)
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handlePassShow = (t) => {
    setPassShow((p) => !p)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted:", form);
    if (user.email !== form.email) {
      if (form.password === form.confirmPassword) {
        // setUser(form)
        const result = await apiRegister(form)
        if (result) {
          console.log(result);
          // setUser(result.data.data)
          toast.success(result.data.message)
          setForm({
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
          })
          setTimeout(() => {
            navgate('/login')
          }, 2000);
        }
      }
      else {
        alert('password mis matched')
      }
    } else {
      alert('user Exists with same cedintials !!! ')
    }
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center h-100"
      style={{
        padding: '50px 0',
        background: "linear-gradient(180deg, #0d1b2a 0%, #1b263b 100%)",
        color: "#e0e0e0",
      }}
    >
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#1b263b",
          boxShadow: "0 0 25px rgba(0,224,255,0.15)",
          border: "1px solid rgba(0,224,255,0.2)",
        }}
      >
        <h2
          className="text-center mb-4 fw-bold"
          style={{
            color: "#00e0ff",
            textShadow: "0 0 10px rgba(0,224,255,0.7)",
          }}
        >
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <ToastContainer autoClose={false} />
          <div className="mb-3">
            <label className="form-label ms-1" style={{ color: "#9baec8" }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="form-control text-light"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0,224,255,0.4)",
                borderRadius: "10px",
                color: "black !important",
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#9baec8", marginLeft: '4px' }}>
              User Name
            </label>
            <input
              type="username"
              name="username"
              className="form-control text-light"
              placeholder="Raja-shayyam"
              value={form.username}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0,224,255,0.4)",
                borderRadius: "10px",
                color: "#e0e0e0 !important",
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label ms-1" style={{ color: "#9baec8" }}>
              Password
            </label>
            <div className='form-control'
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0,224,255,0.4)",
              }}
            >
              <input
                type={`${passShow && 'password'}`}
                name="password"
                className="pass-inp  text-light"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
                style={{
                  // backgroundColor: "#112240",
                  // border: 'transparent',
                  // border: "1px solid rgba(0,224,255,0.4)",
                  // borderRadius: "10px",
                  // // color: "#000000ff",
                  width: '70%'
                }}
              />
              <button className='my-1 mx-1 pass-inp text-light' type="button"
                onClick={() => handlePassShow()}
              >show</button>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label ms-1" style={{ color: "#9baec8" }}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control text-light"
              placeholder="Re-enter password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0,224,255,0.4)",
                borderRadius: "10px",
                color: "#e0e0e0",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-light w-100 py-2 fw-semibold rounded-pill "
          // style={{
          //   backgroundColor: "#00e0ff",
          //   color: "#0d1b2a",
          //   transition: "all 0.3s ease",
          //   boxShadow: "0 0 15px rgba(0,224,255,0.6)",
          // }}
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4" style={{ color: "#9baec8" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#00e0ff",
              textDecoration: "none",
              fontWeight: "500",
            }}
            onMouseOver={(e) => (e.target.style.color = "#14f1ff")}
            onMouseOut={(e) => (e.target.style.color = "#00e0ff")}
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

// export default Singup;

// import React from 'react';

const Register = () => {
  const { setUser, user } = customhook()
  const { navgate } = useNav()
  const [passShow, setPassShow] = useState(true)
  const [form, setForm] = useState({
    email: "",
    firstName: '',
    lastName: '',
    username: "",
    phoneNumber: '',
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted:", form);
    if (user.email !== form.email) {
      if (form.password === form.confirmPassword) {
        // setUser(form)
        const result = await apiRegister(form)
        if (result) {
          console.log(result);
          // setUser(result.data.data)
          toast.success(result.data.message)
          // setForm({
          //   email: "",
          //   username: "",
          //   password: "",
          //   confirmPassword: "",
          // })
          setTimeout(() => {
            navgate('/login')
          }, 2000);
        }
      }
      else {
        alert('password mis matched')
      }
    } else {
      alert('user Exists with same cedintials !!! ')
    }
  };



  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
      <ToastContainer />
      <div className="card shadow-sm border-0" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-4">
          <h3 className="fw-bold text-dark mb-1">Register</h3>
          <p className="text-muted small mb-4">Naya account banayein / Create your account</p>

          <form onSubmit={handleSubmit}>
            <div className="row g-2 mb-3">
              <div className="col">
                <label className="form-label small fw-bold">First name</label>
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="form-control bg-light" placeholder="Type here" />
              </div>
              <div className="col">
                <label className="form-label small fw-bold">Last name</label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="form-control bg-light" placeholder="Type here" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label small fw-bold">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control bg-light" placeholder="example@mail.com" />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-bold">Phone (Optional)</label>
              <div className="input-group">
                <span className="input-group-text bg-white">🇵🇰 +92</span>
                <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} className="form-control bg-light" placeholder="000-0000" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label small fw-bold">Create password</label>
              <input type="password" name='password' value={form.password} onChange={handleChange} className="form-control bg-light" placeholder="At least 6 characters" />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-bold">Conform password</label>
              <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className="form-control bg-light" placeholder="Again write your password" />
            </div>

            <div className="form-check small mb-4">
              <input className="form-check-input" type="checkbox" id="terms" />
              <label className="form-check-label text-muted" htmlFor="terms">
                I agree with <span className="text-primary cursor-pointer">Terms and Conditions</span>
              </label>
            </div>

            <button className="btn btn-primary w-100 py-2 fw-bold mb-3 shadow-sm" type='submit'>Register now</button>

            <div className="text-center border-bottom mb-4" style={{ height: '10px' }}>
              <span className="bg-white px-2 text-muted small">OR</span>
            </div>

            <button className="btn btn-outline-dark w-100 mb-2 small py-2 d-flex align-items-center justify-content-center gap-2">
              <i className="bi bi-google text-danger"></i> Continue with Google
            </button>

            <p className="text-center small text-muted mt-4">
              Already have an account? <span className="text-primary fw-bold cursor-pointer" onClick={() => navgate('/login')}>Log in</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;