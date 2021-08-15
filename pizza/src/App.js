import "./index.scss";

import { Home, Basket } from "./pages";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import React from "react";

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/basket" render={() => <Basket />} />
      </div>
    </div>
  );
};

export default App;
