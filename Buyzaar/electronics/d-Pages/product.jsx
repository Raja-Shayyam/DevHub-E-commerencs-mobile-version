import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { customhook } from "../context/store";
import { allProducts } from "../Axoius/axiousAPI"; // adjust path

const ProductListView = () => {
  const navigate = useNavigate();
  const { setProdDetails } = customhook();
  const [products, setProducts] = useState([]);
  const [grid, setGrid] = useState(false);

  // filters states
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [appliedMin, setAppliedMin] = useState("");
  const [appliedMax, setAppliedMax] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  // filter 
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [allFeatures, setAllFeatures] = useState([]);

  // fetching my all products with pagenation property
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (page) => {
    const res = await allProducts(page, 8);
    setProducts(res.data.allProducts);
    setCurrentPage(res.data.pagination.page)
    setTotalPages(res.data.pagination.pages)
  };
  useEffect(() => {
    fetchProducts(currentPage);
  }, []);

  const goToPage = (page) => {
    console.log('clicked ', currentPage, page);

    if (page < 1 || page > totalPages) return;
    fetchProducts(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Extract filter options when products change
  useEffect(() => {
    if (!products.length) return;

    // Unique categories
    const uniqueCategories = [...new Set(products.map(p => p.category).filter(Boolean))];
    setCategories(uniqueCategories);

    const uniqueBrands = [...new Set(products.map(p => p.specifications?.Brand).filter(Boolean))];
    setBrands(uniqueBrands.slice(0, 10));

    const allFeat = products.flatMap(p => p.features || []);
    const uniqueFeatures = [...new Set(allFeat)];
    setAllFeatures(uniqueFeatures.slice(0, 10));
  }, [products]);

  // Filter logic
  const filteredProducts = products.filter(product => {
    // Category
    if (selectedCategory && product.category !== selectedCategory) return false;

    // Brand
    if (selectedBrands.length > 0) {
      const productBrand = product.specifications?.Brand;
      if (!productBrand || !selectedBrands.includes(productBrand)) return false;
    }

    // Features (product must have ALL selected features)
    if (selectedFeatures.length > 0) {
      const productFeatures = product.features || [];
      const hasAll = selectedFeatures.every(feat => productFeatures.includes(feat));
      if (!hasAll) return false;
    }

    // Price range
    const price = product.price;
    if (appliedMin && price < parseFloat(appliedMin)) return false;
    if (appliedMax && price > parseFloat(appliedMax)) return false;

    // Condition (skip if no data – just placeholder)
    if (selectedCondition && product.condition !== selectedCondition) return false;

    return true;
  });

  // Handlers
  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleFeatureChange = (feature) => {
    setSelectedFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const applyPriceRange = () => {
    setAppliedMin(priceMin);
    setAppliedMax(priceMax);
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedBrands([]);
    setSelectedFeatures([]);
    setPriceMin("");
    setPriceMax("");
    setAppliedMin("");
    setAppliedMax("");
    setSelectedCondition("");
  };

  return (
    <div className="bg-light">
      <div className="container-fluid px-lg-5 py-3">
        <nav className="small text-muted">
          Home <i className="bi bi-chevron-right mx-1"></i> Clothings{" "}
          <i className="bi bi-chevron-right mx-1"></i> Men's wear{" "}
          <i className="bi bi-chevron-right mx-1"></i> Summer clothing
        </nav>
      </div>

      <main className="container-fluid px-lg-5 pb-5">
        <div className="row g-4">
          <aside className="col-lg-3 d-none d-lg-block">
            <div className="border-top py-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Category</h6>
                <i className="bi bi-chevron-up text-muted"></i>
              </div>
              {categories.map(cat => (
                <div key={cat} className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                  />
                  <label className="form-check-label small">{cat}</label>
                </div>
              ))}
              {selectedCategory && (
                <button
                  className="btn btn-link p-0 text-primary small text-decoration-none mt-1"
                  onClick={() => setSelectedCategory("")}
                >
                  Clear
                </button>
              )}
            </div>
            <div className="border-top py-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Brands</h6>
                <i className="bi bi-chevron-up text-muted"></i>
              </div>
              {brands.map(brand => (
                <div key={brand} className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <label className="form-check-label small">{brand}</label>
                </div>
              ))}
              {selectedBrands.length > 0 && (
                <button
                  className="btn btn-link p-0 text-primary small text-decoration-none mt-1"
                  onClick={() => setSelectedBrands([])}
                >
                  Clear
                </button>
              )}
            </div>

            <div className="border-top py-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Features</h6>
                <i className="bi bi-chevron-up text-muted"></i>
              </div>
              {allFeatures.map(feature => (
                <div key={feature} className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => handleFeatureChange(feature)}
                  />
                  <label className="form-check-label small">{feature}</label>
                </div>
              ))}
              {selectedFeatures.length > 0 && (
                <button
                  className="btn btn-link p-0 text-primary small text-decoration-none mt-1"
                  onClick={() => setSelectedFeatures([])}
                >
                  Clear
                </button>
              )}
            </div>

            <div className="border-top py-3">
              <h6 className="fw-bold mb-3">Price range</h6>
              <div className="d-flex gap-2 mb-3">
                <input
                  className="form-control"
                  placeholder="Min"
                  type="number"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                />
                <input
                  className="form-control"
                  placeholder="Max"
                  type="number"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                />
              </div>
              <button
                className="btn btn-light border w-100 text-primary fw-medium"
                onClick={applyPriceRange}
              >
                Apply
              </button>
              {(appliedMin || appliedMax) && (
                <button
                  className="btn btn-link p-0 text-primary small text-decoration-none mt-2 w-100"
                  onClick={() => {
                    setPriceMin("");
                    setPriceMax("");
                    setAppliedMin("");
                    setAppliedMax("");
                  }}
                >
                  Clear price filter
                </button>
              )}
            </div>

            <div className="border-top py-3">
              <h6 className="fw-bold mb-3">Condition</h6>
              {["Any", "Refurbished", "Brand new", "Old items"].map(cond => (
                <div key={cond} className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="condition"
                    checked={selectedCondition === cond}
                    onChange={() => setSelectedCondition(cond === "Any" ? "" : cond)}
                  />
                  <label className="form-check-label">{cond}</label>
                </div>
              ))}
            </div>

            <div className="border-top pt-3 mt-2">
              <button
                className="btn btn-outline-danger w-100"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            </div>
          </aside>
          <div className="col-lg-9">
            {/* Top Bar */}
            <div className="bg-white border rounded p-3 d-flex justify-content-between align-items-center mb-3">
              <div>
                {filteredProducts.length} items in{" "}
                <strong>{selectedCategory || "all categories"}</strong>
              </div>
              <div className="d-flex align-items-center gap-3">
                {/* Verified only – skipped for now */}
                <div className="form-check mb-0">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Verified only</label>
                </div>
                <select className="form-select w-auto">
                  <option>Featured</option>
                </select>
                <div className="btn-group border rounded">
                  <button
                    className={`btn btn-light border-0 ${grid ? "active bg-light" : ""}`}
                    onClick={() => setGrid(true)}
                  >
                    <i className="bi bi-grid-fill"></i>
                  </button>
                  <button
                    className={`btn btn-light border-0 ${!grid ? "active bg-light" : ""}`}
                    onClick={() => setGrid(false)}
                  >
                    <i className="bi bi-list"></i>
                  </button>
                </div>
              </div>
            </div>

            {grid ? (
              <div className="row g-2">
                {filteredProducts.map(product => (
                  <div key={product._id} className="col-md-4">
                    <div className="card h-100 border rounded mb-3 overflow-hidden shadow-sm">
                      <div
                        className="p-3 d-flex align-items-center justify-content-center bg-white"
                        style={{ height: "300px" }}
                      >
                        <div className="product-img-placeholder">
                          <img
                            src={product.images?.[0]}
                            alt={product.name}
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                      <div className="p-3 bg-white">
                        <h6 className="product-title mb-1">{product.name}</h6>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <h5 className="fw-bold mb-0">${product.price.toFixed(2)}</h5>
                          {product.oldPrice && (
                            <span className="text-muted text-decoration-line-through small">
                              ${product.oldPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <button
                          className="btn btn-link text-primary p-0 fw-bold text-decoration-none"
                          onClick={() => {
                            setProdDetails(product);
                            navigate("/productsBroderview");
                          }}
                        >
                          View details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              filteredProducts.map(product => (
                <div
                  key={product._id}
                  className="card border rounded mb-3 overflow-hidden shadow-sm"
                >
                  <div className="row g-0 h-100">
                    <div
                      className="col-md-4 p-3 d-flex align-items-center justify-content-center bg-white"
                      style={{ height: "300px" }}
                    >
                      <img
                        src={product.images?.[0]}
                        alt={product.name}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-8 p-4 bg-white border-start">
                      <div className="d-flex justify-content-between">
                        <h6 className="product-title mb-1">{product.name}</h6>
                        <button className="btn btn-outline-primary border btn-sm rounded heart-btn">
                          <i className="bi bi-heart"></i>
                        </button>
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <h5 className="fw-bold mb-0">${product.price.toFixed(2)}</h5>
                        {product.oldPrice && (
                          <span className="text-muted text-decoration-line-through small">
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="d-flex align-items-center gap-2 mb-3 text-muted small">
                        <span className="text-warning">★★★★☆ {product.rating}</span>
                        <span className="dot"></span>
                        <span>{product.soldCount || 0} orders</span>
                        <span className="dot"></span>
                        <span className="text-success">
                          {product.shipping?.[0] || "Standard"}
                        </span>
                      </div>
                      <p className="text-muted small mb-3">{product.description}</p>
                      <button
                        className="btn btn-link text-primary p-0 fw-bold text-decoration-none"
                        onClick={() => {
                          setProdDetails(product);
                          navigate("/productsBroderview");
                        }}
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            <nav className="d-flex justify-content-end mt-4">
              <ul className="pagination">
                <li className={`page-item ${currentPage == 1 ? 'disabled' : ''}`}>
                  <span className="page-link" onClick={() => goToPage(currentPage - 1)}>
                    <i className="bi bi-chevron-left"></i>
                  </span>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i} className={`page-item ${parseInt(currentPage) === i + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => goToPage(i + 1)}>
                      {i + 1}
                    </button>
                  </li>
                ))}
                {/* <li className="page-item active">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <span className="page-link">2</span>
                </li>
                <li className="page-item">
                  <span className="page-link">3</span>
                </li> */}
                <li className={`page-item ${currentPage == totalPages ? 'disabled' : ''}`}>
                  <span className="page-link" onClick={() => goToPage(parseInt(currentPage) + 1)}>
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListView;