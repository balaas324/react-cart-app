import React from "react";
import { useCart } from "../context/cartContext";
import "../styles/components/Header.scss";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = React.memo(() => {
  const { toggleCart, cartCount } = useCart();

  return (
    <header className="app-header">
      <div className="header-left"></div>
      <div className="header-center">
        <Link to="/" className="store-title-link">
          My Store
        </Link>
      </div>
      <div className="header-right">
        <button onClick={toggleCart} className="cart-btn">
          <span className="cart-icon">
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </span>
          <span className="cart-text">Shopping Cart</span>
        </button>
      </div>
    </header>
  );
});

export default Header;
