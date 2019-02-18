import React from 'react';
import '../css/index.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className='navBarWrapper'>
            <button className='barsButton'><i class="fas fa-bars"></i></button>
            <nav className="navBar">
                <h2>International Rual School Report</h2>
                <div>
                    <div className="navLinkWrapper">
                        <i class="fas fa-th menuIcon"></i>
                        <Link to={'/home'}>Issues</Link>
                    </div>
                    <div className="navLinkWrapper">
                        <i class="fas fa-pen-square menuIcon"></i>
                        <Link to={'/home/issueform'}>New Issue</Link>
                    </div>
                    <div className="navLinkWrapper">
                        <i className="fas fa-sign-in-alt menuIcon"></i>
                        <a>Log Out</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;