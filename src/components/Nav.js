import logo from '../assets/Cart.png'
import React, { useState } from 'react';
import { Button, NavItem, NavLink, Navbar } from 'reactstrap';
import InstagramIcon from '@mui/icons-material/Instagram';

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
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Packages</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Menu</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">FAQ's</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">Contact</NavLink>
                </NavItem>
            </Navbar>
        </div>
    );
}

export default Nav;