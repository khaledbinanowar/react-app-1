import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
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
          <Navbar />
        </Route>
        <Route path="/">
          <Welcome 
            subtitle="Welcome" 
            title="The Best Coffee Testing Experience" 
            content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            btn1="Order Now"
            btn2="View Menu"
          />
        </Route>
        <Route path="/">
          <Info/>
        </Route>
        <Route path="/">
          <About
          subtitle="Discover" 
          title="Our Story" 
          content="On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their."
          />
        </Route>
      </Router>
    </div>
  );
}
export default app;
