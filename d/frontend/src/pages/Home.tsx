import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryPage from "./Categorypage";
import { homeProducts } from "./HomeProducts";


type homeProducts = {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  label?: string;
  quantity?: number;
};

const HomePage: React.FC = () => {
  const [cart, setCart] = useState<homeProducts[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<homeProducts | null>(null);

  

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("Cart") || "[]") as homeProducts[];
    setCart(storedCart);
  }, []);

  const addToCart = (product: homeProducts) => {
    const existing = cart.find(item => item.id === product.id);
    let updatedCart: homeProducts[] = [];
    if (existing) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
  };


  const closeModal = () => setQuickViewProduct(null);

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className="bg-white min-h-screen p-6">
      <header className="flex justify-between items-center mb-8 px-6">
        <h1 className="text-2xl font-bold">Home Products</h1>
        
      </header>

      {/* CategoryPage rendered here */}
      <div className="bg-white w-[92%] mx-auto py-10">
        <CategoryPage />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {homeProducts.map((homeProducts) => (
          <div key={homeProducts.id} className="bg-white shadow-md p-4 rounded-lg hover:scale-105 transition transform duration-300 flex flex-col">
            <img src={homeProducts.image} alt={homeProducts.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-md font-semibold mt-3">{homeProducts.name}</h3>
            {/* {product.label && (
              <span className=" text-white text-xs px-2 py-1 rounded mt-1 inline-block">
                {product.label}
              </span>
            )} */}
            <p className="mt-2 text-lg font-bold">${homeProducts.price}</p>
            <p className="text-sm text-gray-500">{homeProducts.size}</p>

            <div className="mt-4 flex gap-2">
              <Link
                to={`/product/${homeProducts.id}`}
                className="flex-1 bg-gray-800 text-white py-2 rounded-md hover:bg-black text-center"
              >
                VIEW DETAILS
              </Link>
              <button
                onClick={() => setQuickViewProduct(homeProducts)}
                className="flex-1 bg-[#1e3a5f] text-white py-2 rounded-md hover:bg-[#1e3a5f]transition"
              >
                Quick View
              </button>
            </div>

            <button
              onClick={() => addToCart(homeProducts)}
              className="mt-3 bg-[#1e3a5f] text-white py-2 rounded-md hover:bg-[#1e3a5f] transition "
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {quickViewProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
            onClick={stopPropagation}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-500 text-xl font-bold"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{quickViewProduct.name}</h2>
            {quickViewProduct.label && (
              <span className="bg-black text-white text-xs px-2 py-1 rounded inline-block mb-2">
                {quickViewProduct.label}
              </span>
            )}
            <p className="text-lg font-bold mb-2">${quickViewProduct.price}</p>
            <p className="text-gray-600 mb-4">Size: {quickViewProduct.size}</p>
            <button
              onClick={() => {
                addToCart(quickViewProduct);
                closeModal();
              }}
              className="bg-[#1e3a5f] text-white py-2 rounded-md w-full hover:bg-[#1e3a5f] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
