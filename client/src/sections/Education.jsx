import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="section">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5 }}
                className="gradient-text"
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
            >
                Education
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-50px" }}
                className="glass-panel"
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '2rem',
                    textAlign: 'center',
                    borderLeft: '4px solid var(--primary-color)'
                }}
            >
                <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>Bachelor of Computer Applications (BCA)</h3>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1rem', fontWeight: 'normal' }}>Srinivas University, Mangaluru</h4>
                <p style={{ color: '#aaa', letterSpacing: '2px', fontWeight: 'bold' }}>2023 – 2026</p>
            </motion.div>
        </section>
    );
};

export default Education;
