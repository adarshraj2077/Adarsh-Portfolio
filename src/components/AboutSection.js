function About() {
    const terminalLines = [
        { key: 'university',  val: 'Manipal University Jaipur' },
        { key: 'degree',      val: 'BTech CSE (AI & ML) · 2023–2027' },
        { key: 'focus',       val: '["Deep Learning", "Full-Stack", "Agents"]' },
        { key: 'languages',   val: 'Python, JavaScript, C++' },
        { key: 'frameworks',  val: 'React, Django, Node.js, TensorFlow' },
        { key: 'status',      val: '"Open to internships & projects"' },
    ];

    const highlights = [
        { icon: "🤖", label: "AI & ML",        sub: "Deep Learning, CNNs, NLP" },
        { icon: "🌐", label: "Full-Stack",      sub: "React · Node.js · Django" },
        { icon: "🔬", label: "Research-minded", sub: "Wildfire prediction, Deepfake AI" },
        { icon: "🏆", label: "Builder",         sub: "Ships production apps" },
    ];

    return (
        <section id="about" style={{ padding: '100px 80px' }}>
            {/* Section header */}
            <span className="section-eyebrow">about.me</span>
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
                            Aspiring SDE passionate about{' '}
                            <span style={{ color: 'var(--signal)', fontWeight: '600' }}>
                                AI and Machine Learning
                            </span>
                            . I build systems that go beyond demos — from training CNNs on satellite raster data to shipping full-stack apps used by real students.
                        </p>
                        <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                            Skilled in Python, Django, React, and SQL. Quick learner with a bias for{' '}
                            <span style={{ color: '#a78bfa', fontWeight: '600' }}>
                                building things that work in production
                            </span>
                            , not just in notebooks.
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