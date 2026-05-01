import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { PersonCircle } from 'react-bootstrap-icons'
import ShoppingCart from "react-bootstrap-icons/dist/icons/cart";
import LightningChargeFill from "react-bootstrap-icons/dist/icons/lightning-charge-fill";
import { customhook } from "../context/store";

import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/NavbarSection.css'
import useNav from "./NavLink";
import { Profileimg } from "./profileimg";

const MyNavbar = () => {
  const { cartItems, ulog, puser } = customhook()
  const { navgate } = useNav()

  return (
    <Navbar expand="lg" className="custom-navbar py-3" bg="dark" variant="dark">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="brand d-flex align-items-center">
          <LightningChargeFill size={30} className="me-2 text-primary-glow" />
          {/* <span className="brand-text">Electro<span>Zone</span></span> */}
          <span className="brand-text">Buy<span>Zaar</span></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" className="toggle-btn ms-auto" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/product" className="nav-link">
              Products
            </NavLink>
            <NavLink to="/brand" className="nav-link">
              Brands
            </NavLink>
            <NavLink to="/offer" className="nav-link">
              Offers
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/support" className="nav-link">
              Support
            </NavLink>
          </Nav>

        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          {ulog ?
            <div
              className="profile-icon position-relative p-2 glass-cart me-3"
              onClick={() => navgate('/profile')}
              style={{ cursor: 'pointer' }}
            >
              {puser ? <Profileimg puser={puser} size={'40px'} /> : <PersonCircle size={22} />}
            </div>
            :
            <Button variant="outline-light" className="glass-btn me-3 px-4"
              onClick={() => navgate('/singup')}
            >
              Sign In
            </Button>
          }
          {/* cartItems.length === 0 ? '': */}
          <div className="cart-icon position-relative p-2 rounded-circle glass-cart"
            onClick={() => navgate('/cart')}
          >
            <ShoppingCart size={22} />
            <span className="cart-badge">{cartItems.length === 0 ? '0' : cartItems.length}</span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
