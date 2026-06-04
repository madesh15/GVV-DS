import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import VideoIntro from './components/VideoIntro';
import Hero from './components/Hero';
import About from './components/About';
import Enquiries from './components/Courses';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* Global styles injected here */
const GlobalStyle = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: #06060a;
      color: #f5f0e4;
      font-family: 'Barlow', sans-serif;
      overflow-x: hidden;
      min-height: 100%;
    }
    main {
      padding-top: 84px;
    }
    section {
      width: 100%;
      scroll-margin-top: 100px;
      padding: 120px 40px;
    }
    #video-intro {
      min-height: 560px;
      padding: 0 !important; /* Ensure intro video section has no padding overlay */
    }
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: #06060a; }
    ::-webkit-scrollbar-thumb { background: #d4a636; border-radius: 3px; }
    ::selection { background: rgba(212,166,54,0.25); color: #f5f0e4; }
    input, select, textarea { color: #f5f0e4; }
    input::placeholder, textarea::placeholder { color: rgba(245,240,228,0.3); }
    select option { background: #0d0d14; color: #f5f0e4; }
    @media (max-width: 768px) {
      main { padding-top: 72px; }
      section { scroll-margin-top: 88px; padding: 60px 20px !important; }
      #video-intro { min-height: 520px !important; height: auto !important; padding: 0 !important; }
      #video-intro video { min-height: 100%; min-width: 100%; }
    }
  `}</style>
);

/* Floating WhatsApp button */
const WhatsAppBtn = () => (
  <a href="https://wa.me/919884772048?text=Hi%2C%20I%20want%20to%20know%20more%20about%20GVV%20Driving%20School" target="_blank" rel="noopener noreferrer"
    style={{
      position: 'fixed', bottom: 28, right: 28, zIndex: 999,
      width: 56, height: 56, borderRadius: '50%',
      background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.55)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'; }}
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

export default function App() {
  const [active, setActive] = useState('Home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sectionMap = {
      home:       'Home',
      about:      'About',
      experience: 'Experience',
      gallery:    'Gallery',
      enquiries:  'Enquiries',
      reviews:    'Reviews',
      contact:    'Contact',
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Among all currently intersecting sections, pick the most visible one
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (sectionMap[id]) setActive(sectionMap[id]);
        }
      },
      {
        root: null,
        // Section is "active" when it occupies the top 20–40% band of the viewport
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    Object.keys(sectionMap).forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar active={active} setActive={setActive} open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} active={active} setActive={setActive} />
      <main>
        <Hero setActive={setActive} />
        <VideoIntro setActive={setActive} />
        <About />
        <Enquiries />
        <Experience />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer setActive={setActive} />
      <WhatsAppBtn />
    </>
  );
}