import React, { useState } from "react";

interface ProductCardProps {
  product: {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    discountPercentage: number;
    stock: number;
  };
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  const [quantity, setQuantity] = useState(1);


  const increaseQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    // quantity should not be equal to less than or equal to zero
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Quantity: {product.stock}</p>
      <div className="quantity-controls">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button className="delete-button" onClick={() => onDelete(product.id)}>
        Delete
      </button>
    </div>
  );
};

export default ProductCard;
