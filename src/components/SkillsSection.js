const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["Python", "JavaScript", "C++", "C", "SQL"],
        chipClass: "chip-cyan",
        accentColor: "var(--signal)",
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React.js", "Node.js", "Django", "REST API", "TensorFlow", "Pandas & NumPy"],
        chipClass: "chip-purple",
        accentColor: "#a78bfa",
    },
    {
        title: "Databases & Tools",
        skills: ["SQLite", "MySQL", "Git", "GitHub", "VS Code"],
        chipClass: "chip-indigo",
        accentColor: "var(--ember)",
    },
];

function Skills() {
    return (
        <section id="skills" style={{ padding: '100px 80px' }}>
            <h2 className="gradient-text section-title">My Skills</h2>
            <div className="section-divider" />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                maxWidth: '1100px',
            }}>
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="glass-card"
                        style={{
                            padding: '32px',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            borderTop: `2px solid ${category.accentColor}`,
                        }}
                    >
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '20px',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '20px',
                        }}>
                            {category.title}
                        </h3>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {category.skills.map((skill, sIndex) => (
                                <span key={sIndex} className={`skill-chip ${category.chipClass}`}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Certifications strip */}
            <div style={{ marginTop: '48px', maxWidth: '1100px' }}>
                <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '16px',
                }}>
                    Certifications
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {[
                        'NPTEL – Deep Learning (Elite Certification)',
                        'Python Essentials 1 – Cisco Networking Academy & OpenEDG',
                        'Python Essentials 2 – Cisco Networking Academy & OpenEDG',
                    ].map((cert, i) => (
                        <div key={i} className="glass-card" style={{
                            padding: '12px 20px',
                            fontSize: '13px',
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}>
                            <span style={{ color: 'var(--signal)', fontSize: '16px' }}>✦</span>
                            {cert}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{
                marginTop: '48px',
                height: '1px',
                background: 'linear-gradient(to right, var(--signal), transparent)',
                maxWidth: '400px',
                opacity: 0.3,
            }} />
        </section>
    );
}

export default Skills;