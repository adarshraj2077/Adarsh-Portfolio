const skillCategories = [
    {
        title: "Programming",
        eyebrow: "lang",
        skills: ["Python", "JavaScript", "C++", "C"],
        chipClass: "chip-cyan",
        accentColor: "var(--signal)",
    },
    {
        title: "Web Development",
        eyebrow: "web",
        skills: ["React.js", "Node.js", "Django", "HTML5 / CSS3", "Full-Stack"],
        chipClass: "chip-purple",
        accentColor: "#a78bfa",
    },
    {
        title: "AI & Machine Learning",
        eyebrow: "ml",
        skills: ["Machine Learning", "Pandas & NumPy", "Scikit-learn", "TensorFlow"],
        chipClass: "chip-indigo",
        accentColor: "var(--ember)",
    },
];

function Skills() {
    return (
        <section id="skills" style={{ padding: '100px 80px' }}>
            {/* Section header — left-aligned, breaking from "everything centered" */}
            <span className="section-eyebrow">skills.stack</span>
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
                        {/* Category eyebrow */}
                        <div style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            color: category.accentColor,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '10px',
                            opacity: 0.8,
                        }}>
                            {'// '}skills.{category.eyebrow}
                        </div>

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

            {/* Hairline decorative rule */}
            <div style={{
                marginTop: '64px',
                height: '1px',
                background: 'linear-gradient(to right, var(--signal), transparent)',
                maxWidth: '400px',
                opacity: 0.3,
            }} />
        </section>
    );
}

export default Skills;