import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'features', 'how-it-works', 'testimonials'];
            const viewportHeight = window.innerHeight;

            const currentSection = sections.find(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const sectionMidpoint = rect.top + rect.height / 2;
                    const viewportMidTop = viewportHeight * 0.25;
                    const viewportMidBottom = viewportHeight * 0.75;
                    return sectionMidpoint >= viewportMidTop && sectionMidpoint <= viewportMidBottom;
                }
                return false;
            });

            if (currentSection) {
                const sectionToLinkMap = {
                    'hero': 'home',
                    'features': 'consultation',
                    'how-it-works': 'disclaimer',
                    'testimonials': 'about-us'
                };
                setActiveSection(sectionToLinkMap[currentSection]);
            } else {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const getLinkClassName = (linkName) => {
        const isActive = activeSection === linkName;
        const isHovered = hoveredLink === linkName;
        return `${styles.navLink} ${isActive || isHovered ? styles.active : ''}`;
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

            <ul className={styles.navLinks}>
                <li><a href="#hero" className={getLinkClassName('home')} onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink(null)}>Home</a></li>
                <li><a href="#features" className={getLinkClassName('consultation')} onMouseEnter={() => setHoveredLink('consultation')} onMouseLeave={() => setHoveredLink(null)}>Consultation</a></li>
                <li><a href="#how-it-works" className={getLinkClassName('disclaimer')} onMouseEnter={() => setHoveredLink('disclaimer')} onMouseLeave={() => setHoveredLink(null)}>Disclaimer</a></li>
                <li><a href="#testimonials" className={getLinkClassName('about-us')} onMouseEnter={() => setHoveredLink('about-us')} onMouseLeave={() => setHoveredLink(null)}>About Us</a></li>
                <li><a href="#" className={getLinkClassName('contact-us')} onMouseEnter={() => setHoveredLink('contact-us')} onMouseLeave={() => setHoveredLink(null)}>Contact Us</a></li>
            </ul>

            <ul className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <li><a href="#hero" onClick={closeMenu} className={getLinkClassName('home')}>Home</a></li>
                <li><a href="#features" onClick={closeMenu} className={getLinkClassName('consultation')}>Consultation</a></li>
                <li><a href="#how-it-works" onClick={closeMenu} className={getLinkClassName('disclaimer')}>Disclaimer</a></li>
                <li><a href="#testimonials" onClick={closeMenu} className={getLinkClassName('about-us')}>About Us</a></li>
                <li><a href="#" onClick={closeMenu} className={getLinkClassName('contact-us')}>Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;