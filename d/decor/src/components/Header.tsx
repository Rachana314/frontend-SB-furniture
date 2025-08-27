import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from "react-icons/fa";

const Header = () => {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setAccountDropdownOpen(!accountDropdownOpen);
  };

  // Handle Search Submit
const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (searchQuery.trim() !== "") {
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  }
};


  return (
    <div className="w-full shadow relative">
      {/* Top Row */}
      <div className="flex justify-between items-center px-6 py-3 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="https://sbfurniturenepal.com/web/image/website/1/logo/SB%20Furniture%20Nepal?unique=97b7aee" alt="SB Furniture" className="h-8" />
          </Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex w-1/2">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 outline-none"
          />
          <button
            type="submit"
            className="bg-[#1e3a5f] text-white px-4 flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center gap-6 text-[#1e3a5f] text-lg relative">
          <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-3 bg-[#1e3a5f] text-white text-xs px-1 rounded-full">
              0
            </span>
          </Link>
          <Link to="/wishlist" className="relative flex items-center">
            <FaHeart />
            <span className="absolute -top-2 -right-3 bg-[#1e3a5f] text-white text-xs px-1 rounded-full">
              0
            </span>
          </Link>

          {/* Account Icon with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center focus:outline-none"
              aria-haspopup="true"
              aria-expanded={accountDropdownOpen}
            >
              <FaUser />
            </button>

            {accountDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                <Link
                  to="/LoginPage"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setAccountDropdownOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/SignupPage"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setAccountDropdownOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menu Row */}
      <div className="flex gap-6 px-6 py-2 bg-gray-50 border-t">
        {[
          { name: "New Arrival & Fast Delivery", path: "/new-arrivals" },
          { name: "Bedroom", path: "/Bedroom" },
          { name: "Living Room", path: "/Livingroom" },
          { name: "Dining", path: "/dining" },
          { name: "Mattress", path: "/mattress" },
          { name: "Bedding", path: "/bedding" },
          { name: "Office", path: "/office" },
          { name: "Flooring", path: "/flooring" },
        ].map((item, index) => (
          <div key={index} className="relative group cursor-pointer">
            <Link
              to={item.path}
              className="text-sm text-gray-800 hover:text-[#1e3a5f]"
            >
              {item.name}
            </Link>

            {index < 7 && (
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md p-4">
                <p className="text-gray-600">
                  Dropdown content for {item.name}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
