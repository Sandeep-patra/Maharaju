// Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className={`header ${isFixed ? 'fixed-header' : ''} d-flex justify-content-between align-items-center px-5`}>
            <div>
                <img src="logo.png" alt="logo" height={60} width={210} />
            </div>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <div className='items d-flex justify-content-between fw-bold gap-4' style={{ fontFamily: "arial", fontSize: "15px" }}>
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/development'>Development</Link></div>
                    <div><Link to='/marketing'>Marketing</Link></div>
                    <div><Link to='/services'>Services</Link></div>
                    <div><Link to='/careers'>Careers</Link></div>
                    <div><Link to='/about'>About Us</Link></div>
                    <div><Link to='/contact'>Contact Us</Link></div>
                </div>
            </div>
            <div className='icons' onClick={toggleMenu}>
                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>
        </div>
    );
}

export default Header;
