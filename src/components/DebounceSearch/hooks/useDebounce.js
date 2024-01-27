import React, { useEffect, useMemo, useRef } from "react";

import { debounce } from "../helper";

export const useDebounce = (callback, delay) => {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    function fn(...args) {
      ref.current(...args);
    }

    return debounce(fn, delay);
  }, [delay]);

  return debouncedCallback;
};
