'use client';

import React, { useEffect, useState } from 'react';

interface SlideComponentProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'; // Typography variant options
  className?: string;
  isVisible: boolean; // New prop to control visibility externally
  closeDelay?: number;
}

const SlideComponent: React.FC<SlideComponentProps> = ({
  children,
  direction = 'up',
  delay = 0,
  variant = 'h4',
  className = '',
  isVisible,
  closeDelay = 0,
  ...props
}) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const slideInFromDirection: Record<string, string> = {
    up: 'translate-y-[100%]',
    down: 'translate-y-[-100%]',
    left: 'translate-x-[-100%]',
    right: 'translate-x-[100%]',
  };

  const slideInTo = 'translate-x-0 translate-y-0 opacity-100';

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsComponentVisible(true);
      }, delay);
    } else {
      setTimeout(() => {
        setIsComponentVisible(false);
      }, closeDelay); // Keep the element in the DOM for the duration of the transition
    }
  }, [isVisible, delay, closeDelay]);

  return (
    <div className={`mb-4 ${className}`} {...props}>
      <div
        className={`slide transform transition-all duration-1000 ease-out ${
          isComponentVisible
            ? slideInTo
            : `${slideInFromDirection[direction]} opacity-0`
        }`}
      >
        {React.createElement(variant, { className: 'text-lg' }, children)}
      </div>
    </div>
  );
};

export default SlideComponent;
