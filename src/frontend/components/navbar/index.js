import React, { Component } from 'react';
import hceuicono from './LogoApp.svg';
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
        <img src={hceuicono} width="150px" id="hceuicono" className="d-inline-block align-top" alt={"Tenkuru icono"} />
        </a>
        <div className="col-6"></div>
        <ul className="navbar-nav bd-navbar-nav flex-row-reverse">
        <li className="nav-item">



        </li>
        </ul>
        <ul className="navbar-nav bd-navbar-nav flex-row-reverse" id="titledoctor"> <h1>{this.state.name} </h1>
        </ul>

        <ul className="navbar-nav bd-navbar-nav flex-row-reverse" id="titledoctor">  <h3>c.c.{this.state.identification} </h3>
        </ul>


        </nav>


        )
    }
}
export default Navbar;
