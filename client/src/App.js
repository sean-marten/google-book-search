import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import SavedPage from "./components/SavedPage";

function App() {
  return (
    <div>
      <Router basename={""}>
        <Navbar />
        <Jumbotron />
        <Route path="/search" component={Search} />
        <Route path="/saved" component={SavedPage} />
        <Route exact path="/" />
      </Router>
    </div>
  );
}

export default App;
