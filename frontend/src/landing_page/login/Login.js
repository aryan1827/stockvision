import { useForm } from "react-hook-form";
import axios from "axios";
import "./Login.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [serverError, setServerError] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);
  
  const API_URL = process.env.REACT_APP_API_URL;
  const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL


  useEffect(() => {
    axios
      .get(`${API_URL}/auth/verify`, { withCredentials: true })
      .then(() => {
        window.location.href = `${DASHBOARD_URL}`;
      })
      .catch(() => {
        setCheckingAuth(false);
      });
  }, []);

  const onSubmit = (data) => {
    setServerError("");
    axios
      .post(`${API_URL}/auth/login`, data, {
        withCredentials: true,
      })
      .then((res) => {
        window.location.href = `${DASHBOARD_URL}`;
      })
      .catch((err) => {
        if (err.response && err.response.data.message) {
          setServerError(err.response.data.message);
        } else {
          setServerError("Something went wrong. Please try again.");
        }
      });
  };

  if (checkingAuth) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-50">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-start mt-5 mb-5 min-vh-50">
        <div className="card p-3" style={{ width: "22rem" }}>
          <div className="card-body">
            <div className="mb-2 mt-2 p-3 d-flex justify-content-center">
              <a
                href={`${DASHBOARD_URL}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/sv.jpg"
                  alt="signup"
                  className="img-fluid"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              </a>
            </div>

            <h5 className="text-muted card-title text-center mb-4">
              Login to Dashboard
            </h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 mt-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                  })}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-2 mt-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: { value: true, message: "Password is required" },
                  })}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </div>
              {serverError && <p className="text-danger">{serverError}</p>}
              <button
                type="submit"
                style={{ backgroundColor: "#0398fc" }}
                className="btn btn-primary w-100 mb-3 mt-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="text-center">
              <p className="small-text">
                New to stockvision ?{" "}
                <Link to="/signup">Signup Now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 mt-5 text-center">
        <footer className="mt-3">
          <small className="text-muted d-block mb-2">
            StockVision — A project demo platform for market insights and
            portfolio tracking
          </small>
          <small className="text-muted d-block">
            This platform is for educational purposes only and does not provide
            real financial or investment services.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default Login;
