import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PetProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [notificationId, setNotificationId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

    const storedCart = JSON.parse(localStorage.getItem('favorites')) || [];
    setCart(storedCart);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => {
      const newQty = Math.max((prev[id] || 0) + delta, 0);
      return { ...prev, [id]: newQty };
    });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 0;
    if (quantity === 0) return;

    let updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      updatedCart[index].quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }
    localStorage.setItem('favorites', JSON.stringify(updatedCart));
    setCart(updatedCart);
    setNotificationId(product.id);
    setTimeout(() => setNotificationId(null), 3000);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-gray-50 min-h-screen py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-cover bg-center h-90 rounded-lg shadow-md mb-2" style={{ backgroundImage: 'url("/images/backgs.webp")' }}>
          <div className="absolute inset-0"></div>
          <div className="relative z-10 text-center text-white py-8">
            <h2 className="text-4xl font-semibold">Find the Best Products for Your Pet</h2>
            <p className="mt-4 text-xl">From food to toys and accessories, we have everything your pet needs!</p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
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
        <div className='flex justify-end mb-6'>
          <button
            onClick={() => navigate ('/favorites')}
            className='bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200'
          >
            voir le panier
          </button>

        </div>

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
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => handleQuantityChange(product.id, -1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                      <span>{quantities[product.id] || 0}</span>
                      <button onClick={() => handleQuantityChange(product.id, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 flex justify-center items-center"
                  >
                    <FaShoppingCart className="mr-2" /> Add to Panier
                  </button>
                  {notificationId === product.id && (
                    <div className="mt-2 text-sm text-green-700 bg-green-100 px-3 py-1 rounded">
                      {product.name} ajouté au panier !
                    </div>
                  )}
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
