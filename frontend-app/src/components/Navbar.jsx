import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'features', 'how-it-works', 'testimonials'];
            const currentSection = sections.find(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;
                    const isVisible = rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5;
                    return isVisible;
                }
                return false;
            });

            if (currentSection) {
                // Map the section ID to a more user-friendly link name
                const sectionToLinkMap = {
                    'hero': 'home',
                    'features': 'consultation', // 'Consultation' link could point to features
                    'how-it-works': 'disclaimer', // 'Disclaimer' could point to how-it-works
                    'testimonials': 'about-us' // 'About Us' could point to testimonials
                };
                setActiveSection(sectionToLinkMap[currentSection]);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check on mount
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 0',
        paddingRight: '5%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        fontFamily: 'Lato, sans-serif'
    };

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#4FC3F7',
        cursor: 'pointer',
        paddingLeft: '5%',
    };

    const logoImageStyle = {
        height: '40px',
        marginRight: '10px'
    };

    const linkContainerStyle = {
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
    };

    const getLinkStyle = (linkName) => {
        const isHovered = hoveredLink === linkName;
        const isActive = activeSection === linkName;

        return {
            textDecoration: 'none',
            color: (isHovered || isActive) ? '#4FC3F7' : '#757575',
            fontWeight: '500', 
            transition: 'color 0.3s ease',
            cursor: 'pointer'
        };
    };

    return (
        <nav style={navStyle}>
            <div style={logoStyle}>
                <img src={logo} alt="PrescribeRight Logo" style={logoImageStyle} />
                <span>PrescribeRight</span>
            </div>
            <ul style={linkContainerStyle}>
                <li>
                    <a
                        href="#hero"
                        style={getLinkStyle('home')}
                        onMouseEnter={() => setHoveredLink('home')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#features"
                        style={getLinkStyle('consultation')}
                        onMouseEnter={() => setHoveredLink('consultation')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Consultation
                    </a>
                </li>
                <li>
                    <a
                        href="#how-it-works"
                        style={getLinkStyle('disclaimer')}
                        onMouseEnter={() => setHoveredLink('disclaimer')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Disclaimer
                    </a>
                </li>
                <li>
                    <a
                        href="#testimonials"
                        style={getLinkStyle('about-us')}
                        onMouseEnter={() => setHoveredLink('about-us')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        About Us
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        style={getLinkStyle('contact-us')}
                        onMouseEnter={() => setHoveredLink('contact-us')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;