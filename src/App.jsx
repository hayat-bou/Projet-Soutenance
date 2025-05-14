import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // Correct imports
import Home from './Pages/Home';
import PetList from './Pages/PetList';
import PetProducts from './Pages/PetProducts';
import PetProfile from './Pages/PetProfile';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Admin from './Components/Admin';
import FormData from './Components/FormData';
import AdoptForm from './Pages/AdoptForm';
import Favorites from './Pages/favorites';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-orange-950 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/public/images/logo.png"
              className="w-10 h-10 object-cover rounded-full"
              alt="Logo"
            />
            <h1 className="text-white text-2xl ml-1">AdoptOne</h1>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="lg:hidden text-white"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Menu for Desktop */}
          <ul className="hidden lg:flex space-x-6 justify-center">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/petlist" className="text-white hover:text-gray-300">
                PetList
              </Link>
            </li>
            <li>
              <Link to="/petproducts" className="text-white hover:text-gray-300">
                PetProducts
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="text-white hover:text-gray-300">
                ContactUs
              </Link>
            </li>
            <li>
              <Link to="/admin" className="text-white hover:text-gray-300">
                Admin
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="space-y-4 text-center">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/petlist" className="text-white hover:text-gray-300 block py-2">
                PetList
              </Link>
            </li>
            <li>
              <Link to="/petproducts" className="text-white hover:text-gray-300 block py-2">
                PetProducts
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300 block py-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="text-white hover:text-gray-300 block py-2">
                ContactUs
              </Link>
            </li>
            <li>
              <Link to="/admin" className="text-white hover:text-gray-300 block py-2">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petlist" element={<PetList />} />
        <Route path="/petprofile/:id" element={<PetProfile />} />
        <Route path="/petproducts" element={<PetProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/formdata" element={<FormData />} />
        <Route path="/adoptform/:id" element={<AdoptForm />} />
        <Route path="/petproducts/:id" element={<PetProducts />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
