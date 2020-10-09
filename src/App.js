import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import moment from 'moment';

// import components 
import Header from './components/Header/index';
import Schedule from './components/Schedule/index';
import Quotes from './components/Quotes/index';
import Notes from './components/Notes/index';
import Checklist from './components/Checklist/index';

function getColors(props) {
  var currentHour = moment().format('H');
  for (var i=8; i < 21; i++) {
      var currentDiv = i;
      if (currentHour === i) {
          document.getElementById('#' + currentDiv).style.backgroundColor = 'blue';
      } else if (currentHour > i) {
          document.getElementById('#' + currentDiv).style.backgroundColor = 'brown';
      } else {
          document.getElementById('#' + currentDiv).style.backgroundColor = 'purple';
      }
  }
}

function App() {
  return (
    <Container >
      <Header />
      <Row>
        <Col sm={4} className="middle">
          <Schedule />
          {/* {getColors()} */}
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
