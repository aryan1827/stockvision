import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import axios from "axios";

function App() {
  const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;
  const API_URL = process.env.REACT_APP_API_URL;

  const [auth, setAuth] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_URL}/auth/verify`, { withCredentials: true })
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <p>Loading...</p>;

  if (!auth) {
    window.location.href = `${FRONTEND_URL}/signup`;
    return null;
  }
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
