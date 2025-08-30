import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const getLinkClassName = (path) => {
        const isActive = location.pathname === path;
        return `${styles.navLink} ${isActive ? styles.active : ''}`;
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/" onClick={closeMenu}>
                    <img src={logo} alt="PrescribeRight Logo" className={styles.logoImage} />
                    <span>PrescribeRight</span>
                </Link>
            </div>
            
            <div className={styles.menuIcon} onClick={toggleMenu}>
                &#9776;
            </div>

            {/* Desktop Navigation Links */}
            <ul className={styles.navLinks}>
                <li>
                    <Link to="/" className={getLinkClassName('/')} onMouseEnter={() => {}} onMouseLeave={() => {}}>Home</Link>
                </li>
                <li>
                    <Link to="/consultation" className={getLinkClassName('/consultation')} onMouseEnter={() => {}} onMouseLeave={() => {}}>Consultation</Link>
                </li>
                <li>
                    <Link to="/disclaimer" className={getLinkClassName('/disclaimer')} onMouseEnter={() => {}} onMouseLeave={() => {}}>Disclaimer</Link>
                </li>
                <li>
                    <Link to="/about-us" className={getLinkClassName('/about-us')} onMouseEnter={() => {}} onMouseLeave={() => {}}>About Us</Link>
                </li>
                {/* <li>
                    <Link to="/contact-us" className={getLinkClassName('/contact-us')} onMouseEnter={() => {}} onMouseLeave={() => {}}>Contact Us</Link>
                </li> */}
            </ul>

            {/* Mobile Menu */}
            <ul className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <li><Link to="/" onClick={closeMenu} className={getLinkClassName('/')}>Home</Link></li>
                <li><Link to="/consultation" onClick={closeMenu} className={getLinkClassName('/consultation')}>Consultation</Link></li>
                <li><Link to="/disclaimer" onClick={closeMenu} className={getLinkClassName('/disclaimer')}>Disclaimer</Link></li>
                <li><Link to="/about-us" onClick={closeMenu} className={getLinkClassName('/about-us')}>About Us</Link></li>
                {/* <li><Link to="/contact-us" onClick={closeMenu} className={getLinkClassName('/contact-us')}>Contact Us</Link></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;