import React from 'react';
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
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Skills = () => {
    const [skills, setSkills] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        fetch(`${apiUrl}/api/skills`)
            .then(res => res.json())
            .then(data => {
                setSkills(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching skills:", err);
                setLoading(false);
            });
    }, []);
    return (
        <section id="skills" className="section">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5 }}
                className="gradient-text"
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
            >
                Skills
            </motion.h2>
            {loading ? (
                <div style={{ textAlign: 'center', color: '#fff', fontSize: '1.2rem', marginTop: '2rem' }}>
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        Loading Skills...
                    </motion.div>
                </div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-100px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        width: '100%'
                    }}
                >
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-panel"
                            style={{ padding: '2rem' }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>{skillGroup.category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(255,255,255,0.1)',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        fontSize: '0.9rem'
                                    }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
        </section>
    );
};

export default Skills;
