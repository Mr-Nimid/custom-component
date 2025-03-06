"use client";

import React from "react";
import SlideComponent from "./slide-component";

interface HeartCircleProps {
  text?: string;
  size?: number; 
  heartCount?: number; 
  animationSpeed?: number; 
}

const HeartCircle: React.FC<HeartCircleProps> = ({
  text = "Happy Birthday!",
  size = 500,
  heartCount = 12,
  animationSpeed = 10, 
}) => {
  const radius = size / 2 - 50; 

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="relative animate-spin-slow"
        style={{
          width: size,
          height: size,
          animationDuration: `${animationSpeed}s`, 
        }}
      >
        {Array.from({ length: heartCount }).map((_, index) => {
          const angle = (index / heartCount) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `50%`,
                top: `50%`,
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <SlideComponent direction="down" delay={1200} variant="span" >
                    <div className="heart"></div>
                </SlideComponent>
            </div>
          );
        })}
      </div>

      <div className="absolute">
        <SlideComponent direction="down" delay={1000} variant="span" >
          <p className="text-2xl pl-10 font-bold text-pink-400 text-center">{text}</p>
        </SlideComponent>
      </div>
    </div>
  );
};

export default HeartCircle;