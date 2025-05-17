import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import PetList from './Pages/PetList';
import PetProducts from './Pages/PetProducts';
import PetProfile from './Pages/PetProfile';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import FormData from './Components/FormData';
import AdoptForm from './Pages/AdoptForm';
import Favorites from './Pages/favorites';
import NotFound from './Pages/notFound';
import { FaPaw, FaTimes, FaBars, FaShoppingCart, FaUser } from 'react-icons/fa';
import Dashboard from './Components/Dashboard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [cartItems] = useState(0); // You can implement actual cart functionality

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Check if current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center" onClick={closeMenu}>
                <FaPaw className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-xl font-bold text-gray-800">AdoptOne</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-700 hover:text-orange-500'}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="/petlist"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/petlist') ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-700 hover:text-orange-500'}`}
                  onClick={closeMenu}
                >
                  Pets
                </Link>
                <Link
                  to="/petproducts"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/petproducts') ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-700 hover:text-orange-500'}`}
                  onClick={closeMenu}
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-700 hover:text-orange-500'}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  to="/contactus"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contactus') ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-700 hover:text-orange-500'}`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
                <Link
                  to="/admin"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/admin') ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-700 hover:text-orange-500'}`}
                  onClick={closeMenu}
                >
                  Admin
                </Link>
              </div>
            </div>

            {/* Right side icons */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-4">
                <Link 
                  to="/favorites" 
                  className="p-1 rounded-full text-gray-700 hover:text-orange-500 relative"
                  title="Favorites"
                >
                  <FaShoppingCart className="h-6 w-6" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </Link>
                <Link 
                  to="/profile" 
                  className="p-1 rounded-full text-gray-700 hover:text-orange-500"
                  title="Profile"
                >
                  <FaUser className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Link 
                to="/favorites" 
                className="p-1 mr-4 rounded-full text-gray-700 hover:text-orange-500 relative"
                title="Favorites"
              >
                <FaShoppingCart className="h-6 w-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Link>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/petlist"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/petlist') ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
              onClick={closeMenu}
            >
              Pets
            </Link>
            <Link
              to="/petproducts"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/petproducts') ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contactus"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contactus') ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              to="/admin"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/admin') ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
              onClick={closeMenu}
            >
              Admin
            </Link>
            <Link
              to="/profile"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/profile') ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
              onClick={closeMenu}
            >
              My Profile
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petlist" element={<PetList />} />
          <Route path="/petprofile/:id" element={<PetProfile />} />
          <Route path="/petproducts" element={<PetProducts />} />
          <Route path="/petproducts/:id" element={<PetProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/formdata" element={<FormData />} />
          <Route path="/adoptform/:id" element={<AdoptForm />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;