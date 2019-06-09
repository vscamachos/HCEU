import React, {Component} from 'react';
import AppNavbar from './navbar/index';
import Login from './login';
import Footer from './footer/index';

class Home extends Component{    

  render(){
      return (
        <div className="">
          <AppNavbar/>
          <Login/>
          <Footer/>         
      </div> 
      )
  }
}
export default Home;