import React from 'react';

class QuoteAuthor extends React.Component{
    constructor(props){
        super(props);
        this.props = props;

    }
    render(){
      return(
        <div id="quote-author">
            - <span id="author">{this.props.author}</span>
        </div>
      );
    };
}
export default QuoteAuthor;