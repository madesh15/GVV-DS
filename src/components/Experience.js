import React from 'react';
import { Trophy, UserCheck, MapPin, Headphones } from 'lucide-react';

const features = [
  { icon: <Trophy size={22} />, title: '15+ Years of Excellence', desc: 'Over fifteen years of producing safe, skilled drivers across Chennai and Tamil Nadu.' },
  { icon: <UserCheck size={22} />, title: 'Expert Certified Instructors', desc: 'All instructors hold valid government certifications with 10+ years of teaching experience.' },
  { icon: <MapPin size={22} />, title: 'Real Road Training', desc: 'We train on actual Chennai roads — busy intersections, highways, and parking lots.' },
  { icon: <Headphones size={22} />, title: '24/7 Support', desc: 'Dedicated student support team available for scheduling, queries, and RTO guidance.' },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: '#0d0d14', padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'repeating-linear-gradient(45deg, #d4a636 0, #d4a636 1px, transparent 0, transparent 50%)',
        backgroundSize: '24px 24px',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 80 }} className="exp-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 1, background: '#d4a636' }} />
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, letterSpacing: 3, color: '#d4a636', textTransform: 'uppercase' }}>Why Choose Us</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(36px,4vw,54px)', color: '#f5f0e4', lineHeight: 1.15 }}>
              The GVV<br /><em style={{ color: '#d4a636' }}>Difference</em>
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(245,240,228,0.6)', lineHeight: 1.85 }}>
              At GVV Driving School, we don't just teach you to drive — we build your confidence, road awareness, and life-long safe driving habits. Here's what sets us apart.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 40 }}>
              {[['10,000+', 'Students'], ['99%', 'Pass Rate'], ['15+', 'Years']].map(([v, l], i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 36, color: '#d4a636', lineHeight: 1 }}>{v}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 2, color: 'rgba(245,240,228,0.4)', textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature grid — 2×2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="exp-features">
          {features.map((f, i) => (
            <div key={i} style={{
              padding: '36px 36px', background: 'rgba(255,255,255,0.018)',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              borderLeft: i % 2 !== 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,166,54,0.04)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.018)'}
            >
              <div style={{ color: '#d4a636', marginBottom: 18 }}>{f.icon}</div>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: '#f5f0e4', letterSpacing: 0.5, marginBottom: 10 }}>{f.title}</h4>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 14, color: 'rgba(245,240,228,0.5)', lineHeight: 1.75 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Full-width image banner */}
        <div style={{ marginTop: 80, position: 'relative', borderRadius: 8, overflow: 'hidden', height: 360 }}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80" alt="Road experience" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40 }}>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(22px,3vw,38px)', color: '#f5f0e4', lineHeight: 1.4, maxWidth: 700 }}>
                "The road to confidence begins with the right guide. GVV has been that guide for over 10,000+ students."
              </p>
              <div style={{ marginTop: 20, fontFamily: "'Barlow', sans-serif", fontSize: 13, letterSpacing: 2, color: '#d4a636', textTransform: 'uppercase' }}>— G.V Devirajeshwari, Founder & Head Instructor</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-header { grid-template-columns: 1fr !important; gap: 32px !important; }
          .exp-features { grid-template-columns: 1fr !important; }
          .exp-features > div { border-left: none !important; }
        }
      `}</style>
    </section>
  );
}
