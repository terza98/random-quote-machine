import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.props = props;

    }
    render(){
      return(
        <div className="footer"> 
            by  <a href="https://github.com/terza98/">terza98</a>
        </div>
      );
    };
}
export default Footer;
