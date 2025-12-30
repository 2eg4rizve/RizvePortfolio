import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '0 2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Blobs */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--color-primary)',
                filter: 'blur(100px)',
                opacity: 0.2,
                zIndex: -1,
                borderRadius: '50%'
            }} className="floating" />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '350px',
                height: '350px',
                background: 'var(--color-secondary)',
                filter: 'blur(100px)',
                opacity: 0.2,
                zIndex: -1,
                borderRadius: '50%',
                animationDelay: '1.5s'
            }} className="floating" />

            <div className="container floating">
                <div className="glass-card">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-gradient-text"
                        style={{
                            fontSize: 'clamp(3rem, 10vw, 7rem)',
                            fontWeight: '900',
                            marginBottom: '1rem',
                            lineHeight: '1',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        My name is Rizve and more
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                            color: 'var(--color-text-muted)',
                            maxWidth: '700px',
                            margin: '0 auto 3rem',
                            fontWeight: '500'
                        }}
                    >
                        Crafting digital experiences that blend artistic vision with technical excellence. Full-Stack Developer & UI/UX Specialist.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <a href="#projects" className="btn-premium btn-primary neon-box">
                            Explore Projects
                        </a>
                        <a href="#contact" className="btn-premium btn-outline">
                            Let's Connect
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.875rem'
                }}
            >
                <span>Scroll to explore</span>
                <div style={{
                    width: '2px',
                    height: '50px',
                    background: 'linear-gradient(to bottom, var(--color-primary), transparent)',
                    borderRadius: '1px'
                }} />
            </motion.div>
        </section>
    );
};

export default Hero;
