import React, { Component } from 'react';

import Navbar from '../navbar/index.js';
import Footer from '../footer/index.js';
import Faq from '../faq/index.js';
import TermsAndConditions from '../termsandconditions/index.js';
class Home extends Component{

    render(){
        return (
          
            <div>
              <Navbar/>
              
              <hr/>
              
              <Faq/>
              <hr/>
              <TermsAndConditions/>
              <Footer/>
            </div>
          );
    }
}


export default Home;
