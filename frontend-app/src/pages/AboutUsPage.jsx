import React from 'react';
import aboutstart from '../assets/aboutstart.png';
import aboutmid from '../assets/aboutmid.png';
import aboutend from '../assets/aboutend.png';
import styles from './AboutUsPage.module.css';

const AboutUsPage = () => {
    return (
        <div className={styles.body}>
            <div className={styles.contentContainer}>
                <h1 className={styles.mainHeading}>About Us</h1>

                {/* Our Mission Section */}
                <section className={styles.missionSection}>
                    <div className={styles.textWrapper}>
                        <h2 className={styles.missionTitle}>Our Mission</h2>
                        <p className={styles.missionText}>
                            At PrescribeRight, our mission is to empower individuals by providing personalized health recommendations through cutting-edge AI technology. We believe in making healthcare accessible, efficient, and tailored to individual needs.
                        </p>
                    </div>
                    <div className={styles.illustrationContainer}>
                        <img src={aboutstart} alt="Mission Illustration" className={styles.illustrationImage} />
                    </div>
                </section>

                {/* Our Values Section */}
                <section className={styles.valuesSection}>
                    <div className={styles.textWrapper}>
                        <h2 className={styles.valuesTitle}>Our Values</h2>
                        <p className={styles.valuesText}>
                            <strong>Innovation:</strong> Continuously advancing our technology to provide the best health insights.
                        </p>
                        <p className={styles.valuesText}>
                            <strong>Integrity:</strong> Building trust through transparency and ethical practices.
                        </p>
                        <p className={styles.valuesText}>
                            <strong>Empathy:</strong> Understanding and respecting the diverse needs of our users.
                        </p>
                    </div>
                    <div className={styles.illustrationContainer}>
                        <img src={aboutmid} alt="Values Illustration" className={styles.illustrationImage} />
                    </div>
                </section>

                {/* Our Technology Section */}
                <section className={styles.technologySection}>
                    <div className={styles.textWrapper}>
                        <h2 className={styles.technologyTitle}>Our Technology</h2>
                        <p className={styles.technologyText}>
                            PrescribeRight utilizes advanced AI algorithms to analyze user data and deliver personalized health recommendations. Our technology integrates seamlessly with existing healthcare systems to provide real-time insights and actionable advice.
                        </p>
                    </div>
                    <div className={styles.illustrationContainer}>
                        <img src={aboutend} alt="Technology Illustration" className={styles.illustrationImage} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUsPage;