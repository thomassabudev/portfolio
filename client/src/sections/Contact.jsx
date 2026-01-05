import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.success) {
                setStatus('Message Sent!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send.');
            }
        } catch (err) {
            console.error(err);
            setStatus('Error sending message.');
        }
    };

    return (
        <section id="contact" className="section" style={{ minHeight: '80vh' }}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
                style={{ width: '100%' }}
            >
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                    className="gradient-text"
                    style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}
                >
                    Get In Touch
                </motion.h2>
                <motion.div
                    variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                    className="glass-panel"
                    style={{ maxWidth: '600px', width: '100%', margin: '0 auto', padding: '3rem' }}
                >
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                            ></textarea>
                        </div>
                        <button type="submit" style={{
                            padding: '12px',
                            background: 'var(--secondary-color)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}>
                            Send Message
                        </button>
                        {status && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{status}</p>}
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
