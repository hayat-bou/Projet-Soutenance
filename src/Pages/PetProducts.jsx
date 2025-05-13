import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

const PetProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/pets')  
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Background */}
        <div className="relative bg-cover bg-center h-90 rounded-lg shadow-md mb-12" style={{ backgroundImage: 'url("/images/backgroundd.jpg")' }}>
          <div className="absolute inset-0"></div>
          <div className="relative z-10 text-center text-black py-8">
            <h2 className="text-4xl font-semibold">Find the Best Products for Your Pet</h2>
            <p className="mt-4 text-xl">From food to toys and accessories, we have everything your pet needs!</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full sm:w-1/2 lg:w-1/3">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for pet products..."
              className="w-full p-4 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute top-3 left-3 text-gray-500">
              <FaSearch className="text-lg" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <img
                  src={product.image || "/images/default-product.jpg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.description || "No description available"}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center">
                      <FaShoppingCart className="mr-2" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products found. Please try a different search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetProducts;
