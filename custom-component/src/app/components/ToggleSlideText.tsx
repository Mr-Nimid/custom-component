'use client';

import React, { useState } from 'react';
import SlideComponent from './SlideComponent'; // Assuming SlideComponent is in the same directory

const ToggleSlidePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls the visibility of the slide component

  const toggleVisibility = () => {
    setIsOpen((prev) => !prev); // Toggle visibility
  };

  return (
    <div className="p-4">
      <button
        onClick={toggleVisibility}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isOpen ? 'Close' : 'Open'} Text
      </button>

      {/* Pass isOpen state as isVisible prop to SlideComponent */}
      <SlideComponent
        isVisible={isOpen} // Control visibility externally
        direction="right" // Slide up from the bottom
        delay={300} // Delay before animation starts
        closeDelay={300}
        className="mt-4"
      >
        <p>This is the text that will slide in and out.</p>
      </SlideComponent>
    </div>
  );
};

export default ToggleSlidePage;
