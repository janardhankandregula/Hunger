import React from "react";
import { useCartPage } from "../utilis/CartPageContext";
import IMG_URL from "../utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItems,
  removeItems,
  increment,
  decrement,
} from "../utilis/cartSlice";

const CartPage = () => {
  const {
    // cart,
    // removeFromCart,
    // clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartPage();

  const cart = useSelector((state) => state.cart.items || []);
  console.log(cart);

  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (itemId) => {
    dispatch(removeItems(itemId));
    //removeFromCart(itemId);
  };

  const handleClear = () => {
    dispatch(clearItems());
    // clearCart();
  };
  return (
    <div
      data-testid="cartId"
      className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg m-4"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Your Cart</h1>
      {cart.length === 0 ? (
        <p data-testid="para" className="text-lg text-gray-600">
          Plse add something to eat .
        </p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                data-testid="testId"
                key={item.id}
                className="flex items-center border-b border-gray-200 pb-4"
              >
                <img
                  src={IMG_URL + item.imageId}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-6"
                />
                <div className="flex-1">
                  <span className="text-xl font-medium text-gray-700">
                    {item.name} - ₹{item.price / 100}
                  </span>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300 transition duration-300"
                      onClick={() => dispatch(decrement(item.id))}
                    >
                      -
                    </button>
                    <span className="mx-4">{item.quantity}</span>
                    <button
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition duration-300"
                      onClick={() => dispatch(increment(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  data-testid="removebtn"
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 ml-6"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Total: ₹{totalPrice / 100}
            </h2>
            <button
              // data-testid="allclear"
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300 mt-6"
              onClick={handleClear}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
