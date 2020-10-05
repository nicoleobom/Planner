import './index.css';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment'

var day, month, time;

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            today: Date.now(),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ 
            today: Date.now(),
        }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        return(
            <div>
                <Row>
                    <Col sm='12' className="header-day">
                        {moment(this.state.today).format('dddd').toLowerCase()}
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="header-month">
                        {moment(this.state.today).format('MMMM Do, YYYY')}
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className="header-time">
                    {moment(this.state.today).format('h:mm:ss a')}
                    </Col>
                </Row>
            </div>
        )
    }
}