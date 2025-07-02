import "../styles/components/Tooltip.scss";

const Tooltip = ({ product }) => {
  if (!product) return null;

  const { image, description, features } = product;

  const featureLabels = [
    { key: "lines", label: "Lines" },
    { key: "display", label: "Display" },
    { key: "bluetooth", label: "Bluetooth" },
    { key: "connections", label: "Connection" },
    { key: "usb", label: "USB" },
    { key: "poe", label: "PoE" },
  ];

  return (
    <div className="tooltip-card">
      <div className="tooltip-left">
        <img src={image} alt={product.name} className="tooltip-image" />
      </div>

      <div className="tooltip-content">
        <div className="tooltip-section-title">Description</div>
        <p className="tooltip-description">{description}</p>

        <div className="tooltip-section-title">Key Features</div>
        <ul className="tooltip-features">
          {featureLabels.map(
            (feature) =>
              features?.[feature.key] && (
                <li key={feature.key}>
                  <span className="feature-label">{feature.label}:</span>
                  <span className="feature-value">{features[feature.key]}</span>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Tooltip;
