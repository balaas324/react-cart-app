import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import "../styles/components/Cart.scss";

const Cart = () => {
  const { cart, updateQuantity, clearCart, cartVisible, closeCart, cartTotal, cartCount } =
    useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  if (!cartVisible) return null;

  return (
    <div className="cart-panel">
      <div className="cart-header">
        <h2>
          You have {cartCount} item{cartCount !== 1 ? "s" : ""} in your cart!
        </h2>

        <button className="close-btn" onClick={closeCart}>
          X
        </button>
      </div>

      <hr className="separator" />

      {cart.length === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <>
          <div className="cart-columns">
            <span>Item</span>
            <span>Units</span>
            <span>Price</span>
          </div>

          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    −
                  </button>
                  <span className="count">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <hr className="separator large" />

          <div className="cart-footer">
            <strong>Total Order Value: ${cartTotal.toFixed(2)}</strong>
          </div>

          <hr className="separator" />

          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>

          <button className="checkout-btn" onClick={handleCheckout}>
            Check Out
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
