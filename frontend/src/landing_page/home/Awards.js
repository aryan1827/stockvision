function Awards() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6 mt-5 p-5">
          <img
            src="images/largestBroker.svg"
            alt="largestBroker"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-6 mt-5 p-5">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million StockVision clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-5 mb-5">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currencty derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <img
              src="/images/pressLogos.png"
              alt="pressLogos"
              className="mt-5"
              style={{ width: "90%" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
