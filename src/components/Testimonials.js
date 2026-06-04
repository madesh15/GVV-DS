import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { name: 'swetha kalaiselvan', role: 'Software Engineer', rating: 5, text: 'I recently completed a 15-day driving class, and my instructor was Hari. He is a very patient and supportive instructor who explains everything clearly and boosts your confidence. Each day was well structured, gradually building up skills. By the end of the course, I felt comfortable and prepared to drive independently. I highly recommend this class to anyone looking for a stress-free and effective way to learn driving!' },
  { name: 'sharon charu', role: 'College Student', rating: 5, text: 'Comfortable ,helpful and friendly atmosphere... they have lady trainer for ladies.. their teaching techniques are unique and 100% recommended for beginners.' },
  { name: 'Vikram Selvaraj', role: 'Business Owner', rating: 5, text: 'One of the best driving school have ever seen, and its cool to learn , and even their service were so polite and good.' },
  { name: 'Faiizi', role: 'Doctor', rating: 5, text: "Had a great experience with this driving class. They were very flexible with my timings, which made it really convenient for me. Madhesh and Sanjay brother taught very well and made the whole learning process smooth and comfortable. Highly recommended!" },
  { name: 'Priya Subramani', role: 'IT Professional', rating: 5, text: 'I was trained by Mrs. Devi, who was extremely patient and ensured I learned proper driving skills step by step. Her calm and supportive guidance made a big difference in my learning experience. The last two sessions were conducted by Mr. Sanjay, who recognized my progress and focused on refining the areas where I needed improvement. His feedback was precise and very helpful.' },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState(true);

  const go = (dir) => {
    setAnim(false);
    setTimeout(() => {
      setIdx(i => (i + dir + testimonials.length) % testimonials.length);
      setAnim(true);
    }, 150);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[idx];

  return (
    <section id="reviews" style={{ background: '#06060a', position: 'relative', overflow: 'hidden' }}>
      {/* Giant quote mark */}
      <div style={{ position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)', fontFamily: "'Playfair Display', serif", fontSize: 300, color: 'rgba(212,166,54,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>"</div>

      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ width: 40, height: 1, background: '#d4a636' }} />
          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, letterSpacing: 3, color: '#d4a636', textTransform: 'uppercase' }}>Student Reviews</span>
          <div style={{ width: 40, height: 1, background: '#d4a636' }} />
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(32px,4vw,48px)', color: '#f5f0e4', marginBottom: 60 }}>
          What Our <em style={{ color: '#d4a636' }}>Students</em> Say
        </h2>

        {/* Card */}
        <div style={{ opacity: anim ? 1 : 0, transform: anim ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.3s ease' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
            {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="#d4a636" stroke="#d4a636" />)}
          </div>
          <p style={{
            fontFamily: "'Playfair Display', serif", fontStyle: 'italic',
            fontSize: 'clamp(17px,2vw,22px)', color: 'rgba(245,240,228,0.85)', lineHeight: 1.75,
            marginBottom: 32,
          }}>"{t.text}"</p>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: '#f5f0e4', letterSpacing: 1 }}>{t.name}</div>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, letterSpacing: 2, color: '#d4a636', textTransform: 'uppercase', marginTop: 4 }}>{t.role}</div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: 48 }}>
          <button onClick={() => go(-1)} style={{
            width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer', color: '#f5f0e4',
            display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4a636'; e.currentTarget.style.color = '#d4a636'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#f5f0e4'; }}
          ><ChevronLeft size={18} /></button>

          <div style={{ display: 'flex', gap: 8 }}>
            {testimonials.map((_, i) => (
              <div key={i} onClick={() => { setAnim(false); setTimeout(() => { setIdx(i); setAnim(true); }, 150); }} style={{
                width: i === idx ? 24 : 6, height: 6, borderRadius: 3,
                background: i === idx ? '#d4a636' : 'rgba(255,255,255,0.2)',
                cursor: 'pointer', transition: 'all 0.4s ease',
              }} />
            ))}
          </div>

          <button onClick={() => go(1)} style={{
            width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer', color: '#f5f0e4',
            display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4a636'; e.currentTarget.style.color = '#d4a636'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#f5f0e4'; }}
          ><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}
