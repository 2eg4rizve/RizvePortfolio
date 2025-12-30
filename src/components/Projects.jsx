import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart and payment integration.",
        details: "Built with React and Node.js, this platform features a custom cart implementation, Stripe integration for payments, and a real-time inventory system.",
        tags: ["React", "Node.js", "Stripe"],
        color: "var(--color-primary)"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Productivity tool for teams with real-time updates.",
        details: "A collaborative task manager using WebSockets for real-time updates. Features include drag-and-drop boards, team chat, and file sharing.",
        tags: ["Vue", "Firebase", "Tailwind"],
        color: "var(--color-secondary)"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Personal showcase with advanced animations.",
        details: "This very website! Designed with a focus on micro-interactions and smooth page transitions using Framer Motion.",
        tags: ["React", "Framer Motion", "Three.js"],
        color: "var(--color-accent)"
    }
];

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="projects" style={{ padding: '6rem 0' }}>
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
                    Selected <span className="gradient-text">Work</span>
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            layoutId={project.id}
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass neon-box"
                            style={{
                                padding: '2rem',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '5px',
                                background: project.color
                            }} />

                            <motion.h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</motion.h3>
                            <motion.p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                {project.description}
                            </motion.p>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.25rem 0.75rem',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '1rem'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            padding: '2rem'
                        }} onClick={() => setSelectedId(null)}>
                            <motion.div
                                layoutId={selectedId}
                                className="glass"
                                style={{
                                    width: '100%',
                                    maxWidth: '600px',
                                    padding: '3rem',
                                    background: 'var(--color-bg)',
                                    position: 'relative',
                                    boxShadow: 'var(--glow-primary)'
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedId(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--color-text)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <X />
                                </button>

                                {projects.map(project => project.id === selectedId && (
                                    <React.Fragment key={project.id}>
                                        <motion.h2 className="neon-text" style={{ fontSize: '2rem', marginBottom: '1rem', color: project.color }}>
                                            {project.title}
                                        </motion.h2>
                                        <motion.p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                                            {project.details}
                                        </motion.p>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {project.tags.map(tag => (
                                                <span key={tag} style={{
                                                    fontSize: '0.9rem',
                                                    padding: '0.5rem 1rem',
                                                    background: 'rgba(255,255,255,0.1)',
                                                    borderRadius: '1rem'
                                                }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
