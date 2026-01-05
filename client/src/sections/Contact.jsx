import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSend = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const serviceId = 'service_portfolio'; // User will replace this
        const templateId = 'template_portfolio'; // User will replace this
        const publicKey = 'user_public_key'; // User will replace this

        // Create a temporary object for EmailJS (matches the template variables)
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: "Thomas Sabu"
        };

        // DEBUGGING: Check if keys are loaded
        console.log("DEBUG: Attempting to send email...");
        console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
        console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
        console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus('Message Sent! 🚀');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus('Failed to send. Please try again.');
        }
    };

    return (
        <section id="contact" className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', width: '100%' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="gradient-text"
                    style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}
                >
                    Get In Touch
                </motion.h2>
                <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff',
                                outline: 'none',
                                resize: 'vertical'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="neon-button"
                        style={{
                            marginTop: '1rem',
                            padding: '15px',
                            background: 'transparent',
                            color: 'var(--primary-color)',
                            border: '1px solid var(--primary-color)',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            letterSpacing: '1px'
                        }}
                    >
                        {status || 'Send Message'}
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
