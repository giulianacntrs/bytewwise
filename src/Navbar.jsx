import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./img/color-bw-03.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); 
  const location = useLocation(); 

  const isHomeScreen = location.pathname === "/"; 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isHomeScreen && !isScrolled ? "fixed-top" : "position-static"
      } ${isScrolled || !isHomeScreen ? "navbar-solid" : "navbar-light"} transition-all`}
    >
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Metas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/transacciones" className="nav-link">
              Transacciones
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tareas-habitos" className="nav-link">
              Tareas/hábitos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Registrarse
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
