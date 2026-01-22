// src/pages/CategoryBedroom.tsx
import React, { useState } from "react";
import { ShoppingCart, Heart, Repeat } from "lucide-react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Knight Bed",
    price: 899.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6qG6A5gp7VtSgfvY3k1qXFzkfhB8qbrABw&s",
  },
  // add more products here...
];

const CategoryBedroom: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="p-4">
      {/* Banner */}
      <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow mb-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-900">
            PICK NOW
            <br />
            PAY LATER
          </h1>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold text-gray-800">IN–STORE ONLY</p>
          <h2 className="text-xl font-bold">0% interest up to 18 months</h2>
          <p className="text-sm text-gray-600 mt-2">
            To participate in the EMI facility, the customer must be a credit
            card holder with a pre-approved credit limit from the bank. Subject
            to credit approval from the bank. No EMI loan processing fee. *Some
            exclusions apply.
          </p>
          <button className="mt-3 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
            Click for more information
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded overflow-hidden relative group"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            {/* Quick View Button */}
            <button
              onClick={() => setSelectedProduct(product)}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition"
            >
              <span className="bg-blue-900 text-white px-4 py-2 rounded shadow flex items-center gap-2">
                Quick View
              </span>
            </button>
            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-blue-900 font-bold">${product.price}</p>
              <div className="flex items-center gap-3 mt-2">
                <Link
                  to="/cart"
                  className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  <ShoppingCart size={16} /> Add to Cart
                </Link>
                <button className="p-2 border rounded hover:bg-gray-100">
                  <Heart size={16} />
                </button>
                <button className="p-2 border rounded hover:bg-gray-100">
                  <Repeat size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="mt-4 text-2xl font-bold">{selectedProduct.name}</h2>
            <p className="text-blue-900 font-semibold text-lg">
              ${selectedProduct.price}
            </p>
            <Link
              to="/cart"
              className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              <ShoppingCart className="inline-block mr-1" size={16} />
              Add to Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryBedroom;
