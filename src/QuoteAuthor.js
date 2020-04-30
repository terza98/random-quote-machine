import React from 'react';

class QuoteAuthor extends React.Component{
    constructor(props){
        super(props);
        this.props = props;

    }
    render(){
      return(
        <div style={{ color: this.props.color}} id="quote-author">
            - <span id="author">{this.props.author}</span>
        </div>
      );
    };
}
export default QuoteAuthor;