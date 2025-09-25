import React from "react";
import bgImage from "../assets/images/bg1.jpg"; // make sure the path is correct
import { nav } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
import '../App.css'

const EntryPage = () => {
    const navigate = useNavigate();
  return (
    <div
      className="position-relative vh-100 vw-100 d-flex justify-content-center align-items-center text-center"
      style={{ overflow: "hidden" }}
    >
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", opacity: 0.2, zIndex: 0 }}
      />

      {/* Optional dark overlay for readability */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 0 }}
      ></div>

      {/* Centered Content */}
      <div className="position-relative z-index-1 px-3">
        <h1 className="text-white display-4 mb-3">
          I know it was my mistake🙇💔
        </h1>
        <p className="text-white lead mb-4">
          Hey Teddy, I just want to say I’m truly sorry. Mistakes are part
          of being human, and I know I’ve made mine. I promise I’m learning from
          them and growing every day. Letting go isn’t an option for me, because
          what we have is far too special. I want to make things right, fix
          this, and show you how much you mean to me. You’re incredibly
          important to me, and I never want to take that for granted.❤️💕
        </p>

        <button
          className="btn btn-pink btn-lg mb-4"
          style={{ backgroundColor: "#ec4899", border: "none" }}
          onClick={() => navigate("/home")}
        >
          Click Me 🥰
        </button>

        <p className="text-white small mb-1">
          "Sometimes all you need is a little courage to press the button and
          make a difference." 🌸
        </p>
        <p className="text-white small">
          "Every click could lead to a smile, a memory, or a beautiful
          surprise." ✨
        </p>
      </div>
    </div>
  );
};

export default EntryPage;
