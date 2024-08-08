import React, { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just set the form to "submitted"
    setSubmitted(true);
    // Here you would usually send the form data to an API or handle it as needed
    console.log('Form submitted:', formData);
  };

  return (
    <div className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
      {submitted && (
        <p className='mb-4 text-green-600'>Thank you for your message!</p>
      )}
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label
            htmlFor='name'
            className='block text-gray-700 text-lg font-medium mb-2'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-gray-700 text-lg font-medium mb-2'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            rows='4'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <button
          type='submit'
          className='w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out'
        >
          Submit
        </button>
      </form>
    </div>
  );
  // return (
  //   <div className='relative top-20 '>
  //     <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden '>
  //       <div className='px-6 py-4'>
  //         <h2 className='text-4xl font-bold text-gray-800'>
  //           Contact Information
  //         </h2>
  //         <p className='mt-2 text-gray-600 text-2xl'>Get in touch with us!</p>
  //       </div>
  //       <div className='px-6 py-2 border-t border-gray-200'>
  //         <div className='flex items-center py-2'>
  //           <svg
  //             className='w-6 h-6 text-gray-600'
  //             fill='none'
  //             stroke='currentColor'
  //             viewBox='0 0 24 24'
  //             xmlns='http://www.w3.org/2000/svg'
  //           >
  //             <path
  //               strokeLinecap='round'
  //               strokeLinejoin='round'
  //               strokeWidth='2'
  //               d='M12 6v6m0 0v6m0-6h6m-6 0H6'
  //             ></path>
  //           </svg>
  //           <span className='ml-2 text-gray-700 text-2xl'>
  //             123 Main st,Bangalore,Karnataka
  //           </span>
  //         </div>
  //         <div className='flex items-center py-2'>
  //           <svg
  //             className='w-6 h-6 text-gray-600'
  //             fill='none'
  //             stroke='currentColor'
  //             viewBox='0 0 24 24'
  //             xmlns='http://www.w3.org/2000/svg'
  //           >
  //             <path
  //               strokeLinecap='round'
  //               strokeLinejoin='round'
  //               strokeWidth='2'
  //               d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  //             ></path>
  //             <path
  //               strokeLinecap='round'
  //               strokeLinejoin='round'
  //               strokeWidth='2'
  //               d='M15 8v4m0 0l-6-6m6 6l6-6'
  //             ></path>
  //           </svg>
  //           <span className='ml-2 text-gray-700 text-2xl'>99345348766</span>
  //         </div>
  //         <div className='flex items-center py-2'>
  //           <svg
  //             className='w-6 h-6 text-gray-600'
  //             fill='none'
  //             stroke='currentColor'
  //             viewBox='0 0 24 24'
  //             xmlns='http://www.w3.org/2000/svg'
  //           >
  //             <path
  //               strokeLinecap='round'
  //               strokeLinejoin='round'
  //               strokeWidth='2'
  //               d='M14 12l2 2m0 0l-2 2m2-2H8m13-10v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1z'
  //             ></path>
  //           </svg>
  //           <span className='ml-2 text-gray-700 text-2xl'>
  //             janardhank134@gmail.com
  //           </span>
  //         </div>
  //       </div>
  //       <div className='px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-end'>
  //         {/* <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300 ease-in-out'>
  //           Contact Us
  //         </button> */}
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default Contact;
