import React from "react";
import "./App.css";
import Menu from './Menu';
import BoardSidebar from './BoardSidebar';
import PlayGround from './PlayGround';

const App = () => {
  return (
    <div className="app">
      <Menu />
      <BoardSidebar />
      <PlayGround />
    </div>
  );
};

export default App;
