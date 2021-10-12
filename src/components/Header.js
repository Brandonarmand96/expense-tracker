
import React from 'react';
import logo from '../images/logo192.png'

function Header () {
    return(
        <div className="header">
            <div className="head">
                <img src={logo} alt="this is expense tracker logo" />
            </div>
            <div className="head">
                <h2>
                    Expense Tracker
                </h2>
            </div>
        </div>
       
    )
    
}

export default Header;