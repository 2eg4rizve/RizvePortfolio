import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';
import Background3D from './Background3D';

const Layout = () => {
    const location = useLocation();

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <CustomCursor />
            <Background3D />
            <div className="noise-overlay" />


            <nav className="glass" style={{
                position: 'fixed',
                top: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                padding: '1rem 2rem',
                display: 'flex',
                gap: '2rem',
                width: '90%',
                maxWidth: '500px',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(var(--hue-primary), 80%, 60%, 0.2)'
            }}>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/" style={{ color: location.pathname === '/' ? 'var(--color-text)' : 'var(--color-text-muted)' }}>Home</Link>
                    <Link to="/about" style={{ color: location.pathname === '/about' ? 'var(--color-text)' : 'var(--color-text-muted)' }}>About</Link>
                    <Link to="/services" style={{ color: location.pathname === '/services' ? 'var(--color-text)' : 'var(--color-text-muted)' }}>Services</Link>
                </div>
            </nav>

            <main style={{ flex: 1 }}>
                <Outlet />
            </main>

            <footer style={{
                padding: '2rem',
                textAlign: 'center',
                color: 'var(--color-text-muted)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                marginTop: '4rem'
            }}>
                <p>© {new Date().getFullYear()} Rizve. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
