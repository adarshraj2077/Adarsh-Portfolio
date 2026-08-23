import { Suspense, lazy, useEffect, useState } from 'react';

const NeuralParticles = lazy(() => import('./NeuralParticles'));

const socials = [
    {
        href: "mailto:adarshin26@gmail.com",
        label: "Email",
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        )
    },
    {
        href: "https://github.com/adarshraj2077",
        label: "GitHub",
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        )
    },
    {
        href: "https://www.linkedin.com/in/adarsh-raj-129707364",
        label: "LinkedIn",
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    }
];

const metrics = [
    { value: '3', label: 'GitHub Repos' },
    { value: '5', label: 'Projects Built' },
    { value: '60', label: 'LeetCode Solved' },
    { value: 'KLPS', label: 'Interned At' },
];

const isTouchDevice = () =>
    typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

function Hero() {
    const [reducedMotion, setReducedMotion] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(mq.matches);
        setIsTouch(isTouchDevice());
        const handler = (e) => setReducedMotion(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const showParticles = !reducedMotion && !isTouch;

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignItems: 'center',
                padding: '120px 80px 80px',
                position: 'relative',
                gap: '40px',
            }}
        >
            {/* ─── LEFT COLUMN: Text content ─────────────────────────── */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Eyebrow tag */}
                <div className="hero-tag">AI &amp; Full-Stack Developer</div>

                {/* Name — Syne display face */}
                <h1
                    className="font-display"
                    style={{
                        fontSize: 'clamp(48px, 6vw, 80px)',
                        fontWeight: '800',
                        lineHeight: '1.05',
                        letterSpacing: '-2px',
                        marginBottom: '8px',
                        color: 'var(--text-primary)',
                    }}
                >
                    Adarsh
                    <br />
                    <span className="gradient-text">Raj</span>
                </h1>

                {/* University line */}
                <p
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        color: 'var(--mist)',
                        marginBottom: '24px',
                        letterSpacing: '0.04em',
                    }}
                >
                    <span style={{ color: 'var(--signal)', marginRight: '6px' }}>›</span>
                    BTech CSE (AI &amp; ML) · Manipal University Jaipur
                </p>

                {/* Hero subtitle */}
                <p
                    style={{
                        fontSize: '17px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.8',
                        maxWidth: '480px',
                        marginBottom: '40px',
                    }}
                >
                    CS undergraduate with hands-on experience in{' '}
                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                        Python, React, Django, and AI/ML
                    </span>
                    . Built production apps like{' '}
                    <a
                        href="#studytree-project"
                        style={{ color: 'var(--signal)', fontWeight: '600', textDecoration: 'none', borderBottom: '1px solid rgba(0,229,204,0.3)' }}
                    >
                        StudyTree
                    </a>{' '}
                    and interned at{' '}
                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>KLPS</span>.
                    Seeking Software Development, AI Engineering, or Full-Stack roles.
                </p>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
                    <a href="#studytree-project" className="btn-primary">
                        View My Work
                    </a>
                    <a href="/resume.pdf" download="Adarsh_Raj_Resume.pdf" className="btn-outline">
                        Download Resume
                    </a>
                </div>

                {/* Social Links */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    {socials.map(s => (
                        <a
                            key={s.label}
                            href={s.href}
                            target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="social-icon-link"
                            title={s.label}
                        >
                            {s.icon}
                        </a>
                    ))}
                    <span style={{ marginLeft: '8px', width: '40px', height: '1px', background: 'var(--glass-border)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--mist)', letterSpacing: '0.06em' }}>
                        Open to opportunities
                    </span>
                </div>

                {/* Metrics Strip */}
                <div className="metrics-strip">
                    {metrics.map((m, i) => (
                        <div key={i} className="metric-item">
                            <span className="metric-value">{m.value}</span>
                            <span className="metric-label">{m.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── RIGHT COLUMN: Neural particle canvas ──────────────── */}
            <div
                style={{
                    position: 'relative',
                    height: '100%',
                    minHeight: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {showParticles ? (
                    <Suspense fallback={<StaticNetworkFallback />}>
                        <NeuralParticles />
                    </Suspense>
                ) : (
                    <StaticNetworkFallback />
                )}
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '32px',
                    left: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: 0.4,
                }}
            >
                <div
                    style={{
                        width: '1px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, var(--signal), transparent)',
                        animation: 'floatY 2s ease-in-out infinite',
                    }}
                />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--mist)', letterSpacing: '0.1em' }}>
                    scroll
                </span>
            </div>
        </section>
    );
}

function StaticNetworkFallback() {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 400"
            style={{ opacity: 0.15, position: 'absolute', inset: 0 }}
            aria-hidden="true"
        >
            {[
                [200, 200], [80, 100], [320, 90], [60, 280], [340, 270],
                [160, 320], [260, 50], [120, 180], [300, 180], [200, 80],
            ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r={i === 0 ? 8 : 4} fill="#00E5CC" />
            ))}
            {[
                [200, 200, 80, 100], [200, 200, 320, 90], [200, 200, 60, 280],
                [200, 200, 340, 270], [200, 200, 160, 320], [200, 200, 260, 50],
                [80, 100, 260, 50], [320, 90, 260, 50], [120, 180, 80, 100],
                [300, 180, 320, 90], [120, 180, 60, 280], [300, 180, 340, 270],
            ].map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00E5CC" strokeWidth="0.5" />
            ))}
        </svg>
    );
}

export default Hero;
