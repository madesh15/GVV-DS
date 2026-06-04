import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const linkShadow = '0 1px 3px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.65)';
  const aboutDropdown = ['About', 'Experience', 'Gallery'];
  const isAboutActive = aboutDropdown.includes(active);

  const nav = (link) => {
    setActive(link);
    setOpen(false);
    setAboutOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const NavBtn = ({ label, id }) => (
    <button onClick={() => nav(id || label)} style={{
      background: 'none', border: 'none', cursor: 'pointer',
      fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: 13,
      letterSpacing: 2, textTransform: 'uppercase', padding: '6px 0',
      color: active === label ? '#d4a636' : '#f5f0e4',
      textShadow: linkShadow,
      borderBottom: active === label ? '2px solid #d4a636' : '2px solid transparent',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={e => { if (active !== label) e.currentTarget.style.color = '#d4a636'; }}
    onMouseLeave={e => { if (active !== label) e.currentTarget.style.color = '#f5f0e4'; }}
    >{label}</button>
  );

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(6,6,10,0.97)' : 'rgba(6,6,10,0.82)',
      backdropFilter: scrolled ? 'blur(14px)' : 'blur(10px)',
      borderBottom: '1px solid rgba(212,166,54,0.2)',
      boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.45)' : '0 4px 24px rgba(0,0,0,0.35)',
      transition: 'all 0.4s ease',
      padding: '0 40px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 84,
      }}>

        {/* LEFT — Logo */}
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Logo height={120} onClick={() => nav('Home')} />
        </div>

        {/* CENTER — Nav links absolutely centered */}
        <div
          className="desktop-nav"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 36,
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          <NavBtn label="Home" />

          {/* About dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setAboutOpen(p => !p)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: 13,
                letterSpacing: 2, textTransform: 'uppercase', padding: '6px 0',
                color: isAboutActive ? '#d4a636' : '#f5f0e4',
                textShadow: linkShadow,
                borderBottom: isAboutActive ? '2px solid #d4a636' : '2px solid transparent',
                transition: 'all 0.3s ease',
                display: 'flex', alignItems: 'center', gap: 5,
              }}
              onMouseEnter={e => { if (!isAboutActive) e.currentTarget.style.color = '#d4a636'; }}
              onMouseLeave={e => { if (!isAboutActive) e.currentTarget.style.color = '#f5f0e4'; }}
            >
              About
              <ChevronDown size={14} style={{
                transition: 'transform 0.3s ease',
                transform: aboutOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }} />
            </button>

            {aboutOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 18px)', left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(6,6,10,0.98)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(212,166,54,0.2)',
                borderRadius: 6, minWidth: 160,
                boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
                animation: 'fadeDown 0.2s ease',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -5, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 10, height: 10,
                  background: 'rgba(6,6,10,0.98)',
                  border: '1px solid rgba(212,166,54,0.2)',
                  borderBottom: 'none', borderRight: 'none',
                  rotate: '45deg',
                }} />
                {aboutDropdown.map(item => (
                  <button key={item} onClick={() => nav(item)} style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: "'Barlow', sans-serif", fontWeight: 600,
                    fontSize: 12, letterSpacing: 2, textTransform: 'uppercase',
                    padding: '14px 20px',
                    color: active === item ? '#d4a636' : 'rgba(245,240,228,0.8)',
                    borderLeft: active === item ? '2px solid #d4a636' : '2px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(212,166,54,0.06)';
                    e.currentTarget.style.color = '#d4a636';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.color = active === item ? '#d4a636' : 'rgba(245,240,228,0.8)';
                  }}
                  >{item}</button>
                ))}
              </div>
            )}
          </div>

          <NavBtn label="Enquiries" />
          <NavBtn label="Reviews" />
        </div>

        {/* RIGHT — Contact Us + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          <button
            onClick={() => nav('Contact')}
            className="desktop-nav"
            style={{
              background: 'linear-gradient(135deg, #d4a636, #f0c853)',
              color: '#06060a', border: 'none', padding: '10px 22px',
              borderRadius: 4, cursor: 'pointer',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: 13, letterSpacing: 2,
              textTransform: 'uppercase', transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(212,166,54,0.3)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >Contact Us</button>

          <button
            onClick={() => setOpen(!open)}
            className="hamburger"
            style={{
              display: 'none', color: '#f5f0e4',
              background: 'none', border: 'none', cursor: 'pointer',
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))',
            }}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: 'rgba(6,6,10,0.98)', backdropFilter: 'blur(20px)',
          padding: '24px 20px 32px',
          borderTop: '1px solid rgba(212,166,54,0.15)',
          animation: 'slideDown 0.3s ease',
          display: 'grid',
          gap: 10,
        }}>
          {['Home', 'About', 'Experience', 'Gallery', 'Enquiries', 'Reviews', 'Contact'].map(l => (
            <button
              key={l}
              onClick={() => nav(l)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: active === l ? 'rgba(212,166,54,0.12)' : 'transparent',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                padding: '16px 18px',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: 2.5,
                textTransform: 'uppercase',
                color: active === l ? '#f5f0e4' : '#eee',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = active === l ? 'rgba(212,166,54,0.14)' : 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = active === l ? 'rgba(212,166,54,0.12)' : 'transparent';
              }}
            >
              <span style={{ display: 'block', fontSize: 18, color: active === l ? '#d4a636' : '#eee' }}>
                {l}
              </span>
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          nav { padding: 0 20px !important; }
          nav > div { height: 72px !important; }
        }
      `}</style>
    </nav>
  );
}