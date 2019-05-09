import React, { Component } from 'react';
import Login from './components/login/index.js';
import Navbar from './components/navbar/index.js';
import Register from './components/register/index.js';
import Footer from './components/footer/index.js';
import InitialEvaluation from './components/initialEvaluation/index.js';

class App extends Component{

    render(){
        return (
            <div className="Bcolor1">
              <div className="">
                <Navbar/>
              </div>
              <div className="row">
                <Login/>
              </div>
              <div className="row">
                <div className="col"> </div>
              </div>
              <div className="container Bcolor2">
              <div className="row">
                <Register/>
              </div>
            </div>
              <div className="container Bcolor2">
                <div className="row">
                  <InitialEvaluation/>
                </div>
              </div>
              <div className="Bcolor2">
                <div className="">
                              <Footer/>
                </div>
              </div>

            </div>
        )
    }
}
export default App;
