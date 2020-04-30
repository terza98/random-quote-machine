import React from 'react'

class QuoteButtons extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="buttons">
                <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href="#" >
                    <i className="fa fa-twitter"></i>
                </a>
                <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" href="#">
                    <i className="fa fa-tumblr"></i>
                </a>
                <button className="button" id="new-quote" >New quote</button>
            </div>
        );
    };
}
export default QuoteButtons;
