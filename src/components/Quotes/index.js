import React from 'react';
import { Col } from 'react-bootstrap';

export default class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteData: [],
            quote: '',
            author: '',
        }
        this.randomQuote = this.randomQuote.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/'
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    quoteData: data.quotes
                }, () => {
                    this.handleClick();
                })
            })
            .catch(error => console.log('Error', error));
    }

    randomQuote() {
        const randomNumber = Math.floor(Math.random() * this.state.quoteData.length);
        return this.state.quoteData[randomNumber];
    }

    handleClick() {
        const pickedQuote = this.randomQuote();
        this.setState({
            quote: pickedQuote.quote,
            author: pickedQuote.author
        })
    }

    render() {
        return (
            <Col sm="12" className="white-box btm-padding txt-padding text-cntr">
                {this.state.quote}<br />
                {this.state.author}
            </Col>
        )
    }
}