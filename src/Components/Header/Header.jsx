import React from 'react';
import './Header.css';
import logo from '../../image/logo.jpg';

const Header = () => {
    return (
        <div className='header'>
            <h2>Knoledge Cafe</h2>
            <img src={logo} alt="" srcset="" />
        </div>
    );
};

export default Header;