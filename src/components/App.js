import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../styles.scss";
import Navbar from "./Navbar";
import ShowLists from "./ShowLists";

import { fetchLists } from "../stores/listsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLists("1"));
  }, []);

  console.count("App");
  return (
    <div className="ui">
      <Navbar />
      <ShowLists />
    </div>
  );
}

export default App;
