import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home'
import Trade from './Trade'

function App() {
  return (

    <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Trade/:id" component={Trade} />
    </Switch>
  </Router>
  );
}

export default App;
