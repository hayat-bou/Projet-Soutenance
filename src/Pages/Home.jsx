import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen ">
      
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[100vh] flex items-center justify-center text-center text-white px-6 sm:px-8 lg:px-16"
        style={{ backgroundImage: 'url("/images/background.jpeg")' }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-shadow-lg">
            Find Your New Best Friend 🐾
          </h1>
          <p className="text-xl sm:text-2xl mt-6 max-w-3xl mx-auto">
            Ensure you are fully prepared to provide proper care and attention to your pet before welcoming them into your home.
          </p>
          <Link
            to="/petlist"
            aria-label="Start adoption journey"
            className="mt-8 inline-block bg-yellow-400 text-black py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Start Your Adoption Journey
          </Link>
        </div>
      </div>

      {/* Pet Categories */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold text-orange-500 mb-6">Our Pets</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Dogs", img: "/images/dogy.jpg", desc: "Loyal, loving companions. Adopt a dog today!" },
            { name: "Cats", img: "/images/caty.jpg", desc: "Independent, playful, and affectionate." },
            { name: "Rabbits", img: "/images/rabbit.jpg", desc: "Cute, cuddly companions for small spaces." },
            { name: "Birds", img: "/images/birdy.jpg", desc: "Interactive, colorful, and make great pets!" },
          ].map((pet) => (
            <div key={pet.name} className="w-full sm:w-64 md:w-80 bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={pet.img} alt={pet.name} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl text-gray-800">{pet.name}</h3>
                <p className="text-gray-600 mt-2">{pet.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-12 bg-gray-200 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          {[
            { title: "Step 1: Choose Your Pet", desc: "Browse our catalog and choose a pet that fits your needs." },
            { title: "Step 2: Apply for Adoption", desc: "Fill out a simple application form to adopt your chosen pet." },
            { title: "Step 3: Meet Your Pet", desc: "Once approved, meet your new best friend!" },
          ].map((step) => (
            <div key={step.title} className="w-full sm:w-72 md:w-80 bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Adopt Section */}
      <section className="text-center py-12 bg-gray-200 text-white flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-6 text-black">Ready to Adopt a Pet?</h1>

        {/* First Form */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-orange-500">The Joy of Pet Adoption</h1>
          <p className="text-xl text-black max-w-3xl text-center mx-auto">
            Bringing a pet into your life can be an incredibly rewarding experience, not just for you but for the furry friend you welcome into your home. There's a special kind of magic that comes with adopting any companion animal.
          </p>
        </div>

        {/* Second Form */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-orange-500">A Guide to Pet Adoption</h1>
          <p className="text-xl text-black max-w-3xl text-center mx-auto">
            Are you considering adding a new pet to your family? Pet adoption is a wonderful option to consider. The journey of finding the ideal companion involves careful thought, research, and planning, but the rewards are immeasurable.
          </p>
        </div>

        {/* Third Form */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-orange-500">The Healing Power of Animals</h1>
          <p className="text-xl text-black max-w-3xl text-center mx-auto">
            Animals have an extraordinary ability to touch our lives in profound ways, offering not only companionship but also a therapeutic bond that can positively impact our physical, mental, and emotional well-being.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-6">
          <Link
            to="/petlist"
            aria-label="Start adoption journey"
            className="inline-block bg-orange-500 text-black py-3 px-8 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Start Your Adoption Journey
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-white py-12 px-6 bg-orange-950">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-6">&copy; 2025 Pet Haven. All rights reserved.</p>
          <div className="mb-6">
            <Link to="/about" className="mx-4 hover:text-yellow-400">About Us</Link>
            <Link to="/contact" className="mx-4 hover:text-yellow-400">Contact Us</Link>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Home;