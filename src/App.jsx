import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <>
                            <Hero />
                            <Projects />
                            <Skills />
                            <Contact />
                        </>
                    } />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<ServicesPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
