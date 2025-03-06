'use client';

import React from 'react';
import { useEffect, useState } from 'react';

interface SlideComponentProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'; // Typography variant options
  className?: string;
}

const SlideComponent: React.FC<SlideComponentProps> = ({
  children,
  direction = 'up',
  delay = 0,
  variant = 'h4',
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const slideInFromDirection: Record<string, string> = {
    up: 'translate-y-[100%]',
    down: 'translate-y-[-100%]',
    left: 'translate-x-[-100%]',
    right: 'translate-x-[100%]',
  };

  const slideInTo = 'translate-x-0 translate-y-0 opacity-100';

  useEffect(() => {
    const elements = document.querySelectorAll('.slide');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true); // Trigger the animation once the element is in view
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [delay]);

  return (
    <div className={`${className}`} {...props}>
      <div
        className={`slide transform transition-all duration-1000 ease-out ${isVisible ? slideInTo : slideInFromDirection[direction]} opacity-0`}
      >
        {React.createElement(variant, { className: 'text-lg' }, children)}
      </div>
    </div>
  );
};

export default SlideComponent;
