import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    'Licensed & RTO Certified Instructors',
    'Modern, well-maintained vehicle fleet',
    'Personalised one-on-one training sessions',
    'Both manual and automatic transmission',
    'Flexible morning, afternoon & evening slots',
    'In-car dashboard camera for safety feedback',
  ];

  return (
    <section id="about" style={{ background: '#0d0d14', padding: '120px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        
        {/* Video showcase */}
        <div style={{ position: 'relative', height: 580 }} className="about-img-col">
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 6, overflow: 'hidden',
            border: '1px solid rgba(212,166,54,0.22)',
            boxShadow: '0 24px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04) inset',
          }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="GVV Driving School showcase"
              style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                transform: 'scale(1.02)',
              }}
            >
              <source src={`${process.env.PUBLIC_URL}/wmremove-transformed.mp4`} type="video/mp4" />
            </video>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(6,6,10,0.05) 0%, rgba(6,6,10,0.35) 55%, rgba(6,6,10,0.72) 100%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', top: 0, right: 0, width: 120, height: 120,
              background: 'radial-gradient(circle at top right, rgba(212,166,54,0.18), transparent 70%)',
              pointerEvents: 'none',
            }} />
          </div>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, zIndex: 2,
            background: 'linear-gradient(135deg, #d4a636, #f0c853)',
            padding: '24px 28px', borderRadius: 4,
            boxShadow: '0 10px 30px rgba(212,166,54,0.3)',
          }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 36, color: '#06060a', lineHeight: 1 }}>2009</div>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 2, color: 'rgba(6,6,10,0.7)', textTransform: 'uppercase', marginTop: 4 }}>Est. in Chennai</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1, background: '#d4a636' }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, letterSpacing: 3, color: '#d4a636', textTransform: 'uppercase' }}>About GVV</span>
          </div>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(36px,4vw,54px)', color: '#f5f0e4', lineHeight: 1.15, marginBottom: 24 }}>
            More Than Just<br /><em style={{ color: '#d4a636' }}>Driving Lessons</em>
          </h2>

          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(245,240,228,0.65)', lineHeight: 1.85, marginBottom: 16 }}>
            Founded in Chennai in 2009, GVV Driving School has grown into one of Tamil Nadu's most trusted driving institutes. Our mission is simple — to produce safe, confident, and responsible drivers.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(245,240,228,0.65)', lineHeight: 1.85, marginBottom: 36 }}>
            With a fleet of well-maintained vehicles and a team of patient, professional instructors, we tailor every lesson to the individual learner — from complete beginners to those seeking refresher training.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', marginBottom: 44 }}>
            {highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <CheckCircle2 size={16} color="#d4a636" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: 'rgba(245,240,228,0.75)', lineHeight: 1.5 }}>{h}</span>
              </div>
            ))}
          </div>

          <button style={{
            background: 'transparent', border: '1px solid #d4a636',
            color: '#d4a636', padding: '14px 34px', borderRadius: 4, cursor: 'pointer',
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 2,
            textTransform: 'uppercase', transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#d4a636'; e.currentTarget.style.color = '#06060a'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#d4a636'; }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >Get in Touch</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          #about > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-img-col { height: 360px !important; min-height: 360px !important; }
        }
      `}</style>
    </section>
  );
}
