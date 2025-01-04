import React, { useEffect, useState } from "react";
import { fetchProducts } from "./services/productService.ts";
import ProductCard from "./components/ProductCard.tsx";
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
      {products.slice(0,5).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
