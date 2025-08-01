import mobileScreenSvg from "../../../assets/images/mobile-screen.svg"; // Update path as needed
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-left">
            <h1 className="hero-title">
              Smart, Fast, and
              <br />
              Easy Delivery
              <br />
              with <span className="highlight">EZYPIC</span>
            </h1>
            <p className="hero-description">
              Ship your packages with confidence using our cutting-edge app,
              designed for seamless and efficient.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary hero-btn">Get Started</button>
              <button className="btn btn-secondary hero-btn">
                How It Works
              </button>
            </div>
          </div>

          {/* Right Content - Mobile SVG Image */}
          <div className="hero-right">
            <div className="mobile-container">
              <img
                src={mobileScreenSvg}
                alt="EZYPIC Mobile App Interface"
                className="mobile-image"
              />
              {/* Optional: Add floating elements around the mobile */}
              <div className="floating-elements">
                <div className="floating-box floating-box-1">📦</div>
                <div className="floating-box floating-box-2">✓</div>
                <div className="floating-pin">📍</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
