function Stats() {
  return (
    <div className="container px-5">
      <div className="row px-5">
        <div className="col-6 mb-5 p-5">
          <h3>Trust with confidence</h3>

          <div className="mt-5 mb-5">
            <div className="mb-4">
              <h4 className="text-muted">Customer-first always</h4>
              <p className="text-muted">
                That's why 1.6+ crore customers trust StockVision with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-muted">No spam or gimmicks</h4>
              <p className="text-muted">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-muted">The StockVision universe</h4>
              <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-muted">Do better with money</h4>
              <p className="text-muted">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 mb-5">
          <img
            src="/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid"
          ></img>
          <div className="text-center">
            <a href="/home" className="ms-4 me-4" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>

            <a href="/home" className="ms-4 me-4" style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
