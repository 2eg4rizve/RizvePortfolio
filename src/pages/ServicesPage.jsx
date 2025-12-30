import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const services = [
    {
        icon: Code,
        title: "Web Development",
        description: "Building fast, responsive, and scalable websites using modern technologies like React, Next.js, and Node.js.",
        price: "Starting at $1,000"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Creating intuitive and visually stunning interfaces that provide exceptional user experiences.",
        price: "Starting at $800"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Developing cross-platform mobile applications for iOS and Android using React Native.",
        price: "Starting at $1,500"
    },
    {
        icon: Globe,
        title: "SEO & Optimization",
        description: "Optimizing websites for search engines and performance to ensure maximum visibility and speed.",
        price: "Starting at $500"
    }
];

const ServicesPage = () => {
    return (
        <section style={{ padding: '8rem 0 4rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 className="gradient-text" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                        My Services
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Professional solutions tailored to your specific needs.
                        I deliver high-quality work with a focus on performance and design.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass"
                            style={{
                                padding: '2.5rem',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: 'var(--color-primary)'
                            }}>
                                <service.icon size={32} />
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', flex: 1 }}>
                                {service.description}
                            </p>

                            <div style={{
                                marginTop: 'auto',
                                paddingTop: '1.5rem',
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                color: 'var(--color-accent)',
                                fontWeight: 'bold'
                            }}>
                                {service.price}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
