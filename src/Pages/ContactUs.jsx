import React, { useState } from "react";

const ContactUs = () => {


  const [formData, setFormData ] = useState({      /* state bach tstori lia form value*/ 
    name: '',
    email:'',
    message:'',
  });

  const [isSubmitted, setIsSabmitted ] = useState();

  const handleInputChange = (event) => { 
    const { name, value } = event.target ;
    setFormData ( { 
      ...formData,
      [name] : value , 
    });
  } ;

  const handleSubmit = (event) => { 
    event.preventDefault();

    console.log("Form submitted:", formData)

    setIsSabmitted(true);
    setFormData({
      name:'',
      email:'',
      message:'',
    });
  }

  return (
    
    <div className='min-h-screen bg-gray-50  px-4 sm:px-6 lg:px-8'>
      <div
            className=" bg-cover bg-center h-90 mt-1"
            style={{
            backgroundImage: 'url("/images/backgr2.jpeg")', 
           }}
          />
      <h1 className='text-4xl font-bold text-center text-orange-800 mb-12'>contact Us</h1>

      {isSubmitted ? (
        <div className='text-center text-green-600 font-semibold'>
          <p>Your message has been sent successfully!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
          <div className='mb-6'>
            <label htmlFor='name' className='block text-gray-700 font-semibold mb-2'>Full Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className='w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600'
              placeholder='Your Name'
              required
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>Email Adress
            </label>
            <input
              type='text'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600'
              placeholder='Your Email'
              required
            />
            </div>

          <div className='mb-6'>
            <label htmlFor='message' className='block text-gray-700 font-semibold mb-2'>Your Message
            </label>
            <input
              type='text'
              id='message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              className='w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600'
              placeholder='Type your message here...'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-orange-900 text-white font-semibold py-2 rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-600'
          >
            Send Message
          </button>
        </form>

      )}
        
        </div>
    
  );
  
};

export default ContactUs