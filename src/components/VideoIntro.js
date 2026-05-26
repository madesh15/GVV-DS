import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function VideoIntro({ setActive }) {
  const scrollToHero = () => {
    setActive('Home');
    document.getElementById('hero-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="video-intro-section"
      style={{
        position: 'relative', height: '100vh', minHeight: 560, width: '100%',
        overflow: 'hidden', background: '#06060a',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="GVV Driving School cinematic intro"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transform: 'translate(-50%, -50%)',
          filter: 'brightness(0.75)',
          zIndex: 0,
        }}
      >
        <source src={`${process.env.PUBLIC_URL}/car.mp4`} type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(6,6,10,0.35) 0%, rgba(6,6,10,0.15) 40%, rgba(6,6,10,0.75) 85%, rgba(6,6,10,0.95) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '35%',
        background: 'linear-gradient(135deg, transparent 0%, rgba(212,166,54,0.08) 100%)',
        borderLeft: '1px solid rgba(212,166,54,0.12)',
        pointerEvents: 'none',
      }} />

      {/* Company name — bottom */}
      <div className="video-intro-brand" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
        padding: '48px 40px 100px', textAlign: 'center',
        background: 'linear-gradient(180deg, transparent 0%, rgba(6,6,10,0.55) 35%, rgba(6,6,10,0.92) 100%)',
      }}>
        <div style={{
          display: 'inline-block', padding: '16px 28px 20px',
          borderBottom: '2px solid #d4a636',
          marginBottom: 14,
          background: 'rgba(6,6,10,0.45)',
          borderRadius: 4,
          backdropFilter: 'blur(6px)',
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 900,
            fontSize: 'clamp(42px, 7vw, 72px)', lineHeight: 1.05, margin: 0,
            color: '#f5f0e4', letterSpacing: '-0.02em',
            textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 4px 40px rgba(0,0,0,0.6)',
          }}>
            GVV <em style={{ color: '#d4a636', fontStyle: 'italic' }}>Driving School</em>
          </h1>
        </div>
        <p style={{
          fontFamily: "'Barlow', sans-serif", fontSize: 12, letterSpacing: 4,
          color: '#f0c853', textTransform: 'uppercase', margin: 0, fontWeight: 600,
          textShadow: '0 1px 12px rgba(0,0,0,0.9)',
        }}>
          Chennai&apos;s Premier Driving School · Est. 2009
        </p>
      </div>

      {/* Scroll hint */}
      <button
        type="button"
        onClick={scrollToHero}
        aria-label="Scroll to explore"
        style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer',
          animation: 'introBounce 2s infinite', opacity: 0.85,
        }}
      >
        <span style={{
          fontSize: 10, letterSpacing: 3, fontFamily: "'Barlow', sans-serif",
          color: '#f5f0e4', textTransform: 'uppercase', fontWeight: 600,
          textShadow: '0 1px 8px rgba(0,0,0,0.9)',
        }}>
          Scroll
        </span>
        <ChevronDown size={20} color="#f5f0e4" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))' }} />
      </button>

      <style>{`
        @keyframes introBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          .video-intro-brand { padding: 0 24px 88px !important; }
        }
      `}</style>
    </section>
  );
}
