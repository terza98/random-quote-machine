import React from 'react';

class QuoteAuthor extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      return(
        <div id="quote-author">
            - <span id="author">Mladen Terzic</span>
        </div>
      );
    };
}
export default QuoteAuthor;