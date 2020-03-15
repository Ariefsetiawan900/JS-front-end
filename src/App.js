import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Pages/Home/Home"
// import Login from "./Pages/login/login"
// import Register from "./Pages/Register/Register"
// import Main from "./Pages/Main/index"
// import { Register } from "./serviceWorker";
// import { Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
          {/* <Route path="/" exact render={(props) => (<Main {...props} />)} /> */}
          {/* <Route path="/" exact render={(props) => (<Login {...props} />)} /> */}
          <Route path="/" exact render={Home} />
          {/* <Route path="/" exact render={(props) => (<Register {...props} />)} /> */}
        </switch>
      </BrowserRouter>
    )
  }
}


export default App; 