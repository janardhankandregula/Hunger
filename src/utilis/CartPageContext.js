// src/utilis/cartPageContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a Context
const CartPageContext = createContext();

// Context Provider Component
export const CartPageProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const cartLength = cart.length;
  // console.log(cartLength);

  return (
    <CartPageContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartLength,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartPageContext.Provider>
  );
};

// Custom Hook to use CartPage Context
export const useCartPage = () => {
  const context = useContext(CartPageContext);
  if (context === undefined) {
    throw new Error('useCartPage must be used within a CartPageProvider');
  }
  return context;
};
