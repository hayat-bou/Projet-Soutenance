import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { send } from '@emailjs/browser';
import Data from '../MyData.json';

const AdoptForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const animal = Data.find(a => a.id === parseInt(id));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!animal) return;

    const templateParams = {
      pet_name: animal.name,
      pet_species: animal.species,
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      email: formData.email,
      phone: formData.phone,
    };

    send(
      'service_so18dep',     
      'template_ynlcvz5',   
      templateParams,
      'icdpCV9K5MvGANo3P'      
    )
      .then(() => {
        setSubmitted(true);
        setError(null);
      })
      .catch((err) => {
        setError('Failed to send the form, please try again.');
        console.error('EmailJS error:', err);
      });
  };

  if (!animal) {
    return <p className="text-center text-red-500 mt-10">Animal not found.</p>;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <button
        className="self-start mb-6 px-4 py-2 bg-orange-900 text-white rounded hover:bg-orange-700"
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>

      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
          Adoption Form for {animal.name}
        </h2>

        {/* عرض معلومات الحيوان */}
        <div className="mb-6 border p-4 rounded-md bg-gray-50 flex gap-4 items-center">
          <img
            src={animal.image.startsWith('/') ? animal.image : `/${animal.image}`}
            alt={animal.name}
            className="w-32 h-32 object-cover rounded shadow-md"
          />
          <div className="text-gray-700 text-sm">
            <p><strong>Name:</strong> {animal.name}</p>
            <p><strong>Species:</strong> {animal.species}</p>
            {animal.breed && <p><strong>Breed:</strong> {animal.breed}</p>}
            {animal.age && <p><strong>Age:</strong> {animal.age} years</p>}
            {animal.gender && <p><strong>Gender:</strong> {animal.gender}</p>}
          </div>
        </div>

        {/* الفورم */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {['firstName', 'lastName', 'address', 'email', 'phone'].map(field => (
              <div key={field}>
                <label className="block mb-1 font-semibold capitalize">{field}</label>
                <input
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 font-semibold">
            ✅ Your request has been submitted. We'll contact you soon!
          </div>
        )}

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default AdoptForm;