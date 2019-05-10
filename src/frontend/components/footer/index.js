import React, { Component } from 'react';
import hceuicono from './LogoApp.svg';
import './index.css';
// data
//import { datadr } from '../datadr.json';

class Footer extends Component{
  constructor(){
    super();
    this.state = {
      name: 'Dr Mauricio',
      identification: 1010400700
    }
  }

    render(){
        return(

        <nav className="footer Bcolor3">
          <div className="container-fluid text-center row text-md-left">
             <div className="col-md-6 mt-md-0 mt-3">
               <a className="row" id="titledoctor" href="/">
                  <img src={hceuicono} width="150px" id="hceuicono" className="d-inline-block align-top" alt={"HCEUN icono"} />
               </a>
        <p className="Color2">Historia Clínica Electrónica Unificada</p>
             </div>
             <div className="col-md-3 mb-md-0 mb-3">


               <h5 className="text-uppercase Color2">Links</h5>
               <ul className="list-unstyled">
                 <li>
                   <a href="#!">Link 1</a>
                 </li>
                 <li>
                   <a href="#!">Link 2</a>
                 </li>
                 <li>
                   <a href="#!">Link 3</a>
                 </li>
                 <li>
                   <a href="#!">Link 4</a>
                 </li>
               </ul>
               </div>
               <div className="col-md-3 mb-md-0 mb-3">
       <h5 className="text-uppercase Color2">Links</h5>
       <ul className="list-unstyled">
         <li>
           <a href="#!">Link 1</a>
         </li>
         <li>
           <a href="#!">Link 2</a>
         </li>
         <li>
           <a href="#!">Link 3</a>
         </li>
         <li>
           <a href="#!">Link 4</a>
         </li>
       </ul>
     </div>
        </div>
        <div className="footer-copyright text-center py-3 Color2">© 2019 Copyright:
    <a href="https://github.com/alfa-omega-software/"> alfa-oomega-software</a>
  </div>

        </nav>
        )
    }
}
export default Footer;
