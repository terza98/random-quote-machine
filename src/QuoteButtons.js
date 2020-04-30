import React from 'react'

class QuoteButtons extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <div className="buttons">
                <a style={{ backgroundColor: this.props.color}} className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href={`https://twitter.com/intent/tweet?text= ${ this.props.quote} - ${this.props.author}`}>
                    <i className="fa fa-twitter"></i>
                </a>
                <a style={{ backgroundColor: this.props.color}} className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href="#">
                    <i className="fa fa-tumblr"></i>
                </a>
                <button style={{ backgroundColor: this.props.color}} className="button" id="new-quote" onClick={this.props.newQuote}>New quote</button>
            </div>
        );
    };
}
export default QuoteButtons;
