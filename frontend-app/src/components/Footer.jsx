import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.section}>
                    <h4 className={styles.heading}>Quick Links</h4>
                    <Link to="/" className={styles.link}>
                        Home
                    </Link>
                    <Link to="/consultation" className={styles.link}>
                        Consultation
                    </Link>
                    <Link to="/about-us" className={styles.link}>
                        About Us
                    </Link>
                    {/* <Link to="/contact-us" className={styles.link}>
                        Contact Us
                    </Link> */}
                </div>
                <div className={styles.section}>
                    <h4 className={styles.heading}>Legal</h4>
                    <Link to="/disclaimer" className={styles.link}>
                        Disclaimer
                    </Link>
                    <Link to="/privacy-policy" className={styles.link}>
                        Privacy Policy
                    </Link>
                    <Link to="/terms-of-service" className={styles.link}>
                        Terms of Service
                    </Link>
                </div>
                <div className={styles.section}>
                    <h4 className={styles.heading}>Contact</h4>
                    <span className={styles.link}>
                        support@prescriberight.com
                    </span>
                    <span className={styles.link}>
                        1-800-PRESCRIBE
                    </span>
                </div>
            </div>
            <div className={styles.copyright}>
                © {new Date().getFullYear()} PrescribeRight. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;