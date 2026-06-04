import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';



// ─── SplitWords (word by word) ──────────────────────────────────────────────
function SplitWords({ text, baseDelay = 0, stagger = 0.07, inView }) {
  const words = text.split(' ');
  return (
    <span style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0 }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.45,
            delay: inView ? baseDelay + i * stagger : 0,
            ease: 'easeOut',
          }}
        >
          {word + (i < words.length - 1 ? ' ' : '')}
        </motion.span>
      ))}
    </span>
  );
}

// ─── VideoIntro ──────────────────────────────────────────────────────────────
export default function VideoIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });

  const descDelay = 0.3;
  const desc2Delay = descDelay + 0.8;
  const desc3Delay = desc2Delay + 0.8;

  return (
    <section
      id="video-intro"
      ref={ref}
      style={{
        position: 'relative', height: '100vh', minHeight: 560, width: '100%',
        overflow: 'hidden', background: '#06060a',
      }}
    >
      <video
        autoPlay muted loop playsInline preload="auto"
        aria-label="GVV Driving School cinematic intro"
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={`${process.env.PUBLIC_URL}/car.mp4`} type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
       background: 'rgba(6,6,10,0.45)',
        pointerEvents: 'none',
      }} />

      {/* Right cinematic overlay */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '35%',
        background: 'linear-gradient(135deg, transparent 0%, rgba(212,166,54,0.08) 100%)',
        borderLeft: '1px solid rgba(212,166,54,0.12)',
        pointerEvents: 'none',
      }} />

      {/* ── CENTER DESCRIPTION BLOCK ── */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        textAlign: 'center',
        width: '100%',
        maxWidth: 720,
        padding: '0 20px',
      }}>

        {/* Top gold rule */}
        <motion.div
          animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: descDelay - 0.2, ease: 'easeOut' }}
          style={{
            height: 1,
            background: 'linear-gradient(90deg, transparent, #d4a636, transparent)',
            marginBottom: 28, transformOrigin: 'center',
          }}
        />

        {/* Headline */}
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(22px, 3.5vw, 38px)',
          fontWeight: 700, color: '#f5f0e4',
          margin: '0 0 12px', lineHeight: 1.3,
          textShadow: '0 2px 20px rgba(0,0,0,0.9)',
          letterSpacing: '-0.01em',
        }}>
          <SplitWords
            text="Where Every Journey Begins with Confidence."
            baseDelay={descDelay}
            stagger={0.06}
            inView={inView}
          />
        </p>

        

        {/* Body description */}
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: 'clamp(13px, 1.6vw, 17px)',
          color: 'rgba(245,240,228,0.80)',
          margin: '0 0 10px', lineHeight: 1.75,
          fontWeight: 400, letterSpacing: '0.02em',
          textShadow: '0 1px 10px rgba(0,0,0,0.9)',
        }}>
          <SplitWords
            text="GVV Driving School has been shaping skilled, road-ready drivers across Chennai since 2009. With expert RTO-certified instructors, a modern fleet, and flexible timings — we make learning to drive safe, simple, and enjoyable."
            baseDelay={desc2Delay}
            stagger={0.04}
            inView={inView}
          />
        </p>

        {/* Stats row */}
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: desc3Delay }}
          style={{
            display: 'flex', justifyContent: 'center',
            gap: 'clamp(20px, 5vw, 56px)',
            marginTop: 28,
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '10,000+', label: 'Students Trained' },
            { value: '15+',     label: 'Years Experience' },
            { value: '99%',     label: 'Pass Rate' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 900, color: '#d4a636',
                textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                lineHeight: 1,
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 10, letterSpacing: 3,
                color: 'rgba(245,240,228,0.6)',
                textTransform: 'uppercase',
                marginTop: 6, fontWeight: 600,
              }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom gold rule */}
        <motion.div
          animate={inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: desc3Delay + 0.4, ease: 'easeOut' }}
          style={{
            height: 1,
            background: 'linear-gradient(90deg, transparent, #d4a636, transparent)',
            marginTop: 28, transformOrigin: 'center',
          }}
        />
      </div>
    </section>
  );
}