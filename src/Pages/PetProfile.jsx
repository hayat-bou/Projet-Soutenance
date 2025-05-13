import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Data from "../MyData.json";  

const PetProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const animal = Data.find(a => a.id === parseInt(id));  

  const handleAdoptClick = () => {
    navigate(`/adoptform/${id}`);
  };

  return (
    <div className="profile-container p-10 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button className='absolute top-30 left-10 px-6 py-2 bg-orange-900 text-white font-semibold rounded-lg hover:bg-orange-700' onClick={() => navigate(-1)}> Go Back</button>
      <div className="w-80 h-80 overflow-hidden rounded-lg shadow-xl mb-8">
        <img 
          src={animal.image} 
          alt={animal.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">{animal.name}</h2>
        <div className="space-y-3">
          <p className="text-lg text-gray-700"><strong>Species:</strong> {animal.species}</p>
          <p className="text-lg text-gray-700"><strong>Breed:</strong> {animal.breed}</p>
          <p className="text-lg text-gray-700"><strong>Age:</strong> {animal.age} years</p>
          <p className="text-lg text-gray-700"><strong>Gender:</strong> {animal.gender}</p>
          <p className="text-lg text-gray-700"><strong>Size:</strong> {animal.size}</p>
          <p className="text-lg text-gray-700"><strong>Adoption Status:</strong>
            <span className={`font-semibold ${animal.adoptionStatus === "Available" ? "text-green-500" : "text-red-500"}`}>
              {animal.adoptionStatus}
            </span>
          </p>
          <p className="text-lg text-gray-700"><strong>Vaccinated:</strong> {animal.vaccinated ? "Yes" : "No"}</p>
          <p className="text-lg text-gray-700"><strong>Adoptable Since:</strong> {animal.adoptableSince}</p>
          <p className="text-lg text-gray-700"><strong>Location:</strong> {animal.location.city}, {animal.location.country}</p>
          <p className="text-lg text-gray-700"><strong>Description:</strong> {animal.description}</p>

          {animal.adoptionStatus === "Available" && (
            <button onClick={handleAdoptClick} className='bottom-4 left-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700'>
              Adopt me
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetProfile;