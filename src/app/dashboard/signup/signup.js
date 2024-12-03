"use client";

import { useState, useEffect } from "react";

const HomePage = () => {
  // State to store the current scroll position
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Set up event listener when the component mounts and clean it up when it unmounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine background color based on scroll position
  let backgroundColor = "bg-blue-400"; // Default color
  if (scrollY >= window.innerHeight && scrollY < 3 * window.innerHeight) {
    backgroundColor = "bg-white"; // Change to white when scroll is between 100vh and 300vh
  }

  return (
    <div className="h-[400vh]">
      {/* Section 1: 100vh */}
      <div className={`h-screen ${backgroundColor}`}>
        <h1 className="text-white text-center pt-40">Scroll Down to Change Color</h1>
      </div>

      {/* Section 2: 100vh */}
      <div className="h-screen bg-white">
        <h1 className="text-black text-center pt-40">This is White Section</h1>
      </div>

      {/* Section 3: 100vh */}
      <div className="h-screen bg-white">
        <h1 className="text-black text-center pt-40">Scroll to the end</h1>
      </div>
    </div>
  );
};

export default HomePage;
