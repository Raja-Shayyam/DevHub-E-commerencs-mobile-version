import { useEffect, useState } from "react";
import "../CSS/CartSection.css";
import { deleteFromCART, prodInCART, prodInWISHlist, UpdateCartitems, userAllinCART, WISHlist } from "../Axoius/axiousAPI"; // your axios instance
import { customhook } from "../context/store";
import { useRef } from "react";

const CartPage = () => {
  const { user } = customhook();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savedLater, setSavedLater] = useState([]); // optional
  const [refreshRef, setrefreshRef] = useState(false)
  const [Q, setQ] = useState(null)

  // Fetch cart from backend
  const fetchCart = async () => {
    try {
      // const res = await WISHlist(user?._id);
      const res = await userAllinCART(user?._id);
      console.log(res.data);
      setCart(res.data.data);
    } catch (err) {
      console.error("Failed to load cart", err);
    } finally {
      setLoading(false);
    }
  };

  // Update item quantity
  const updateQuantity = async (prodDetailsId, item, newQty) => {
    if (newQty < 1) return;
    try {
      // const res = await WISHlist.put(`/cart/item/${prodDetailsId}`, { quantity: newQty });
      setLoading(true)
      const res = await UpdateCartitems(user?._id, { prodDetail: item, quantity: newQty, productId: prodDetailsId });
      setCart(res.data.data);
      setrefreshRef(true)
      setLoading(false)
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  // Remove item from cart
  const removeItem = async (prodDetailsId) => {
    try {
      const res = await deleteFromCART(user._id, prodDetailsId);
      setCart(res.data.data);
      setrefreshRef(true)
    } catch (err) {
      console.error("Remove failed", err);
    }
  };

  const moveToSaved = async (item) => {
    // Add to wishlist, then remove from cart
    console.log(item);
    const productId = item.productId
    try {
      await prodInWISHlist(user._id, { prodDetail: 'from cart', prod: item.productId })
      await deleteFromCART(user._id, productId);
      setrefreshRef(true)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user?._id) fetchCart();
  }, [refreshRef]);

  if (loading) return <div className="text-center p-5">Loading cart...</div>;
  if (!cart || cart.items?.length === 0) return <div className="text-center p-5">Your cart is empty.</div>;

  const cartItems = cart.items;
  const subtotal = cart.totalPrice;

  return (
    <div className="bg-light min-vh-100 pb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main className="container py-4">
        <h4 className="fw-bold mb-4">My cart ({cartItems.length}) / Mere Items</h4>

        <div className="row g-4">
          {/* LEFT: CART ITEMS */}
          <div className="col-lg-9">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-0">
                {cartItems.map((item, idx) => (
                  <div key={item.prodDetailsId} className={`d-flex p-3 ${idx !== cartItems.length - 1 ? 'border-bottom' : ''}`}>
                    <div className="bg-light border rounded d-flex align-items-center justify-content-center me-3" style={{ width: '100px', height: '100px', flexShrink: 0 }}>
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                      ) : (
                        <i className="bi bi-image text-muted fs-3"></i>
                      )}
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="fw-bold mb-1">{item.name}</h6>
                          {/* If you have extra fields like size/color, add them here */}
                          <div className="text-muted small">Shipping: {item.shipping || 'Standard'}</div>
                        </div>
                        <div className="text-end fw-bold">${item.price}</div>
                      </div>
                      <div className="d-flex gap-2 mt-2">
                        <button className="btn btn-sm btn-outline-danger px-3 py-1" onClick={() => removeItem(item.productId)}>Remove</button>
                        <button className="btn btn-sm btn-outline-primary px-3 py-1" onClick={() => moveToSaved(item)}>Save for later</button>
                      </div>
                    </div>
                    <div className="ms-3">
                      <select
                        className="form-select form-select-sm"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.productId, item, parseInt(e.target.value))}
                        style={{ width: '80px' }}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-between p-3">
                <button className="btn btn-primary px-4" onClick={() => window.history.back()}><i className="bi bi-arrow-left me-2"></i> Back to shop</button>
                {/* Remove all – implement if needed */}
                <button className="btn btn-outline-primary px-4">Remove all</button>
              </div>
            </div>

            {/* FEATURES SECTION – unchanged */}
            <div className="row g-3 mb-5">
              {[
                { icon: 'shield-lock', title: 'Secure payment', sub: 'Have you ever finally just' },
                { icon: 'chat-dots', title: 'Customer support', sub: 'Have you ever finally just' },
                { icon: 'truck', title: 'Free delivery', sub: 'Have you ever finally just' }
              ].map((feat, i) => (
                <div key={i} className="col-md-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-secondary bg-opacity-10 rounded-circle p-3 text-secondary">
                      <i className={`bi bi-${feat.icon} fs-4`}></i>
                    </div>
                    <div>
                      <div className="fw-bold small">{feat.title}</div>
                      <div className="text-muted small" style={{ fontSize: '0.75rem' }}>{feat.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SAVED FOR LATER – fetch from wishlist */}
            <div className="bg-white border rounded p-4 shadow-sm">
              <h5 className="fw-bold mb-4">Saved for later / Baad mein dekhne ke liye</h5>
              <div className="row g-3">
                {savedLater.map((item) => (
                  <div key={item._id} className="col-md-3">
                    <div className="border rounded p-2 text-center h-100 d-flex flex-column">
                      <div className="bg-light rounded mb-2 flex-grow-1 d-flex align-items-center justify-content-center" style={{ aspectRatio: '1/1' }}>
                        {item.img ? <img src={item.img} className="img-fluid" /> : <i className="bi bi-image text-muted"></i>}
                      </div>
                      <div className="fw-bold mb-1">${item.price}</div>
                      <div className="text-muted small mb-3 text-truncate-2">{item.name}</div>
                      <button className="btn btn-outline-primary btn-sm w-100 py-2 fw-bold" onClick={() => moveToCartFromSaved(item)}>
                        <i className="bi bi-cart-plus me-2"></i> Move to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: COUPON & SUMMARY */}
          <div className="col-lg-3">
            <div className="card border shadow-sm mb-4">
              <div className="card-body">
                <p className="text-muted small mb-2">Have a coupon? / Coupon code hai?</p>
                <div className="input-group">
                  <input type="text" className="form-control border-end-0" placeholder="Add coupon" />
                  <button className="btn btn-outline-primary border-start-0 px-3 fw-bold">Apply</button>
                </div>
              </div>
            </div>

            <div className="card border shadow-sm p-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal:</span>
                <span className="text-dark">${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Discount:</span>
                <span className="text-danger">-$0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Tax:</span>
                <span className="text-success">+$0.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4 fw-bold fs-5">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-success btn-lg w-100 py-3 fw-bold mb-3 shadow-sm" style={{ backgroundColor: '#00B517' }}>
                Checkout
              </button>
              <div className="d-flex justify-content-center gap-2">
                <div className="border rounded px-2 py-1"><i className="bi bi-credit-card text-muted"></i></div>
                <div className="border rounded px-2 py-1 small fw-bold text-muted">VISA</div>
                <div className="border rounded px-2 py-1 small fw-bold text-muted">PAYPAL</div>
              </div>
            </div>
          </div>
        </div>

        {/* PROMO BANNER */}
        <div className="bg-primary rounded p-4 mt-5 d-flex justify-content-between align-items-center text-white position-relative overflow-hidden">
          <div className="position-relative" style={{ zIndex: 2 }}>
            <h4 className="fw-bold mb-1">Super discount on more than 100 USD</h4>
            <p className="small mb-0 opacity-75">Have you ever finally just write dummy info</p>
          </div>
          <button className="btn btn-warning px-4 py-2 fw-bold" style={{ zIndex: 2 }}>Shop now</button>
          <div className="position-absolute end-0 top-0 h-100 w-50" style={{ background: 'rgba(255,255,255,0.1)', skewX: '-20deg', transform: 'translateX(30%)' }}></div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;