import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/cartContext";

const HomePage = React.memo(() => {
  const { addToCart } = useCart();

  return (
    <>
      <div className="store-hero"></div>
      <main className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </main>
    </>
  );
});

export default HomePage;
