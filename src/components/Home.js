import React, { Component } from 'react';

// data
//import { datadr } from '../datadr.json';

class Home extends Component{
  constructor(){
    super();
    this.state = {
      name: 'Dr Mauricio',
      identification: 1010400700
    }
  }
  


    render(){
   
            

        return(
        <div>
            <h1>{this.state.name}</h1>
            <p></p>
            <h3>{this.state.identification}</h3>
        </div>
        
        )
    }
}
export default Home;
