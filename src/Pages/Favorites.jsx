import React, { useState, useEffect } from 'react';
import { FaTrash, FaHeart, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [groupedFavorites, setGroupedFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
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
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleRemove = (productId) => {
    const rawFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updated = rawFavorites.filter(item => item.id !== productId);
    localStorage.setItem('favorites', JSON.stringify(updated));
    setGroupedFavorites(prev => prev.filter(item => item.id !== productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const rawFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const productIndex = rawFavorites.findIndex(item => item.id === productId);
    
    if (productIndex !== -1) {
      // Remove all instances first
      const withoutProduct = rawFavorites.filter(item => item.id !== productId);
      
      // Add back the correct quantity
      const product = rawFavorites.find(item => item.id === productId);
      const updatedFavorites = [...withoutProduct, ...Array(newQuantity).fill(product)];
      
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      
      // Update grouped list
      setGroupedFavorites(prev => 
        prev.map(item => 
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const totalPrice = groupedFavorites.reduce(
    (acc, item) => acc + item.quantity * parseFloat(item.price),
    0
  );

  const discountRate = groupedFavorites.length >= 5 ? 0.2 : groupedFavorites.length >= 3 ? 0.1 : 0;
  const discount = totalPrice * discountRate;
  const finalPrice = totalPrice - discount;

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="animate-pulse space-y-8">
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-4 bg-white p-4 rounded-lg shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
              <div className="flex-1 space-y-3">
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      <div className="mb-8">
        <Link 
          to="/" 
          className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Continue Shopping
        </Link>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <FaHeart className="text-red-500" />
        Your Shopping Cart
      </h2>

      {groupedFavorites.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaShoppingCart className="text-gray-400 text-4xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Looks like you haven't added any items yet</p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {groupedFavorites.map(product => (
              <div 
                key={product.id} 
                className="flex flex-col sm:flex-row items-center bg-white shadow-sm hover:shadow-md p-4 rounded-xl transition-shadow"
              >
                <div className="w-full sm:w-32 flex-shrink-0 mb-4 sm:mb-0">
                  <img
                    src={product.image || '/images/default-product.jpg'}
                    alt={product.name}
                    className="w-full h-32 object-contain rounded-lg"
                  />
                </div>
                
                <div className="flex-1 px-4 w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
                    </div>
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors ml-4"
                      aria-label="Remove item"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-orange-600 font-bold text-lg">
                      {parseFloat(product.price).toFixed(2)} MAD
                    </div>
                    
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        disabled={product.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{product.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({groupedFavorites.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                  <span className="font-medium">{totalPrice.toFixed(2)} MAD</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({discountRate * 100}%)</span>
                    <span>-{discount.toFixed(2)} MAD</span>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{finalPrice.toFixed(2)} MAD</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md">
                Proceed to Checkout
              </button>

              {groupedFavorites.length >= 3 && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg text-sm text-green-700">
                  {groupedFavorites.length >= 5 ? 
                    "🎉 You qualify for 20% discount!" : 
                    "🎉 You qualify for 10% discount!"}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;