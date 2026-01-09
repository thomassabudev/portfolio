import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certs = [
        {
            title: "MERN Stack Development",
            issuer: "Avodha Edutech",
            date: "Oct 2025 – Dec 2025",
            file: "/mern_cert.pdf"
        },
        {
            title: "Software Engineering Job Simulation",
            issuer: "Forage",
            date: "Completed – September 2025",
            file: "/forage_cert.pdf"
        }
    ];

    return (
        <section id="certifications" className="section">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5 }}
                className="gradient-text"
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
            >
                Courses & Certifications
            </motion.h2>

            <div style={{
                display: 'grid',
                gap: '2rem',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ margin: "-50px" }}
                        className="glass-panel"
                        style={{
                            padding: '1.5rem 2rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>{cert.title}</h3>
                            <p style={{ color: 'var(--secondary-color)', marginTop: '0.3rem' }}>{cert.issuer} <span style={{ color: '#666', margin: '0 5px' }}>|</span> {cert.date}</p>
                        </div>
                        <a
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--primary-color)',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                border: '1px solid var(--primary-color)',
                                padding: '8px 20px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'var(--primary-color)';
                                e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = 'var(--primary-color)';
                            }}
                        >
                            View Certificate &rarr;
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
