import "bootstrap/dist/css/bootstrap.min.css";
import '../CSS/FooterSectoin.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 ">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />

      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 ms-2">Address</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <i className="ri-map-pin-line"></i>
                 Hazrat bilal block house no 55 street no 27 kothakalan Morgah Rawalpindi 
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="ri-phone-line"></i>
                <a href="tel:03348385552" className="text-light text-decoration-none">
                  03135775580 
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="ri-phone-line"></i>
                <a href="tel:03218986351" className="text-light text-decoration-none">
                  03070987072
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none nav-footer">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none nav-footer">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none nav-footer">
                  Brands &amp; products
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none nav-footer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none nav-footer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Weekly Newsletter</h5>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-secondary my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0">© 2025 | Buy its for youur Comfort</p>
          <div className="d-flex mt-3 mt-md-0">
            <a href="#" className="text-light me-3">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="ri-mail-line"></i>
            </a>
            <a href="#" className="text-light">
              <i className="ri-add-circle-line"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
