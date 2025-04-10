import React, { useState, useEffect, useRef } from "react";

const Counter = ({ targetValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounter();
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
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
    const duration = 5000;
    const framesPerSecond = 60;
    const totalFrames = framesPerSecond * (duration / 1000);

    let startValue = 0;
    if (Number.isInteger(targetValue)) {
      startValue = 0;
    } else {
      startValue = 0.1;
    }

    const increment = (targetValue - startValue) / totalFrames;

    let currentCount = startValue;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        currentCount += increment;

        if (
          (increment > 0 && currentCount >= targetValue) ||
          (increment < 0 && currentCount <= targetValue)
        ) {
          clearInterval(interval);
          return targetValue;
        }
        return currentCount;
      });
    }, duration / totalFrames);
  };

  return (
    <div ref={ref}>
      {isVisible && (
        <h2 id="stats-number" className="fontWeight600">
          {Number.isInteger(targetValue) ? Math.round(count) : count.toFixed(1)}{" "}
          <span>%</span>
        </h2>
      )}
    </div>
  );
};

export default Counter;
