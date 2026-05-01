import React from 'react';

const WishCard = ({ product, handleCartms, onRemove }) => {
  // Aapke data structure ke mutabiq keys: _id, name, category, price, img, qty
  const { _id, name, category, price, img, qty, rating } = product;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 border-0 shadow-sm hover-up"
        style={{ border: '1px solid #DEE2E7', borderRadius: '8px', overflow: 'hidden' }}>

        {/* Product Image Section */}
        <div className="position-relative bg-light d-flex align-items-center justify-content-center"
          style={{ height: '200px', padding: '15px' }}>
          <img
            src={img}
            alt={name}
            className="img-fluid"
            style={{ maxHeight: '100%', objectFit: 'contain' }}
          // onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=No+Image'; }}
          />
          <span className="position-absolute top-0 start-0 m-2 badge bg-white text-primary border small">
            {category}
          </span>
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column p-3">
          <div className="d-flex justify-content-between align-items-start mb-1">
            <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '15px' }}>{name}</h6>
            <div className="text-warning small">
              <i className="bi bi-star-fill"></i> {rating || 0}
            </div>
          </div>

          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="fw-bold fs-5 text-dark">${price}</span>
            {qty > 0 ? (
              <span className="text-success x-small" style={{ fontSize: '12px' }}>● In Stock ({qty})</span>
            ) : (
              <span className="text-danger x-small" style={{ fontSize: '12px' }}>● Out of Stock</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto d-flex gap-2">
            <button
              className="btn btn-primary flex-grow-1 btn-sm fw-bold shadow-sm"
              style={{ background: 'linear-gradient(180deg, #127FFF 0%, #0067FF 100%)', border: 'none' }}
              onClick={() => handleCartms(product.Owners, product, product.qty, product.productID)}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-outline-light border btn-sm text-secondary"
              onClick={() => onRemove(_id)}
              title="Wishlist se hatayein"
            >
              <i className="bi bi-heart-fill text-danger"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;