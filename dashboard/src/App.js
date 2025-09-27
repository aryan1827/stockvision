import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import axios from "axios";


function App() {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:1008/auth/verify", { withCredentials: true })
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <p>Loading...</p>;

  if (!auth) {
    window.location.href = "http://localhost:3001/signup";
    return null;
  }
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
