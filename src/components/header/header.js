import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {

    return(
        <div className="header">
            <h1 className="nav-brand">townX</h1>
            <nav className="header-nav">
                <NavLink className="navlk" activeClassName="nav-act" to="/home"><li className="navel">Home</li></NavLink>
                <NavLink className="navlk" activeClassName="nav-act" to="/rooms"><li className="navel">Room</li></NavLink>
                <NavLink className="navlk" activeClassName="nav-act" to="/book"><li className="navel">Book</li></NavLink>
                <NavLink className="navlk" activeClassName="nav-act" to="/contact"><li className="navel">Contact</li></NavLink>
            </nav>
        </div>
    );
}

export default Header;