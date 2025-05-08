import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Data from "../MyData.json";  

const PetList = () => {
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');   // State for search 
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  useEffect(() => {
    setAnimals(Data);  // initialize state dial animal  b les donnes li kaynin f data
    setFilteredAnimals(Data); // Initialize filtered list with all pets
  }, []);

  
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);  // fonct kat updaiti  état dial searchTerm

    // Check if value is empty
    if (value === "") {
      setFilteredAnimals(animals);  // If no search term, show all animals
    } else {
      const filtered = animals.filter(animal =>
        animal.name.toLowerCase().includes(value) ||
        animal.breed.toLowerCase().includes(value) ||
        animal.species.toLowerCase().includes(value)
      );
      setFilteredAnimals(filtered);  // katfiltri lina animals li drna f search
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-orange-800 mb-12">
        Adopt a pet as unique as you
      </h1>
      
      {/* Search input */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search your pet ..."
          className="px-6 py-4 border rounded-lg shadow-md w-3/4 sm:w-1/2 md:w-1/3"
          value={searchTerm}  // la valeur dial input katsawi lina dakchi lif searchTerm
          onChange={handleSearch} // hna had la fonct va mettre à jour etat dial searchTerm 
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredAnimals.length === 0 ? (     
          <p className="text-center text-4xl font-bold text-black-600 w-full items-center">No pets found</p>
        ) : (
          filteredAnimals.map((animal) => (
            <div key={animal.id} className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img 
                src={animal.image} 
                alt={animal.name} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-black text-center mb-4 hover:text-gray-700 transition-colors">{animal.name}</h2>
                <p className="text-base text-gray-800 mt-1"><span className='text-lg text-orange-900'>Species : </span> {animal.species}</p>
                <p className="text-base text-gray-800"><span className='text-lg text-orange-900'>Breed : </span> {animal.breed}</p>
                <p className="text-base text-gray-800"><span className='text-lg text-orange-900'>Age : </span> {animal.age} years</p>
                <p className="text-base text-gray-800"><span className='text-lg text-orange-900'>Adoption Status : </span>
                  <span 
                    className={`font-semibold ${animal.adoptionStatus === "Available" ? "text-green-500" : "text-red-500"}`}
                  >
                    {animal.adoptionStatus}
                  </span>
                </p>
                <p className="text-base text-gray-800"> <span className='text-lg text-orange-900'>Location : </span> {animal.location.city}, {animal.location.country}</p>
                <p className="text-base text-gray-800"><span className='text-lg text-orange-900'>Description : </span>{animal.description} </p>
                <Link to={`/petprofile/${animal.id}`}>
                  <button className="mt-4 w-full bg-orange-900 text-white font-semibold py-2 rounded-lg hover:bg-orange-700">
                    View Profile
                  </button>
                </Link>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PetList;