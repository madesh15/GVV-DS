import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, FileText } from 'lucide-react';
import { drivingClasses } from '../data/enquiries';
import { socialAppLinks } from './SocialIcons';

const proofOptions = [
  'Aadhaar Card',
  'Address Proof',
  'Passport Size Photos',
  'Age Proof',
  "Learner's Licence (LL)",
  'Driving Licence',
  'Medical Fitness Certificate',
];

const OFFICE_ADDRESS = 'No 6, Sai Nagar, 6th Street, Virugambakkam, Chennai-600092, Tamil Nadu';
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&hl=en&z=16&output=embed`;

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', drivingClass: '', proofs: [], message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const toggleProof = (proof) => {
    setForm(f => ({
      ...f,
      proofs: f.proofs.includes(proof)
        ? f.proofs.filter(p => p !== proof)
        : [...f.proofs, proof],
    }));
  };

  const selectedClass = drivingClasses.find(c => c.id === form.drivingClass);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 4, padding: '14px 18px', color: '#f5f0e4',
    fontFamily: "'Barlow', sans-serif", fontSize: 14, outline: 'none',
    transition: 'border-color 0.3s ease', boxSizing: 'border-box',
  };

  const info = [
    { icon: <MapPin size={18} />, label: 'Address', value: OFFICE_ADDRESS, mapsLink: true },
    { icon: <Phone size={18} />, label: 'Phone', value: '9884772048\n9884770583' },
    { icon: <Mail size={18} />, label: 'Email', value: 'info@gvvdriving.com\nsupport@gvvdriving.com' },
    { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Sat: 7:00 AM – 9:00 PM\nSunday: 7:00 AM – 1:00 PM' },
  ];

  return (
    <section id="contact" style={{ background: '#0d0d14', padding: '120px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1, background: '#d4a636' }} />
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, letterSpacing: 3, color: '#d4a636', textTransform: 'uppercase' }}>Enquiry Form</span>
            <div style={{ width: 40, height: 1, background: '#d4a636' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(36px,4vw,54px)', color: '#f5f0e4' }}>
            Submit Your <em style={{ color: '#d4a636' }}>Enquiry</em>
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: 16, color: 'rgba(245,240,228,0.5)', marginTop: 14, maxWidth: 560, margin: '14px auto 0' }}>
            Fill in your details, select a driving class, and mention which proof documents you have ready. We will contact you within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60, alignItems: 'start' }} className="contact-grid">
          <div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Open office location in Google Maps"
              style={{
                display: 'block', position: 'relative', marginBottom: 32, borderRadius: 8,
                overflow: 'hidden', border: '1px solid rgba(212,166,54,0.25)', textDecoration: 'none',
              }}
            >
              <iframe
                title="GVV Driving School office location"
                src={GOOGLE_MAPS_EMBED_URL}
                style={{ width: '100%', height: 220, border: 0, display: 'block', pointerEvents: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(6,6,10,0.15)',
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '10px 12px',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,6,10,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(6,6,10,0.15)'; }}
              >
                <span style={{
                  fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 1.5,
                  color: '#f5f0e4', background: 'rgba(212,166,54,0.9)', padding: '6px 12px',
                  borderRadius: 4, textTransform: 'uppercase',
                }}>
                  Open in Google Maps
                </span>
              </div>
            </a>
            {info.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 18, marginBottom: 28 }}>
                <div style={{ color: '#d4a636', marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2, color: '#d4a636', textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                  {item.mapsLink ? (
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Barlow', sans-serif", fontSize: 14, color: 'rgba(245,240,228,0.65)',
                        lineHeight: 1.7, textDecoration: 'none', display: 'inline-block',
                        borderBottom: '1px solid transparent', transition: 'color 0.3s ease, border-color 0.3s ease',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#d4a636'; e.currentTarget.style.borderColor = 'rgba(212,166,54,0.5)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,240,228,0.65)'; e.currentTarget.style.borderColor = 'transparent'; }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: 'rgba(245,240,228,0.65)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              {socialAppLinks.map(({ id, label, Icon, href }) => {
                const btnStyle = {
                  width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(212,166,54,0.08)', border: '1px solid rgba(212,166,54,0.2)',
                  borderRadius: 4, color: '#d4a636', cursor: 'pointer', transition: 'all 0.3s ease',
                  textDecoration: 'none',
                };
                const onEnter = (e) => {
                  e.currentTarget.style.background = '#d4a636';
                  e.currentTarget.style.color = '#06060a';
                };
                const onLeave = (e) => {
                  e.currentTarget.style.background = 'rgba(212,166,54,0.08)';
                  e.currentTarget.style.color = '#d4a636';
                };
                const content = <Icon size={22} />;

                return href ? (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    style={btnStyle}
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={id}
                    role="button"
                    tabIndex={0}
                    aria-label={label}
                    title={label}
                    style={btnStyle}
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: 40 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <CheckCircle size={56} color="#d4a636" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: '#f5f0e4', marginBottom: 12 }}>Enquiry Received!</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: 'rgba(245,240,228,0.6)', lineHeight: 1.7 }}>
                  Thank you. We will call you within 24 hours. Please bring all original proof documents when you visit for admission.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', drivingClass: '', proofs: [], message: '' }); }} style={{ marginTop: 28, background: 'none', border: '1px solid #d4a636', color: '#d4a636', padding: '10px 24px', borderRadius: 4, cursor: 'pointer', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 2, fontSize: 13, textTransform: 'uppercase' }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 2, color: '#d4a636', textTransform: 'uppercase', marginBottom: 8 }}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle} placeholder="Your name" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#d4a636'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 2, color: '#d4a636', textTransform: 'uppercase', marginBottom: 8 }}>Phone *</label>
                    <input name="phone" required value={form.phone} onChange={handle} placeholder="98XXXXXXXX" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#d4a636'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 2, color: '#d4a636', textTransform: 'uppercase', marginBottom: 8 }}>Email</label>
                  <input name="email" value={form.email} onChange={handle} placeholder="your@email.com" type="email" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#d4a636'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 2, color: '#d4a636', textTransform: 'uppercase', marginBottom: 8 }}>Driving Class *</label>
                  <select name="drivingClass" required value={form.drivingClass} onChange={handle} style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = '#d4a636'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                    <option value="" style={{ background: '#0d0d14' }}>Select driving class</option>
                    {drivingClasses.map(c => (
                      <option key={c.id} value={c.id} style={{ background: '#0d0d14' }}>
                        {c.title} — Total {c.totalFee}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedClass && (
                  <div style={{
                    marginBottom: 16, padding: '14px 16px', borderRadius: 6,
                    background: 'rgba(212,166,54,0.06)', border: '1px solid rgba(212,166,54,0.2)',
                  }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2, color: '#d4a636', marginBottom: 8, textTransform: 'uppercase' }}>
                      Fee for {selectedClass.title}: {selectedClass.totalFee}
                    </div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: 'rgba(245,240,228,0.55)', lineHeight: 1.6 }}>
                      <strong style={{ color: 'rgba(245,240,228,0.75)' }}>Documents required:</strong>{' '}
                      {selectedClass.proofs.join(' · ')}
                    </div>
                  </div>
                )}

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 2, color: '#d4a636', textTransform: 'uppercase', marginBottom: 10 }}>
                    <FileText size={12} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                    Proof Documents You Have Ready
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {proofOptions.map(p => (
                      <label key={p} style={{
                        display: 'flex', alignItems: 'center', gap: 6, padding: '8px 12px', borderRadius: 4, cursor: 'pointer',
                        background: form.proofs.includes(p) ? 'rgba(212,166,54,0.15)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${form.proofs.includes(p) ? '#d4a636' : 'rgba(255,255,255,0.1)'}`,
                        fontFamily: "'Barlow', sans-serif", fontSize: 12, color: form.proofs.includes(p) ? '#d4a636' : 'rgba(245,240,228,0.55)',
                        transition: 'all 0.2s ease',
                      }}>
                        <input type="checkbox" checked={form.proofs.includes(p)} onChange={() => toggleProof(p)} style={{ accentColor: '#d4a636' }} />
                        {p}
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: 'block', fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: 2, color: '#d4a636', textTransform: 'uppercase', marginBottom: 8 }}>Additional Message</label>
                  <textarea name="message" value={form.message} onChange={handle} placeholder="Preferred timings, questions about fees, or any other details..." rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                    onFocus={e => e.target.style.borderColor = '#d4a636'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <button type="submit" disabled={loading} style={{
                  width: '100%', background: loading ? 'rgba(212,166,54,0.5)' : 'linear-gradient(135deg, #d4a636, #f0c853)',
                  color: '#06060a', border: 'none', padding: '16px', borderRadius: 4, cursor: loading ? 'wait' : 'pointer',
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 2,
                  textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  transition: 'all 0.3s ease', boxShadow: loading ? 'none' : '0 8px 25px rgba(212,166,54,0.35)',
                }}>
                  {loading ? 'Sending...' : <><Send size={16} /> Submit Enquiry</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
