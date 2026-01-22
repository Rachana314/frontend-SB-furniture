import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  size: string;
  image: string;
  label?: string;
  quantity?: number;
};

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("Cart") || "[]") as Product[];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id: number, qty: number) => {
    if (qty < 1) return;
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    setCart(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen p-6 bg-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link to="/" className="text-blue-600 underline">
          Go back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      <div className="space-y-6">
        {cart.map(product => (
          <div
            key={product.id}
            className="flex items-center gap-4 border p-4 rounded shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600">Size: {product.size}</p>
              <p className="text-lg font-bold mt-1">
                ${product.price} x {product.quantity ?? 1} = $
                {(product.price * (product.quantity ?? 1)).toFixed(2)}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <label htmlFor={`qty-${product.id}`} className="mr-2">
                  Quantity:
                </label>
                <input
                  type="number"
                  id={`qty-${product.id}`}
                  min={1}
                  value={product.quantity ?? 1}
                  onChange={e =>
                    updateQuantity(product.id, Number(e.target.value))
                  }
                  className="w-16 border rounded px-2 py-1"
                />
                <button
                  onClick={() => removeItem(product.id)}
                  className="ml-4 text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <h2 className="text-2xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </h2>
        <button
          className="mt-4 bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
          onClick={() => alert("Proceed to Checkout - implement as needed")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
