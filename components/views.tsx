"use client";
import React, { useEffect, useState } from "react";
import "./styles.css"; // Import your CSS file

const ResponsiveComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600); // Set mobile state based on width
  };

  useEffect(() => {
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  return (
    <div className={isMobile ? "mobile" : "desktop"}>
      <h1>{isMobile ? "Mobile View" : "Desktop View"}</h1>
      {/* Render different content based on isMobile */}
    </div>
  );
};

export default ResponsiveComponent;