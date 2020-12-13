import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./header/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About.js";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Footer from "./Footer";

import "../assets/styles/dist/css/app.css";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter basename="/">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
