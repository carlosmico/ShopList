import React from 'react';

//CSS
import './Header.css'

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <i className="fas fa-shopping-cart"></i>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
}

export default Header;