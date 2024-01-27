import "./styles.css";
import { debounce } from "./helper";
import { useDebounce } from "./hooks/useDebounce";

import React, {
	useRef,
	useMemo,
	useState,
	useEffect,
	useCallback,
} from "react";

const DebounceSearch = () => {
  const [searchText, setSearchText] = useState("");

  const [otherData, setOtherData] = useState({
    a: 10,
  });

  const [searchList, setSearchList] = useState([]);

  const handleSearchApi = (val) => {
    console.log("api request", val, searchText, otherData);

    // let URL = `https://en.wikipedia.org/w/api.php`;

    // let params = new URLSearchParams({
    //   action: val,
    //   list: "search",
    //   format: "json",
    //   // origin: location.origin,
    // });

    // fetch(`${URL}?${params}`, { mode: "no-cors" })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  };

  const handleSearchChange = (e) => {
    let val = e.target.value;

    if (val === searchText) {
      return;
    }

    setSearchText(val);

    if (val) {
      optimizedAPISearch(val);
    }
  };

  const optimizedAPISearch = useDebounce(handleSearchApi, 1000);

  return (
    <div className="debounce-container">
      <div className="search-box">
        <input
          type="search"
          name="search"
          value={searchText}
          className="search-input"
          placeholder="Search here"
          onChange={handleSearchChange}
        />
      </div>

      <div className="search-autocomplete"></div>
    </div>
  );
};

export default DebounceSearch;
