import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import bgImage from "../assets/images/3.jpg"; // make sure the path is correct

const apologyTexts = [
  "I’m sorry for hurting your feelings. 💔 Swipe right",
  "I regret my words, please forgive me. 🥺",
  "Let us start from where we left. 💕",
  "I miss the love and care yuh showered. 😢",
  "Please let’s forget the fight and start fresh. 🌸",
  "All I have you and my love for yuh. 💖",
  "I can't even imagine a life without yuh. 😔",
  "I just want to see you smile and I will be the reason behind it. 💓",
  "I apologize for my mistakes. 💐",
  "I hope we will laugh together again soon. 🥰",
];

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const { width, height } = useWindowSize();

  const handleSwipe = (direction) => {
    if (currentIndex < apologyTexts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCelebrate(true);
    }
  };

  return (
    <div className="position-relative vh-100 vw-100 d-flex flex-column justify-content-center align-items-center text-center px-3 overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", opacity: 0.2, zIndex: 0 }}
      />

      {/* Optional gradient overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.2)", zIndex: 0 }}
      ></div>

      {/* Confetti on completion */}
      {celebrate && <Confetti width={width} height={height} />}

      {!celebrate ? (
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="card p-5 shadow-lg rounded-4"
            style={{ maxWidth: "400px", zIndex: 1 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(event, info) => {
              if (info.offset.x > 100) handleSwipe("right");
              else if (info.offset.x < -100) handleSwipe("left");
            }}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
          >
            <p className="lead">{apologyTexts[currentIndex]}</p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div style={{ zIndex: 1 }}>
          <h1 className="display-4 text-pink"> Sorry mailuhhh!🥹🫴</h1>
          <p className="lead">
            Hope you will feel better now...Love yuhh soo much thangameyyy! 🥳
          </p>
        </div>
      )}

      {/* Pagination */}
      {!celebrate && (
        <div
          className="mt-4 d-flex justify-content-center gap-2"
          style={{ zIndex: 1 }}
        >
          {apologyTexts.map((_, idx) => (
            <span
              key={idx}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: idx === currentIndex ? "#ec4899" : "#ccc",
                display: "inline-block",
              }}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
