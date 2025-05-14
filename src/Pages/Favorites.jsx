import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

const Favorites = () => {
  const [groupedFavorites, setGroupedFavorites] = useState([]);

  useEffect(() => {
    const rawFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Group products by ID and count quantity
    const grouped = rawFavorites.reduce((acc, product) => {
      const existing = acc.find(p => p.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...product, quantity: 1 });
      }
      return acc;
    }, []);

    setGroupedFavorites(grouped);
  }, []);

  const handleRemove = (productId) => {
    // Remove all instances of the product from localStorage
    const rawFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updated = rawFavorites.filter(item => item.id !== productId);
    localStorage.setItem('favorites', JSON.stringify(updated));

    // Update grouped list
    setGroupedFavorites(prev => prev.filter(item => item.id !== productId));
  };

  const totalPrice = groupedFavorites.reduce(
    (acc, item) => acc + item.quantity * parseFloat(item.price),
    0
  );

  const discountRate = groupedFavorites.length >= 5 ? 0.2 : groupedFavorites.length >= 3 ? 0.1 : 0;
  const discount = totalPrice * discountRate;
  const finalPrice = totalPrice - discount;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h2>

      {groupedFavorites.length === 0 ? (
        <p className="text-center text-gray-600">No products in your cart.</p>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {groupedFavorites.map(product => (
              <div key={product.id} className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md p-4 rounded-lg gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={product.image || '/images/default-product.jpg'}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-blue-600 font-bold">{product.price} MAD</p>
                    <p className="text-sm text-gray-500">Quantity: <span className="font-medium">{product.quantity}</span></p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="text-red-600 hover:text-red-800 transition"
                  title="Remove all"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold">Total Unique Products: {groupedFavorites.length}</p>
            <p className="text-lg">Subtotal: <span className="font-medium">{totalPrice.toFixed(2)} MAD</span></p>
            <p className="text-lg">Discount: <span className="font-medium text-green-600">-{discount.toFixed(2)} MAD</span></p>
            <p className="text-xl font-bold mt-2">Total to Pay: {finalPrice.toFixed(2)} MAD</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;