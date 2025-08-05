import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoSvg from "../../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logoSvg} alt="EZYPIC" className="logo-image" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Download App Button */}
          <div className="header-actions">
            <button className="btn btn-primary download-btn">
              Download App
            </button>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={isMenuOpen ? "active" : ""}></span>
              <span className={isMenuOpen ? "active" : ""}></span>
              <span className={isMenuOpen ? "active" : ""}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-mobile-content">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link-mobile ${isActive(item.href) ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="btn btn-primary mobile-download-btn">
              Download App
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
