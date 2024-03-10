import { useEffect, useRef } from "react";

function areEqual(prevDeps, currDeps) {
  if (!prevDeps.length) return false;

  if (prevDeps.length !== currDeps.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== currDeps[i]) {
      return false;
    }
  }

  return true;
}

const useCustomMemo = (callback, deps) => {
  const memoizedRef = useRef(null);

  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: callback(),
      deps,
    };
  }

  // cleanup
  useEffect(() => {
    return () => {
      memoizedRef.current.null;
    };
  }, []);

  return memoizedRef.current.value;
};

export default useCustomMemo;
