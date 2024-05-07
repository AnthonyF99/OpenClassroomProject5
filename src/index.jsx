import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/about.jsx";
import Logement from "./pages/Logement/logement.jsx";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Error from "./components/Error/error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Logement/:logementId" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);
