import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['Home', 'About', 'Enquiries', 'Reviews'];

  const nav = (link) => {
    setActive(link);
    setOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const linkColor = (isActive) => (isActive ? '#d4a636' : '#f5f0e4');
  const linkShadow = '0 1px 3px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.65)';

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

      {/* ── 3-column flex row: [Logo] [Nav Links] [Book Now] ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
      }}>

        {/* LEFT — Logo */}
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, lineHeight: 0 }}>
          <Logo height={120} onClick={() => nav('Home')} />
        </div>

        {/* CENTER — Nav links (desktop only) */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => {
            const isAboutGroup = l === 'About';
            const isAnySubActive = active === 'About' || active === 'Experience' || active === 'Gallery';

            if (isAboutGroup) {
              return (
                <div
                  key={l}
                  onMouseEnter={() => setAboutHovered(true)}
                  onMouseLeave={() => setAboutHovered(false)}
                  style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                >
                  <button onClick={() => nav('About')} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: 13,
                    letterSpacing: 2, textTransform: 'uppercase', padding: '6px 0',
                    color: linkColor(isAnySubActive),
                    textShadow: linkShadow,
                    borderBottom: isAnySubActive ? '2px solid #d4a636' : '2px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { if (!isAnySubActive) e.currentTarget.style.color = '#d4a636'; }}
                  onMouseLeave={e => { if (!isAnySubActive) e.currentTarget.style.color = linkColor(false); }}
                  >
                    <span>{l}</span>
                    <span style={{
                      fontSize: 8,
                      marginLeft: 6,
                      transition: 'transform 0.3s ease',
                      transform: aboutHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                      verticalAlign: 'middle',
                      marginTop: -2,
                      color: isAnySubActive ? '#d4a636' : 'rgba(245, 240, 228, 0.6)'
                    }}>▼</span>
                  </button>

                  {/* Dropdown */}
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: `translateX(-50%) translateY(${aboutHovered ? '0' : '10px'})`,
                    opacity: aboutHovered ? 1 : 0,
                    visibility: aboutHovered ? 'visible' : 'hidden',
                    background: 'rgba(6, 6, 10, 0.98)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(212, 166, 54, 0.25)',
                    borderRadius: 6,
                    padding: '10px 0',
                    width: 180,
                    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 1010,
                  }}>
                    {[
                      { label: 'About Us', target: 'About' },
                      { label: 'Experience', target: 'Experience' },
                      { label: 'Gallery', target: 'Gallery' }
                    ].map(sub => (
                      <button
                        key={sub.label}
                        onClick={() => nav(sub.target)}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          background: 'none',
                          border: 'none',
                          padding: '10px 24px',
                          cursor: 'pointer',
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 600,
                          fontSize: 12,
                          letterSpacing: 1.5,
                          textTransform: 'uppercase',
                          color: active === sub.target ? '#d4a636' : '#f5f0e4',
                          transition: 'all 0.25s ease',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212, 166, 54, 0.08)'; e.currentTarget.style.color = '#d4a636'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = active === sub.target ? '#d4a636' : '#f5f0e4'; }}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button key={l} onClick={() => nav(l)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: 13,
                letterSpacing: 2, textTransform: 'uppercase', padding: '6px 0',
                color: linkColor(active === l),
                textShadow: linkShadow,
                borderBottom: active === l ? '2px solid #d4a636' : '2px solid transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { if (active !== l) e.currentTarget.style.color = '#d4a636'; }}
              onMouseLeave={e => { if (active !== l) e.currentTarget.style.color = linkColor(false); }}
              >{l}</button>
            );
          })}
        </div>

        {/* RIGHT — Book Now + Mobile Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0, marginRight: '40px' }}>
          {/* Book Now (desktop) */}
          <button
            onClick={() => nav('Contact')}
            className="desktop-nav"
            style={{
              background: 'linear-gradient(135deg, #d4a636, #f0c853)', color: '#06060a',
              border: 'none', padding: '10px 22px', borderRadius: 4, cursor: 'pointer',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 2,
              textTransform: 'uppercase', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(212,166,54,0.3)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >Contact Us</button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ color: '#f5f0e4', background: 'none', border: 'none', cursor: 'pointer', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))' }}
            className="hamburger"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: 'rgba(6,6,10,0.98)', backdropFilter: 'blur(20px)',
          padding: '20px 40px 30px', borderTop: '1px solid rgba(212,166,54,0.15)',
          animation: 'slideDown 0.3s ease'
        }}>
          {links.map(l => {
            const isAboutGroup = l === 'About';
            const isAnySubActive = active === 'About' || active === 'Experience' || active === 'Gallery';

            if (isAboutGroup) {
              return (
                <div key={l} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{
                    padding: '14px 0 6px', fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600, fontSize: 20, letterSpacing: 3, textTransform: 'uppercase',
                    color: isAnySubActive ? '#d4a636' : '#bbb',
                  }}>About</div>
                  <div style={{ paddingLeft: 16, paddingBottom: 10 }}>
                    {[
                      { label: 'About Us', target: 'About' },
                      { label: 'Experience', target: 'Experience' },
                      { label: 'Gallery', target: 'Gallery' }
                    ].map(sub => (
                      <div key={sub.label} onClick={() => nav(sub.target)} style={{
                        padding: '10px 0', fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 500, fontSize: 17, letterSpacing: 2, textTransform: 'uppercase',
                        color: active === sub.target ? '#d4a636' : '#999', cursor: 'pointer',
                        transition: 'color 0.2s ease'
                      }}>— {sub.label}</div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={l} onClick={() => nav(l)} style={{
                padding: '14px 0', fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600, fontSize: 20, letterSpacing: 3, textTransform: 'uppercase',
                color: active === l ? '#d4a636' : '#bbb', cursor: 'pointer',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>{l}</div>
            );
          })}

          {/* Book Now in mobile menu too */}
          <div style={{ marginTop: 20 }}>
            <button onClick={() => nav('Contact')} style={{
              width: '100%', background: 'linear-gradient(135deg, #d4a636, #f0c853)', color: '#06060a',
              border: 'none', padding: '14px 22px', borderRadius: 4, cursor: 'pointer',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 2,
              textTransform: 'uppercase',
            }}>Book Now</button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          nav { padding: 0 20px !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
        @keyframes slideDown { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </nav>
  );
}