import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home/index.js';
import Footer from './components/footer/index.js';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Footer} />
      </div>
    </Router>
  );
}




export default App;
