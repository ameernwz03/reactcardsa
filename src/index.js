import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Herosec from "./components/herosec";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <Herosec />
  </>
);
