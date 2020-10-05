import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

// import components 
import Header from './components/Header/index';
import Schedule from './components/Schedule/index';
import Quotes from './components/Quotes/index';
import Notes from './components/Notes/index';
import Checklist from './components/Checklist/index';

function App() {
  return (
    <Container >
      <Header />
      <Row>
        <Col sm={4} className="middle">
          <Schedule />
        </Col>
        <Col sm={4}>
          <Row className="middle">
            <Quotes />
            <Notes />
          </Row>
        </Col>
        <Col sm={4} className="middle">
          <Checklist />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
