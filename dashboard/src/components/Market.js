import "./Market.css";

function Market() {
  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-6 d-flex align-items-center gap-1">
          <div className="fw-bold">
            <span className="text-nowrap ">NIFTY 50</span>
          </div>
          <div className="fw-bold text-success">24911.90</div>
          <div className="text-muted">55.80</div>
          <div className="text-muted">(0.22%)</div>
        </div>
        <div className="col-6 d-flex align-items-center gap-2">
          <div className="fw-bold">
            <span className="text-nowrap ">SENSEX</span>
          </div>
          <div className="fw-bold text-success">81185.58 </div>
          <div className="text-muted">96.28</div>
          <div className="text-muted">(0.36%)</div>
        </div>
      </div>
    </div>
  );
}

export default Market;
