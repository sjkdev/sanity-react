import React from "react";
import ReactDOM, { hydrate, render} from "react-dom";
import App from "./components/app";

// ReactDOM.render(<App />, document.getElementById("app"));
const rootElement = document.getElementById("app");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}