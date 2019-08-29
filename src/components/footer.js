import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return(
            <footer> {this.props.footertext} </footer>
        )
    }
}

export default Footer;