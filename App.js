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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);