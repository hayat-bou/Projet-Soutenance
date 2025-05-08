import React from "react";

const About = () => {
  return (

    <div className="container mx-auto px-4 py-8">
      <section
        style= {{
          backgroundImage: 'url("/images/back3.jpeg")'
        }}
      > 
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-orange-900">About Our Shelter</h1>
        <p className="text-lg mt-4 text-gray-600">
          Learn more about our mission, values, and how we help animals in need.
        </p>
      </header>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg mt-4 text-gray-600">
          At The Happy Paws, we are committed to rescuing, rehabilitating, and rehoming animals in need. We provide a safe,
          nurturing environment where animals receive the love and care they deserve until they find their forever homes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-900">Rescue and Rehabilitation</h3>
            <p className="mt-4 text-gray-600">
              We rescue animals from difficult situations and provide them with medical care, nourishment, and emotional
              support to help them recover.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-900">Adoption Services</h3>
            <p className="mt-4 text-gray-600">
              We work with loving families to match them with animals who need a forever home, ensuring successful,
              long-term adoptions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Get Involved</h2>
        <p className="text-lg mt-4 text-gray-600">
          You can make a difference! Help us continue our mission by donating, volunteering, or adopting an animal. Every
          effort counts and contributes to the well-being of our animals.
        </p>
      </section>

      <section className="text-center mt-8">
        <h3 className="text-2xl font-semibold text-orange-900">Contact Us</h3>
        <p className="mt-4 text-lg text-gray-600">
          Have questions? Want to learn more about our adoption process? Feel free to reach out—we’d love to hear from
          you.
        </p>
        <div className="mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
