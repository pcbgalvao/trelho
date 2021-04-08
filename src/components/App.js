import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Router, Route } from "react-router-dom";
import history from '../history';

import HeaderMenu from "./HeaderMenu";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
//import BoardSidebar from "./BoardSidebar";
import AdminPage from "./AdminPage";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <>
          <HeaderMenu />
          <Route path="/" exact component={Dashboard} />
          <Route path="/adminpage/" exact component={AdminPage} />
          <Route path="/userregister/" exact component={RegisterPage} />
          <Route path="/login/" exact component={LoginPage} />            
        </>
      </Router>
    </div>
  );
};

export default App;
