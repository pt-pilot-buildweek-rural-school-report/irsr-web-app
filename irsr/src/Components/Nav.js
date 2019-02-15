import React from 'react';
import './nav.css';
const Nav = (props) => {
    return (
        <nav className="navBar">
            <h2>International Rual School Report</h2>
            <div>
                <div className = "navLinkWrapper">
                <i class="fas fa-th"></i>
                <a>Issues</a>
                </div>
                <div className = "navLinkWrapper">
                <i class="fas fa-pen-square"></i>
                <a>New Issue</a>
                </div>
                <div className = "navLinkWrapper">
                <i className="fas fa-sign-in-alt"></i>
                <a>Log Out</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;