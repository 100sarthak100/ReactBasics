import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    xyz: "abc1",
  },
  "Hello"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
    xyz: "abc2",
  },
  "Javascript"
);

const subParent = React.createElement(
  "div",
  {
    id: "subParent",
  },
  [heading1, heading2]
);

const parent = React.createElement(
  "div",
  {
    id: "paremt",
  },
  subParent
);

console.log(parent);

// const jsxHeading = <h1 className="jsx-heading">JSX Heading</h1>;

const HeadingComponent = () => {
  return <h1>React functional component</h1>;
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=1024x1024&w=is&k=20&c=Vh0SzhBl37QrZtL1RDLPiX2HvaZbUhTW79yBn0TlIQg="
        />
      </div>

      <div className="nav-items">
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">About us</li>
          <li className="list-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const cardStyle = {
  width: "100px",
  height: "100px",
  backgroundColor: "red",
};

const Card = () => {
  return <div style={cardStyle}>
    Card
  </div>;
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
        <Card />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
