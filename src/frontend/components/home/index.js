import React, { Component } from 'react';
import Login from '../login/index.js';
import Navbar from '../navbar/index.js';
import Footer from '../footer/index.js';
class Home extends Component{

    render(){
        return (
          
            <div>
              <Navbar/>
              <Login/>
              <hr/>
              <Footer/>
            </div>
          );
    }
}


export default Home;
