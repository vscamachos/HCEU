import React, { Component } from 'react';
import Login from './components/login/index.js';
import Registro from './components/login/Registro.js';
import AppNavbar from './components/navbar/index.js';
import Form from './components/form/index.js';


class App extends Component{
    constructor(props){
      super(props);
      this.state = {isLoggedIn : false}
      this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
      this.setState({isLoggedIn : true});
    }

    render(){
        return (
            <div>
              <div>
                <AppNavbar/>
              </div>

              <div className="">
                <Content isLoggedIn={this.state.isLoggedIn} handleLogin = {this.handleLogin}/>
              </div>
            </div>
        )
    }
}
export default App;

function Content(props){
  if(props.isLoggedIn){
    return <Form/>
  }else{
    return <Login handleLogin={props.handleLogin}/>
  }
}
