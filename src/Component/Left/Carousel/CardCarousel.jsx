import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CardCarousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [numVisibleCards, setNumVisibleCards] = useState(1);

  const updateVisibleCards = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 467) {
      setNumVisibleCards(1);
    } else if (screenWidth < 710) {
      setNumVisibleCards(2);
    } else {
      setNumVisibleCards(3);
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - numVisibleCards ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - numVisibleCards : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {cards.map((card, index) => {
          const cardIndex = (currentCardIndex + index) % cards.length;
          if (
            index >= currentCardIndex &&
            index < currentCardIndex + numVisibleCards
          ) {
            return (
              <AnimatePresence key={cardIndex}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`w-${12 / numVisibleCards}/12 px-2`}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
                    <div className="relative ">
                      <img
                        className="h-72 w-full object-cover"
                        src={card?.img}
                        alt=""
                      />
                      <div className="absolute bg-black/60 bottom-0 left-0 flex w-full">
                        <div className="bg-[#818991]/70 text-lg pl-2 pr-1 py-2.5 font-bold text-yellow-400">
                          % 18 <br /> Indlrlim
                        </div>
                        <div className="pl-1 text-white">
                          <p className="text-base font-semibold">Megul</p>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet elit.
                          </p>
                          <p className="font-semibold">18899 $ /night</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          } else {
            return null;
          }
        })}
      </div>
      <button
        onClick={prevCard}
        className="absolute -left-2 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-[#9EB5C1] text-white rounded-sm"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextCard}
        className="absolute -right-2 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-[#9EB5C1] text-white rounded-sm"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CardCarousel;
