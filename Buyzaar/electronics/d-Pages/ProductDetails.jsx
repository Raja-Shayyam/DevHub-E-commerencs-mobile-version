import React, { useState } from 'react';
import { customhook } from '../context/store';
import { prodInCART, prodInWISHlist } from '../Axoius/axiousAPI';
import { useEffect } from 'react';

const ProductDetail = () => {
  const { prodDetails, user } = customhook();
  const [activeTab, setActiveTab] = useState('Description');
  const [mainImg, setMainImg] = useState(prodDetails?.images?.[0] || '');
  const [quantity, setQuantity] = useState(1); // default to 1, not 'Description'

  // Helper to safely get nested values with dummy fallback
  const getAttr = (key, fallback = 'd- dummy') => prodDetails?.attributes?.[key] || fallback;

  console.log(prodDetails);

  console.log(user);

  const handlewishlist = async () => {
    const rslt = await prodInWISHlist(user._id, { prodDetail: prodDetails, prod: prodDetails._id })
    console.log(rslt);
  }
  const handleCartms = async () => {
    const prodDetail = prodDetails
    const rslt = await prodInCART(user._id, { prodDetail, quantity, prod: prodDetails._id })
    console.log(rslt);
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [])

  return (
    <div className="bg-light min-vh-100 pb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* 1. TOP HEADER & NAV (Bilingual Touch: Search in English/Urdu) */}

      <main className="container py-3">
        {/* BREADCRUMB */}
        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item text-muted">Home</li>
            <li className="breadcrumb-item text-muted">Clothings</li>
            <li className="breadcrumb-item text-muted">Men's wear</li>
            <li className="breadcrumb-item active">Summer clothing</li>
          </ol>
        </nav>

        {/* MAIN PRODUCT CARD */}
        <div className="bg-white border rounded shadow-sm mb-4">
          <div className="row g-0 p-3">
            {/* GALLERY (Left) */}
            <div className="col-lg-4 p-2">
              <div className="border rounded d-flex align-items-center justify-content-center bg-white mb-3" style={{ height: '360px' }}>
                {mainImg ? (
                  <img
                    src={mainImg}
                    alt={prodDetails?.name || 'product'}
                    className="w-100 h-100"
                    style={{ objectFit: 'scale-down' }}
                  />
                ) : (
                  <i className="bi bi-image text-muted fs-1">d- dummy</i>
                )}
              </div>
              <div className="d-flex gap-2 justify-content-betwee">
                {prodDetails?.images?.length > 0 ? (
                  prodDetails.images.map((img, i) => (
                    <div
                      key={i}
                      className="border rounded cursor-pointer text-center p-1 bg-light"
                      style={{ width: '200px', cursor: 'pointer' }}
                      onClick={() => setMainImg(img)}
                    >
                      <div className="w-10 h-10">
                        <img
                          src={img}
                          alt={`thumb-${i}`}
                          className="w-50 h-10"
                          style={{ objectFit: 'scale-down' }}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-muted small">d- dummy images</div>
                )}
              </div>
            </div>
            <div className="col-lg-5 p-3">
              <div className="text-success small mb-1 fw-bold">
                <i className="bi bi-check-lg"></i> In stock
              </div>
              {/* <h5 className="fw-bold text-dark mb-3">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h5> */}
              {/* {(prodDetails.features).map((fe, i) => (
                 <h5 id={i} className="fw-bold text-dark mb-3">{fe}</h5>
               ))} */}

              {/* <h5 className="fw-bold text-dark mb-3">{(prodDetails.features).map((fe, i) => { return <span className='me-2'>{fe}</span> })}</h5> */}

              <div className="d-flex align-items-center gap-3 mb-3 small">
                <span className="text-warning">★★★★★ <span className="text-dark fw-bold ms-1">{prodDetails.averageRating}</span></span>
                <span className="text-muted"><i className="bi bi-chat-left-text me-1"></i> 32 reviews</span>
                <span className="text-muted"><i className="bi bi-basket me-1"></i> 154 sold</span>
              </div>

              {/* TIERED PRICING BOX */}
              <div className="row g-0 rounded mb-3 border-4" style={{ backgroundColor: '#FFF0DF' }}>
                <div className="col p-3 border-end border-white">
                  <div className="text-danger fw-bold fs-5">${(prodDetails.price * 70.00).toFixed(2)}</div>
                  <div className="small text-muted">{prodDetails.stock}-{prodDetails.stock - 8} pcs</div>
                </div>
                <div className="col p-3 border-end border-white text-dark">
                  <div className="fw-bold fs-5">${(prodDetails.price * 50.00).toFixed(2)}</div>
                  <div className="small text-muted">100-700 pcs</div>
                </div>
                <div className="col p-3 text-dark">
                  <div className="fw-bold fs-5">${(prodDetails.price * 30.00).toFixed(2)}</div>
                  <div className="small text-muted">700+ pcs</div>
                </div>
              </div>

              {/* SPECS LIST */}
              <div className="small border-botto pb-2 mb-3" style={{ borderBottom: '2px solid #00000026' }}>
                <div className="row pb-2 mb-3" style={{ borderBottom: '2px solid #00000026' }}>
                  <div className="col-4 ">
                    <span className='bg-danger bg-opacity p-2 text-light  rounded-3'>
                      <strong>Price:</strong>
                    </span>
                  </div>
                  <div className="col-8">
                    <span className='bg-danger bg-opacity-25 text-danger fw-bold my-3 p-2 rounded-3'>${`${prodDetails.price} / item `}(Negotiable)</span>
                  </div>
                </div>
                <>
                  <div className="row mb-2">
                    <div className="col-4 text-muted">Type:</div><div className="col-8">{`${prodDetails.attributes.productType || 'Classic shoes'}`}</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-4 text-muted">Material:</div><div className="col-8">{`${prodDetails.attributes.material || 'Plastic material'}`}</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-4 text-muted">Design:</div><div className="col-8">{`${prodDetails.attributes.design || 'Modern nice'}`}</div>
                  </div>
                </>
              </div>

              <div className="row mb-2 py-2" style={{ borderBottom: '2px solid #00000026' }}>
                <div className="col-4 text-muted">Customization:</div><div className="col-8">{`${prodDetails.attributes.customization || 'Customized logo and design'}`}</div>
                <div className="col-4 text-muted">Protection: </div><div className="col-8">{`${prodDetails.attributes.protection || 'Refund Policy'}`}</div>
                <div className="col-4 text-muted">Warranty:  </div><div className="col-8">{`${prodDetails.attributes.warranty}`} full warranty</div>
              </div>
            </div>


            {/* SELLER & ACTIONS (Right) */}
            <div className="col-lg-3 p-2">
              <div className="border rounded p-3 bg-light bg-opacity-50">
                <div className="d-flex gap-3 mb-3 border-bottom pb-3">
                  <div className="bg-info bg-opacity-25 rounded d-flex align-items-center justify-content-center fw-bold text-info fs-3" style={{ width: '50px', height: '50px' }}>
                    {prodDetails?.owner?.charAt(0)?.toUpperCase() || 'S'}
                  </div>
                  <div className="small">
                    <div className="fw-bold">Omer israr</div>
                    <div className="text-muted">Trading LLc's</div>
                  </div>
                </div>
                <div className="small text-muted mb-4 d-grid gap-2">
                  <div><i className="bi bi-geo-alt text-primary me-2"></i>pakistan, Islamabad</div>
                  <div><i className="bi bi-shield-check me-2 text-success"></i> Verified Seller</div>
                  <div><i className="bi bi-globe me-2 text-info"></i> Worldwide shipping</div>
                </div>
                <button className="btn btn-primary w-100 mb-2 py-2 fw-bold">Send inquiry</button>
                <button className="btn btn-outline-primary w-100 py-2 fw-bold">Seller's profile</button>
              </div>

              <div className='d-flex rounded mt-3 py-2 mx-3 justify-content-evenly bg-warning'>
                Quantity {" : "}
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border rounded mt-3 p-3 bg-light bg-opacity-50">
                <button className="btn btn-outline-danger w-100 mb-2 py-2 fw-bold"
                  onClick={() => handlewishlist()}
                >
                  <i className="bi bi-heart me-2"></i>
                  <strong>Add to Wishlist</strong>
                </button>
                <button className="btn btn-outline-primary w-100 mb-2 py-2 fw-bold"
                  onClick={() => handleCartms()}
                >
                  <i className="bi bi-cart fs-5"></i>
                  <strong> CART </strong>
                </button>
                <button className="btn btn-outline-warning w-100 py-2 text-dark fw-bold  ">
                  <i className="bi bi-basket me-2" />
                  <span className='m-auto'>
                    Buy
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-9">
            <div className="bg-white border rounded">
              <ul className="nav nav-tabs px-3 pt-2 border-bottom-0">
                {['Description', 'Reviews', 'Shipping', 'About seller'].map(tab => (
                  <li className="nav-item" key={tab}>
                    <button
                      className={`nav-link border-0 border-bottom px-4 ${activeTab === tab ? 'active border-primary border-3 fw-bold text-primary' : 'text-muted'}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="p-4 border-top">
                <p className="text-secondary small lh-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <table className="table table-bordered w-75 mt-4 small text-muted">
                  <tbody>

                    {Object.entries(prodDetails.specifications).map(([key, val]) => (
                      <tr>
                        <td className="bg-light fw-medium w-25">{key}</td>
                        <td>{val || '#8786867'}</td>
                      </tr>
                    ))
                    }

                  </tbody>
                </table>
                <div className="mt-4 small text-muted">
                  <div className="mb-2 border-bottom border-secondary border-2" style={{ width: '230px' }}><i className="bi bi-circle me-2"></i> Some great feature name here</div>
                  {
                    prodDetails.features.map((fe) => (
                      <>
                        <div className="mb-2"><i className="bi bi-check2 me-2"></i>{fe}</div>
                      </>
                    ))
                  }
                  {/* <div className="mb-2"><i className="bi bi-check2 me-2"></i> Lorem ipsum dolor sit amet, consectetur</div>
                  <div className="mb-2"><i className="bi bi-check2 me-2"></i> Duis aute irure dolor in reprehenderit</div> */}
                </div>
              </div>
            </div>
          </div>


          {/* SIDEBAR: YOU MAY LIKE */}

          <div className="col-lg-3">
            <div className="bg-white border rounded p-3 h-100">
              <h6 className="fw-bold mb-4">You may like / Shaid pasand aaye</h6>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="d-flex gap-3 mb-4">
                  <div className="border rounded bg-light d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                    <i className="bi bi-image text-muted"></i>
                  </div>
                  <div>
                    <div className="small text-dark mb-1 lh-sm">Men Blazers Sets Elegant Formal</div>
                    <div className="small text-muted fw-bold">$7.00 - $99.50</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border rounded p-4 mt-4 shadow-sm">
          <h5 className="fw-bold mb-4">Related products</h5>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="col">
                <div className="border rounded mb-2 d-flex align-items-center justify-content-center bg-light" style={{ aspectRatio: '1/1' }}>
                  <i className="bi bi-image text-muted fs-3"></i>
                </div>
                <div className="small text-muted mb-1 text-truncate">Xiaomi Redmi 8 Original</div>
                <div className="small text-muted fw-bold">$32.00-$40.00</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div >
  );
};

export default ProductDetail;