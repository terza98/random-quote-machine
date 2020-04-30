import React from 'react';
import QuoteText from './QuoteText.js';
import QuoteAuthor from './QuoteAuthor.js';
import QuoteButtons from './QuoteButtons.js';

const quotes = [
    {
        quoteText: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        quoteAuthor: "Mahatma Gandhi"
    },
    {
        quoteText: "That which does not kill us makes us stronger.",
        quoteAuthor: "Friedrich Nietzsche"
    },
    {
        quoteText: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
        quoteAuthor: "Bernard M. Baruch"
    },
    {
        quoteText: "We must not allow other people’s limited perceptions to define us.",
        quoteAuthor: "Virginia Satir"
    },
    {
        quoteText: "Do what you can, with what you have, where you are.",
        quoteAuthor: "Theodore Roosevelt"
    },
    {
        quoteText: "Be yourself; everyone else is already taken.",
        quoteAuthor: "Oscar Wilde"
    },
    {
        quoteText: "This above all: to thine own self be true.",
        quoteAuthor: "William Shakespeare"
    },
    {
        quoteText: "If you cannot do great things, do small things in a great way.",
        quoteAuthor: "Napoleon Hill"
    },
    {
        quoteText: "If opportunity doesn’t knock, build a door.",
        quoteAuthor: "Milton Berle"
    },
    {
        quoteText: "Wise men speak because they have something to say; fools because they have to say something.",
        quoteAuthor: "Plato"
    },
    {
        quoteText: "Strive not to be a success, but rather to be of value.",
        quoteAuthor: "Albert Einstein"
    },
    {
        quoteText: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        quoteAuthor: "Robert Frost"
    },
    {
        quoteText: "Do not let what you cannot do interfere with what you can do.",
        quoteAuthor: "John Wooden"
    },
    {
        quoteText: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
        quoteAuthor: "Mark Twain"
    },
    {
        quoteText: "I haven’t failed. I’ve just found 10,000 ways that won’t work.",
        quoteAuthor: "Thomas Edison"
    },
    {
        quoteText: "A journey of a thousand leagues begins beneath one’s feet.",
        quoteAuthor: "Lao Tzu"
    },
    {
        quoteText: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        quoteAuthor: "Maya Angelou"
    },
    {
        quoteText: "Either you run the day, or the day runs you.",
        quoteAuthor: "Jim Rohn"
    },
    {
        quoteText: "Life shrinks or expands in proportion to one’s courage.",
        quoteAuthor: "Anais Nin"
    },
    {
        quoteText: "You must be the change you wish to see in the world.",
        quoteAuthor: "Mahatma Gandhi"
    }
];

//random number from 0 to number of quotes so we can pull the element from array
const randomNumber = () => {
    return Math.floor( Math.random() * quotes.length );
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
            quoteNumber: 0,
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
            <QuoteText color = {this.state.color} quote={quotes[this.state.quoteNumber].quoteText}/>
            <QuoteAuthor color = {this.state.color} author={quotes[this.state.quoteNumber].quoteAuthor}/>
            <QuoteButtons color = {this.state.color} newQuote={this.handleNewQuoteClick}/>
        </div>
      );
    };
}
export default QuoteBox;