import React from 'react';
import { useState } from 'react';
import AccordionItem from './AccordionItem';
import MenuContentCard from './MenuContentCard';

const Accordion = ({ items }) => {
  // const [isOpen, setIsOpen] = useState(false);

  const content = items;
  // console.log(content);
  const [openIndex, setOpenIndex] = useState(false);

  const handleToggle = (index) => {
    // setOpenIndex(index);
    setOpenIndex((preindex) => (preindex === index ? false : index));
  };

  return (
    <div className='w-full max-w-6xl mx-auto mt-4'>
      <div>
        {items.map((item, index) => {
          const content2 = item.card.card.itemCards;
          // console.log(content2);
          return (
            <AccordionItem
              key={index}
              title={item?.card?.card?.title}
              itemCardsAll={item.card.card.itemCards}
              isOpen={openIndex === index}
              handleToggle={() => handleToggle(index)}
            ></AccordionItem>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
