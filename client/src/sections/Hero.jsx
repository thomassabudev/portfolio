import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="about" className="section" style={{ alignItems: 'flex-start', paddingLeft: '10%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '50px', flexWrap: 'wrap-reverse' }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{ fontSize: '2rem', color: 'var(--accent-color)' }}
                    >
                        Hello, I'm
                    </motion.h2>
                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="gradient-text"
                        style={{ fontSize: '5rem', lineHeight: '1.1' }}
                    >
                        THOMAS SABU
                    </motion.h1>
                    <motion.h3
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{ fontSize: '2rem', marginTop: '1rem', color: '#ccc' }}
                    >
                        Junior Web Developer <span style={{ fontSize: '1rem' }}>(MERN + Automation)</span>
                    </motion.h3>
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{ maxWidth: '600px', marginTop: '1.5rem', lineHeight: '1.6', fontSize: '1.1rem' }}
                    >
                        I’m a Junior Web Developer with hands-on experience building real-world applications and automation systems, primarily using the MERN stack including React, Node.js, MongoDB, and REST APIs.
                        I have experience developing event-driven workflows with webhooks and Google Sheets integration, and I’m currently seeking an opportunity to grow as a junior web developer in a production environment.
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{ marginTop: '2rem' }}
                    >
                        <a href="#projects" style={{
                            padding: '12px 30px',
                            background: 'var(--primary-color)',
                            borderRadius: '30px',
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            View Work
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Image with Glow Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.5 }} // Triggers when 50% of element is in view
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid var(--glass-border)',
                        boxShadow: '0 0 30px rgba(109, 40, 217, 0.5)', // Primary color glow
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <img
                            src="/profile.jpg"
                            alt="Thomas Sabu"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    {/* Decorative Ring */}
                    <div style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '-10px',
                        right: '-10px',
                        bottom: '-10px',
                        borderRadius: '50%',
                        border: '2px solid var(--accent-color)',
                        opacity: 0.5,
                        zIndex: 1
                    }}></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
