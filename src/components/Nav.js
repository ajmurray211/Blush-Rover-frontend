import logo from '../assets/Cart.png'
import React, { useState } from 'react';
import { Button, NavItem, NavLink, Navbar } from 'reactstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Nav = () => {

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
            <Navbar container>
                <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/packages">Packages</Link>
                </NavItem>
                <NavItem>
                    <Link to="/">Menu</Link>
                </NavItem>
                <NavItem>
                    <Link to="/">FAQ's</Link>
                </NavItem>
                <NavItem>
                    <Link to="/">Contact</Link>
                </NavItem>
            </Navbar>
        </div>
    );
}

export default Nav;