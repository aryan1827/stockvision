function Pricing() {
  return (
    <div className="container px-5">
      <div className="row">
        <div className="col-4">
          <h3 className="mb-4 text-muted">Unbeatable pricing</h3>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/home" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col-6 border p-4">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and <br></br>direct mutual funds</p>
            </div>
            <div className="col-6 border p-4">
              <h1 className="mb-3">₹0</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
