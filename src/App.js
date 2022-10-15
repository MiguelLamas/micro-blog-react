import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Create from "./components/Create.js";
import BlogDetails from "./components/BlogDetails.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;

