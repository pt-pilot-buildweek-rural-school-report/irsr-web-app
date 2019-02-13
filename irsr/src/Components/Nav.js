import React from 'react';
import './nav.css';
const Nav = (props) => {
    return ( 
        <nav className = "navBar">
        <h2>International Rual School Report</h2>
            <ul>
                <li>
                    Issues
                </li>
                <li>
                    Create Issues
                </li>
                <li>Login / Log Out</li>
            </ul>
        </nav>
     );
}
 
export default Nav;