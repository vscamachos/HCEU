import React, { Component } from 'react';
import hceuicono from './hceuicono.png';
import './index.css';
// data


//import { datadr } from '../datadr.json';

class Navbar extends Component{
  constructor(){
    super();
    this.state = {
      name: 'Dr Mauricio',
      identification: 1010400700
    }
  }



    render(){



        return(

        <nav className="navbar Bcolor1">
        <a className="navbar-brand" id="titledoctor" href="/">
        <img src={hceuicono} width="48" height="48" id="hceuicono" className="d-inline-block align-top" alt={"Tenkuru icono"} />
        HCEU</a>
        <div className="col-6"></div>
        <ul className="navbar-nav bd-navbar-nav flex-row-reverse">
        <li className="nav-item">



        </li>
        </ul>
        <ul className="navbar-nav bd-navbar-nav flex-row-reverse" id="titledoctor"> <h1>{this.state.name} </h1>
        </ul>

        <ul className="navbar-nav bd-navbar-nav flex-row-reverse" id="titledoctor"> <h3>{this.state.identification} </h3>
        </ul>


        </nav>


        )
    }
}
export default Navbar;
