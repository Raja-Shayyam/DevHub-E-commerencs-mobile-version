import React, { useState } from "react";
import { Link } from "react-router-dom";
import { customhook } from "../context/store";
import useNav from "../Components/NavLink";
import { apiLogin } from "../Axoius/axiousAPI";
import { ToastContainer, toast } from 'react-toastify'

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { user, setUser, setUlog, } = customhook()
  const { navgate } = useNav()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // console.log('> ',user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login data:", user, 'hi: ', form);
    const result = await apiLogin(form)
    console.log(result);

    if (result.data.sucess) {
      localStorage.setItem('tk', result.data.tk)
      setUlog(true)
      toast.success(result.data.message)
      toast.info(result.data.user[1])
      // setUser(result.data.data)
      setTimeout(() => {
        navgate('/Profile')
      }, 2000);
    } else {
      toast.warning(result.data.message)
      toast.info(result.data.user[1])
    }
    // if(user.email !== form.email || user.password !== form.password){
    //   console.log(user , form);
    //   alert('wrong email or password')
    //   // navgate('/login')
    // }else{
    //   console.log('sucess');
    //   setUlog(true)
    //   navgate('/Profile')
    // }
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "#0d1b2a",
        color: "#e0e0e0",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#1b263b",
          border: "1px solid rgba(0, 224, 255, 0.2)",
          boxShadow: "0 0 25px rgba(0, 224, 255, 0.1)",
        }}
      >
        {/* <ToastContainer autoClose={1000} /> */}
        <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#00e0ff",
            textShadow: "0 0 10px rgba(0,224,255,0.5)",
          }}
        >
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#9baec8" }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0, 224, 255, 0.3)",
                borderRadius: "10px",
                color: "#e0e0e0",
                padding: "10px 12px",
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 0 10px rgba(0,224,255,0.6)")
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#9baec8" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#112240",
                border: "1px solid rgba(0, 224, 255, 0.3)",
                borderRadius: "10px",
                color: "#e0e0e0",
                padding: "10px 12px",
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = "0 0 10px rgba(0,224,255,0.6)")
              }
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Forgot Password */}
          <div className="text-end mb-4">
            <Link
              to="/forgot-password"
              style={{
                color: "#14f1ff",
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.color = "#0aff9d")}
              onMouseOut={(e) => (e.target.style.color = "#14f1ff")}
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-100 fw-semibold py-2 rounded-pill"
            style={{
              backgroundColor: "#00e0ff",
              color: "#0d1b2a",
              border: "none",
              boxShadow: "0 0 15px rgba(0, 224, 255, 0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#14f1ff";
              e.target.style.boxShadow = "0 0 25px rgba(20,241,255,0.8)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#00e0ff";
              e.target.style.boxShadow = "0 0 15px rgba(0,224,255,0.5)";
            }}


          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p
          className="text-center mt-4"
          style={{ color: "#9baec8", fontSize: "0.95rem" }}
        >
          Don’t have an account?{" "}
          <Link
            to="/singup"
            style={{
              color: "#00e0ff",
              textDecoration: "none",
              fontWeight: "500",
            }}
            onMouseOver={(e) => (e.target.style.color = "#0aff9d")}
            onMouseOut={(e) => (e.target.style.color = "#00e0ff")}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

// export default LoginPage;

// import React from 'react';

const Login = () => {
  const { user, isLoading, setIsLoading, setUser, setUlog, } = customhook()
  const { navgate } = useNav()
  const [form, setForm] = useState({
    email: "",
    phoneNumber: '',
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    console.log("Login data:", user, 'hi: ', form);
    const result = await apiLogin(form)
    console.log(result);

    if (result.data.sucess) {
      localStorage.setItem('tk', result.data.tk)
      setUlog(true)
      toast.success(result.data.message)
      toast.info(result.data.user[1])
      // setUser(result.data.data)
      setTimeout(() => {
        setIsLoading(false)
        navgate('/Profile')
      }, 2000);
    } else {
      toast.warning(result.data.message)
      toast.info(result.data.user[1])
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <ToastContainer closeOnClick />
      <div className="card shadow-sm border-0" style={{ maxWidth: '380px', width: '100%' }}>
        <div className="card-body p-4 text-center">
          <div className="h2 fw-bold text-primary mb-4">Brand</div>
          <h5 className="fw-bold mb-3">Sign in / Login karein</h5>

          <form className="text-start" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label small fw-bold">Username or email</label>
              <input type="text"
                name="email"
                value={form.firstName}
                onChange={handleChange}
                required
                className="form-control bg-light" placeholder="Email or phone" />
            </div>

            <div className="mb-2">
              <div className="d-flex justify-content-between">
                <label className="form-label small fw-bold">Password</label>
                <span className="text-primary small cursor-pointer">Forgot password?</span>
              </div>
              <input type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required className="form-control bg-light" placeholder="Type here" />
            </div>

            <div className="form-check small mb-4">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember">Remember me</label>
            </div>

            <button className="btn btn-primary w-100 py-2 fw-bold shadow-sm mb-3">
              {!isLoading ?
                <span>Log In</span>
                :
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>}
            </button>

            <div className="text-center small text-muted">
              Don’t have an account? <span className="text-primary fw-bold cursor-pointer"
                onClick={() => navgate('/registr')}>Register now</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;