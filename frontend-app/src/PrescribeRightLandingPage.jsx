import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import heroBg from './assets/herobg.png'; // Keep this import for the background image
import Spline from '@splinetool/react-spline'; // Import the Spline component

const PrescribeRightLandingPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // State to hold the dynamic gradient style for each card
    const [gradientStyle1, setGradientStyle1] = useState({});
    const [gradientStyle2, setGradientStyle2] = useState({});
    const [gradientStyle3, setGradientStyle3] = useState({});
    const [gradientStyle4, setGradientStyle4] = useState({}); // For the 4th card, though only 3 are used in the original Features section

    const testimonials = [
        {
            name: "Rohan Sharma",
            quote: "PrescribeRight helped me understand my symptoms better and provided clear guidance when I needed it most.",
            initials: "RS"
        },
        {
            name: "Priya Singh",
            quote: "The AI analysis was incredibly accurate and saved me hours of uncertainty about my health concerns.",
            initials: "PS"
        },
        {
            name: "Arjun Patel",
            quote: "I love how personalized the recommendations are. It's like having a medical assistant available 24/7.",
            initials: "AP"
        },
        {
            name: "Kavita Desai",
            quote: "The trusted medical sources and clear explanations gave me confidence in the suggestions provided.",
            initials: "KD"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Function to handle the mouse move event and update the gradient
    const handleMouseMove = (e, setGradientStyle) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left; // x position relative to the element
        const y = e.clientY - top;  // y position relative to the element
        const gradient = `radial-gradient(circle at ${x}px ${y}px, rgba(175, 255, 203, 0.4), transparent)`;
        setGradientStyle({
            background: gradient,
            transform: 'translateY(-5px)', // Keep the hover transform
            cursor: 'pointer', // Keep the cursor pointer
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)' // Enhanced shadow on hover
        });
    };

    // Function to reset the style when the mouse leaves
    const handleMouseLeave = (setGradientStyle) => {
        setGradientStyle({
            background: '#F5F5F5', // Reset to original background color
            transform: 'translateY(0)', // Reset the transform
            cursor: 'default', // Reset cursor
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)' // Reset to original shadow
        });
    };

    const styles = {
        body: {
            margin: 0,
            padding: 0,
            fontFamily: "'Open Sans', sans-serif", // Primary font for body
            lineHeight: 1.6,
            color: '#212121',
            backgroundColor: '#F5F5F5', // Light gray background for the entire page
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        },
        heroSection: {
            backgroundImage: `url(${heroBg})`, // Use heroBg as background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative', // Needed for the overlay
            minHeight: '80vh', // Adjust height for Spline
            display: 'flex',
            flexDirection: 'column', // Default to column for mobile
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            paddingTop: '40px', // Space for fixed Navbar
            marginBottom: '0', // Reduced to remove gap
            borderRadius: '0px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            maxWidth: '1200px',
            margin: '4rem auto 0 auto', // Adjusted bottom margin
            overflow: 'hidden', // Prevent Spline overflow if it goes beyond bounds
            // Responsive styles for larger screens
            '@media (min-width: 768px)': {
                flexDirection: 'row',
                textAlign: 'left',
                padding: '4rem',
            }
        },
        heroOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // Reduced opacity for a softer blend
            zIndex: 1, // Place overlay behind content
            borderRadius: '15px', // Match hero section border-radius
        },
        heroContentWrapper: {
            position: 'relative', // Ensure content is above overlay
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column', // Default to column for mobile
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%', // Take full width of parent
            height: '100%', // Take full height of parent
            padding: '2rem', // Add some padding inside the wrapper
            // Responsive styles for larger screens
            '@media (min-width: 768px)': {
                flexDirection: 'row',
                // Removed explicit textAlign: 'left' here as it's handled by heroContentLeft
                alignItems: 'center', // Align items vertically in the center for desktop
                padding: '0', // Adjust padding if needed
            }
        },
        heroContentLeft: {
            flex: 1,
            textAlign: 'center', // Default center for mobile
            padding: '0rem',
            marginTop: 0, // Removed negative margin to correct vertical alignment
            // Responsive styles for larger screens
            '@media (min-width: 768px)': {
                textAlign: 'left',
                paddingRight: '2rem',
            }
        },
        heroSplineRight: {
            flex: 1,
            width: '100%', // Full width on mobile
            height: '400px', // Fixed height for spline on mobile
            marginTop: '2rem',
            marginRight: '-10rem', // Applied to mobile by default
            backgroundColor: 'transparent', // Make the container transparent
            borderRadius: '15px', // Keep rounded corners if needed
            // Responsive styles for larger screens
            '@media (min-width: 768px)': {
                width: '50%',
                height: '500px', // Larger height for spline on desktop
                marginTop: 0,
                marginLeft: '4rem', // Applied specifically for screens >= 768px
            }
        },
        heroTitle: {
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            fontWeight: 'bold',
            color: '#212121',
            marginBottom: '1rem',
            fontFamily: 'Lato, sans-serif' // Changed to Inter for headings based on earlier discussion
        },
        heroSubtitle: {
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            color: '#757575',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem auto', // Centered on mobile
            '@media (min-width: 768px)': {
                margin: '0 0 2rem 0', // Left aligned on desktop
            }
        },
        ctaButton: {
            backgroundColor: '#4FC3F7',
            color: '#FFFFFF',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(79, 195, 247, 0.3)'
        },
        featuresSection: {
            padding: '2rem 2rem 4rem 2rem', // Reduced top padding
            backgroundColor: '#FFFFFF',
            textAlign: 'center'
        },
        sectionTitle: {
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#212121',
            marginBottom: '3rem',
            fontFamily: 'Inter, sans-serif' // Changed to Inter for headings based on earlier discussion
        },
        featuresGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
        },
        featureCard: {
            backgroundColor: '#F5F5F5',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, background 0.3s ease',
        },
        featureIcon: {
            width: '60px',
            height: '60px',
            backgroundColor: '#A5D6A7',
            borderRadius: '50%',
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: '#FFFFFF'
        },
        featureTitle: {
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: '#212121',
            marginBottom: '1rem',
            fontFamily: 'Inter, sans-serif' // Changed to Inter for headings based on earlier discussion
        },
        featureDescription: {
            color: '#757575',
            fontSize: '1rem',
            fontFamily: "'Open Sans', sans-serif" // Open Sans for body text
        },
        howItWorksSection: {
            padding: '4rem 2rem',
            backgroundColor: '#f3fbfd',
            textAlign: 'center'
        },
        stepsContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            maxWidth: '1000px',
            margin: '0 auto',
            flexWrap: 'wrap',
            gap: '2rem'
        },
        stepItem: {
            flex: '1',
            minWidth: '250px',
            maxWidth: '300px'
        },
        stepNumber: {
            width: '60px',
            height: '60px',
            backgroundColor: '#A5D6A7',
            borderRadius: '50%',
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#FFFFFF'
        },
        stepTitle: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#212121',
            marginBottom: '0.5rem',
            fontFamily: 'Inter, sans-serif' // Changed to Inter for headings based on earlier discussion
        },
        stepDescription: {
            color: '#757575',
            fontSize: '1rem',
            fontFamily: "'Open Sans', sans-serif" // Open Sans for body text
        },
        testimonialsSection: {
            padding: '4rem 2rem',
            backgroundColor: '#FFFFFF',
            textAlign: 'center'
        },
        testimonialCard: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '2rem',
            backgroundColor: '#ebfafd',
            borderRadius: '15px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
        },
        testimonialQuote: {
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: '#212121',
            marginBottom: '1.5rem',
            lineHeight: 1.6,
            fontFamily: "'Open Sans', sans-serif" // Open Sans for body text
        },
        testimonialAuthor: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
        },
        avatar: {
            width: '50px',
            height: '50px',
            backgroundColor: '#4FC3F7',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontWeight: 'bold'
        },
        authorName: {
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#212121',
            fontFamily: 'Inter, sans-serif' // Changed to Inter for headings based on earlier discussion
        },
        testimonialDots: {
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem'
        },
        dot: {
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#757575',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        },
        activeDot: {
            backgroundColor: '#4FC3F7'
        }
    };

    return (
        <div style={styles.body}>
            <Navbar />
            <section id="hero" style={{
                ...styles.heroSection,
                ...(window.innerWidth >= 768 ? styles.heroSection['@media (min-width: 768px)'] : {})
            }}>
                {/* Hero Overlay for readability over background image */}
                <div style={styles.heroOverlay}></div>

                {/* Content Wrapper for text/button and Spline, positioned above overlay */}
                <div style={{
                    ...styles.heroContentWrapper,
                    ...(window.innerWidth >= 768 ? {
                        ...styles.heroContentWrapper['@media (min-width: 768px)'],
                        alignItems: 'center' // Ensure vertical alignment is centered for desktop
                    } : {})
                }}>
                    <div style={{
                        ...styles.heroContentLeft,
                        ...(window.innerWidth >= 768 ? styles.heroContentLeft['@media (min-width: 768px)'] : {})
                    }}>
                        <h1 style={styles.heroTitle}>Your AI-Powered Path to Better Health.</h1>
                        <p style={styles.heroSubtitle}>
                            Instant health insights and personalized care, backed by trusted medical sources.
                        </p>
                        <button
                            style={styles.ctaButton}
                            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            Start Consultation
                        </button>
                    </div>
                    <div style={{
                        ...styles.heroSplineRight,
                        ...(window.innerWidth >= 768 ? styles.heroSplineRight['@media (min-width: 768px)'] : {})
                    }}>
                        {/* The Spline component */}
                        <Spline scene="https://prod.spline.design/soWGhRQDpK0eXyr9/scene.splinecode" />
                    </div>
                </div>
            </section>

            <section id="features" style={styles.featuresSection}>
                <h2 style={styles.sectionTitle}>Why Choose PrescribeRight?</h2>
                <div style={styles.featuresGrid}>
                    <div
                        style={{ ...styles.featureCard, ...gradientStyle1 }}
                        onMouseMove={(e) => handleMouseMove(e, setGradientStyle1)}
                        onMouseLeave={() => handleMouseLeave(setGradientStyle1)}
                    >
                        <div style={styles.featureIcon}>🔍</div>
                        <h3 style={styles.featureTitle}>Accurate Symptom Analysis</h3>
                        <p style={styles.featureDescription}>
                            Our AI accurately analyzes your symptoms to suggest potential conditions and next steps.
                        </p>
                    </div>
                    <div
                        style={{ ...styles.featureCard, ...gradientStyle2 }}
                        onMouseMove={(e) => handleMouseMove(e, setGradientStyle2)}
                        onMouseLeave={() => handleMouseLeave(setGradientStyle2)}
                    >
                        <div style={styles.featureIcon}>💊</div>
                        <h3 style={styles.featureTitle}>Personalized Prescriptions</h3>
                        <p style={styles.featureDescription}>
                            Receive personalized, AI-suggested medication plans tailored to your specific needs.
                        </p>
                    </div>
                    <div
                        style={{ ...styles.featureCard, ...gradientStyle3 }}
                        onMouseMove={(e) => handleMouseMove(e, setGradientStyle3)}
                        onMouseLeave={() => handleMouseLeave(setGradientStyle3)}
                    >
                        <div style={styles.featureIcon}>🛡️</div>
                        <h3 style={styles.featureTitle}>Trusted Information</h3>
                        <p style={styles.featureDescription}>
                            All suggestions are backed by up-to-date, trusted medical research and data.
                        </p>
                    </div>
                </div>
            </section>

            <section id="how-it-works" style={styles.howItWorksSection}>
                <h2 style={styles.sectionTitle}>How It Works</h2>
                <div style={styles.stepsContainer}>
                    <div style={styles.stepItem}>
                        <div style={styles.stepNumber}>1</div>
                        <h3 style={styles.stepTitle}>Describe Your Symptoms</h3>
                        <p style={styles.stepDescription}>
                            Input your symptoms and medical history in our secure chat interface.
                        </p>
                    </div>
                    <div style={styles.stepItem}>
                        <div style={styles.stepNumber}>2</div>
                        <h3 style={styles.stepTitle}>Enter Your Information</h3>
                        <p style={styles.stepDescription}>
                            Provide key details about your health for a more precise analysis.
                        </p>
                    </div>
                    <div style={styles.stepItem}>
                        <div style={styles.stepNumber}>3</div>
                        <h3 style={styles.stepTitle}>Get AI Suggestions</h3>
                        <p style={styles.stepDescription}>
                            Receive AI-driven suggestions for medicines and a personalized health plan.
                        </p>
                    </div>
                </div>
            </section>

            <section id="testimonials" style={styles.testimonialsSection}>
                <h2 style={styles.sectionTitle}>"What Our Users Say"</h2>
                <div style={styles.testimonialCard}>
                    <p style={styles.testimonialQuote}>
                        "{testimonials[currentTestimonial].quote}"
                    </p>
                    <div style={styles.testimonialAuthor}>
                        <div style={styles.avatar}>
                            {testimonials[currentTestimonial].initials}
                        </div>
                        <span style={styles.authorName}>
                            {testimonials[currentTestimonial].name}
                        </span>
                    </div>
                </div>
                <div style={styles.testimonialDots}>
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.dot,
                                ...(index === currentTestimonial ? styles.activeDot : {})
                            }}
                            onClick={() => setCurrentTestimonial(index)}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrescribeRightLandingPage;