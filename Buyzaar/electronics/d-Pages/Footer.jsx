import React from 'react'
import '../CSS/HomeSection.css'

export const Footer = () => {
  const socialmediaicons = [
    <i class="bi bi-youtube m-auto"></i>,
    <i class="bi bi-instagram m-auto"></i>,
    <i class="bi bi-linkedin m-auto"></i>,
    <i class="bi bi-twitter m-auto"></i>,
    <i class="bi bi-facebook m-auto"></i>,
  ]

  return (
    <>
      {/* 9. NEWSLETTER */}
      <section className="bg-light py-5 border-top">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <div className="container text-center">
          <h4 className="fw-bold">Subscribe on our newsletter</h4>
          <p className="text-muted mb-4">Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="d-flex justify-content-center gap-2">
            <input type="email" className="form-control" style={{ maxWidth: '300px' }} placeholder="Email" />
            <button className="btn btn-primary px-4">Subscribe</button>
          </div>
        </div>
      </section>
      {/* 10. FOOTER */}
      <footer className="bg-white py-5 px-lg-5 border-top">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="text-primary fw-bold fs-4 mb-3">Brand</div>
              <p className="text-muted small w-75">Best information about the company goes here but now learn more!</p>
              <div className="d-flex gap-2">

                {/* <div className="social-icon" style={{ color: 'black' }}>
                  <i className="fab fa-linkedin">L</i>
                </div>
                <div className="social-icon" style={{ color: 'black' }}>
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="social-icon" style={{ color: 'black' }}>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="social-icon" style={{ color: 'black' }}>
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="social-icon" style={{ color: 'black' }}>
                  <i className="fab fa-youtube"></i>
                </div> */}
                {socialmediaicons.map((i, indx) => {
                  return <div key={indx} className="social-icon d-flex align-items-center">
                    {i}
                  </div>
                })
                }
              </div>
              {/* // (i => <div key={i} className="social-icon"> */}
              {/* //   {i} */}
              {/* // </div>) */}
            </div>
            <div className="col-6 col-md-2">
              <h6 className="fw-bold">About</h6>
              <ul className="list-unstyled text-muted small mt-3 d-grid gap-2">
                <li>About Us</li><li>Find store</li><li>Categories</li><li>Blogs</li>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="fw-bold">Partnership</h6>
              <ul className="list-unstyled text-muted small mt-3 d-grid gap-2">
                <li>About Us</li><li>Find store</li><li>Categories</li><li>Blogs</li>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="fw-bold">Information</h6>
              <ul className="list-unstyled text-muted small mt-3 d-grid gap-2">
                <li>Help Center</li><li>Refund</li><li>Shipping</li><li>Contact us</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6 className="fw-bold">Get app</h6>
              <div className="d-grid gap-2 mt-3">
                <div className="app-store-btn bg-dark text-white p-2 rounded d-flex align-items-center justify-content-center gap-2">
                  <i className="bi bi-apple"></i> App Store
                </div>
                <div className="app-store-btn bg-dark text-white p-2 rounded d-flex align-items-center justify-content-center gap-2">
                  <i className="bi bi-google-play"></i> Google Play
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-4 border-top d-flex justify-content-between text-muted small">
            <div>© 2026 Ecommerce.</div>
            <div>English <i className="bi bi-chevron-up ms-2"></i></div>
          </div>
        </div>
      </footer>
    </>
  )
}
