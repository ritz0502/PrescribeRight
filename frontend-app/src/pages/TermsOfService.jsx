import React from 'react';

const TermsOfService = () => {
    const styles = {
        container: {
            backgroundColor: '#f3fbfd',
            minHeight: '100vh',
            padding: '40px 20px',
            fontFamily: 'Open Sans, sans-serif',
            lineHeight: '1.6',
            color: '#1976D2',
            // --- FIX HERE ---
            paddingTop: '80px', // Added to create a gap between the Navbar and the content
            // --- END FIX ---
        },
        content: {
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        },
        h1: {
            fontFamily: 'Lato, sans-serif',
            fontSize: '2.5rem',
            color: '#000f20ff',
            textAlign: 'center',
            marginBottom: '10px',
            fontWeight: '700'
        },
        h2: {
            fontFamily: 'Lato, sans-serif',
            fontSize: '1.8rem',
            color: '#003d84ff',
            marginTop: '30px',
            marginBottom: '15px',
            fontWeight: '600'
        },
        h3: {
            fontFamily: 'Lato, sans-serif',
            fontSize: '1.3rem',
            color: '#1565C0',
            marginTop: '25px',
            marginBottom: '10px',
            fontWeight: '600'
        },
        p: {
            marginBottom: '15px',
            fontSize: '16px'
        },
        ul: {
            paddingLeft: '20px',
            marginBottom: '15px'
        },
        li: {
            marginBottom: '8px',
            fontSize: '16px'
        },
        effectiveDate: {
            textAlign: 'center',
            fontStyle: 'italic',
            marginBottom: '30px',
            color: '#666'
        },
        disclaimer: {
            backgroundColor: '#e3f2fd',
            padding: '20px',
            borderLeft: '4px solid #1565C0',
            marginBottom: '20px',
            fontWeight: '500'
        },
        legalNotice: {
            backgroundColor: '#fff3e0',
            padding: '15px',
            border: '1px solid #ff9800',
            borderRadius: '4px',
            marginTop: '30px',
            fontSize: '14px',
            fontStyle: 'italic'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.h1}>Terms of Service</h1>
                <p style={styles.effectiveDate}>Effective Date: August 30, 2025</p>
                
                <div style={styles.disclaimer}>
                    <strong>IMPORTANT LEGAL NOTICE:</strong> This Terms of Service document constitutes a legally binding agreement between you and PrescribeRight. By using our service, you agree to be bound by these terms. This document is not legal advice and is provided for informational purposes only. You should consult with a qualified attorney before relying on any legal document.
                </div>

                <h2 style={styles.h2}>1. Agreement to Terms</h2>
                <p style={styles.p}>
                    These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and PrescribeRight ("Company," "we," "us," or "our") governing your use of the PrescribeRight mobile application and related services (collectively, the "Service"). By accessing, downloading, or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                </p>

                <h2 style={styles.h2}>2. Service Description</h2>
                <p style={styles.p}>
                    PrescribeRight is an artificial intelligence-powered mobile application designed to provide general health and medical information. The Service utilizes AI technology to offer educational content, general wellness guidance, and informational resources related to health topics.
                </p>
                
                <div style={styles.disclaimer}>
                    <strong>CRITICAL MEDICAL DISCLAIMER:</strong> PrescribeRight is NOT a substitute for professional medical advice, diagnosis, or treatment. The AI-generated information provided through our Service is for educational and informational purposes only and should never replace consultation with qualified healthcare professionals.
                </div>

                <h3 style={styles.h3}>2.1 What Our Service Is</h3>
                <ul style={styles.ul}>
                    <li style={styles.li}>An educational tool providing general health information</li>
                    <li style={styles.li}>A resource for health-related research and learning</li>
                    <li style={styles.li}>A platform for organizing personal health information</li>
                    <li style={styles.li}>A wellness tracking and reminder system</li>
                </ul>

                <h3 style={styles.h3}>2.2 What Our Service Is NOT</h3>
                <ul style={styles.ul}>
                    <li style={styles.li}>A medical diagnosis tool</li>
                    <li style={styles.li}>A prescription or treatment recommendation system</li>
                    <li style={styles.li}>A replacement for professional medical care</li>
                    <li style={styles.li}>An emergency medical service</li>
                </ul>

                <h2 style={styles.h2}>3. User Conduct</h2>
                
                <h3 style={styles.h3}>3.1 Acceptable Use</h3>
                <p style={styles.p}>You may use our Service for:</p>
                <ul style={styles.ul}>
                    <li style={styles.li}>Educational purposes and general health information research</li>
                    <li style={styles.li}>Personal wellness tracking and organization</li>
                    <li style={styles.li}>Accessing general health resources and content</li>
                    <li style={styles.li}>Learning about health topics in conjunction with professional medical care</li>
                </ul>

                <h3 style={styles.h3}>3.2 Prohibited Use</h3>
                <p style={styles.p}>You agree NOT to:</p>
                <ul style={styles.ul}>
                    <li style={styles.li}>Use the Service as a substitute for professional medical advice or emergency care</li>
                    <li style={styles.li}>Rely solely on AI recommendations for medical decisions</li>
                    <li style={styles.li}>Share or input false, misleading, or fraudulent health information</li>
                    <li style={styles.li}>Attempt to reverse engineer, modify, or hack the AI system</li>
                    <li style={styles.li}>Use the Service to provide medical advice to others</li>
                    <li style={styles.li}>Upload or share sensitive health information of third parties without consent</li>
                    <li style={styles.li}>Use the Service for commercial medical practice purposes</li>
                    <li style={styles.li}>Violate any applicable laws or regulations</li>
                </ul>

                <h2 style={styles.h2}>4. Medical Disclaimers and Limitations</h2>
                
                <div style={styles.disclaimer}>
                    <strong>MEDICAL DISCLAIMER:</strong> The information provided by PrescribeRight's AI system is based on general medical knowledge and should never be considered personalized medical advice. AI recommendations have inherent limitations and may contain errors, omissions, or inaccuracies.
                </div>

                <h3 style={styles.h3}>4.1 AI System Limitations</h3>
                <ul style={styles.ul}>
                    <li style={styles.li}>AI recommendations are generated from training data and may not reflect the most current medical research</li>
                    <li style={styles.li}>The AI cannot account for your complete medical history, individual circumstances, or unique health conditions</li>
                    <li style={styles.li}>AI-generated content may contain factual errors or inappropriate suggestions</li>
                    <li style={styles.li}>The system cannot provide real-time medical monitoring or emergency assistance</li>
                </ul>

                <h3 style={styles.h3}>4.2 Professional Medical Care Requirements</h3>
                <p style={styles.p}>
                    You acknowledge and agree that you must always consult with licensed healthcare professionals for any medical concerns, symptoms, or health-related decisions. Never delay seeking professional medical advice based on information from our Service. In case of medical emergencies, contact emergency services immediately.
                </p>

                <h2 style={styles.h2}>5. Limitation of Liability</h2>
                <p style={styles.p}>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, PRESCRIBERIGHT AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul style={styles.ul}>
                    <li style={styles.li}>Health consequences or medical complications arising from use of the Service</li>
                    <li style={styles.li}>Damages resulting from reliance on AI-generated medical information</li>
                    <li style={styles.li}>Loss of data or personal health information</li>
                    <li style={styles.li}>Interruption of medical care or delayed treatment</li>
                    <li style={styles.li}>Any damages exceeding the amount paid for the Service in the preceding twelve months</li>
                </ul>

                <p style={styles.p}>
                    You expressly acknowledge that your use of the Service is at your sole risk and that the Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
                </p>

                <h2 style={styles.h2}>6. Intellectual Property Rights</h2>
                
                <h3 style={styles.h3}>6.1 Company-Owned Content</h3>
                <p style={styles.p}>
                    All content, features, and functionality of the PrescribeRight Service, including but not limited to software, text, graphics, logos, AI algorithms, and design elements, are owned by PrescribeRight and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Service for personal, non-commercial purposes only.
                </p>

                <h3 style={styles.h3}>6.2 User-Submitted Content</h3>
                <p style={styles.p}>
                    You retain ownership of any personal health information, data, or content you input into the Service ("User Content"). However, by submitting User Content, you grant PrescribeRight a worldwide, royalty-free, non-exclusive license to use, process, and analyze such content solely for the purpose of providing and improving the Service. We will not share your personal health information with third parties except as outlined in our Privacy Policy.
                </p>

                <h3 style={styles.h3}>6.3 AI-Generated Content</h3>
                <p style={styles.p}>
                    Any content generated by our AI system in response to your queries is considered part of the Service and remains the property of PrescribeRight. You may use AI-generated responses for personal reference but may not redistribute, republish, or use such content for commercial purposes.
                </p>

                <h2 style={styles.h2}>7. Privacy and Data Protection</h2>
                <p style={styles.p}>
                    Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Service, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>

                <h2 style={styles.h2}>8. Account Termination</h2>
                <p style={styles.p}>
                    We reserve the right to suspend or terminate your account and access to the Service at any time, with or without notice, for any reason including violation of these Terms. Upon termination, your right to use the Service will cease immediately, and we may delete your account data in accordance with our data retention policies.
                </p>

                <h2 style={styles.h2}>9. Modifications to Terms</h2>
                <p style={styles.p}>
                    We reserve the right to modify these Terms at any time. We will notify users of material changes through the app or via email. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms. If you disagree with any changes, you must discontinue use of the Service.
                </p>

                <h2 style={styles.h2}>10. Governing Law</h2>
                <p style={styles.p}>
                    These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in [Jurisdiction].
                </p>

                <h2 style={styles.h2}>11. Severability</h2>
                <p style={styles.p}>
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                </p>

                <h2 style={styles.h2}>12. Contact Information</h2>
                <p style={styles.p}>
                    If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p style={styles.p}>
                    <strong>Email:</strong> legal@prescriberight.com<br/>
                    <strong>Address:</strong> SPIT, Bhavan's Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058<br/>
                    <strong>Phone:</strong> 1-800-PRESCRIBE
                </p>

                <div style={styles.legalNotice}>
                    <strong>LEGAL NOTICE:</strong> This Terms of Service document is provided for informational purposes only and does not constitute legal advice. The effectiveness and enforceability of these terms may vary by jurisdiction. We strongly recommend consulting with a qualified attorney to ensure compliance with applicable laws and to address your specific legal needs before implementing these terms.
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;