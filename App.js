import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Throttel from "./src/Throttle/Throttel";
import Pagination from "./src/Pagination/Pagination"
import DebounceSearch from "./src/components/DebounceSearch/DebounceSearch";
import MemoExample from "./src/components/MemoExample/MemoExample";
import GridLights from "./src/components/GridLights/GridLights";
import AutoComplete from "./src/components/AutoComplete/AutoComplete";

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

// const HeadingComponent = () => {
//   return <h1>React functional component</h1>;
// };


const AppLayout = () => {
  return (
    <div className="App">
      {/* <Header />
      <Body /> */}

      {/* <DebounceSearch /> */}

      {/* <Pagination /> */}

      {/* <Throttel /> */}

      {/* <MemoExample /> */}

      {/* <GridLights /> */}

      <AutoComplete />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
