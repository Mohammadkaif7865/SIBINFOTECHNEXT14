import React, { useState, useEffect, useRef } from "react";

const Counter = ({ targetValue, animate = true }) => {
  const [count, setCount] = useState(targetValue);
  const [started, setStarted] = useState(!animate);
  const ref = useRef(null);

  useEffect(() => {
    if (!animate || started) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
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
  }, [animate, started]);

  useEffect(() => {
    if (!started || !animate) return;
    const duration = 5000;
    const framesPerSecond = 60;
    const totalFrames = framesPerSecond * (duration / 1000);
    const startValue = Number.isInteger(targetValue) ? 0 : 0.1;
    const increment = (targetValue - startValue) / totalFrames;

    let currentCount = startValue;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetValue) {
        clearInterval(interval);
        setCount(targetValue);
      } else {
        setCount(currentCount);
      }
    }, duration / totalFrames);
    return () => clearInterval(interval);
  }, [started, animate, targetValue]);

  return (
    <span ref={ref}>
      {Number.isInteger(targetValue) ? Math.round(count) : count.toFixed(1)}
    </span>
  );
};

export default Counter;
