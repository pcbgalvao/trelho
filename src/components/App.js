import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles.scss";
import Navbar from "./Navbar";
import ShowLists from "./ShowLists";




function App() {
  const dispatch = useDispatch();
  //const listSet = useSelector((state) => Object.values(state.lists));
  //const cardSet = useSelector((state) => state.cards);
  useEffect(() => {
      
  }, []);

  console.count("App");
  return (
    <div className="ui">
      <Navbar />
      <ShowLists  />
    </div>
  );
}

export default App;
