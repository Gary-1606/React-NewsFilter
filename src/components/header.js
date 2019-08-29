import React, {Component} from 'react';

class Header extends Component {

    

    render() {
        return (
            <header>
                <div className="Logo"> Logo </div>
                <input onChange={this.props.keywords}/>
            </header>
        )
    }
}

export default Header;