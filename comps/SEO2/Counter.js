// import React, { useState, useEffect, useRef } from 'react';

// const Counter = ({ targetValue }) => {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           startCounter();
//         }
//       },
//       {
//         threshold: 0.5, // Intersection ratio threshold (50%)
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   const startCounter = () => {
//     const duration = 5000; // Total duration in milliseconds
//     const framesPerSecond = 60; // Number of frames per second for smooth animation
//     const totalFrames = framesPerSecond * (duration / 1000); // Total number of frames
//     const increment = Math.ceil(targetValue / totalFrames); // Increment for each frame

//     let currentCount = 0;
//     const interval = setInterval(() => {
//       setCount(currentCount);
//       currentCount += increment;
//       if (currentCount >= targetValue) {
//         setCount(targetValue); // Ensure final count is exact
//         clearInterval(interval);
//       }
//     }, duration / totalFrames); // Interval adjusted for smooth animation
//   };

//   return (
//     <div ref={ref}>
//       {isVisible && <h4 id='stats-number'>{count}</h4>}
//     </div>
//   );
// };

// export default Counter;


// import React, { useState, useEffect, useRef } from 'react';

// const Counter = ({ targetValue }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           startCounter();
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         threshold: 0.5, 
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   const startCounter = () => {
//     const duration = 5000; 
//     const framesPerSecond = 60; 
//     const totalFrames = framesPerSecond * (duration / 1000); 
//     const increment = Math.ceil(targetValue / totalFrames);

//     let currentCount = 0;
//     const interval = setInterval(() => {
//       setCount((prevCount) => {
//         currentCount += increment;
     
//         if (currentCount >= targetValue) {
//           clearInterval(interval);
//           return targetValue;
//         }
//         return currentCount;
//       });
//     }, duration / totalFrames);
//   };

//   return (
//     <div ref={ref}>
//       {isVisible && <h4 id='stats-number'>{count}</h4>}
//     </div>
//   );
// };

// export default Counter;

import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0); // Start from 0 initially
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounter();
          observer.unobserve(entry.target); // Stop observing once visible
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

    let startValue = 0;
    if (Number.isInteger(targetValue)) {
      startValue = 0; // Start from 0 if targetValue is an integer
    } else {
      startValue = 0.1; // Start from 0.1 if targetValue is a decimal
    }

    const increment = (targetValue - startValue) / totalFrames; // Increment for each frame

    let currentCount = startValue;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        currentCount += increment;
        // Ensure we do not exceed the target value
        if ((increment > 0 && currentCount >= targetValue) || (increment < 0 && currentCount <= targetValue)) {
          clearInterval(interval);
          return targetValue;
        }
        return currentCount;
      });
    }, duration / totalFrames);
  };

  return (
    <div ref={ref}>
      {isVisible && <h4 id='stats-number'>{Number.isInteger(targetValue) ? Math.round(count) : count.toFixed(1)}</h4>}
    </div>
  );
};

export default Counter;



