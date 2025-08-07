import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 text-center">
        <h3>Creator</h3>
      </div>
      <div className="row p-5 text-muted">
        <div className="col-6 text-center">
          <img
            src="/images/IMG_7811 - Edited.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          ></img>
          <h6 className="mt-5">Aryan Bendre</h6>
          <p>Developer</p>
        </div>
        <div className="col-6 mt-5 text-muted">
          <p>
            StockVision is a full-stack project developed by Aryan Bendre, an
            aspiring software engineer with a passion for building impactful
            digital experiences.
          </p>
          <p>
            Inspired by industry leaders like Zerodha, Aryan created StockVision
            to demonstrate his skills in full-stack web development, integrating
            real-time data handling, user-friendly interfaces, and secure
            backend systems.
          </p>{" "}
          <p>
            {" "}
            You can explore more of his work on{" "}
            <Link to="https://github.com/aryan1827/">GitHub</Link> or connect
            with him on{" "}
            <Link to="https://www.linkedin.com/in/aryanbendre">LinkedIn.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
