import React from "react";

import "./styles.css";

const HightlightComponent = (props) => {
  const { text, highlight, onClick } = props;

  const regex = new RegExp(`(${highlight})`, "gi");

  const parts = text.split(regex);

  return (
    <li onClick={onClick} className="suggestion">
      {parts?.map((part) => {
        return (
          <span
            style={{
              //   color:
              //     part?.toLowerCase() === highlight?.toLowerCase()
              //       ? "yellow"
              //       : "black",

              fontWeight:
                part?.toLowerCase() === highlight?.toLowerCase()
                  ? "bold"
                  : "200",
            }}
          >
            {part}
          </span>
        );
      })}
    </li>
  );
};

export default HightlightComponent;
