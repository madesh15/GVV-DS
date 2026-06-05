import React, { useEffect, useState } from 'react';
import { ChevronDown, Star, Shield, Clock } from 'lucide-react';

export default function Hero({ setActive }) {
  const [loaded, setLoaded] = useState(false);
  const [counter, setCounter] = useState({ students: 0, years: 0, rate: 0 });

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounter({
        students: Math.floor(10000 * eased),
        years: Math.floor(15 * eased),
        rate: Math.floor(99 * eased),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const scroll = (id) => {
    const normalized = id.toLowerCase();
    setActive(normalized.charAt(0).toUpperCase() + normalized.slice(1));
    const el = document.getElementById(normalized);
    if (el) {
      const offset = 90;
      const top = Math.max(0, el.getBoundingClientRect().top + window.pageYOffset - offset);
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      window.location.hash = normalized;
    }
  };

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1800&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.25)',
        transform: 'scale(1.05)',
        transition: 'transform 8s ease',
      }} />

      {/* Gold diagonal accent */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%',
        background: 'linear-gradient(135deg, transparent 0%, rgba(212,166,54,0.06) 100%)',
        borderLeft: '1px solid rgba(212,166,54,0.1)',
      }} />

      {/* Noise grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: 760 }} className="hero-text-wrapper">
          <div className="hero-mobile-brand" style={{
            display: 'none',
            fontFamily: "'Playfair Display', serif",
            fontSize: '52px',
            fontWeight: '900',
            letterSpacing: '4px',
            marginBottom: '24px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.7s ease',
          }}>
            <span style={{ color: '#f5f0e4', textShadow: '0 2px 10px rgba(255,255,255,0.1)' }}>GVV</span>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '6px',
            }}>
              <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #d4a636)' }}></span>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '15px',
                fontWeight: '400',
                fontStyle: 'italic',
                color: '#d4a636',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                textShadow: '0 0 12px rgba(212,166,54,0.5)',
                whiteSpace: 'nowrap',
              }}>Driving School</span>
              <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #d4a636)' }}></span>
            </span>
          </div>

          {/* Badge */}
          <div className="hero-badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32,
            background: 'rgba(212,166,54,0.1)', border: '1px solid rgba(212,166,54,0.35)',
            padding: '7px 18px', borderRadius: 100,
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.1s',
          }}>
            <Star size={12} fill="#d4a636" stroke="#d4a636" />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, letterSpacing: 3, color: '#d4a636', fontWeight: 500, textTransform: 'uppercase' }}>
              Chennai's Premier Driving School
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 900,
            fontSize: 'clamp(52px, 8vw, 96px)', lineHeight: 1.0,
            color: '#f5f0e4', marginBottom: 0,
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.25s',
          }}>
            Drive With
          </h1>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 900, fontStyle: 'italic',
            fontSize: 'clamp(52px, 8vw, 96px)', lineHeight: 1.0,
            color: '#d4a636', marginBottom: 28,
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.4s',
          }}>
            Confidence.
          </h1>

          {/* Sub */}
          <p className="hero-sub" style={{
            fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 18,
            color: 'rgba(245,240,228,0.7)', lineHeight: 1.8, maxWidth: 520, marginBottom: 48,
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.55s',
          }}>
            GVV Driving School delivers world-class driving education. Expert instructors, modern fleet, and a proven track record of excellence since 2009.
          </p>

          {/* CTA Buttons */}
          <div className="hero-ctas" style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.7s',
          }}>
            <button onClick={() => scroll('contact')} style={{
              background: 'linear-gradient(135deg, #d4a636, #f0c853)', color: '#06060a',
              border: 'none', padding: '16px 38px', borderRadius: 4, cursor: 'pointer',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 2,
              textTransform: 'uppercase', transition: 'all 0.3s ease',
              boxShadow: '0 8px 30px rgba(212,166,54,0.4)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(212,166,54,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(212,166,54,0.4)'; }}
            >Enroll Now</button>

            <button onClick={() => scroll('enquiries')} style={{
              background: 'transparent', color: '#f5f0e4',
              border: '1px solid rgba(245,240,228,0.3)', padding: '16px 38px', borderRadius: 4, cursor: 'pointer',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: 2,
              textTransform: 'uppercase', transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4a636'; e.currentTarget.style.color = '#d4a636'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,228,0.3)'; e.currentTarget.style.color = '#f5f0e4'; }}
            >View Fees & Enquiries</button>
          </div>

          {/* Trust badges */}
          <div className="hero-trust" style={{
            display: 'flex', gap: 24, marginTop: 60, flexWrap: 'wrap',
            opacity: loaded ? 1 : 0, transition: 'all 0.8s ease 0.9s',
          }}>
            {[
              { icon: <Shield size={14} />, text: 'RTO Certified' },
              { icon: <Star size={14} />, text: '4.9 Google Rating' },
              { icon: <Clock size={14} />, text: 'Flexible Timings' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(245,240,228,0.55)', fontSize: 12, letterSpacing: 1.5, fontFamily: "'Barlow', sans-serif", fontWeight: 400, textTransform: 'uppercase' }}>
                <span style={{ color: '#d4a636' }}>{b.icon}</span> {b.text}
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div style={{
          position: 'absolute', right: 40, bottom: 80, display: 'flex', flexDirection: 'column', gap: 32,
          opacity: loaded ? 1 : 0, transition: 'all 0.8s ease 1.1s',
        }} className="stats-side">
          {[
            { val: counter.students.toLocaleString() + '+', label: 'Students Trained' },
            { val: counter.years + '+', label: 'Years Experience' },
            { val: counter.rate + '%', label: 'Pass Rate' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'right', borderRight: '2px solid #d4a636', paddingRight: 20 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 40, color: '#d4a636', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 2, color: 'rgba(245,240,228,0.5)', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer',
        animation: 'bounce 2s infinite', opacity: 0.5,
      }} onClick={() => scroll('about')}>
        <span style={{ fontSize: 10, letterSpacing: 3, fontFamily: "'Barlow', sans-serif", color: '#d4a636' }}>SCROLL</span>
        <ChevronDown size={18} color="#d4a636" />
      </div>

      <style>{`
        #home {
          padding: 0 !important;
          min-height: calc(100vh - 84px) !important;
          display: flex !important;
          align-items: center !important;
        }
        .hero-content {
          padding: 60px 40px !important;
        }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }
        @media (max-width: 900px) { .stats-side { display: none !important; } }
        @media (max-width: 768px) {
          #home {
            min-height: calc(100vh - 72px) !important;
          }
          .hero-content {
            padding: 24px 20px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .hero-text-wrapper {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .hero-mobile-brand {
            display: block !important;
          }
          .hero-badge {
            margin-bottom: 24px !important;
          }
          .hero-sub {
            margin: 0 auto 32px !important;
            text-align: center !important;
            font-size: 15px !important;
          }
          .hero-ctas {
            justify-content: center !important;
            gap: 12px !important;
            width: 100% !important;
          }
          .hero-ctas button {
            width: 100% !important;
            padding: 14px 24px !important;
          }
          .hero-trust {
            justify-content: center !important;
            margin-top: 40px !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
