import React from 'react';
import Logo from './Logo';

export default function Footer({ setActive }) {
  const nav = (id) => {
    setActive(id.charAt(0).toUpperCase() + id.slice(1));
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#04040a', borderTop: '1px solid rgba(212,166,54,0.12)', padding: '60px 40px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <Logo height={100} onClick={() => nav('home')} />
            </div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: 'rgba(245,240,228,0.4)', lineHeight: 1.8, maxWidth: 280 }}>
              Chennai's trusted driving school since 2009. Shaping confident, safe, and responsible drivers for over 15 years.
            </p>
            <div style={{ marginTop: 20, fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#d4a636' }}>
              ⭐ 4.9/5 — Google Reviews
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 3, color: '#d4a636', textTransform: 'uppercase', marginBottom: 20 }}>Quick Links</h5>
            {['home', 'about', 'enquiries', 'experience', 'gallery', 'reviews', 'contact'].map(l => (
              <div key={l} onClick={() => nav(l)} style={{
                fontFamily: "'Barlow', sans-serif", fontSize: 14, color: 'rgba(245,240,228,0.45)',
                cursor: 'pointer', marginBottom: 10, textTransform: 'capitalize',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.color = '#d4a636'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,228,0.45)'}
              >{l}</div>
            ))}
          </div>

          {/* Enquiries */}
          <div>
            <h5 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 3, color: '#d4a636', textTransform: 'uppercase', marginBottom: 20 }}>Enquiries</h5>
            {['Basic Car (Manual)', 'Automatic Car', 'Heavy Vehicle (HMV)', 'Refresher Course'].map(c => (
              <div key={c} onClick={() => nav('enquiries')} style={{
                fontFamily: "'Barlow', sans-serif", fontSize: 14, color: 'rgba(245,240,228,0.45)',
                cursor: 'pointer', marginBottom: 10,
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.color = '#d4a636'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,228,0.45)'}
              >{c}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 3, color: '#d4a636', textTransform: 'uppercase', marginBottom: 20 }}>Contact</h5>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: 'rgba(245,240,228,0.45)', lineHeight: 1.8, marginBottom: 12 }}>
            No 6, Sai Nagar, 6th Street, Virugambakkam<br />Chennai – 600092
            </div>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: 'rgba(245,240,228,0.45)', marginBottom: 6 }}>9884772048</div>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: 'rgba(245,240,228,0.45)' }}>info@gvvdriving.com</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: 'rgba(245,240,228,0.25)', letterSpacing: 1 }}>
            © {new Date().getFullYear()} GVV Driving School. All rights reserved.
          </div>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: 'rgba(245,240,228,0.25)', letterSpacing: 1 }}>
            RTO Certified · Chennai, Tamil Nadu
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
