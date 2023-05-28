import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AmazonContextProvider } from "./Contexts/AmazonContext";

ReactDOM.render(
  <div>
    <AmazonContextProvider>
      <App />
    </AmazonContextProvider>
  </div>,
  document.getElementById("root")
);
