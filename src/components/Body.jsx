import React, { useCallback, useMemo, useState } from "react";

import Card from "./Card";
import { debounceFunc, mockData } from "../helper/utils";

const Body = () => {
  const [filterApplied, setFilterApplied] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(mockData);

  const onTopRatedClick = () => {
    if (filterApplied) {
      setData(mockData);
      setFilterApplied(false);
      return;
    }

    let filteredData = data?.filter((item) => {
      return item?.rating > 4;
    });

    setData(filteredData);
    setFilterApplied(true);
  };

  const searchTextHandler = useCallback((val) => {
    console.log("debounce val", val);
  }, []);

  const debouncedSearchFunc = useMemo(() => {
    return debounceFunc(searchTextHandler, 1000);
  }, [searchTextHandler]);

  const onSearchChange = (e) => {
    let val = e.target.value ?? "";
    console.log("e", e.target.value);

    if (val !== searchText) {
      setSearchText(val);
      debouncedSearchFunc(val);
    }
  };

  return (
    <div className="body">
      <div className="filter-search-container">
        <div className="filters">
          <button onClick={onTopRatedClick}>
            {filterApplied ? "See All Restaurant" : "Top Rated Restaurant"}
          </button>
        </div>
        <div className="search">
          <input type="search" value={searchText} onChange={onSearchChange} />
        </div>
      </div>

      <div className="res-container">
        {data?.map((item) => (
          <Card key={item?.id} name={item?.name} />
        ))}
      </div>
    </div>
  );
};

export default Body;
