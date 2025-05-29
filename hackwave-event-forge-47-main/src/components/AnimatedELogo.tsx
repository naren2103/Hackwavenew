
import React from 'react';

const AnimatedELogo = () => {
  return (
    <div className="flex items-center justify-start my-4 text-foreground">
      <span 
        className="text-8xl md:text-9xl font-bold animate-slide-in-left"
        style={{ animationDelay: '0.1s' }}
      >
        E
      </span>
      <div className="ml-2">
        <span 
          className="block text-sm md:text-lg font-medium animate-slide-in-right text-left mb-1"
          style={{ animationDelay: '0.2s' }}
        >
          We're here for :
        </span>
        <span 
          className="block text-sm md:text-lg font-medium animate-slide-in-right text-left"
          style={{ animationDelay: '0.3s' }}
        >
          ffortlessly
        </span>
        <span 
          className="block text-sm md:text-lg font-medium animate-slide-in-right text-left"
          style={{ animationDelay: '0.5s' }}
        >
          nabling
        </span>
        <span 
          className="block text-sm md:text-lg font-medium animate-slide-in-right text-left"
          style={{ animationDelay: '0.7s' }}
        >
          vents
        </span>
        <span 
          className="block text-sm md:text-lg font-medium animate-slide-in-right text-left"
          style={{ animationDelay: '0.9s' }}
        >
          ffortlessly!
        </span>
      </div>
    </div>
  );
};

export default AnimatedELogo;
