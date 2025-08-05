import deliveryTruckImg from "../../../assets/images/delivery-truck.png";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-content">
          {/* Main Content Grid */}
          <div className="content-grid">
            {/* Left Side - Text */}
            <div className="text-content">
              <h1 className="main-heading">
                Empowering Easy Deliveries Across the Country
              </h1>

              <div className="description-text">
                <p>
                  EZYPIC is a next-generation delivery app designed to make
                  shipping smarter, faster, and easier for everyone. We combine
                  cutting-edge technology with real-time tracking, seamless user
                  experience, and a dedicated delivery network to provide
                  reliable logistics for businesses and individuals alike.
                </p>

                <p>
                  Whether it's same-day packages, scheduled shipments, or
                  last-mile logistics, EZYPIC ensures every delivery is
                  efficient, transparent, and on time – every time.
                </p>
              </div>

              <div className="key-features">
                <div className="feature">
                  <span className="feature-icon">⚡</span>
                  <span>Fast Delivery</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📍</span>
                  <span>Real-time Tracking</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🔒</span>
                  <span>Secure & Reliable</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="image-content">
              <img
                src={deliveryTruckImg}
                alt="EZYPIC Delivery Service"
                className="delivery-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
