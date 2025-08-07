function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 p-5 text-center">
        <h4 className="text-muted">
          We pioneered the discount broking model in India.<br></br>
          Now, we are breaking ground with our technology.
        </h4>
      </div>
      <div
        className="row mt-5 mb-5 border-top text-muted"
        style={{ lineHeight: "1.8" }}
      >
        <div className="col-6 p-5 fs-6">
          <p>
            StockVision was launched with the vision of simplifying and
            revolutionizing the way people understand and interact with the
            stock market. Created as part of a college project, the aim was to
            eliminate the complexity faced by beginners and young investors when
            analyzing stocks, interpreting trends, or accessing financial
            insights.
          </p>
          <p>
            With a clean interface, smart analytics, and a foundation in
            real-time data visualization, StockVision empowers users to make
            informed decisions without being overwhelmed by financial jargon.
            Originally an academic initiative, it has grown into a powerful
            stock analysis tool that bridges the gap between curiosity and
            confident investing.
          </p>
        </div>
        <div className="col-6 p-5 fs-6">
          <p>
            In addition, StockVision supports a range of open educational
            initiatives aimed at empowering retail investors and student
            communities. By promoting financial literacy and simplifying stock
            market concepts, the platform encourages independent learning and
            informed decision-making.
          </p>
          <p>
            Backed by a strong foundation in data analytics and UI/UX design,
            StockVision continues to evolve with fresh features and innovations.
            Stay updated through the project blog, explore user feedback, or
            dive into the philosophy behind its design and development journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
