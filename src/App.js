import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Create from "./components/Create.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar />
        <div className="content">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;

