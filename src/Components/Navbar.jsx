import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">S</span>
        <span>School<span className="logo-highlight">Find</span></span>
      </Link>

      <div className="nav-links">
        <a href="#how-it-works">How It Works</a>
        <a href="#schools">Schools</a>
        <a href="#about">About Us</a>
      </div>

      <div className="nav-actions">
        <Link to="/login" className="login-link">
          Login
        </Link>

        <Link to="/register" className="nav-button">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;