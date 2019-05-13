import React, { Component } from 'react';
import hceuicono from './LogoApp.svg';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// data


//import { datadr } from '../datadr.json';

class AppNavbar extends Component{
  constructor(){
    super();
    this.state = {
      name: 'Dr Mauricio',
      identification: 1010400700
    }
  }



    render(){



        return(

          <Navbar bg="light" expand =  "lg" fixed = "top">
            <Navbar.Brand href="#home">
                <img src={hceuicono} height="35px" id="hceuicono" className="d-inline-block align-top" alt={"Tenkuru icono"} />
              {' Historias clínicas electrónicas uníficadas'}
            </Navbar.Brand>
            <Navbar.Text>GitHub: <a href = "https://alfa-omega-software.github.io/HCEU/"> HCEU </a></Navbar.Text>
            <Nav.Link href ="/">Inicio</Nav.Link>
            <Nav.Link href ="/">Ayuda</Nav.Link>
            <Nav.Link href ="/">Contacto</Nav.Link>
            <Form inline>
            <Form.Control type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="primary">Buscar</Button>
          </Form>

          </Navbar>





        )
    }
}
export default AppNavbar;
