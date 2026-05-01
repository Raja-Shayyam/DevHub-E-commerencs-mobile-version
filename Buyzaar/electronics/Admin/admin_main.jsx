import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';
import { ProductTable, UserTable, OrderTable } from './ProductTable';
import AddProduct from './AddProduct';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Load Data from LocalStorage
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('admin_products')) || [
      { id: 1, name: 'Smart Watch', price: 99.50, description: 'Modern smartwatch...', image: '' },
      { id: 2, name: 'Wireless Headphones', price: 49.99, description: 'Noise cancelling...', image: '' }
    ];
    setProducts(savedProducts);
  }, []);

  const handleSaveProduct = (product) => {
    let updated;
    if (editingProduct) {
      updated = products.map(p => p.id === editingProduct.id ? { ...product, id: p.id } : p);
    } else {
      updated = [...products, { ...product, id: Date.now() }];
    }
    setProducts(updated);
    localStorage.setItem('admin_products', JSON.stringify(updated));
    setShowModal(false);
    setEditingProduct(null);
  };

  return (
    <div className="d-flex bg-light min-vh-100">
      {/* SIDEBAR */}
      <div className="bg-white border-end shadow-sm" style={{ width: '260px' }}>
        <div className="p-4 border-bottom">
          <div className="h4 fw-bold text-primary mb-0"><span>B</span>rand</div>
          <small className="text-muted">Admin Panel / Admin Control</small>
        </div>
        <div className="list-group list-group-flush p-2">
          <button
            onClick={() => setActiveTab('products')}
            className={`list-group-item list-group-item-action border-0 rounded mb-1 ${activeTab === 'products' ? 'active bg-primary' : ''}`}>
            <i className="bi bi-box-seam me-2"></i> Products / Maal
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`list-group-item list-group-item-action border-0 rounded mb-1 ${activeTab === 'users' ? 'active bg-primary' : ''}`}>
            <i className="bi bi-people me-2"></i> Users / Sarif
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`list-group-item list-group-item-action border-0 rounded mb-1 ${activeTab === 'orders' ? 'active bg-primary' : ''}`}>
            <i className="bi bi-receipt me-2"></i> Orders / Farmaish
          </button>
          <hr />
          <button className="list-group-item list-group-item-action border-0 rounded text-danger">
            <i className="bi bi-box-arrow-right me-2"></i> Logout / Bahar Niklein
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow-1 p-4">
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold m-0 capitalize">{activeTab} Management</h4>
          <div className="admin-badge bg-white border px-3 py-1 rounded-pill small fw-bold shadow-sm">
            <i className="bi bi-shield-check text-primary me-1"></i> Super Admin
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="row g-3 mb-4">
          <StatCard title="Total Users" val="1,240" icon="bi-people" color="primary" />
          <StatCard title="Total Orders" val="450" icon="bi-cart-check" color="success" />
          <StatCard title="Total Revenue" val="$12,500" icon="bi-currency-dollar" color="info" />
          <StatCard title="Total Products" val={products.length} icon="bi-box" color="warning" />
        </div>

        {/* CONTENT AREA */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
            <h6 className="fw-bold mb-0">Manage {activeTab}</h6>
            {activeTab === 'products' && (
              <button
                className="btn btn-primary btn-sm px-4 fw-bold"
                onClick={() => { setEditingProduct(null); setShowModal(true); }}>
                + Add New Product
              </button>
            )
            }

          </div>
          <div>
            { }
          </div>
          <div className="card-body p-0">
            {showModal ? <AddProduct setShowModal={setShowModal} /> :
              <>
                {activeTab === 'products' && <ProductTable products={products} onEdit={(p) => { setEditingProduct(p); setShowModal(true); }} onDelete={(id) => setProducts(products.filter(p => p.id !== id))} />}
                {activeTab === 'users' && <UserTable />}
                {activeTab === 'orders' && <OrderTable />}
              </>
            }
          </div>
        </div>
      </div>

      {/* MODAL */}
      {/* {showModal && <ProductModal product={editingProduct} onSave={handleSaveProduct} onClose={() => setShowModal(false)} />} */}
    </div>
  );
};

export default AdminDashboard;