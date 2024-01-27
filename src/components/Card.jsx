import React from "react";

const cardStyle = {
  width: "200px",
  height: "200px",
  backgroundColor: "lightblue",
  margin: "20px 30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
};

const Card = (props) => {
  const { name = "" } = props;

  return <div style={cardStyle}>{name}</div>;
};

export default Card;
