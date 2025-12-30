import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: "2024 - Present",
        role: "Senior Frontend Developer",
        company: "Tech Innovators",
        description: "Leading the frontend team in building scalable web applications using React and Next.js."
    },
    {
        year: "2022 - 2024",
        role: "UI/UX Designer & Developer",
        company: "Creative Studio",
        description: "Designed and developed award-winning websites for various clients, focusing on interaction design."
    },
    {
        year: "2020 - 2022",
        role: "Junior Web Developer",
        company: "StartUp Inc",
        description: "Collaborated with cross-functional teams to deliver high-quality code and user experiences."
    }
];

const AboutPage = () => {
    return (
        <section style={{ padding: '8rem 0 4rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <h1 className="gradient-text" style={{ fontSize: '4rem', marginBottom: '2rem', lineHeight: 1.1 }}>
                        About Me
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '4rem', lineHeight: 1.8 }}>
                        I'm Rizve, a passionate developer and designer based in the digital realm.
                        I believe in the power of technology to transform ideas into reality.
                        With a background in both design and engineering, I bridge the gap between
                        aesthetics and functionality to create seamless digital experiences.
                    </p>

                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Experience</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass"
                                style={{ padding: '2rem' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>{exp.role}</h3>
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{exp.year}</span>
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{exp.company}</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPage;
