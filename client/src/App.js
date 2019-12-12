import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './Home';
import Timer from "./Timer";
import Report from "./Report";
import Setting from "./Setting";

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
