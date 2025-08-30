import React from 'react';

const PrivacyPolicyPage = () => {
    const styles = {
        body: {
            margin: 0,
            padding: 0,
            fontFamily: "'Open Sans', sans-serif",
            lineHeight: 1.6,
            color: '#1976D2',
            backgroundColor: '#f3fbfd',
            minHeight: '100vh',
            padding: '3rem 2rem'
        },
        container: {
            maxWidth: '800px',
            margin: '5rem auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
        },
        mainTitle: {
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#000f20ff',
            marginBottom: '2rem',
            textAlign: 'center',
            fontFamily: "'Lato', sans-serif"
        },
        sectionTitle: {
            fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
            fontWeight: 'bold',
            color: '#001c3cff',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            fontFamily: "'Lato', sans-serif"
        },
        paragraph: {
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            color: '#1976D2',
            lineHeight: 1.7,
            marginBottom: '1.5rem'
        },
        listItem: {
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            color: '#1976D2',
            lineHeight: 1.7,
            marginBottom: '0.8rem',
            paddingLeft: '1.5rem',
            position: 'relative'
        },
        bullet: {
            position: 'absolute',
            left: '0',
            color: '#4FC3F7'
        },
        emphasizedText: {
            fontWeight: 'bold',
            color: '#1565C0'
        },
        lastUpdated: {
            fontSize: '0.9rem',
            color: '#757575',
            textAlign: 'center',
            marginTop: '3rem',
            fontStyle: 'italic'
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h1 style={styles.mainTitle}>Privacy Policy</h1>
                
                <h2 style={styles.sectionTitle}>Purpose and Disclaimer</h2>
                <p style={styles.paragraph}>
                    PrescribeRight is designed as a tool for <span style={styles.emphasizedText}>informational purposes only</span> and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical concerns and decisions.
                </p>

                <h2 style={styles.sectionTitle}>Information We Collect</h2>
                <p style={styles.paragraph}>
                    We collect information to provide you with personalized health insights and improve our services:
                </p>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span style={styles.emphasizedText}>Symptoms and Health Details:</span> Information you provide about your symptoms, medical history, and health concerns
                </div>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span style={styles.emphasizedText}>Usage Analytics:</span> How you interact with our app, including features used and time spent
                </div>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span style={styles.emphasizedText}>Technical Information:</span> Device type, operating system, and app performance data
                </div>

                <h2 style={styles.sectionTitle}>How We Use Your Information</h2>
                <p style={styles.paragraph}>
                    Your information helps us deliver personalized AI-powered health insights:
                </p>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span style={styles.emphasizedText}>Personalized Recommendations:</span> Generate tailored health suggestions based on your specific symptoms and history
                </div>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span style={styles.emphasizedText}>Service Improvement:</span> Enhance our AI algorithms and user experience
                </div>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span style={styles.emphasizedText}>Quality Assurance:</span> Monitor and improve the accuracy of our health recommendations
                </div>

                <h2 style={styles.sectionTitle}>Data Security</h2>
                <p style={styles.paragraph}>
                    We implement strong security measures to protect your information:
                </p>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    All data is encrypted during transmission and storage
                </div>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    Access to your information is restricted to authorized personnel only
                </div>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    Regular security audits and updates to maintain data protection standards
                </div>

                <h2 style={styles.sectionTitle}>Third-Party Sharing</h2>
                <p style={styles.paragraph}>
                    We may share certain information with trusted partners to improve our services:
                </p>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span style={styles.emphasizedText}>Analytics Partners:</span> Help us understand app usage patterns and improve functionality
                </div>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    <span style={styles.emphasizedText}>Service Providers:</span> Support our technical infrastructure and AI capabilities
                </div>
                <p style={styles.paragraph}>
                    <span style={styles.emphasizedText}>Important:</span> We will never sell your personal health information to third parties for marketing or commercial purposes.
                </p>

                <h2 style={styles.sectionTitle}>Your Rights</h2>
                <p style={styles.paragraph}>
                    You have control over your personal information:
                </p>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    Request access to your data at any time
                </div>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    Update or correct your information
                </div>
                <div style={styles.listItem}>
                    <span style={styles.bullet}>•</span>
                    Delete your account and associated data
                </div>

                <h2 style={styles.sectionTitle}>Contact Us</h2>
                <p style={styles.paragraph}>
                    If you have questions about this Privacy Policy or how we handle your information, please contact us at privacy@prescriberight.com
                </p>

                <p style={styles.lastUpdated}>
                    Last updated: August 30, 2025
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;