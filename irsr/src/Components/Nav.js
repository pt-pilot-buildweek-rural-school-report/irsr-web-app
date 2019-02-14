import React from 'react';
import './nav.css';
const Nav = (props) => {
    return (
        <nav className="navBar">
            <h2>International Rual School Report</h2>
            <div>

                <a>Issues</a>


                <a>Create Issues</a>
                <div className = "navLinkWrapper">
                <i className="fas fa-sign-in-alt"></i>
                <a>Login / Log Out</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;