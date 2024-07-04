import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetValue }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounter();
        }
      },
      {
        threshold: 0.5, // Intersection ratio threshold (50%)
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const startCounter = () => {
    const duration = 5000; // Total duration in milliseconds
    const framesPerSecond = 60; // Number of frames per second for smooth animation
    const totalFrames = framesPerSecond * (duration / 1000); // Total number of frames
    const increment = Math.ceil(targetValue / totalFrames); // Increment for each frame

    let currentCount = 0;
    const interval = setInterval(() => {
      setCount(currentCount);
      currentCount += increment;
      if (currentCount >= targetValue) {
        setCount(targetValue); // Ensure final count is exact
        clearInterval(interval);
      }
    }, duration / totalFrames); // Interval adjusted for smooth animation
  };

  return (
    <div ref={ref}>
      {isVisible && <h4 id='stats-number'>{count}</h4>}
    </div>
  );
};

export default Counter;
