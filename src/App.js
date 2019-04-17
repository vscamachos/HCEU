import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';     
import Home from './components/Home';   

class App extends Component {
  render() {

    return (
      <div className="">
        <header className="">
          <Navbar/>
          <div className="container">
          <Home/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
