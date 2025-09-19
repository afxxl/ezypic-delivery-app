import { useState } from "react";
import { Link } from "react-router-dom";
import logoSvg from "../../../assets/images/logo.png";
import { QRCodeSVG } from "qrcode.react"; // Changed this line
import "./Footer.css";

const Footer = () => {
  const [showQR, setShowQR] = useState(false);
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const handleDownloadClick = () => {
    setShowQR(true);
  };

  const closeQR = () => setShowQR(false);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section company-section">
              <div className="footer-logo">
                <img src={logoSvg} alt="EZYPIC" className="logo-image" />
              </div>
              <p className="company-description">
                Making delivery simple, fast, and reliable across the country.
              </p>
              <button
                className="download-btn-compact"
                onClick={handleDownloadClick}
              >
                📱 Download App
              </button>
            </div>

            <div className="footer-section">
              <h3 className="section-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="footer-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section contact-section">
              <h3 className="section-title">Contact Us</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span>📧 jabir@ezypic.in</span>
                </div>
                <div className="contact-item">
                  <span>📞 +91 9535823098</span>
                </div>
                <div className="contact-item address-item">
                  <span>
                    📍 No 66/1, Coles Rd, Cleveland Town, Frazer Town,
                    Bengaluru, Karnataka 560005
                  </span>
                </div>
              </div>
            </div>

            <div className="footer-section map-section">
              <h3 className="section-title">Find Us</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.840515729259!2d77.60494731482235!3d12.98784359087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x14480e23f14e945d!2sColes%20Rd%2C%20Cleveland%20Town%2C%20Pulikeshi%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560005!5e0!3m2!1sen!2sin!4v1694861234567!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EZYPIC Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} EZYPIC. All rights reserved.
              </p>
              <div className="footer-links-bottom">
                <a
                  href="https://sites.google.com/view/ezypic-privacy-policy/home"
                  className="bottom-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Terms & Conditions coming soon!");
                  }}
                  className="bottom-link"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

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

export default Footer;
