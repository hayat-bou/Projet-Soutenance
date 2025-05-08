import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[75vh] flex items-center justify-center text-center text-white px-6 sm:px-8 lg:px-16"
        style={{
          backgroundImage: 'url("/images/backrou.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold tracking-wide text-shadow-lg">
            Welcome to Pet Haven 🐾
          </h1>
          <p className="text-2xl mt-6">Adopt, Love, and Care for a Furry Friend</p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-xl text-gray-700 mx-auto sm:w-2/3 md:w-1/2">
          At Pet Haven, we believe that every pet deserves a loving and caring home. Our mission is to match you with your perfect companion. Start your adoption journey today!
        </p>
      </section>

      {/* Animal Sections */}
      <div className="flex justify-center items-center flex-wrap min-h-screen bg-gray-50 py-12">
        {/* Dog Section */}
        <div className="flex flex-col items-center mb-8 mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/doog.jpeg" alt="Dog" className="w-48 h-48 object-cover rounded-full mt-4" />
          <div className="p-4">
            <h2 className="font-bold text-xl text-gray-800">DOGS</h2>
            <ul className="list-disc pl-5 mt-4 text-gray-600">
              <li>Loyal, affectionate, great companions</li>
              <li>Require time, attention & exercise</li>
              <li>Need resources & care</li>
            </ul>
          </div>
        </div>

        {/* Cat Section */}
        <div className="flex flex-col items-center mb-8 mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/catyy.jpeg" alt="Cat" className="w-48 h-48 object-cover rounded-full mt-4" />
          <div className="p-4">
            <h2 className="font-bold text-xl text-gray-800">CATS</h2>
            <ul className="list-disc pl-5 mt-4 text-gray-600">
              <li>Independent, low-maintenance</li>
              <li>Produce fewer allergens than dogs</li>
              <li>Great for people with less time</li>
            </ul>
          </div>
        </div>

        {/* Rabbit Section */}
        <div className="flex flex-col items-center mb-8 mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/rabbit3.jpeg" alt="Rabbit" className="w-48 h-48 object-cover rounded-full mt-4" />
          <div className="p-4">
            <h2 className="font-bold text-xl text-gray-800">RABBITS</h2>
            <ul className="list-disc pl-5 mt-4 text-gray-600">
              <li>Great for small spaces</li>
              <li>Low maintenance but still need care</li>
              <li>Adorable & cuddly companions</li>
            </ul>
          </div>
        </div>

        {/* Bird Section */}
        <div className="flex flex-col items-center mb-8 mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/images/perro.jpg" alt="Bird" className="w-48 h-48 object-cover rounded-full mt-4" />
          <div className="p-4">
            <h2 className="font-bold text-xl text-gray-800">BIRDS</h2>
            <ul className="list-disc pl-5 mt-4 text-gray-600">
              <li>Interactive, make great pets</li>
              <li>Can be noisy, but fun</li>
              <li>Require attention & space</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8 text-center">
        <p>&copy; 2025 Pet Haven. All rights reserved.</p>
        <div className="mt-4">
          <Link to="/about" className="mx-4 hover:text-blue-500">About Us</Link>
          <Link to="/contact" className="mx-4 hover:text-blue-500">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;