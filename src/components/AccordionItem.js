import React, { useState } from "react";
import { useEffect } from "react";
import IMG_URL from "../utilis/constants";

import { useCartPage } from "../utilis/CartPageContext";

import { useDispatch } from "react-redux";
import { addItems } from "../utilis/cartSlice";

const AccordionItem = ({ title, itemCardsAll = [], isOpen, handleToggle }) => {
  const [buttonStatus, setButtonStatus] = useState({});
  const { addToCart, cart } = useCartPage();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    // addToCart(item);
    // // Update button status to 'Added to Cart' and disable it
    setButtonStatus((prevStatus) => ({
      ...prevStatus,
      [item.id]: true,
    }));
    dispatch(addItems(item));
  };

  useEffect(() => {
    const initialStatus = {};
    itemCardsAll.forEach((item) => {
      initialStatus[item.card.info.id] = cart.some(
        (cartItem) => cartItem.id === item.card.info.id
      );
    });
    setButtonStatus(initialStatus);
  }, [itemCardsAll, cart]);

  return (
    <div className="border-b-[30px] border-gray-100 m-4 p-4 mb-[20px] mt-[10px]">
      <button
        className="w-full text-left px-4 py-2  focus:outline-none"
        onClick={handleToggle}
      >
        <h2 className="flex justify-between items-center text-3xl font-bold">
          <span>
            {title}({itemCardsAll.length})
          </span>
          <span className="ml-2">{isOpen ? "-" : "+"}</span>
        </h2>
      </button>
      {isOpen && (
        <div>
          {itemCardsAll.map((item) => {
            const bgColorClass =
              item.card.info.isVeg === 1
                ? "bg-gradient-to-r from-indigo-200 to-green-500"
                : "bg-gradient-to-r from-indigo-200 to-red-500";
            return (
              <div className="flex justify-between border-b border-black-900 pb-[50px]">
                <div key={item.card.info.id} className="px-4 py-2  ">
                  <div className="py-[2px] pt-[20px]">
                    {item.card.info.isVeg == 1 ? (
                      <span className="text-green-500 text-2xl">🥦</span>
                    ) : (
                      <span className="text-red-500 text-2xl">🍗</span>
                    )}
                  </div>
                  <p className="text-3xl font-semibold py-[5px] pt-[20px]">
                    {item.card.info.name}
                  </p>
                  <p className="text-2xl font-semibold py-[5px]">
                    ₹ {item.card.info.price / 100}
                  </p>
                  <p className="text-2xl font-semibold pt-[10px] pb-[60px]">
                    {item.card.info.description}
                  </p>
                </div>

                <div className="w-[300px] p-4 m-4">
                  <img
                    className={`${bgColorClass} p-2 rounded-3xl w-full h-auto object-cover`}
                    src={`${IMG_URL}${item.card.info.imageId}`}
                    alt="item"
                  />
                  <button
                    data-testid="itemId"
                    onClick={() => handleAddToCart(item.card.info)}
                    className="text-green-500 bg-white hover:bg-gray-100 text-3xl px-10 py-2 font-bold border focus:outline-none border-gray-400 rounded-2xl"
                    disabled={buttonStatus[item.card.info.id]} // Disable button if added to cart
                  >
                    {buttonStatus[item.card.info.id]
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                  {/* <CartButton /> */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default AccordionItem;
