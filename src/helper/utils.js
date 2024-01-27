export const mockData = [
  {
    id: "1",
    name: "Name1",
    rating: 4.4,
  },
  {
    id: "2",
    name: "Name2",
    rating: 3.4,
  },
  {
    id: "3",
    name: "Name3",
    rating: 4.5,
  },
  {
    id: "4",
    name: "Name4",
    rating: 2.4,
  },
  {
    id: "5",
    name: "Name5",
    rating: 3.9,
  },
];

export const debounceFunc = function (fn, delay) {
  let timerId = null;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
