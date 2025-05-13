import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-8">

      {/* Hero Section */}
        <div className="text-center text-white py-2 rounded-lg" >
        <div
            className=" bg-cover bg-center h-120 "
            style={{
            backgroundImage: 'url("/images/backg.jpeg")', 
           }}
          />
          <h1 className="text-6xl text-black font-extrabold text-shadow-lg">
            Welcome to The Happy Paws Shelter 🐾
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Our mission is to rescue, rehabilitate, and rehome animals in need. 
            Discover how we help pets find their forever homes.
          </p>
        </div>
      

      {/* Our Mission Section */}
      <section className="my-2">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-2">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          At <span className="font-bold text-orange-600">The Happy Paws</span>, we are
          dedicated to rescuing and rehabilitating animals from all walks of life. We
          provide a safe haven for pets, ensuring that they receive the care, love,
          and medical attention they deserve until they find a new family to call their own.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="my-12">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          What We Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-orange-600  text-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">Rescue & Rehabilitation</h3>
            <p className="mt-4 text-lg">
              We rescue animals from challenging situations and provide medical care, food, shelter,
              and rehabilitation to help them heal physically and emotionally.
            </p>
          </div>

          <div className="bg-orange-600  text-white p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold">Adoption Services</h3>
            <p className="mt-4 text-lg">
              We carefully match our animals with families who are ready to adopt and provide them
              with a loving home. We guide families through the entire adoption process.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="my-12 bg-gray-100 py-12">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/produits/adoptcat.jpeg" alt="Success Story" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Max's New Home</h3>
            <p className="text-gray-600">
              Max was rescued from an abusive situation. Today, he enjoys long walks with his new
              family in the park.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/produits/adoptdog.jpeg" alt="Success Story" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Luna's Journey</h3>
            <p className="text-gray-600">
              Luna was found abandoned but now lives in a loving home with two kids and a backyard to
              explore.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/produits/adoptdoog.jpeg" alt="Success Story" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Charlie’s New Family</h3>
            <p className="text-gray-600">
              Charlie was once a stray. Thanks to our adoption program, he's now part of a family
              that adores him.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/produits/adoptcaat.jpeg" alt="Success Story" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Milo's New Home</h3>
            <p className="text-gray-600">
              Milo was rescued from the streets and now enjoys a cozy spot by the window, with a loving owner who spoils him.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/rabbit2.jpeg" alt="Success Story" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Rabbits' Safe Haven</h3>
            <p className="text-gray-600">
              These two rabbits were rescued from an overcrowded shelter. They now live happily in a spacious garden, hopping around freely.
            </p>
           </div>

           <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/doood.jpeg" alt="Success Story" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Buddy the Dog's Happy Life</h3>
            <p className="text-gray-600">
              Buddy was abandoned on the streets but is now loved and cared for by his forever family. He enjoys daily walks and playful adventures.
            </p>
           </div>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          How You Can Help
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-6">
          You can make a big difference! Whether you want to donate, volunteer, or adopt, there are
          many ways to get involved and support our cause.
        </p>
        <div className="flex justify-center gap-8">
          <button className="bg-yellow-400 text-black py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
            Donate Now
          </button>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Volunteer
          </button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="text-center mt-12">
        <h3 className="text-3xl font-semibold text-orange-600">Contact Us</h3>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          Have questions or want to learn more about our adoption process? We would love to hear
          from you. Reach out today and let’s talk!
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;