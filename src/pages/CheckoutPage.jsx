import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import "../styles/pages/CheckoutPage.scss";

const CheckoutPage = () => {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="checkout-items">
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity} — ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <h2>Total: ${cartTotal.toFixed(2)}</h2>
          <button className="confirm-btn" onClick={() => navigate("/buy")}>Buy</button>
        </>
      )}
      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default CheckoutPage;
