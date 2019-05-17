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
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={Forgotpassword} /> 
        <Route path="/clinical-history" component={ClinicalHistory} /> 
        <Route path="/faq" component={Faq} />
        <Route path="/mainhelp" component={MainHelp} />
        <Route path="/termsandconditions" component={TermsAndConditions} />      
      </div>
    </Router>
  );
}




export default App;
