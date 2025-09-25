import React from "react";
import { Heart } from "lucide-react";
import bgImage from "../assets/images/bg1.jpg"; // make sure path is correct

const Home = () => {
  const floatEmojis = ["❤️", "💖", "💕", "🧸", "💓", "💗"];

  return (
    <div className="position-relative vh-100 vw-100 d-flex justify-content-center align-items-center text-center overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", opacity: 0.2, zIndex: 0 }}
      />

      {/* Optional Gradient Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(to bottom right, #fbc2eb, #a6c1ee)",
          opacity: 0.6,
          zIndex: 0,
        }}
      ></div>

      {/* Floating Emojis */}
      {floatEmojis.map((emoji, idx) => (
        <span
          key={idx}
          className="floating-emoji"
          style={{
            left: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* Centered Content */}
      <div
        className="position-relative z-index-1 px-3"
        style={{ maxWidth: "450px" }}
      >
        <div className="display-1 mb-3">😔</div>

        {/* Apology Card */}
        <div className="card p-4 shadow-lg rounded-4 bg-white bg-opacity-90 mb-4">
          <h1 className="text-pink mb-3">I’m Really Sorry 💔</h1>
          <p className="text-dark mb-3">
            I know I hurt you, and it makes me so sad. You’re very special to
            me, and I never want to lose our bond. Please forgive me… let’s
            forget the pain and create more happy memories together. 💕
          </p>
          <button className="btn btn-pink btn-lg">Forgive Me? 🥺</button>
        </div>

        {/* Footer */}
        <div className="d-flex flex-column align-items-center mt-3 text-dark">
          <Heart className="text-danger" />
          <span className="small mt-1">Made with love just for you 💖🧸</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
