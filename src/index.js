import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

// Removed <React.StrictMode> as it fires a warning about
// "React warning: findDOMNode is deprecated in StrictMode ..."
// It seems that it only happens is development as React-StrictMode render the component twice!!!
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
