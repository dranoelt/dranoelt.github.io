import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header_warp">
            <div className="main-nav">
                <ul>
                    <li className="main-nav nav_btn"><Link to="/">Home</Link></li>
                    <li className="main-nav nav_btn"><Link to="/Gallery/Photoshop">Gallery</Link></li>
                    <li className="main-nav nav_btn"><Link to="/Contact">Contact</Link></li>
                    <li className="main-nav nav_btn"><Link to="/About">About</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
