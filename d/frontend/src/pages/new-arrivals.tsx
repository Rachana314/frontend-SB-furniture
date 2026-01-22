import { useState } from "react";
import {
  FaFilter,
  FaTh,
  FaList,
  FaShoppingCart,
  FaHeart,
  FaExchangeAlt,
  FaEye,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import products from "./products"; // products array

export default function () {
  const [sortOption, setSortOption] = useState("Featured");
  const [viewGrid, setViewGrid] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null); // For quick view modal
  const navigate = useNavigate();

  const newArrivalProducts = products.filter((p) => p.newArrival);

  const sortedProducts = [...newArrivalProducts].sort((a, b) => {
    switch (sortOption) {
      case "Price - Low to High":
        return a.price - b.price;
      case "Price - High to Low":
        return b.price - a.price;
      case "Newest arrivals":
        return b.id - a.id;
      case "Name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleAddToCart = (product: any) => {
    // For now, just navigate to cart page
    navigate("/cart", { state: { addedProduct: product } });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Breadcrumb + Filter Button */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <button className="flex items-center gap-1 px-2 py-1 text-white bg-[#1e3a5f] rounded">
          <FaFilter />
          Show Filters
        </button>
        <nav className="flex gap-1 whitespace-nowrap">
          <span>Products</span>
          <span>&gt;</span>
          <span>New Arrival & Fast Delivery</span>
          <span>&gt;</span>
          <span className="font-semibold">
            Lotus New Arrival - {sortedProducts.length} items
          </span>
        </nav>
      </div>

      {/* Banner */}
      <div className="bg-gray-100 flex flex-col md:flex-row items-center md:items-start justify-between p-6 gap-6 mb-6 rounded">
        <h2 className="text-3xl font-extrabold text-[#1e3a5f] flex-1 text-center md:text-left">
          PICK NOW <br /> PAY LATER
        </h2>
        <div className="flex-1 max-w-md text-center md:text-left">
          <p className="uppercase font-semibold text-gray-800 mb-1">
            IN–STORE ONLY
          </p>
          <h3 className="text-2xl font-bold mb-2">0% interest upto 18 months</h3>
          <p className="text-xs mb-3">
            To participate in the EMI facility, the customer must be a credit card
            holder with a pre-approved credit limit from the bank.
          </p>
          <button className="bg-[#1e3a5f] text-white px-4 py-2 rounded hover:bg-[#1e3a5f] transition">
            Click for more information
          </button>
        </div>
      </div>

      {/* Sort and View */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <span>Sort By:</span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option>Featured</option>
            <option>Price - Low to High</option>
            <option>Price - High to Low</option>
            <option>Newest arrivals</option>
            <option>Name</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setViewGrid(true)}
            aria-label="Grid view"
            className={`p-2 rounded border ${
              viewGrid ? "bg-[#1e3a5f] text-white" : "text-gray-600"
            }`}
          >
            <FaTh />
          </button>
          <button
            onClick={() => setViewGrid(false)}
            aria-label="List view"
            className={`p-2 rounded border ${
              !viewGrid ? "bg-[#1e3a5f] text-white" : "text-gray-600"
            }`}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Product Grid/List */}
      <div
        className={
          viewGrid
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            : "flex flex-col gap-4"
        }
      >
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className={`border rounded bg-white relative group overflow-hidden ${
              viewGrid ? "flex flex-col" : "flex flex-row"
            }`}
          >
            {/* Image */}
            <div className={viewGrid ? "" : "w-1/3 relative"}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.newArrival && (
                <div className="absolute top-2 left-2 bg-[#1e3a5f] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  New Arrival
                </div>
              )}
              {/* Quick View overlay */}
              <div
                onClick={() => setQuickViewProduct(product)}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white text-sm gap-2"
              >
                <FaEye />
                Quick View
              </div>
            </div>

            {/* Details */}
            <div
              className={`p-3 flex flex-col justify-between ${
                viewGrid ? "flex-1" : "w-2/3"
              }`}
            >
              <h4 className="font-semibold text-sm mb-1">{product.name}</h4>
              <p className="bg-[#1e3a5f] font-bold text-base">
                Rs {product.price.toLocaleString()}
              </p>
              <div className="mt-2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleAddToCart(product)}
                  aria-label="Add to cart"
                  className="bg-gray-200 hover:bg-gray-300 rounded p-2 text-gray-600"
                >
                  <FaShoppingCart />
                </button>
                <button
                  aria-label="Add to wishlist"
                  className="bg-gray-200 hover:bg-gray-300 rounded p-2 text-gray-600"
                >
                  <FaHeart />
                </button>
                <button
                  aria-label="Compare"
                  className="bg-gray-200 hover:bg-gray-300 rounded p-2 text-gray-600"
                >
                  <FaExchangeAlt />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-2xl font-bold mt-4">{quickViewProduct.name}</h2>
            <p className="font-semibold text-lg">
              Rs {quickViewProduct.price.toLocaleString()}
            </p>
            <p className="text-gray-600 mt-2">{quickViewProduct.description}</p>
            <button
              onClick={() => handleAddToCart(quickViewProduct)}
              className="mt-4 bg-[#1e3a5f] text-white px-4 py-2 rounded hover:bg-[#1e3a5f]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
