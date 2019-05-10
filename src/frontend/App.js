import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home/index.js';
import Login from './components/login/index.js';
import Register from './components/register/index.js';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
      </div>
    </Router>
  );
}




export default App;
