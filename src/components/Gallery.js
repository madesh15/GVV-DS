import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { src: 'https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?w=800&q=80', label: 'On-Road Training' },
  { src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', label: 'Our Fleet' },
  { src: 'https://images.unsplash.com/photo-1462927114672-e44b8b89bd30?w=800&q=80', label: 'City Driving' },
  { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', label: 'Student Session' },
  { src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80', label: 'Highway Practice' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', label: 'Certified Instructor' },
  { src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80', label: 'Modern Vehicles' },
  { src: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80', label: 'Night Training' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" style={{ background: '#06060a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1, background: '#d4a636' }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, letterSpacing: 3, color: '#d4a636', textTransform: 'uppercase' }}>Visual Tour</span>
            <div style={{ width: 40, height: 1, background: '#d4a636' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(36px,4vw,54px)', color: '#f5f0e4' }}>
            Life at <em style={{ color: '#d4a636' }}>GVV</em>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto', gap: 12 }} className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} onClick={() => setLightbox(i)}
              style={{
                gridColumn: i === 0 || i === 4 ? 'span 2' : 'span 1',
                gridRow: i === 0 || i === 4 ? 'span 2' : 'span 1',
                position: 'relative', overflow: 'hidden', cursor: 'pointer',
                borderRadius: 6, aspectRatio: (i === 0 || i === 4) ? '1/1' : '4/3',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
              <img src={img.src} alt={img.label} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform 0.5s ease, filter 0.4s ease',
                filter: 'brightness(0.8)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)'; e.currentTarget.style.filter = 'brightness(0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(0.8)'; }}
              />
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', opacity: 0,
                transition: 'opacity 0.3s ease',
              }} className="gallery-overlay" id={`overlay-${i}`}
              onMouseEnter={e => { e.currentTarget.style.opacity = 1; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = 0; }}
              >
                <ZoomIn size={28} color="#d4a636" />
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, letterSpacing: 2, color: '#f5f0e4', marginTop: 8, textTransform: 'uppercase' }}>{img.label}</span>
              </div>
              {/* Label always visible at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '8px 14px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 2,
                color: 'rgba(245,240,228,0.7)', textTransform: 'uppercase',
              }}>{img.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 9000,
          background: 'rgba(0,0,0,0.93)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 40, backdropFilter: 'blur(8px)',
        }}>
          <button onClick={() => setLightbox(null)} style={{
            position: 'absolute', top: 24, right: 24, background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%', width: 44, height: 44,
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#f5f0e4',
          }}><X size={20} /></button>
          <img src={images[lightbox].src.replace('w=800', 'w=1400')} alt={images[lightbox].label}
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: 6, boxShadow: '0 30px 80px rgba(0,0,0,0.8)' }}
            onClick={e => e.stopPropagation()} />
          <div style={{ position: 'absolute', bottom: 32, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, letterSpacing: 3, color: '#d4a636', textTransform: 'uppercase' }}>
            {images[lightbox].label}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .gallery-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        .gallery-grid > div:hover .gallery-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
