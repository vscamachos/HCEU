import React, {Component} from 'react';
import AppNavbar from './navbar/index';
import Login from './login';
import Footer from './footer/index';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Home extends Component{

  render(){
      return (
        <Container className="">
          <Row>
            <Col>
              <AppNavbar/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Login/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Footer/>
            </Col>
          </Row>
      </Container>
      )
  }
}
export default Home;
