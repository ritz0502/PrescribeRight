import React, { useState } from 'react';

const Footer = () => {
    // State to track the currently hovered link
    const [hoveredLink, setHoveredLink] = useState(null);

    const footerStyle = {
        backgroundColor: '#F5F5F5',
        color: '#757575',
        padding: '3rem 5%',
        fontFamily: 'Open Sans, sans-serif',
        textAlign: 'center'
    };

    const footerContentStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto 2rem',
    };

    const sectionStyle = {
        textAlign: 'left',
        marginBottom: '1.5rem',
    };

    const headingStyle = {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: '#212121',
        marginBottom: '1rem',
        fontFamily: 'Lato, sans-serif',
    };

    // Helper function to get dynamic link styles
    const getLinkStyle = (linkName) => {
        return {
            display: 'block',
            textDecoration: 'none',
            color: hoveredLink === linkName ? '#4FC3F7' : '#757575', // Change color on hover
            marginBottom: '0.5rem',
            transition: 'color 0.3s ease',
            cursor: 'pointer' // Add cursor pointer for better UX
        };
    };

    const copyrightStyle = {
        borderTop: '1px solid #ddd',
        paddingTop: '1.5rem',
        fontSize: '0.9rem',
        color: '#757575',
    };

    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <div style={sectionStyle}>
                    <h4 style={headingStyle}>Quick Links</h4>
                    <a
                        href="#home"
                        style={getLinkStyle('home')}
                        onMouseEnter={() => setHoveredLink('home')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Home
                    </a>
                    <a
                        href="#consultation"
                        style={getLinkStyle('consultation')}
                        onMouseEnter={() => setHoveredLink('consultation')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Consultation
                    </a>
                    <a
                        href="#about-us"
                        style={getLinkStyle('about-us')}
                        onMouseEnter={() => setHoveredLink('about-us')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        About Us
                    </a>
                    <a
                        href="#contact-us"
                        style={getLinkStyle('contact-us')}
                        onMouseEnter={() => setHoveredLink('contact-us')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Contact Us
                    </a>
                </div>
                <div style={sectionStyle}>
                    <h4 style={headingStyle}>Legal</h4>
                    <a
                        href="#disclaimer"
                        style={getLinkStyle('disclaimer')}
                        onMouseEnter={() => setHoveredLink('disclaimer')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Disclaimer
                    </a>
                    <a
                        href="#privacy"
                        style={getLinkStyle('privacy')}
                        onMouseEnter={() => setHoveredLink('privacy')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#terms"
                        style={getLinkStyle('terms')}
                        onMouseEnter={() => setHoveredLink('terms')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        Terms of Service
                    </a>
                </div>
                <div style={sectionStyle}>
                    <h4 style={headingStyle}>Contact</h4>
                    {/* These are not links, but you can still apply hover effect for consistency */}
                    <span
                        style={getLinkStyle('support')}
                        onMouseEnter={() => setHoveredLink('support')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        support@prescriberight.com
                    </span>
                    <span
                        style={getLinkStyle('phone')}
                        onMouseEnter={() => setHoveredLink('phone')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        1-800-PRESCRIBE
                    </span>
                </div>
            </div>
            <div style={copyrightStyle}>
                © {new Date().getFullYear()} PrescribeRight. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;