import React, { Component } from 'react';

import Navbar from '../navbar/index.js';
import Login from '../login/index.js';
import Register from '../register/index.js';
import ClinicalHistory from '../clinical-history/index.js';
import Faq from '../faq/index.js';
import TermsAndConditions from '../termsandconditions/index.js';

class Home extends Component{

    render(){
        return (
          <div>
            <Navbar/>
            <hr/>
            <Login/>
            <hr/>
            <Register/>
            <hr/>
            <ClinicalHistory/>
            <hr/>
            <Faq/>
            <hr/>
            <TermsAndConditions/>
          </div>
          );
    }
}


export default Home;
