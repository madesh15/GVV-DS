import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import Logo from './Logo';

export default function MobileMenu({ open, setOpen, active, setActive }) {
  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const nav = (link) => {
    setActive(link);
    setOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) {
      const offset = 72;
      const top = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - offset);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Blurred overlay backdrop */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2400,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          animation: 'fadeIn 0.22s ease-out',
        }}
      />

      {/* Top Slide Dropdown Card (Half-screen) */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2500,
        background: '#06060a',
        borderBottom: '2px solid rgba(212,166,54,0.35)',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        padding: '20px 20px 32px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.75)',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        animation: 'slideDown 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Top Header Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Logo height={42} />
          </div>
          <button onClick={() => setOpen(false)} style={{
            background: 'transparent',
            border: 'none',
            color: '#f5f0e4',
            cursor: 'pointer',
            padding: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <X size={28} />
          </button>
        </div>

        {/* Links list in two columns or list */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 10 }}>
          {['Home', 'About', 'Experience', 'Gallery', 'Enquiries', 'Reviews', 'Contact'].map(l => (
            <button
              key={l}
              onClick={() => nav(l)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: active === l ? 'rgba(212,166,54,0.14)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${active === l ? 'rgba(212,166,54,0.3)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: 12,
                padding: '14px 16px',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: active === l ? '#d4a636' : '#f5f0e4',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = active === l ? 'rgba(212,166,54,0.2)' : 'rgba(255,255,255,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = active === l ? 'rgba(212,166,54,0.14)' : 'rgba(255,255,255,0.03)';
              }}
            >
              <span>{l}</span>
              {active === l && <span style={{ color: '#d4a636', fontSize: 12 }}>&#10003;</span>}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
