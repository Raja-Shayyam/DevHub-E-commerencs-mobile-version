export const ProductTable = ({ products, onEdit, onDelete }) => (
  <div className="table-responsive">
    <table className="table align-middle mb-0 table-hover">
      <thead className="bg-light">
        <tr>
          <th className="px-3">Image</th>
          <th>Name / Naam</th>
          <th>Price / Qeemat</th>
          <th>Description</th>
          <th className="text-end px-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td className="px-3">
              <div className="bg-light rounded d-flex align-items-center justify-content-center text-muted" style={{ width: '45px', height: '45px' }}>
                <i className="bi bi-image small"></i>
              </div>
            </td>
            <td className="fw-bold">{p.name}</td>
            <td>${parseFloat(p.price).toFixed(2)}</td>
            <td className="text-muted small">{p.description}</td>
            <td className="text-end px-3">
              <button onClick={() => onEdit(p)} className="btn btn-sm btn-outline-primary me-2"><i className="bi bi-pencil"></i></button>
              <button onClick={() => onDelete(p.id)} className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const UserTable = () => {
  // Mock Data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', type: 'Premium Member', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', type: 'Standard User', joined: '2024-02-20' },
    { id: 3, name: 'Alex Johnson', email: 'alex@example.com', type: 'Premium Member', joined: '2024-03-05' },
  ];

  return (
    <div className="table-responsive">
      <table className="table align-middle mb-0 table-hover">
        <thead className="bg-light">
          <tr>
            <th className="px-3">Name / Naam</th>
            <th>Email Address</th>
            <th>Member Type / Darja</th>
            <th>Joined / Shamil Huay</th>
            <th className="text-end px-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="px-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '32px', height: '32px', fontSize: '12px' }}>
                    {u.name.charAt(0)}
                  </div>
                  <span className="fw-medium">{u.name}</span>
                </div>
              </td>
              <td className="text-muted small">{u.email}</td>
              <td>
                <span className={`badge border px-3 py-1 rounded-pill fw-medium ${u.type === 'Premium Member' ? 'bg-success-subtle text-success border-success-subtle' : 'bg-light text-dark border-secondary-subtle'
                  }`}>
                  {u.type}
                </span>
              </td>
              <td className="text-muted small">{u.joined}</td>
              <td className="text-end px-3">
                <button className="btn btn-sm btn-outline-secondary border-0"><i className="bi bi-three-dots-vertical"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export const OrderTable = () => {
  // Mock Data
  const orders = [
    { id: '1001', user: 'John Doe', product: 'Smart Watch', qty: 1, total: 99.50, status: 'Paid', date: '2025-03-20' },
    { id: '1002', user: 'Jane Smith', product: 'Headphones', qty: 2, total: 99.98, status: 'Pending', date: '2025-03-21' },
    { id: '1003', user: 'Alex Johnson', product: 'GoPro HERO6', qty: 1, total: 329.00, status: 'Shipped', date: '2025-03-22' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Paid': return 'bg-success-subtle text-success border-success-subtle';
      case 'Pending': return 'bg-warning-subtle text-warning border-warning-subtle';
      case 'Shipped': return 'bg-info-subtle text-info border-info-subtle';
      default: return 'bg-light text-muted border-secondary-subtle';
    }
  };

  return (
    <div className="table-responsive">
      <table className="table align-middle mb-0 table-hover">
        <thead className="bg-light">
          <tr>
            <th className="px-3">Order ID</th>
            <th>Customer / Grahak</th>
            <th>Product / Maal</th>
            <th>Qty</th>
            <th>Total / Qeemat</th>
            <th>Status / Haalat</th>
            <th className="text-end px-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td className="px-3 fw-bold text-primary">#{o.id}</td>
              <td className="fw-medium">{o.user}</td>
              <td className="small text-truncate" style={{ maxWidth: '150px' }}>{o.product}</td>
              <td>{o.qty}</td>
              <td className="fw-bold">${o.total.toFixed(2)}</td>
              <td>
                <span className={`badge border px-2 py-1 rounded-pill small fw-bold ${getStatusClass(o.status)}`}>
                  {o.status.toUpperCase()}
                </span>
              </td>
              <td className="text-end px-3 text-muted small">{o.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// export default { ProductTable, UserTable, OrderTable };