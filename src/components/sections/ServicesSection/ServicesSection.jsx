import deliveryBoyImg from "../../../assets/images/delivery-boy.png";
import "./ServicesSection.css";

const ServicesSection = () => {
  const services = [
    "Same-Day Parcel Delivery",
    "Scheduled Shipments",
    "Last-Mile Logistics",
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Title outside the card */}
        <h2 className="services-title-outside">Our Services</h2>

        {/* Light Blue Card */}
        <div className="services-content">
          {/* Left - Image */}
          <div className="services-left">
            <div className="delivery-image-container">
              <img
                src={deliveryBoyImg}
                alt="EZYPIC Delivery Service"
                className="delivery-image"
              />
            </div>
          </div>

          {/* Right - Services */}
          <div className="services-right">
            <div className="services-list">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <div className="service-check">
                    <span>✓</span>
                  </div>
                  <span className="service-text">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
