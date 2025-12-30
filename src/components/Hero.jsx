import React from 'react';

const Hero = () => {
    <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 2rem'
    }}>
        <div className="container">
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                Hi, I'm Rizve
            </h1>
            <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto 3rem' }}>
                Full-Stack Developer & Creative Designer
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#projects" className="glass neon-box" style={{ padding: '1rem 2.5rem', background: 'var(--color-primary)', borderRadius: '0.75rem', fontWeight: 'bold' }}>View My Work</a>
                <a href="#contact" className="glass" style={{ padding: '1rem 2.5rem', border: '2px solid var(--color-primary)', borderRadius: '0.75rem', fontWeight: 'bold' }}>Get In Touch</a>
            </div>
        </div>
    </section>
};

export default Hero;
