import logo from '../assets/Cart.png'
import React, { useState } from 'react';
import { Button, NavItem, NavLink, Navbar } from 'reactstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const CustomNav = () => {

    const openInstagramProfile = () => {
        window.open('https://www.instagram.com/blushandrover/', '_blank');
    };


    return (
        <div id='navContainer'>
            <div className='navTitleContainer'>
                <div></div>
                <img src={logo} />
                <div className='socials'>
                    <Button>Contact Me!</Button>
                    <InstagramIcon onClick={openInstagramProfile} />
                </div>
            </div>
            <Navbar container className='linksContainer'>
                    <Link to="/">Home</Link>
                    <Link to="/packages">Packages</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/faq">FAQ's</Link>
                    <Link to="/">Contact</Link>
            </Navbar>
        </div>
    );
}

export default CustomNav;