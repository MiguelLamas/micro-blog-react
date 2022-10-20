import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Create from "./components/Create.js";
import StoreDetails from "./components/StoreDetails.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar />
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/stores/:id">
            <StoreDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;

