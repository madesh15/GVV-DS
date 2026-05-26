import React, { useState } from 'react';
import { Car, Bike, Truck, RotateCcw, BookOpen, Clock, Users, FileText, IndianRupee, ChevronRight } from 'lucide-react';
import { drivingClasses, commonProofs } from '../data/enquiries';

const icons = {
  car: <Car size={28} />,
  bike: <Bike size={28} />,
  rotate: <RotateCcw size={28} />,
  truck: <Truck size={28} />,
  book: <BookOpen size={28} />,
};

export default function Enquiries() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="enquiries" style={{ background: '#06060a', padding: '120px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1, background: '#d4a636' }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, letterSpacing: 3, color: '#d4a636', textTransform: 'uppercase' }}>Fees & Admission</span>
            <div style={{ width: 40, height: 1, background: '#d4a636' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(36px,4vw,54px)', color: '#f5f0e4', lineHeight: 1.15 }}>
            Driving Class <em style={{ color: '#d4a636' }}>Enquiries</em>
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(245,240,228,0.5)', marginTop: 16, maxWidth: 620, margin: '16px auto 0' }}>
            Transparent rates, fees breakdown, and proof documents required for each class. Submit your enquiry with the form below.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {drivingClasses.map((c, i) => (
            <div key={c.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.025)',
                border: `1px solid ${hovered === i ? c.color + '55' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 8, padding: 28, cursor: 'default',
                transition: 'all 0.4s ease',
                transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered === i ? `0 20px 50px rgba(0,0,0,0.4)` : 'none',
                position: 'relative', overflow: 'hidden',
              }}>
              <div style={{
                position: 'absolute', top: 20, right: 20,
                background: c.color + '18', border: `1px solid ${c.color}44`,
                padding: '4px 12px', borderRadius: 100,
                fontFamily: "'Barlow', sans-serif", fontSize: 10, letterSpacing: 2, color: c.color, textTransform: 'uppercase',
              }}>{c.tag}</div>

              <div style={{
                width: 56, height: 56, borderRadius: 8,
                background: c.color + '15', border: `1px solid ${c.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: c.color, marginBottom: 20,
              }}>{icons[c.icon]}</div>

              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: '#f5f0e4', letterSpacing: 1, marginBottom: 10 }}>{c.title}</h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 13, color: 'rgba(245,240,228,0.55)', lineHeight: 1.65, marginBottom: 16 }}>{c.desc}</p>

              <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                {[{ icon: <Clock size={12} />, text: c.duration }, { icon: <Users size={12} />, text: c.sessions }].map((m, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'rgba(245,240,228,0.4)', fontSize: 12, fontFamily: "'Barlow', sans-serif" }}>
                    {m.icon} {m.text}
                  </div>
                ))}
              </div>

              {/* Fees */}
              <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: 6, padding: '14px 16px', marginBottom: 16, border: `1px solid ${c.color}22` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  <IndianRupee size={14} color={c.color} />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2, color: c.color, textTransform: 'uppercase' }}>Fees & Rates</span>
                </div>
                {c.fees.map((f, j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontFamily: "'Barlow', sans-serif", fontSize: 13 }}>
                    <span style={{ color: 'rgba(245,240,228,0.55)' }}>{f.label}</span>
                    <span style={{ color: '#f5f0e4', fontWeight: 500 }}>{f.amount}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, paddingTop: 10, borderTop: `1px solid ${c.color}33` }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, color: '#f5f0e4', letterSpacing: 1 }}>TOTAL FEE</span>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: c.color }}>{c.totalFee}</span>
                </div>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 10, color: 'rgba(245,240,228,0.35)', marginTop: 8, lineHeight: 1.5 }}>{c.rtoNote}</p>
              </div>

              {/* Proof documents */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16, marginBottom: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  <FileText size={13} color={c.color} />
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2, color: c.color, textTransform: 'uppercase' }}>Proof / Documents</span>
                </div>
                {c.proofs.map((p, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: c.color, fontSize: 10, marginTop: 3 }}>●</span>
                    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: 'rgba(245,240,228,0.6)', lineHeight: 1.45 }}>{p}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{
                width: '100%', background: c.color + '18', border: `1px solid ${c.color}55`, color: c.color,
                padding: '11px 18px', borderRadius: 4, cursor: 'pointer',
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2,
                textTransform: 'uppercase', transition: 'all 0.3s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = c.color; e.currentTarget.style.color = '#06060a'; }}
              onMouseLeave={e => { e.currentTarget.style.background = c.color + '18'; e.currentTarget.style.color = c.color; }}
              >Submit Enquiry <ChevronRight size={14} /></button>
            </div>
          ))}
        </div>

        {/* Common notes */}
        <div style={{
          marginTop: 40, padding: '28px 32px', borderRadius: 8,
          background: 'rgba(212,166,54,0.06)', border: '1px solid rgba(212,166,54,0.2)',
        }}>
          <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 2, color: '#d4a636', textTransform: 'uppercase', marginBottom: 16 }}>
            General Admission Information
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
            {commonProofs.map((note, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <FileText size={14} color="#d4a636" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: 'rgba(245,240,228,0.65)', lineHeight: 1.6 }}>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
