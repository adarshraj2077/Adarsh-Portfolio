import { useState } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Credentials ──────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_79e9wm9';
const EMAILJS_TEMPLATE_ID = 'template_8h8bbay';
const EMAILJS_PUBLIC_KEY  = 'MvSQ-KGZiOf-nUoSc';
// ─────────────────────────────────────────────────────────────────────────

const socialLinks = [
    {
        href: "mailto:adarshin26@gmail.com",
        label: "adarshin26@gmail.com",
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
        ),
        color: "rgba(0,212,255,0.15)",
        borderColor: "rgba(0,212,255,0.3)",
        textColor: "#00d4ff"
    },
    {
        href: "https://github.com/adarshraj2077",
        label: "github.com/adarshraj2077",
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
        ),
        color: "rgba(139,92,246,0.12)",
        borderColor: "rgba(139,92,246,0.3)",
        textColor: "#a78bfa"
    },
    {
        href: "https://www.linkedin.com/in/adarsh-raj-129707364",
        label: "linkedin.com/in/adarsh-raj",
        icon: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        ),
        color: "rgba(244,114,182,0.12)",
        borderColor: "rgba(244,114,182,0.3)",
        textColor: "#f472b6"
    }
];

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name.trim())    newErrors.name    = 'Name is required';
        if (!formData.email.trim())   newErrors.email   = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email address';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

        setStatus('sending');

        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                name:     formData.name,
                email:    formData.email,
                message:  formData.message,
                title:    `Message from ${formData.name}`,
                reply_to: formData.email,
            },
            EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(null), 6000);
        })
        .catch((err) => {
            console.error('EmailJS error:', err);
            setStatus('error');
            setTimeout(() => setStatus(null), 5000);
        });
    };

    return (
        <section id="contact" style={{ padding: "100px 60px 0" }}>
            <div style={{ textAlign: "center" }}>
                <h2 className="gradient-text section-title">Get In Touch</h2>
                <div className="section-divider" />
                <p style={{ color: "var(--text-secondary)", fontSize: "17px", maxWidth: "520px", margin: "0 auto 50px auto", lineHeight: "1.7" }}>
                    Have a project in mind or want to collaborate? Feel free to reach out — I'd love to connect!
                </p>
            </div>

            {/* Social Links Cards */}
            <div style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
                maxWidth: "860px",
                margin: "0 auto 60px auto"
            }}>
                {socialLinks.map((s, i) => (
                    <a
                        key={i}
                        href={s.href}
                        target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "16px 24px",
                            background: s.color,
                            border: `1px solid ${s.borderColor}`,
                            borderRadius: "14px",
                            textDecoration: "none",
                            color: s.textColor,
                            fontWeight: "600",
                            fontSize: "14px",
                            transition: "all 0.3s",
                            flex: "1",
                            minWidth: "220px",
                            justifyContent: "center"
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 30px ${s.borderColor}`; }}
                        onMouseOut={(e)  => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                        {s.icon}
                        {s.label}
                    </a>
                ))}
            </div>

            {/* Contact Form */}
            <div className="glass-card" style={{ maxWidth: "600px", margin: "0 auto", padding: "44px", textAlign: "left" }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "6px" }}>
                        <label style={{ display: "block", color: "var(--text-primary)", fontWeight: "600", marginBottom: "8px", fontSize: "14px" }}>Name</label>
                        <input
                            type="text" name="name" value={formData.name} onChange={handleChange}
                            placeholder="Your Name" className="contact-input"
                        />
                        {errors.name && <span style={{ color: "#f472b6", fontSize: "13px", display: "block", marginTop: "-12px", marginBottom: "10px" }}>{errors.name}</span>}
                    </div>

                    <div style={{ marginBottom: "6px" }}>
                        <label style={{ display: "block", color: "var(--text-primary)", fontWeight: "600", marginBottom: "8px", fontSize: "14px" }}>Email</label>
                        <input
                            type="email" name="email" value={formData.email} onChange={handleChange}
                            placeholder="your@email.com" className="contact-input"
                        />
                        {errors.email && <span style={{ color: "#f472b6", fontSize: "13px", display: "block", marginTop: "-12px", marginBottom: "10px" }}>{errors.email}</span>}
                    </div>

                    <div style={{ marginBottom: "28px" }}>
                        <label style={{ display: "block", color: "var(--text-primary)", fontWeight: "600", marginBottom: "8px", fontSize: "14px" }}>Message</label>
                        <textarea
                            name="message" value={formData.message} onChange={handleChange}
                            placeholder="Tell me about your project or idea..." className="contact-input"
                            rows="5" style={{ resize: "vertical" }}
                        />
                        {errors.message && <span style={{ color: "#f472b6", fontSize: "13px", display: "block", marginTop: "-22px", marginBottom: "10px" }}>{errors.message}</span>}
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <button type="submit" className="contact-submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message ✦'}
                        </button>
                    </div>
                </form>

                {status === 'success' && (
                    <div style={{
                        marginTop: "24px", padding: "16px",
                        background: "rgba(34, 197, 94, 0.08)",
                        border: "1px solid rgba(34, 197, 94, 0.3)",
                        color: "#4ade80",
                        borderRadius: "10px", textAlign: "center", fontWeight: "600"
                    }}>
                        ✓ Message sent! I'll get back to you at <strong>{formData.email || 'your email'}</strong> soon.
                    </div>
                )}

                {status === 'error' && (
                    <div style={{
                        marginTop: "24px", padding: "16px",
                        background: "rgba(239, 68, 68, 0.08)",
                        border: "1px solid rgba(239, 68, 68, 0.3)",
                        color: "#f87171",
                        borderRadius: "10px", textAlign: "center", fontWeight: "600"
                    }}>
                        ✗ Something went wrong. Please email me directly at <strong>adarshin26@gmail.com</strong>
                    </div>
                )}
            </div>

            {/* Footer Strip */}
            <div className="footer-strip" style={{ marginTop: "80px" }}>
                <span style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                    © 2025 <span style={{ color: "var(--accent-color)", fontWeight: "600" }}>Adarsh Raj</span>. All rights reserved.
                </span>
                <div style={{ display: "flex", gap: "10px" }}>
                    {socialLinks.map((s, i) => (
                        <a
                            key={i}
                            href={s.href}
                            target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="social-icon-link"
                            title={s.label}
                            style={{ width: "36px", height: "36px", fontSize: "16px" }}
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
