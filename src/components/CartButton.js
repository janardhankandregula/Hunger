import React, { useState } from 'react';

const CartButton = () => {
  const [cartLen, setCartLen] = useState(0); // Initialize cart length
  const [mode, setMode] = useState('Add'); // Initialize mode
  // Handle button click
  //   const handleButtonClick = () => {
  //     if (mode === 'Add') {
  //       setMode('+'); // Switch to '+' mode
  //     } else if (mode === '+') {
  //       setCartLen(cartLen + 1); // Increment cart length
  //     } else if (mode === '-') {
  //       setCartLen(cartLen - 1); // Decrement cart length
  //     }
  //   };

  const handleButtonClick = () => {
    if (mode === 'Add') {
      setMode('+');
      // Switch to '+' mode
    } else if (mode === '+') {
      setCartLen(cartLen + 1); // Increment cart length
      setMode('-'); // Change to '-' mode once item is added
    } else if (mode === '-') {
      if (cartLen > 0) {
        setCartLen(cartLen - 1); // Decrement cart length
        if (cartLen === 1) {
          setMode('+'); // Change back to '+' mode if no items left
        }
      }
    }
  };

  // Determine button text based on the current mode
  const buttonText = mode === 'Add' ? 'Add' : mode === '+' ? '+' : '-';

  return (
    <button
      onClick={handleButtonClick}
      className='text-green-500 bg-white hover:bg-gray-100 text-3xl px-10 py-2 font-bold border focus:outline-none border-gray-400 rounded-2xl'
    >
      {buttonText}
      {mode !== 'Add' && ` ${cartLen}`}{' '}
    </button>
  );
};

export default CartButton;
