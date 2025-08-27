
import { FaFilter, FaList, FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  { name: "Bedroom Set", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6qG6A5gp7VtSgfvY3k1qXFzkfhB8qbrABw&s", link: "/CategoryBedroom" },
  { name: "Bed", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6qG6A5gp7VtSgfvY3k1qXFzkfhB8qbrABw&s" },
  { name: "Wardrobe", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwlkDmLuc5gFnvTNyXmvqb4eYgWx8X0k1MA&s" },
  { name: "Dressing Tab..", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfj0prINDwpZj6ze919kXWm-qrDfKTmEPpMQ&s" },
  { name: "Night Table", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8y0MgWnIdtAhrn3q6-dlIZrzFtkyXQTS0g&s" },
  { name: "Kids", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCNdKdJCopPMrL9-GiQQUHCSuLLKS1a2Ocw&s" },
];

function CategoryPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Categories */}
      <div className="flex justify-center space-x-8 mb-4 text-center text-xs text-gray-600">
        {categories.map((cat) =>
          cat.link ? (
            <Link
              key={cat.name}
              to={cat.link}
              className="flex flex-col items-center cursor-pointer"
            >
              <img src={cat.img} alt={cat.name} className="w-10 h-10 mb-1" />
              <span className="truncate max-w-[70px]">{cat.name}</span>
            </Link>
          ) : (
            <div
              key={cat.name}
              className="flex flex-col items-center cursor-pointer"
            >
              <img src={cat.img} alt={cat.name} className="w-10 h-10 mb-1" />
              <span className="truncate max-w-[70px]">{cat.name}</span>
            </div>
          )
        )}
      </div>

      {/* Breadcrumb and sort */}
      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <button className="flex items-center gap-1 px-2 py-1 border border-gray-400 rounded hover:bg-gray-200">
            <FaFilter /> Show Filters
          </button>
          <span>Products &gt; Bedroom - 86 items</span>
        </div>

        <div className="flex items-center space-x-4">
          <span>Sort By: Featured</span>
          <button title="Grid View" className="text-gray-600 hover:text-blue-600">
            <FaTh size={18} />
          </button>
          <button title="List View" className="text-gray-600 hover:text-[#1e3a5f]">
            <FaList size={18} />
          </button>
        </div>
      </div>

      {/* Bedroom image + BED ROOM text */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 mb-6">
        <img
          src="https://sbfurniturenepal.com/web/image/181023-85f139d7/Create%20a%20modern%20and%20minimalist%20bedroom%20set%20design%20using%20neutral%20colors%20such%20as%20beige%2C%20white%2C%20%281%29.jpg"
          alt="Bedroom"
          className="w-full md:w-1/2 rounded-lg object-cover"
        />
      </div>

      {/* Banner */}
      <div className="bg-gray-200 rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text bg-[#e5e9ef] font-bold text-xl md:text-2xl mb-3 md:mb-0">
          PICK NOW PAY LATER
        </div>
        <div className="text-sm md:text-base max-w-xl text-gray-700 mb-3 md:mb-0">
          IN-STORE ONLY <br />
          <strong>0% interest upto 18 months</strong> <br />
          To participate in the EMI facility, the customer must be a credit card
          holder with a pre-approved credit limit from the bank. Subject To
          Credit Approval from the bank No EMI loan processing fee. *Some
          exclusions apply. See sales associate for details.
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
