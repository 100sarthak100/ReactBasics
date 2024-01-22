import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
    "h1",
    {
        id: "heading1",
        xyz: "abc1"
    },
    "Hello"
);

const heading2 = React.createElement(
    "h1",
    {
        id: "heading2",
        xyz: "abc2"
    },
    "Javascript"
);

const subParent = React.createElement(
    "div",
    {
        id: "subParent"
    },
    [heading1, heading2]
)


const parent = React.createElement(
    "div",
    {
        id: "paremt"
    },
    subParent
)

console.log(parent)

const jsxHeading = <h1 className="jsx-heading" >JSX Heading</h1>;

const HeadingComponent = () => {
    return <h1>React functional component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);