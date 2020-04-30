import React from 'react';

class QuoteText extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      return(
        <div className="quote-text">
            <i className="fa fa-quote-left"> </i>
            <span id="text">
                Too many of us are not living our dreams because we are living our fears.
            </span>
        </div>
      );
    };
}
export default QuoteText;