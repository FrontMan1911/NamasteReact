const RootElement = ReactDOM.createRoot(document.getElementById("root"));

var heading = React.createElement(
  "h1",
  {
    id: "FirstH1",
    name: "HeadingFirst",
  },
  "hello from React Page"
);

var parentChildren = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children1" }, [
    React.createElement("h1", { id: "heading1One" }, "Hello Big Brother-1"),
    React.createElement("h2", { id: "heading1Two" }, "Smaller brother-1"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", { id: "heading2One" }, "Hello Big Brother-2"),
    React.createElement("h2", { id: "heading2Two" }, "Smaller brother-2"),
  ]),
]);

{
  /* <div id="parent">
<div id="children">
  <h1>Hello Big Brother</h1>
  <h2>Hello Small Brother</h2>
</div>
</div> */
}

RootElement.render(parentChildren);
