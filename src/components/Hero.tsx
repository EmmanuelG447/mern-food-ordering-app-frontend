import React, { useState } from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={hero}
        style={{
          width: "100%",
          maxHeight: "600px",
          objectFit: "cover",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)"
        }}
        alt="Hero Image"
      />
    </div>
  );
};

export default Hero;
