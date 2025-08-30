import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link
import logo from '../assets/logo.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    const getLinkClassName = (linkName) => {
        const isHovered = hoveredLink === linkName;
        return `${styles.navLink} ${isHovered ? styles.active : ''}`;
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="PrescribeRight Logo" className={styles.logoImage} />
                <span>PrescribeRight</span>
            </div>
            
            <div className={styles.menuIcon} onClick={toggleMenu}>
                &#9776;
            </div>

            {/* Desktop Nav */}
            <ul className={styles.navLinks}>
                <li><Link to="/" className={getLinkClassName('home')} onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink(null)}>Home</Link></li>
                <li><Link to="/consultation" className={getLinkClassName('consultation')} onMouseEnter={() => setHoveredLink('consultation')} onMouseLeave={() => setHoveredLink(null)}>Consultation</Link></li>
                <li><Link to="/disclaimer" className={getLinkClassName('disclaimer')} onMouseEnter={() => setHoveredLink('disclaimer')} onMouseLeave={() => setHoveredLink(null)}>Disclaimer</Link></li>
                <li><Link to="/about" className={getLinkClassName('about-us')} onMouseEnter={() => setHoveredLink('about-us')} onMouseLeave={() => setHoveredLink(null)}>About Us</Link></li>
                <li><Link to="/contact" className={getLinkClassName('contact-us')} onMouseEnter={() => setHoveredLink('contact-us')} onMouseLeave={() => setHoveredLink(null)}>Contact Us</Link></li>
            </ul>

            {/* Mobile Nav */}
            <ul className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <li><Link to="/" onClick={closeMenu} className={getLinkClassName('home')}>Home</Link></li>
                <li><Link to="/consultation" onClick={closeMenu} className={getLinkClassName('consultation')}>Consultation</Link></li>
                <li><Link to="/disclaimer" onClick={closeMenu} className={getLinkClassName('disclaimer')}>Disclaimer</Link></li>
                <li><Link to="/about" onClick={closeMenu} className={getLinkClassName('about-us')}>About Us</Link></li>
                <li><Link to="/contact" onClick={closeMenu} className={getLinkClassName('contact-us')}>Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
