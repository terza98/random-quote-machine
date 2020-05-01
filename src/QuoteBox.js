import React from 'react';
import QuoteText from './QuoteText.js';
import QuoteAuthor from './QuoteAuthor.js';
import QuoteButtons from './QuoteButtons.js';
import quotesJSON from './quotes.json';

//random number from 0 to number of quotes so we can pull the element from array
const randomNumber = () => {
    return Math.floor( Math.random() * quotesJSON.quotes.length );
}

//calculate random dark rgb color
const randomColor = () => {
    const lum = -0.25;
    const hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    let rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    return rgb;
}

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            quoteNumber: randomNumber(),
            color: randomColor()
        }
        this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
    }
    handleNewQuoteClick() {
        const rand = randomNumber();
        const randCol = randomColor();
        this.setState( state => ({ 
            quoteNumber: rand === state.quoteNumber ? randomNumber() : rand ,
            color: randCol
        }));
        document.body.style.backgroundColor = randCol;
    }

    componentDidMount() {
        document.body.style.backgroundColor = this.state.color;
    }

    render(){
      return(
        <div id="quote-box">
            <QuoteText color = {this.state.color} quote={quotesJSON.quotes[this.state.quoteNumber].quoteText}/>
            <QuoteAuthor color = {this.state.color} author={quotesJSON.quotes[this.state.quoteNumber].quoteAuthor}/>
            <QuoteButtons color = {this.state.color} newQuote={this.handleNewQuoteClick} 
            quote={quotesJSON.quotes[this.state.quoteNumber].quoteText} author={quotesJSON.quotes[this.state.quoteNumber].quoteAuthor}/>
        </div>
      );
    };
}
export default QuoteBox;