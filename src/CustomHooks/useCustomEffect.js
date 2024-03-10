import React, { useRef } from "react";

const useCustomEffect = (callback, deps) => {
  let isFirstRender = useRef(true);
  let prevDeps = useRef([]);

  // First render
  if (isFirstRender) {
    isFirstRender.current = false;
    const cleaupFunc = callback();

    return () => {
      if (cleaupFunc && typeof cleaupFunc === "function") {
        cleaupFunc();
      }
    };
  }

  // deps changes & no deps array
  const depsChanges = deps
    ? JSON.stringify(prevDeps) !== JSON.stringify(deps)
    : true;

  // cleanup
  if (depsChanges) {
    const cleaupFunc = callback();

    return () => {
      if (cleaupFunc && typeof cleaupFunc === "function" && deps) {
        cleaupFunc();
      }
    };
  }

  prevDeps.current = deps || [];
};

export default useCustomEffect;
