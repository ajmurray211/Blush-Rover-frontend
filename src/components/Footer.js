import logo from '../assets/Cart.png'
import React, { useState } from 'react';

const Footer = () => {
    return (
        <div id='footerContainer'>
            <img src={logo} />
            <p> Washington law prohibits us from supplying alcohol.</p>
            <div className='location'>
                <p id='locationsTitle'>Locations:</p>
                <p>Arlington </p>
            </div>
        </div>
    );
}

export default Footer;
