import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header>
                <h2> {this.props.title} </h2>
                <p> {this.props.desc} </p>
            </header>
        )
    }
}

export default Header;