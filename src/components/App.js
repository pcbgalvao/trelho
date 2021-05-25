import React, { useState } from "react";
import "../styles.scss";
import Navbar from "./Navbar";
import ShowLists from "./ShowLists";

function App() {
  return (
    <div className="ui">
      <Navbar />
      <ShowLists />
    </div>
  );
}

export default App;
