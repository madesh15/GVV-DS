import React, { useState } from 'react';
import Navbar from './components/Navbar';
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
    }
    main { padding-top: 84px; }
    section { scroll-margin-top: 84px; }
    .video-intro-section { height: calc(100vh - 84px) !important; }
    @media (max-width: 768px) {
      main { padding-top: 72px; }
      section { scroll-margin-top: 72px; }
      .video-intro-section { height: calc(100vh - 72px) !important; }
    }
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: #06060a; }
    ::-webkit-scrollbar-thumb { background: #d4a636; border-radius: 3px; }
    ::selection { background: rgba(212,166,54,0.25); color: #f5f0e4; }
    input, select, textarea { color: #f5f0e4; }
    input::placeholder, textarea::placeholder { color: rgba(245,240,228,0.3); }
    select option { background: #0d0d14; color: #f5f0e4; }
  `}</style>
);

/* Floating WhatsApp button */
const WhatsAppBtn = () => (
  <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20GVV%20Driving%20School" target="_blank" rel="noopener noreferrer"
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

  return (
    <>
      <GlobalStyle />
      <Navbar active={active} setActive={setActive} />
      <main>
        <VideoIntro setActive={setActive} />
        <Hero setActive={setActive} />
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
