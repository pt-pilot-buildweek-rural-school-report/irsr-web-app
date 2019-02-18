import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="navBar">
            <h2>International Rual School Report</h2>
            <div>
                <div className = "navLinkWrapper">
                <i class="fas fa-th"></i>
                <Link to = {'/home'}>Issues</Link>
                </div>
                <div className = "navLinkWrapper">
                <i class="fas fa-pen-square"></i>
                <Link to = {'/home/issueform'}>New Issue</Link>
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