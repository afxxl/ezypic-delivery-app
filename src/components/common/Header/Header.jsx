import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoSvg from "../../../assets/images/logo.png";
import { QRCodeSVG } from "qrcode.react"; // Changed this line
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const handleDownloadClick = () => {
    setShowQR(true);
  };

  const closeQR = () => {
    setShowQR(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <img src={logoSvg} alt="EZYPIC" className="logo-image" />
            </Link>
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
            <div className="header-actions">
              <button
                className="btn btn-primary download-btn"
                onClick={handleDownloadClick}
                title="Download EZYPIC App"
              >
                📱 Download App
              </button>
              <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className={menuOpen ? "active" : ""}></span>
                <span className={menuOpen ? "active" : ""}></span>
                <span className={menuOpen ? "active" : ""}></span>
              </button>
            </div>
          </div>
          <nav className={`nav-mobile ${menuOpen ? "open" : ""}`}>
            <div className="nav-mobile-content">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link-mobile ${isActive(item.href) ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                className="btn btn-primary mobile-download-btn"
                onClick={() => {
                  handleDownloadClick();
                  setMenuOpen(false);
                }}
              >
                📱 Download App
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* QR code modal */}
      {showQR && (
        <div className="qr-modal" onClick={closeQR}>
          <div className="qr-content" onClick={(e) => e.stopPropagation()}>
            <h2>📱 Download EZYPIC App</h2>
            <div className="qr-code-wrapper">
              <QRCodeSVG
                value="https://www.ezypic.in/ezypic-app.apk"
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="M"
              />
            </div>
            <p>
              Scan this QR code with your mobile camera to download the app
              safely.
            </p>
            <div className="qr-buttons">
              <a
                href="https://www.ezypic.in/ezypic-app.apk"
                download="EZYPIC-App.apk"
                className="btn btn-primary"
                style={{ marginRight: "10px" }}
              >
                📥 Direct Download
              </a>
              <button onClick={closeQR} className="btn btn-secondary">
                ✖️ Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
