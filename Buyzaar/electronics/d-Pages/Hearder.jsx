import React from 'react'
import '../CSS/HomeSection.css'
import { Link } from "react-router-dom";
import { customhook } from '../context/store';
import useNav from '../Components/NavLink';

export const Hearder = () => {
  const { user } = customhook()
  const { navgate } = useNav()
  console.log(user);

  return (
    <>
      {/* 1. HEADER */}
      <header className="bg-white border-bottom py-3 px-lg-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-md-2">
              <div className="logo text-primary fw-bold fs-3">
                <span className="bg-primary text-white px-2 py-1 rounded me-1">B</span>rand
              </div>
            </div>
            <div className="col-md-7 d-none d-md-block">
              <div className="search-container d-flex border border-primary rounded overflow-hidden">
                <input type="text" className="form-control border-0 px-3" placeholder="Search" />
                <select className="form-select border-0 border-start rounded-0" style={{ width: '150px' }}>
                  <option>All category</option>
                </select>
                <button className="btn btn-primary px-4 rounded-0 search-btn">Search</button>
              </div>
            </div>
            <div className="col-6 col-md-3 d-flex justify-content-end gap-4 text-center header-actions">
              {/* <Link to="profile" > */}
              <div onClick={() => { user.email ? navgate('profile') : navgate('login') }} className="action-item" style={{ cursor: 'pointer' }}><i className="bi bi-person fs-5"></i><p>Profile</p></div>
              {/* </Link> */}
              <div className="action-item"><i className="bi bi-chat-dots fs-5"></i><p>Message</p></div>
              <Link to="/wishlist">
                <div className="action-item"><i className="bi bi-heart fs-5"></i><p>Wishlist</p></div>
              </Link>
              <Link to="/cart"><div className="action-item"><i className="bi bi-cart fs-5"></i><p>My cart</p></div></Link>
            </div>
          </div>
        </div>
      </header>
      {/* 2. NAVBAR */}
      <nav className="bg-white border-bottom py-2 px-lg-5 d-none d-md-block shadow-sm sticky-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4 fw-medium">
            <span className="cursor-pointer"><i className="bi bi-list me-2"></i> All category</span>
            <Link to="/"><span className="cursor-pointer">Home</span></Link>
            <Link to='/productsview'><span className="cursor-pointer">Products</span></Link>
            {/* <Link to='/productsBroderview'><span className="cursor-pointer">Products Details</span></Link> */}
            <span className="cursor-pointer">Hot offers</span>
            <span className="cursor-pointer">Gift boxes</span>
            <span className="cursor-pointer">Projects</span>
            <span className="cursor-pointer">Menu item</span>
            <span className="cursor-pointer">Help</span>
          </div>
          <div className="d-flex gap-3 fw-medium">
            <span>English, USD <i className="bi bi-chevron-down ms-1"></i></span>
            <span>Ship to <span className="fi fi-de">🇩🇪</span> <i className="bi bi-chevron-down ms-1"></i></span>
          </div>
        </div>
      </nav>
    </>
  )
}
