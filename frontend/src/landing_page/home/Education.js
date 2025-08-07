function Education() {
  return (
    <div className="container mt-5 p-5">
      <div className="row p-5">
        <div className="col-6">
          <img src="images/education.svg"></img>
        </div>
        <div className="col-6 mt-3">
          <h3>Free and open market education</h3>
          <div className="mt-4">
            <p className="mb-4">
              Varsity, the largest online stock market education book in the
              world<br></br> covering everything from the basics to advanced trading.
            </p>
            <a href="/home" style={{ textDecoration: "none" }}>
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4">
            <p className="mb-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="/home" style={{ textDecoration: "none" }}>
              TradingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
