import React, { useEffect, useState } from "react";

function throttleHandler(fn, delay) {
  let isWaiting = false;
  let lastArgs = null;

  function startCooling() {
    setTimeout(() => {
      if (lastArgs) {
        fn.apply(this, lastArgs);
        lastArgs = null;
        startCooling();
      } else {
        isWaiting = false;
      }
    }, delay);
  }

  return function (...args) {
    if (!isWaiting) {
      isWaiting = true;
      fn.apply(this, args);
      startCooling.call();
    } else {
      lastArgs = args;
    }
  };
}

const Throttel = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerHeight,
    height: window.innerHeight,
  });

  const handleResize = (e) => {
    setWindowSize({
      width: e.target.innerWidth,
      height: e.target.innerHeight,
    });
  };

  const enhancedFunc = throttleHandler(handleResize, 5000);

  useEffect(() => {
    window.addEventListener("resize", enhancedFunc);

    return () => {
      window.removeEventListener("resize", enhancedFunc);
    };
  }, []);

  return (
    <div>
      <span>{`Window: ${windowSize.width} X ${windowSize.height}`}</span>
    </div>
  );
};

export default Throttel;
