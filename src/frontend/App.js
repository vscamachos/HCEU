import React, { Component } from 'react';
import Login from './components/login/index.js';
import AppNavbar from './components/navbar/index.js';
import Form from './components/form/index.js';


class App extends Component{    

    render(){
        return (
            <div>
              <div className="">
                <AppNavbar/>
              </div>
              
              <div className="container Bcolor2">
                <Login/>
              </div>

              <div>
                <Form/>
              </div>                      
            </div>            
        )
    }
}   
export default App;
