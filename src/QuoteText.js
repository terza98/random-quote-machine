import React from 'react';

class QuoteText extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
      return(
        <div className="quote-text">
            <i className="fa fa-quote-left"> </i>
            <span id="text">
                {this.props.quote}
            </span>
        </div>
      );
    };
}
export default QuoteText;