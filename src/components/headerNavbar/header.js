import React, { Component } from 'react'

import logo from "../../assets/logo.png";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header__img" src={logo} width="30" height= "30" alt="WORCS" />
                <div className="header__acronym">
                    <h1>W.O.R.C.S</h1>
                </div>                
                <div className="header__full-name">
                    <h4>Work Order Request and Completion System</h4>
                </div>

            </div>  
        );
    }
}

export default Header;