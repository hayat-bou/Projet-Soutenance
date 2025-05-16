import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error('Error fetching pets:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPets(pets.filter((pet) => pet.id !== id));
        alert('Pet deleted successfully!');
      })
      .catch((error) => console.error('Error deleting pet:', error));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-8">Admin Panel - Pet List</h2>

      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Pet Product</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Species</th>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td className="py-2 px-4 border">{pet.name}</td>
              <td className="py-2 px-4 border">{pet.price}</td>
              <td className="py-2 px-4 border">{pet.species}</td>
              <td className="py-2 px-4 border">
                <img src={pet.image} alt={pet.name} className="w-16 h-16 object-cover rounded" />
              </td>
              <td className="py-2 px-4 border">
                <button
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
                  onClick={() => handleDelete(pet.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/formdata">
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
          Add New Product
        </button>
      </Link>
    </div>
  );
};

export default Admin;
