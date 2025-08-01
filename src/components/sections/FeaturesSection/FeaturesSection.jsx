import realTimeTrackingIcon from "../../../assets/images/real-time-tracking.svg";
import reliableServiceIcon from "../../../assets/images/reliable-service.svg";
import userFriendlyIcon from "../../../assets/images/user-friendly.svg";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      icon: realTimeTrackingIcon, // Imported reference
      title: "Real-Time Tracking",
      description:
        "Track your shipments in real-time and stay updated on delivery progress every step.",
    },
    {
      icon: reliableServiceIcon, // Imported reference
      title: "Reliable Service",
      description:
        "Count on our dedicated delivery network for timely and secure package deliveries.",
    },
    {
      icon: userFriendlyIcon, // Imported reference
      title: "User-Friendly App",
      description:
        "Enjoy a smooth and intuitive app interface designed for easy navigation and booking.",
    },
  ];

  // Rest of component remains the same
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Why Choose EZYPIC?</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="feature-svg-icon"
                  onError={(e) => {
                    console.log("Image failed to load:", feature.icon);
                    e.target.style.display = "none";
                  }}
                  onLoad={() => {
                    console.log("Image loaded successfully:", feature.icon);
                  }}
                />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
