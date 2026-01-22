import React from "react";
import { useLocation } from "react-router-dom";


import products from "./products";
import { homeProducts } from "./HomeProducts";


const SearchResults: React.FC = () => {
  const query = new URLSearchParams(useLocation().search).get("q")?.toLowerCase() || "";

  // Filter Home products
  const filteredHome = homeProducts.filter((homeProducts) =>
    homeProducts.name.toLowerCase().includes(query)
  );

  // Filter New Arrival products
  const filteredNewArrival = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  
  

  // Combine results
  const combinedResults = [...filteredHome, ...filteredNewArrival];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Search results for "{query}"</h1>

      {combinedResults.length === 0 && (
        <p className="text-gray-600">No products found matching your search.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {combinedResults.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg">
            <img
              src={product.image}
              
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-2">Rs {product.price.toLocaleString()}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
