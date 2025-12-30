import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '2rem' }}
                >
                    Let's <span className="gradient-text">Connect</span>
                </motion.h2>

                <p style={{
                    color: 'var(--color-text-muted)',
                    maxWidth: '500px',
                    margin: '0 auto 3rem',
                    fontSize: '1.2rem'
                }}>
                    I'm currently available for freelance work and full-time positions.
                    Drop me a line if you'd like to work together!
                </p>

                <motion.a
                    href="mailto:rizve@example.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2.5rem',
                        background: 'var(--color-primary)',
                        color: 'white',
                        borderRadius: '2rem',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        marginBottom: '4rem'
                    }}
                >
                    <Mail size={20} />
                    Say Hello
                </motion.a>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    {[Github, Linkedin, Twitter].map((Icon, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            whileHover={{ y: -5, color: 'var(--color-primary)' }}
                            style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
