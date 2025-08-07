function Hero() {
  return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-8">
            <img
              src="images/homeHero.png"
              alt="Hero Image"
              className="mb-5 mt-5 img-fluid"
            />
          </div>
          <div className="col-12">
            <h3>Invest in everything</h3>
            <p>
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <button className="btn btn-primary btn-sm p-2 fs-5 mt-3 mb-5">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
  );
}

export default Hero;
