import React, { useState, useEffect } from 'react';
import { customhook } from '../context/store';

const Profile = () => {
  const { user, isLoading } = customhook()
  const [pic, setPic] = useState(null);
  const [data, setData] = useState({
    firstName: '',
    email: '',
    phoneNumber: ''
  });
  const [disable, setDisable] = useState(true);

  // Update local data when user changes in context
  useEffect(() => {
    if (user && user.email) {
      setData({
        firstName: user.firstName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || ''
      })
    }
  }, [user])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePic = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Reusable Header */}
      <header className="bg-white border-bottom py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="h3 fw-bold text-primary mb-0">Brand</div>
          <div className="d-flex gap-3 align-items-center">
            <span className="small fw-bold">Hi, {data.firstName || 'User'}!</span>
            <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px' }}>
              {data.firstName ? data.firstName.charAt(0).toUpperCase() : 'U'}
            </div>
          </div>
        </div>
      </header>

      {/* Loading State */}
      {isLoading ? (
        <div className="container py-5">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading profile data...</p>
          </div>
        </div>
      ) : (
        <div className="container py-4">
          <div className="row g-4">
            {/* SIDEBAR NAVIGATION */}
            <div className="col-lg-3">
              <div className="card border-0 shadow-sm">
                <div className="list-group list-group-flush rounded">
                  <div className="list-group-item active border-0 p-3"><i className="bi bi-person-circle me-2"></i> My Profile</div>
                  <div className="list-group-item list-group-item-action border-0 p-3"><i className="bi bi-box-seam me-2"></i> Orders / Mere Orders</div>
                  <div className="list-group-item list-group-item-action border-0 p-3"><i className="bi bi-heart me-2"></i> Wishlist</div>
                  <div className="list-group-item list-group-item-action border-0 p-3"><i className="bi bi-geo-alt me-2"></i> Address Book</div>
                  <div className="list-group-item list-group-item-action border-0 p-3 text-danger mt-4"><i className="bi bi-box-arrow-right me-2"></i> Logout</div>
                </div>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="col-lg-9">
              {/* PROFILE INFO CARD */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <form className="d-flex align-items-start gap-4 mb-4">
                    {/* Avatar Section */}
                    <div className="d-flex flex-column align-items-center">
                      <div
                        className="bg-light border rounded-circle d-flex align-items-center justify-content-center fs-1 text-muted shadow-sm overflow-hidden"
                        style={{ width: '100px', height: '100px' }}
                      >
                        {pic ? (
                          <img src={pic} alt="avatar" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                        ) : (
                          <i className="bi bi-person"></i>
                        )}
                      </div>
                      {!disable && (
                        <>
                          <input
                            type="file"
                            id="avatar-input"
                            // accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handlePic}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary mt-2"
                            onClick={() => document.getElementById('avatar-input').click()}
                          >
                            Change Photo
                          </button>
                        </>
                      )}
                    </div>

                    {/* Input fields */}
                    <div className={`flex-grow-1 p-2 ${disable ? '' : 'bg-warning rounded'}`}>
                      <h4 className="fw-bold mb-1">
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg border-0 p-0 fw-bold"
                          disabled={disable}
                          value={data.firstName}
                          onChange={handleChange}
                          style={{ background: 'transparent', outline: 'none', boxShadow: 'none' }}
                        />
                      </h4>
                      <p className="text-muted small mb-1">
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-sm border-0 p-0 text-muted"
                          disabled={disable}
                          value={data.email}
                          onChange={handleChange}
                          style={{ background: 'transparent', outline: 'none', boxShadow: 'none' }}
                        />
                      </p>
                      <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 mt-2 px-3 py-2">
                        <input
                          type="text"
                          name="memberType"
                          className="border-0 p-0 bg-transparent text-success"
                          disabled={disable}
                          value={data.phoneNumber}
                          onChange={handleChange}
                          style={{ outline: 'none', boxShadow: 'none', width: 'auto' }}
                        />
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="ms-auto align-self-start d-flex gap-2">
                      {disable ? (
                        <button type="button" className="btn btn-outline-primary btn-sm px-4" onClick={() => setDisable(false)}>
                          Edit Profile
                        </button>
                      ) : (
                        <button type="button" className="btn btn-primary btn-sm px-4" onClick={() => setDisable(true)}>
                          Save
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Stats Cards */}
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="border rounded p-3 bg-light bg-opacity-50">
                        <div className="text-muted small">Total Orders</div>
                        <div className="h4 fw-bold mb-0">24</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="border rounded p-3 bg-light bg-opacity-50">
                        <div className="text-muted small">Pending Payments</div>
                        <div className="h4 fw-bold mb-0">02</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="border rounded p-3 bg-light bg-opacity-50">
                        <div className="text-muted small">Wishlist Items</div>
                        <div className="h4 fw-bold mb-0">15</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RECENT ORDERS TABLE */}
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
                  <h6 className="fw-bold mb-0">Recent Orders / Haaliya Orders</h6>
                  <button className="btn btn-link btn-sm text-decoration-none fw-bold">View all</button>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0 small">
                      <thead className="bg-light">
                        <tr>
                          <th className="px-3">Order ID</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Total</th>
                          <th className="text-end px-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[10245, 10244, 10243].map(id => (
                          <tr key={id}>
                            <td className="px-3 text-primary fw-medium">#{id}</td>
                            <td className="text-muted">19 March, 2026</td>
                            <td><span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25">Shipped</span></td>
                            <td className="fw-bold">$120.50</td>
                            <td className="text-end px-3">
                              <button className="btn btn-light btn-sm border">Details</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;