import React, { useState } from "react";
import { countryData } from "./helper";

import "./styles.css";
import HightlightComponent from "./HighlightComponent";

const AutoComplete = () => {
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);

  const [suggestion, setSuggestion] = useState(countryData);

  const onInputChange = (e) => {
    let val = e.target.value;
    setSearch(val);

    if (e.target.value.length >= 1) {
      setShow(true);

      let filteredSuggestions = countryData.filter((item) => {
        return item?.toLowerCase()?.includes(val?.toLowerCase());
      });

      setSuggestion(filteredSuggestions);
    } else {
      setShow(false);
    }
  };

  const onSuggestionClick = (val) => {
    setSearch(val);
    setShow(false);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: 1,
          marginTop: "50px",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={search}
          onChange={onInputChange}
          style={{
            padding: "px 10px",
            width: "100%",
            maxWidth: "400px",
            height: "50px",
            borderRadius: "10px",
            fontSize: "20px",
          }}
        />

        {!!show && (
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "80vh",
              alignItems: "center",
              overflowY: "scroll",
            }}
          >
            {suggestion?.map((item) => {
              return (
                // <li
                //   className="suggestion"
                //   onClick={() => onSuggestionClick(item)}
                // >
                //   {item}
                // </li>

                <HightlightComponent
                  text={item}
                  highlight={search}
                  onClick={() => onSuggestionClick(item)}
                />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
