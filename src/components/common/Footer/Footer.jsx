import { Link } from "react-router-dom";
import logoSvg from "../../../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section company-section">
            <div className="footer-logo">
              <img src={logoSvg} alt="EZYPIC" className="logo-image" />
            </div>
            <p className="company-description">
              Making delivery simple, fast, and reliable across the country.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Download */}
          <div className="footer-section contact-section">
            <h3 className="section-title">Get Started</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span>📧 jabir@ezypic.in</span>
              </div>
              <div className="contact-item">
                <span>📞 +1 (555) 123-4567</span>
              </div>
            </div>
            <button className="download-btn">📱 Download App</button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} EZYPIC. All rights reserved.
            </p>
            <div className="footer-links-bottom">
              <a
                href="https://sites.google.com/view/ezypic-privacy-policy/home"
                className="bottom-link"
              >
                Privacy
              </a>
              <a href="#" className="bottom-link">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
