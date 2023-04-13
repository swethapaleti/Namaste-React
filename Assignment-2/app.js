import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement("div",{id:"container"},[
    React.createElement("h1",{},"heading one"),
    React.createElement("h2",{},"heading two")
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)