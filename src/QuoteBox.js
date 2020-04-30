import React from 'react';
import QuoteText from './QuoteText.js';
import QuoteAuthor from './QuoteAuthor.js';
import QuoteButtons from './QuoteButtons.js';

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      return(
        <div id="quote-box">
            <QuoteText />
            <QuoteAuthor />
            <QuoteButtons />
        </div>
      );
    };
}
export default QuoteBox;