import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import AppRoutes from "./routes/AppRoutes";
import { useCart } from "./context/cartContext";
import "./styles/main.scss";

function App() {
  const { addToCart, cartVisible, toggleCart, closeCart } = useCart();

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Cart />
      </div>
    </Router>
  );
}

export default App;
