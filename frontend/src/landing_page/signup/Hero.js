import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";

function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [serverError, setServerError] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1008/auth/verify", { withCredentials: true })
      .then(() => {
        window.location.href = "http://localhost:3002";
      })
      .catch((error) => {
        if (error.response?.status !== 401) {
          console.error('Auth verification failed:', error);
        }
        setCheckingAuth(false);
      });
  }, []);

  const onSubmit = async (data) => {
    setServerError("");
    axios
      .post("http://localhost:1008/auth/signup", data, {
        withCredentials: true,
      })
      .then((res) => {
        window.location.href = "http://localhost:3002";
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
      <div className="container">
        <div className="row mt-5 mb-5 p-5 text-center">
          <div className="d-flex justify-content-center align-items-center min-vh-50">
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Checking authentication...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row mt-5 mb-5 p-5 text-center">
        <h2 className="text-muted">
          Open a free demat and trading account online<br></br>
        </h2>
        <h4 className="text-muted">
          Start investing brokerage free and join a community of investors and
          traders
        </h4>
      </div>

      <div className="row mt-3 mb-3 p-3 text-center">
        <div className="col-7">
          <img
            src="images/signup_2.png"
            alt="signup"
            className="img-fluid"
          ></img>
        </div>
        <div className="col-5">
          <div className="text-start">
            <h3 className="text-muted">Signup Now</h3>
            <p className="text-muted">
              Have an existing account? <a href="/login">Login Now</a>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your name"
                {...register("username", {
                  required: { value: true, message: "Name is required" },
                })}
              ></input>
              {errors.username && (
                <p className="text-danger">{errors.username.message}</p>
              )}
              <br></br>
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                })}
              ></input>
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
              <br></br>
              <input
                className="form-control"
                type="password"
                placeholder="Enter a password"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                })}
              ></input>
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
              {serverError && <p className="text-danger">{serverError}</p>}
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn btn-primary btn-sm p-2 fs-5 mt-4 mb-5 me-2"
              >
                {isSubmitting ? "Signing up..." : "Sign up for free"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Hero;
