import React from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Info from './components/Info';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
function app() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
        <Route path="/">
          <Info/>
        </Route>
        <Route path="/">
          <About/>
        </Route>
      </Router>
    </div>
  );
}
export default app;
