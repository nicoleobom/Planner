import React from 'react';
import { Col } from 'react-bootstrap';
import './index.css';

export default class Checklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "fjkdls",
        }
    }
    render() {
        return(
            <Col className="white-box">
                <input type="checkbox" id="todo1"></input><label>{this.state.label}</label><br />
                <input type="checkbox" id="todo2"></input><label>{this.state.label}</label><br />
                <input type="checkbox" id="todo3"></input><label>{this.state.label}</label><br />
                <input type="checkbox" id="todo4"></input><label>{this.state.label}</label><br />
                <input type="checkbox" id="todo5"></input><label>{this.state.label}</label><br />
                <input type="checkbox" id="todo6"></input><label>{this.state.label}</label><br />
                <input type="checkbox" id="todo7"></input><label>{this.state.label}</label><br />
                <input type="checkbox" id="todo8"></input><label>{this.state.label}</label><br />
                <input type="checkbox" id="todo9"></input><label>{this.state.label}</label><br />
                <input type="checkbox" id="todo10"></input><label>{this.state.label}</label><br />
                <input type="checkbox" id="todo11"></input><label>{this.state.label}</label><br />
            </Col>
        )
    }
}