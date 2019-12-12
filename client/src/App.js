import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './Home';
import TensorFlow from './TensorFlow';
import Timer from "./Timer";
import Report from "./Report";
import Complete from "./Complete";
import Setting from "./Setting";

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <TensorFlow />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/complete">
            <Complete />
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
