import React, { useState } from 'react';

const PetForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',

  });

  
  const [pets, setPets] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   
    setPets([...pets, { ...formData }]);
    setFormData({
      name: '',
      species: '',
      breed: '',
      age: '',
    });
  };

  return (
    <div>
      <div>
        <h2>Add a New Pet</h2>

        <form onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="name" className=''>Pet Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="species">Species</label>
            <input
              type="text"
              id="species"
              name="species"
              value={formData.species}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="breed" >Breed</label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="age">Age (years)</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Add Pet </button>
        </form>

        {pets.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Pets Added:</h3>
            <ul>
              {pets.map((pet, index) => (
                <li key={index} className="mb-4">
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold">{pet.name}</h4>
                    <p><strong>Species:</strong> {pet.species}</p>
                    <p><strong>Breed:</strong> {pet.breed}</p>
                    <p><strong>Age:</strong> {pet.age} years</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetForm;