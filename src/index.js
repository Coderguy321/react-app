import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters"; //here because of the default ecport no curly braces
import App from "./app";

const element = <h1>Hello World!</h1>;
//this is jsx (java script xml)
//babel will compite this and convert to
//React.createElement
// console.log(element);

//document.getElementById("root") gets the referene of the element in index.html -- everything should be
//loaded inside the root
ReactDOM.render(<App />, document.getElementById("root"));
