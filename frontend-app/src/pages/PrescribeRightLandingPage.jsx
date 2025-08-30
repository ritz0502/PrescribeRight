import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroBg from '../assets/herobg.png';
import Spline from '@splinetool/react-spline';
import Features from '../components/Features';

import '../styles.css';

const PrescribeRightLandingPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

    return (
        <div className="landing-page-body">

            <section id="hero" className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content-container">
                    <div className="hero-content-left">
                        <h1 className="hero-title">Your AI-Powered Path to Better Health.</h1>
                        <p className="hero-subtitle">
                            Instant health insights and personalized care, backed by trusted medical sources.
                        </p>
                        <button className="cta-button">
                            Start Consultation
                        </button>
                    </div>
                    <div className="hero-spline-right">
                        <Spline scene="https://prod.spline.design/soWGhRQDpK0eXyr9/scene.splinecode" />
                    </div>
                </div>
            </section>

            <Features />

            <section id="how-it-works" className="how-it-works-section">
                <h2 className="section-title">How It Works</h2>
                <div className="steps-container">
                    <div className="step-item">
                        <div className="step-number">1</div>
                        <h3 className="step-title">Describe Your Symptoms</h3>
                        <p className="step-description">
                            Input your symptoms and medical history in our secure chat interface.
                        </p>
                    </div>
                    <div className="step-item">
                        <div className="step-number">2</div>
                        <h3 className="step-title">Enter Your Information</h3>
                        <p className="step-description">
                            Provide key details about your health for a more precise analysis.
                        </p>
                    </div>
                    <div className="step-item">
                        <div className="step-number">3</div>
                        <h3 className="step-title">Get AI Suggestions</h3>
                        <p className="step-description">
                            Receive AI-driven suggestions for medicines and a personalized health plan.
                        </p>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="testimonials-section">
                <h2 className="section-title">"What Our Users Say"</h2>
                <div className="testimonial-card">
                    <p className="testimonial-quote">
                        "{testimonials[currentTestimonial].quote}"
                    </p>
                    <div className="testimonial-author">
                        <div className="avatar">
                            {testimonials[currentTestimonial].initials}
                        </div>
                        <span className="author-name">
                            {testimonials[currentTestimonial].name}
                        </span>
                    </div>
                </div>
                <div className="testimonial-dots">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                            onClick={() => setCurrentTestimonial(index)}
                        />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default PrescribeRightLandingPage;