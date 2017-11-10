import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import './Layout.css';

class Layout extends Component {

  contructor() {
      
  }

  render() {
    return (
      <div>
          <Row>
            <Col s={3}>1</Col>
            <Col s={9}>2</Col>          
          </Row>
      </div>
    );
  }
}

export default Layout;