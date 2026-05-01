const StatCard = ({ title, val, icon, color }) => (
  <div className="col-md-3">
    <div className={`card border-0 shadow-sm border-start border-4 border-${color} p-3`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div className="text-muted small fw-bold">{title}</div>
          <h3 className="mb-0 fw-bold">{val}</h3>
        </div>
        <i className={`bi ${icon} fs-1 text-${color} opacity-25`}></i>
      </div>
    </div>
  </div>
);

export default StatCard