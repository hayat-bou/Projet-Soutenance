import React, { useState } from 'react';

// Sample pet product data
const products = [
  { id: 1, name: 'Dog Food', price: 20, description: 'Premium dog food for all breeds.' },
  { id: 2, name: 'Cat Toy', price: 10, description: 'Interactive cat toy for fun play.' },
  { id: 3, name: 'Pet Leash', price: 15, description: 'Durable leash for pets of all sizes.' },
  // Add more products here...
];

const PetProducts = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Pet Products Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold text-blue-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <ul className="mt-2">
            {cart.map((product, index) => (
              <li key={index} className="flex justify-between text-gray-700">
                <span>{product.name}</span>
                <span>${product.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <strong>Total:</strong>
            <span className="text-lg font-semibold">${totalPrice}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetProducts;
