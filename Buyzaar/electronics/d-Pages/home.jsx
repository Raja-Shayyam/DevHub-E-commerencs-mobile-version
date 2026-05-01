import React from "react";
import '../CSS/HomeSection.css'
import { Link } from "react-router-dom";


const HomeSection = () => {

  return (
    <>

      {/* 3. HERO SECTION */}
      <main className="container-fluid px-lg-5 my-4">
        <div className="row g-0 bg-white border rounded shadow-sm overflow-hidden p-3">
          <div className="col-md-2 border-end d-none d-md-block pe-3">
            <ul className="list-unstyled hero-menu">
              <li className="active">Automobiles</li>
              <li>Clothes and wear</li>
              <li>Home interiors</li>
              <li>Computer and tech</li>
              <li>Tools, equipments</li>
              <li>Sports and outdoor</li>
              <li>Animal and pets</li>
              <li>Machinery tools</li>
              <li>More category</li>
            </ul>
          </div>
          <div className="col-md-8 px-md-3">
            <div className="hero-banner p-5 rounded d-flex flex-column justify-content-cente h-100">
              <h4 className="fw-normal">Latest trending</h4>
              <h1 className="fw-bold mb-4">Electronic items</h1>
              <button className="btn btn-light fw-bold px-4 align-self-start shadow-sm border">Learn more</button>
            </div>
          </div>
          <div className="col-md-2 ps-md-3">
            <div className="user-welcome p-3 rounded mb-3">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="avatar-circle d-flex align-items-center">
                  <span className="m-auto px-1">
                    <i className="bi bi-person fs-4"></i>
                  </span>
                </div>
                <p className="mb-0">Hi, user<br />let's get started</p>
              </div>
              <Link to="/registr">
                <button className="btn btn-primary w-100 mb-2 btn-sm">
                  Join now
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-light border w-100 btn-sm text-primary">
                  Log in
                </button>
              </Link>
            </div>
            <div className="promo-card bg-orange text-white p-3 rounded mb-2">Get US $10 off with a new supplier</div>
            <div className="promo-card bg-teal text-white p-3 rounded">Send quotes with supplier preferences</div>
          </div>
        </div>
      </main>

      {/* 4. DEALS & OFFERS */}
      <section className="container-fluid px-lg-5 mb-4">
        <div className="row g-0 border rounded bg-white shadow-sm overflow-hidden">
          <div className="col-md-3 p-4 border-end">
            <h5 className="fw-bold">Deals and offers</h5>
            <p className="text-muted small">Hygiene equipments</p>
            <div className="d-flex gap-2 mt-4">
              <div className="time-box">04<span>Days</span></div>
              <div className="time-box">13<span>Hour</span></div>
              <div className="time-box">34<span>Min</span></div>
              <div className="time-box">56<span>Sec</span></div>
            </div>
          </div>
          <div className="col-md-9 d-flex p-3 gap-4 text-center deals-scroll overflow-auto">
            {['Smart watches', 'Laptops', 'GoPro cameras', 'Headphones', 'Canon cameras'].map((item, idx) => (
              <div key={idx} className="deal-card min-w-150">
                <div className="placeholder-img rounded mb-2"><i className="bi bi-camera text-muted"></i></div>
                <p className="small mb-1">{item}</p>
                <span className="badge bg-danger-subtle text-danger rounded-pill">-25%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INQUIRY SECTION */}
      <section className="container-fluid px-lg-5 mb-5">
        <div className="inquiry-banner p-4 p-md-5 rounded text-white d-flex flex-wrap justify-content-between align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold fs-1">An easy way to send requests to all suppliers</h2>
            <p className="opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="col-md-5 col-lg-4 bg-white p-4 rounded shadow-lg text-dark">
            <h5 className="fw-bold mb-3">Send quote to suppliers</h5>
            <input className="form-control mb-3 py-2" placeholder="What item you need?" />
            <textarea className="form-control mb-3" placeholder="Type more details" rows="3"></textarea>
            <div className="d-flex gap-2 mb-3">
              <input className="form-control" placeholder="Quantity" />
              <select className="form-select w-auto"><option>Pcs</option></select>
            </div>
            <button className="btn btn-primary px-4 py-2 w-auto">Send inquiry</button>
          </div>
        </div>
      </section>

      {/* 6. RECOMMENDED ITEMS */}
      <section className="container-fluid px-lg-5 mb-5">
        <h4 className="fw-bold mb-4">Recommended items</h4>
        <div className="row row-cols-2 row-cols-md-5 g-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
            <div className="col" key={i}>
              <div className="card h-100 border rounded shadow-sm p-3">
                <div className="placeholder-img rounded mb-3" style={{ height: '140px' }}></div>
                <h6 className="fw-bold mb-1">$10.30</h6>
                <p className="small text-muted mb-0">T-shirts with multiple colors, for men</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. EXTRA SERVICES */}
      <section className="container-fluid px-lg-5 mb-5">
        <h4 className="fw-bold mb-4">Our extra services</h4>
        <div className="row g-3">
          {[
            { title: 'Source from Industry Hubs', icon: 'bi-search' },
            { title: 'Customize Your Products', icon: 'bi-box' },
            { title: 'Fast, reliable shipping', icon: 'bi-send' },
            { title: 'Product monitoring', icon: 'bi-shield-check' }
          ].map((service, idx) => (
            <div className="col-md-3" key={idx}>
              <div className="card border-0 rounded overflow-hidden shadow-sm h-100 position-relative">
                <div className="service-img-top bg-secondary opacity-25" style={{ height: '120px' }}></div>
                <div className="card-body py-4 pe-5">
                  <p className="fw-medium mb-0">{service.title}</p>
                </div>
                <div className="service-icon-badge shadow-sm border border-2 border-white">
                  <i className={`bi ${service.icon}`}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SUPPLIERS BY REGION */}
      <section className="container-fluid px-lg-5 mb-5">
        <h4 className="fw-bold mb-4">Suppliers by region</h4>
        <div className="row g-4">
          {['Arabic Emirates', 'Australia', 'United States', 'Russia', 'Italy', 'Denmark', 'France', 'China', 'Great Britain'].map((country, idx) => (
            <div className="col-md-3 col-6" key={idx}>
              <div className="d-flex align-items-center gap-2">
                <div className="flag-circle bg-light border"></div>
                <div>
                  <div className="small fw-medium">{country}</div>
                  <div className="text-muted smaller">shopname.ae</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>




    </>
  );
};

export default HomeSection;
