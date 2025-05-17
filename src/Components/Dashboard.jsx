import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const query = new URLSearchParams(window.location.search);
  const isAdmin = query.get('admin') === 'secret123';

  const [pets, setPets] = useState(() => JSON.parse(localStorage.getItem("pets")) || []);
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem("products")) || []);

  const [petForm, setPetForm] = useState({
    name: '', age: '', breed: '', species: '',
    city: '', gender: '', vaccinated: '', availableSince: '', image: ''
  });

  const [productForm, setProductForm] = useState({
    name: '', description: '', price: '', image: ''
  });

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
    localStorage.setItem("products", JSON.stringify(products));
  }, [pets, products]);

  if (!isAdmin) return <h1 className="text-center text-red-600 mt-10">Unauthorized Access</h1>;

  const handlePetSubmit = (e) => {
    e.preventDefault();
    setPets([...pets, petForm]);
    setPetForm({
      name: '', age: '', breed: '', species: '',
      city: '', gender: '', vaccinated: '', availableSince: '', image: ''
    });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, productForm]);
    setProductForm({ name: '', description: '', price: '', image: '' });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Pet Form */}
        <form onSubmit={handlePetSubmit} className="bg-white p-4 rounded-xl shadow space-y-4">
          <h2 className="text-lg font-semibold mb-2">Add New Pet</h2>
          {Object.keys(petForm).map((key) => (
            <input
              key={key}
              type="text"
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              className="w-full border p-2 rounded"
              value={petForm[key]}
              onChange={(e) => setPetForm({ ...petForm, [key]: e.target.value })}
            />
          ))}
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Pet</button>
        </form>

        {/* Product Form */}
        <form onSubmit={handleProductSubmit} className="bg-white p-4 rounded-xl shadow space-y-4">
          <h2 className="text-lg font-semibold mb-2">Add New Product</h2>
          {Object.keys(productForm).map((key) => (
            <input
              key={key}
              type="text"
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              className="w-full border p-2 rounded"
              value={productForm[key]}
              onChange={(e) => setProductForm({ ...productForm, [key]: e.target.value })}
            />
          ))}
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
