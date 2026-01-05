import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "MySQL", "Firebase"] },
    { category: "Tools", items: ["n8n", "Webhooks", "Git", "GitHub"] }
];

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
