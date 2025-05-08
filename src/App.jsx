import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // Correct imports
import Home from './Pages/Home';
import PetList from './Pages/PetList';
import PetProducts from './Pages/PetProducts' ;
import PetProfile from './Pages/PetProfile';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Form from './Components/Form';


function App() {
  return (
    <>
      <nav className="bg-orange-900 p-4 flex items-center justify-between">
        <div className='flex items-center'>
          <img src='/public/images/logo.png'  className="w-10 h-10 object-cover rounded-full alt= "Logo/>
          <h1 className='text-white text-2xl ml-1'>AdoptOne</h1>
        </div>
        <ul className="flex space-x-6 justify-center">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/Petlist" className="text-white hover:text-gray-300">PetList</Link></li>
          <li><Link to="/petproducts" className="text-white hover:text-gray-300">PetProducts</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link to="/contactus" className="text-white hover:text-gray-300">ContactUs</Link></li>
          <li><Link to="/form" className="text-white hover:text-gray-300">Form</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petlist" element={<PetList />} />
        <Route path="/petprofile/:id" element={<PetProfile />} />
        <Route path="/petproducts" element={<PetProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
