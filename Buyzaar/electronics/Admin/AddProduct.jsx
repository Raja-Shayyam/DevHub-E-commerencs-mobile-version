import React, { useState } from 'react';
import axios from 'axios'; // or your API client

const AddProduct = ({ setShowModal }) => {
  // ----- Product main fields -----
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    stock: 0,
    inStock: true,
    images: [], // array of URLs or file objects
    tags: [],
  });

  // ----- Price tiers (quantity ranges) -----
  const [priceTiers, setPriceTiers] = useState([
    { minQty: 50, maxQty: 100, price: 98 },
    { minQty: 100, maxQty: 700, price: 90 },
    { minQty: 700, maxQty: null, price: 78 },
  ]);

  // ----- Attributes (like on detail page) -----
  const [attributes, setAttributes] = useState({
    type: '',
    material: '',
    design: '',
    customization: '',
    protection: '',
    warranty: '',
  });

  // ----- Features (bullet points) -----
  const [features, setFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState('');

  // ----- Specifications (key-value) -----
  const [specs, setSpecs] = useState([
    { key: 'Model', value: '' },
    { key: 'Style', value: '' },
    { key: 'Certificate', value: '' },
    { key: 'Size', value: '' },
    { key: 'Memory', value: '' },
  ]);

  // Helper to update simple fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setProduct(prev => ({ ...prev, [name]: checked }));
    } else {
      setProduct(prev => ({ ...prev, [name]: value }));
    }
  };

  // Price tiers handlers
  const addPriceTier = () => {
    setPriceTiers([...priceTiers, { minQty: 0, maxQty: null, price: 0 }]);
  };
  const updatePriceTier = (index, field, value) => {
    const updated = [...priceTiers];
    updated[index][field] = field === 'price' ? parseFloat(value) : parseInt(value, 10);
    setPriceTiers(updated);
  };
  const removePriceTier = (index) => {
    setPriceTiers(priceTiers.filter((_, i) => i !== index));
  };

  // Attributes handler
  const handleAttrChange = (e) => {
    const { name, value } = e.target;
    setAttributes(prev => ({ ...prev, [name]: value }));
  };

  // Features handlers
  const addFeature = () => {
    if (newFeature.trim()) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature('');
    }
  };
  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  // Specifications handlers
  const updateSpec = (index, field, value) => {
    const updated = [...specs];
    updated[index][field] = value;
    setSpecs(updated);
  };
  const addSpecRow = () => {
    setSpecs([...specs, { key: '', value: '' }]);
  };
  const removeSpecRow = (index) => {
    setSpecs(specs.filter((_, i) => i !== index));
  };

  // Submit product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      ...product,
      priceTiers,
      attributes,
      features,
      specifications: Object.fromEntries(specs.map(s => [s.key, s.value])),
    };
    try {
      // Replace with your API endpoint
      const response = await axios.post('/api/products', productData);
      console.log('Product created:', response.data);
      alert('Product added successfully!');
      // Reset form or redirect
    } catch (error) {
      console.error(error);
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container py-5" style={{ background: '#F7FAFC' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Add New Product</h3>
          <p className="text-muted small">Naya maal/product shamil karein</p>
        </div>
        <div className="d-flex gap-2">
          <button type="button" className="btn btn-outline-secondary px-4" onClick={() => { setShowModal(false) }}>Discard</button>
          <button type="submit" className="btn btn-primary px-4 fw-bold shadow-sm" style={{ background: 'linear-gradient(180deg, #127FFF 0%, #0067FF 100%)', border: 'none' }}>
            Publish Product
          </button>
        </div>
      </div>

      <div className="row g-4">
        {/* LEFT COLUMN */}
        <div className="col-lg-8">
          {/* General Information */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h6 className="fw-bold mb-3 border-bottom pb-2">General Information</h6>
              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">Product Name / Naam</label>
                <input type="text" name="name" value={product.name} onChange={handleChange} className="form-control bg-light border-0" placeholder="e.g. Mens Long Sleeve T-shirt" required />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">Description</label>
                <textarea name="description" value={product.description} onChange={handleChange} className="form-control bg-light border-0" rows="5" placeholder="Product ke baaray mein likhein..." required></textarea>
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h6 className="fw-bold mb-3 border-bottom pb-2">Product Media</h6>
              <div className="border-2 border-dashed rounded-3 p-5 text-center bg-light mb-3" style={{ borderStyle: 'dashed', borderColor: '#DEE2E7' }}>
                <i className="bi bi-cloud-arrow-up fs-1 text-primary"></i>
                <p className="mt-2 mb-0 fw-medium">Drag & drop images here</p>
                <span className="text-muted small">or click to browse from files</span>
                <input type="file" className="d-none" multiple accept="image/*" />
              </div>
              {/* Image previews */}
              <div className="d-flex gap-2">
                {product.images.map((img, idx) => (
                  <div key={idx} className="border rounded p-1 bg-white" style={{ width: '80px', height: '80px' }}>
                    <img src={img} alt="preview" className="w-100 h-100 object-fit-cover rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h6 className="fw-bold mb-0">Features (Bullet Points)</h6>
                <button type="button" className="btn btn-link btn-sm p-0 text-decoration-none" onClick={addFeature}>+ Add</button>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0" placeholder="e.g. Some great feature name here" value={newFeature} onChange={(e) => setNewFeature(e.target.value)} />
                  <button type="button" className="btn btn-outline-secondary" onClick={addFeature}>Add</button>
                </div>
              </div>
              <div>
                {features.map((feature, idx) => (
                  <div key={idx} className="d-flex align-items-center gap-2 mb-2">
                    <i className="bi bi-check-circle-fill text-success"></i>
                    <span className="flex-grow-1">{feature}</span>
                    <button type="button" className="btn btn-sm btn-link text-danger" onClick={() => removeFeature(idx)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-lg-4">
          {/* Pricing & Stock */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h6 className="fw-bold mb-3 border-bottom pb-2">Pricing & Inventory</h6>
              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">Total Stock Quantity</label>
                <input type="number" name="stock" value={product.stock} onChange={handleChange} className="form-control bg-light border-0" placeholder="e.g. 1000" min="0" />
              </div>
              <div className="form-check form-switch small mb-3">
                <input className="form-check-input" type="checkbox" name="inStock" id="stockSwitch" checked={product.inStock} onChange={handleChange} />
                <label className="form-check-label fw-bold" htmlFor="stockSwitch">In Stock / Maal mojood hai</label>
              </div>

              {/* Price Tiers */}
              <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <label className="form-label small fw-bold text-muted">Price Tiers (Quantity Ranges)</label>
                  <button type="button" className="btn btn-link btn-sm p-0 text-decoration-none" onClick={addPriceTier}>+ Add Tier</button>
                </div>
                {priceTiers.map((tier, idx) => (
                  <div key={idx} className="row g-2 mb-2 align-items-end">
                    <div className="col-4">
                      <input type="number" className="form-control form-control-sm bg-light border-0" placeholder="Min Qty" value={tier.minQty} onChange={(e) => updatePriceTier(idx, 'minQty', e.target.value)} />
                    </div>
                    <div className="col-4">
                      <input type="number" className="form-control form-control-sm bg-light border-0" placeholder="Max Qty (leave empty for +)" value={tier.maxQty || ''} onChange={(e) => updatePriceTier(idx, 'maxQty', e.target.value)} />
                    </div>
                    <div className="col-3">
                      <input type="number" step="0.01" className="form-control form-control-sm bg-light border-0" placeholder="Price" value={tier.price} onChange={(e) => updatePriceTier(idx, 'price', e.target.value)} />
                    </div>
                    <div className="col-1">
                      <button type="button" className="btn btn-sm btn-link text-danger p-0" onClick={() => removePriceTier(idx)}><i className="bi bi-x"></i></button>
                    </div>
                  </div>
                ))}
                <p className="text-muted x-small mt-2 mb-0">Example: 50-100 pcs: $98, 100-700: $90, 700+: $78</p>
              </div>
            </div>
          </div>

          {/* Category & Tags */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h6 className="fw-bold mb-3 border-bottom pb-2">Category & Tags</h6>
              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">Category</label>
                <select name="category" value={product.category} onChange={handleChange} className="form-select bg-light border-0" required>
                  <option value="">Select Category</option>
                  <option value="smart watch">Smart Watch</option>
                  <option value="simple watch">Simple Watch</option>
                  <option value="T shirt">T Shirt</option>
                  <option value="Jacket">Jacket</option>
                  <option value="Hoodie">Hoodie</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">Tags (Press Enter)</label>
                <input type="text" className="form-control bg-light border-0" placeholder="e.g. Summer, Cotton" />
              </div>
            </div>
          </div>

          {/* Product Attributes (from detail page) */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h6 className="fw-bold mb-3 border-bottom pb-2">Product Details</h6>
              <div className="row g-2">
                <div className="col-6">
                  <label className="form-label small fw-bold text-muted">Type</label>
                  <input type="text" name="type" value={attributes.type} onChange={handleAttrChange} className="form-control bg-light border-0" placeholder="e.g. Classic shoes" />
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-muted">Material</label>
                  <input type="text" name="material" value={attributes.material} onChange={handleAttrChange} className="form-control bg-light border-0" placeholder="e.g. Plastic material" />
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-muted">Design</label>
                  <input type="text" name="design" value={attributes.design} onChange={handleAttrChange} className="form-control bg-light border-0" placeholder="e.g. Modern nice" />
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-muted">Customization</label>
                  <input type="text" name="customization" value={attributes.customization} onChange={handleAttrChange} className="form-control bg-light border-0" placeholder="Customized logo..." />
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-muted">Protection</label>
                  <input type="text" name="protection" value={attributes.protection} onChange={handleAttrChange} className="form-control bg-light border-0" placeholder="e.g. Refund Policy" />
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-muted">Warranty</label>
                  <input type="text" name="warranty" value={attributes.warranty} onChange={handleAttrChange} className="form-control bg-light border-0" placeholder="e.g. 2 years full warranty" />
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <h6 className="fw-bold mb-0">Specifications</h6>
                <button type="button" className="btn btn-link btn-sm p-0 text-decoration-none" onClick={addSpecRow}>+ Add</button>
              </div>
              {specs.map((spec, idx) => (
                <div key={idx} className="row g-2 mb-2">
                  <div className="col-5">
                    <input type="text" className="form-control form-control-sm bg-light border-0" placeholder="Key (e.g. Model)" value={spec.key} onChange={(e) => updateSpec(idx, 'key', e.target.value)} />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control form-control-sm bg-light border-0" placeholder="Value (e.g. #8786)" value={spec.value} onChange={(e) => updateSpec(idx, 'value', e.target.value)} />
                  </div>
                  <div className="col-1">
                    <button type="button" className="btn btn-sm btn-link text-danger p-0" onClick={() => removeSpecRow(idx)}><i className="bi bi-x"></i></button>
                  </div>
                </div>
              ))}
              <p className="text-muted x-small mt-2 mb-0">Ye specs product detail page ke table mein show honge.</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;