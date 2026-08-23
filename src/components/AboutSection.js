function About() {
    const terminalLines = [
        { key: 'university', val: 'Manipal University Jaipur' },
        { key: 'degree', val: 'B.Tech CSE (AI & ML) · 2023–2027' },
        { key: 'focus', val: '["Deep Learning", "Full-Stack", "REST APIs"]' },
        { key: 'languages', val: 'Python, JavaScript, C++, C, SQL' },
        { key: 'frameworks', val: 'React, Django, Node.js, TensorFlow' },
        { key: 'databases', val: 'SQLite, MySQL' },
        { key: 'experience', val: 'ONGC Intern · Junior AI Engineer @ Karmaa Lab' },
        { key: 'status', val: '"Open to SDE / AI / Full-Stack roles"' },
    ];

    const highlights = [
        { icon: "🤖", label: "AI & ML", sub: "Deep Learning, CNNs, TensorFlow" },
        { icon: "🌐", label: "Full-Stack", sub: "React · Django · Node.js" },
        { icon: "🔬", label: "Research-minded", sub: "Wildfire prediction · Deepfake AI" },
        { icon: "🏆", label: "Builder", sub: "Ships production apps" },
    ];

    return (
        <section id="about" style={{ padding: '100px 80px' }}>
            <h2 className="gradient-text section-title">About Me</h2>
            <div className="section-divider" />

            {/* Asymmetric 60/40 grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '3fr 2fr',
                gap: '40px',
                alignItems: 'start',
                maxWidth: '1100px',
            }}>
                {/* LEFT — bio text */}
                <div>
                    <div className="glass-card" style={{
                        padding: '40px',
                        borderLeft: '3px solid var(--signal)',
                        borderRadius: '0 16px 16px 0',
                        marginBottom: '28px',
                    }}>
                        <p style={{ fontSize: '17px', color: 'var(--text-primary)', lineHeight: '1.9', marginBottom: '20px' }}>
                            Computer Science (AI &amp; ML) undergraduate at{' '}
                            <span style={{ color: 'var(--signal)', fontWeight: '600' }}>
                                Manipal University Jaipur
                            </span>{' '}
                            with hands-on experience in Python, React.js, Django, SQL, and AI/ML development.
                        </p>
                        <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                            Built deep-learning and web-based applications using TensorFlow, React, and Node.js.
                            Previously interned at{' '}
                            <span style={{ color: '#a78bfa', fontWeight: '600' }}>ONGC</span>{' '}
                            and at KLPS and worked as a{' '}
                            <span style={{ color: 'var(--ember)', fontWeight: '600' }}>
                                Junior AI Engineer at Karmaa Lab &amp; Plausibility Solutions
                            </span>
                            , where I built ScrapeFlow — a full-stack data scraping and job aggregation platform and many more projects.
                        </p>
                    </div>

                    {/* Highlight badges — 2x2 grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        {highlights.map((h, i) => (
                            <div key={i} className="glass-card" style={{
                                padding: '18px 20px',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                            }}>
                                <span style={{ fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>{h.icon}</span>
                                <div>
                                    <div style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '15px', marginBottom: '2px' }}>
                                        {h.label}
                                    </div>
                                    <div style={{ color: 'var(--mist)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                                        {h.sub}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT — terminal stats card */}
                <div className="terminal-card" style={{ position: 'sticky', top: '90px' }}>
                    <div className="term-body">
                        <div style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            color: 'var(--mist)',
                            marginBottom: '16px',
                            letterSpacing: '0.06em',
                        }}>
                            adarsh@portfolio:~$ cat profile.json
                        </div>
                        {terminalLines.map((line, i) => (
                            <div key={i} className="term-line">
                                <span className="term-prompt">›</span>
                                <span className="term-key">{line.key}:</span>
                                <span className="term-val">{line.val}</span>
                            </div>
                        ))}
                        <div className="term-line" style={{ marginTop: '12px' }}>
                            <span style={{ color: 'var(--signal)', fontSize: '13px' }}>
                                ▋
                                <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;