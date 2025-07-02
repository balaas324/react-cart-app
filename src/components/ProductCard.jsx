import React from "react";
import { useState } from "react";
import Tooltip from "./Tooltip";
import "../styles/components/ProductCard.scss";

const ProductCard = React.memo(({ product, onAddToCart }) => {
  const { id, name, price, image } = product;
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="product-card">
      <div
        className="tooltip-icon"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        ?{showTooltip && <Tooltip product={product} />}
      </div>
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
});

export default ProductCard;
