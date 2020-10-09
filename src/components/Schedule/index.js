import React from 'react';
import './index.css';
import moment from 'moment';

export default class Schedule extends React.Component {
    render() {
        return(
            <div className="white-box txt-padding">
                <div id="8">8:00 AM</div><br />
                <div id="9">9:00 AM</div><br />
                <div id="10">10:00 AM</div><br />
                <div id="11">11:00 AM</div><br />
                <div id="12">12:00 PM</div><br />
                <div id="13">1:00 PM</div><br />
                <div id="14">2:00 PM</div><br />
                <div id="15">3:00 PM</div><br />
                <div id="16">4:00 PM</div><br />
                <div id="17">5:00 PM</div><br />
                <div id="18">6:00 PM</div><br />
                <div id="19">7:00 PM</div><br />
                <div id="20">8:00 PM</div>
            </div>
        )
    }
}