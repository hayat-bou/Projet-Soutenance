import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AdoptForm = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate(`/petprofile/${id}`);  
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h2 className="text-3xl font-semibold text-center mb-6">Adopt {`Pet #${id}`}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your First Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="surname"
            placeholder="Your Last Name"
            value={formData.surname}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button type="submit" className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-300">
            Submit Adoption Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdoptForm;