import React, { useEffect, useState } from "react";
import { fetchProducts } from "./services/productService";
import ProductCard from "./components/ProductCard";
import "./App.css";

interface Product {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  discountPercentage: number;
  stock: number;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };

    loadProducts();
  }, []);

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="product-grid">
      {/* showing just five products we can remove this part .slice(0,5)
      if we want to see all products
      */}
      {products.slice(0,5).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={handleDelete}
        />
      ))}
      <h1>testing...</h1>
    </div>
  );
};

export default App;
