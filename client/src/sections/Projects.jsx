import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In dev, assuming server is at 5000. In prod, relative path if served together.
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        fetch(`${apiUrl}/api/projects`)
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching projects:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section id="projects" className="section">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5 }}
                className="gradient-text"
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
            >
                Featured Projects
            </motion.h2>

            {loading ? (
                <div style={{ textAlign: 'center', color: '#fff', fontSize: '1.2rem', marginTop: '2rem' }}>
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        Loading Projects...
                    </motion.div>
                </div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-50px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        width: '100%'
                    }}
                >

                    {projects.map((project) => (
                        <motion.div
                            key={project._id}
                            variants={itemVariants}
                            className="glass-panel"
                            style={{ padding: '2rem', cursor: 'pointer' }}
                            whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(0,255,255,0.2)' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: '#ccc', marginBottom: '1rem', lineHeight: '1.5' }}>{project.description}</p>
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{ fontSize: '0.8rem', color: 'var(--accent-color)', border: '1px solid var(--accent-color)', padding: '2px 8px', borderRadius: '12px' }}>{t}</span>
                                ))}
                            </div>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>
                                View on GitHub &rarr;
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
        </section>
    );
};

export default Projects;
