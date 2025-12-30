import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "JavaScript (ES6+)", "React", "Node.js", "TypeScript",
    "HTML5 & CSS3", "Framer Motion", "Git", "UI/UX Design"
];

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '6rem 0', background: 'var(--color-bg-light)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '3rem',
                        marginBottom: '3rem',
                        textAlign: 'center'
                    }}
                >
                    Technical <span className="gradient-text">Skills</span>
                </motion.h2>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: 'var(--color-primary)',
                                boxShadow: '0 0 20px var(--color-primary)'
                            }}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                delay: index * 0.05,
                                y: {
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }
                            }}
                            style={{
                                padding: '1rem 2rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '2rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                cursor: 'default',
                                transition: 'background-color 0.3s'
                            }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
