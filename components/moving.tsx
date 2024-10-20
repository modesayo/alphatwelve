"use client";

import React, { useState } from "react";

interface Work {
  image: string;
  title: string;
}

const works: Work[] = [
  { image: "3.png", title: "CLOTH2LIFE AI" },
  { image: "2.png", title: "Coalition Api Test" },
  { image: "1.png", title: "Coalition Api Test" },
];

interface WorkCardProps {
  work: Work;
  currentIndex: number;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, currentIndex }) => (
  <div className="relative w-full h-full">
    <img 
      src={work.image}
      alt={work.title}
      className="w-full rounded-lg h-full" // Tailwind class for height
    />
    <div className="absolute bottom-0 left-0 bg-transparent w-full h-[40%] flex items-center">
      <div className="relative w-full h-full p-2">
        <h1 className="text-md text-white font-bold md:text-lg lg:text-xl xl:text-2xl">
          Latest News & Updates
        </h1>
        <h2 className="text-white text-sm">
          Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.
        </h2>
      </div>
    </div>
    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex z-9">
      {works.map((_, index) => (
        <div key={index} className={`w-3 h-1 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"} mx-1 transition-colors duration-300`} />
      ))}
    </div>
  </div>
);

interface ButtonProps {
  onClick: () => void;
}

const PrevButton: React.FC<ButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 transition duration-300 hover:bg-gray-300">
    <svg width="6" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.625 1.375L0.875 3L2.625 4.625" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const NextButton: React.FC<ButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 transition duration-300 hover:bg-gray-300">
    <svg width="6" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.375 1.375L3.125 3L1.375 4.625" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % works.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + works.length) % works.length);
  };

  return (
    <div className="flex justify-center items-center small-screen-only w-auto h-80">
      <div className="relative w-full h-80 overflow-hidden">
        <WorkCard work={works[currentIndex]} currentIndex={currentIndex} />
        <PrevButton onClick={handlePrev} />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
};

export default Portfolio;