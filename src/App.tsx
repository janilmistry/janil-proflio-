import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SmartAutobots from './components/SmartAutobots';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import IndustrialProducts from './components/IndustrialProducts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxTitle, setLightboxTitle] = useState('');

  const openLightbox = (image: string, title: string) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
    setLightboxTitle('');
  };

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <SmartAutobots />
      <Achievements openLightbox={openLightbox} />
      <Projects openLightbox={openLightbox} />
      <IndustrialProducts />
      <Contact />
      <Footer />
      {lightboxOpen && (
        <Lightbox
          image={lightboxImage}
          title={lightboxTitle}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

export default App;