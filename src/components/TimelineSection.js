const timelineList = [
    {
        id: 1,
        title: "BTech CSE (AI & ML)",
        institution: "Manipal University Jaipur",
        date: "2023 – 2027",
        side: "left",
        details: "Focusing on Deep Learning, Algorithms, Database Systems, and Neural Networks. Actively building projects with modern tech stacks and contributing to real-world AI systems.",
        accent: "var(--signal)",
    },
    {
        id: 2,
        title: "Full-Stack & ML Project Developer",
        institution: "Personal / Open Source",
        date: "2024 – Present",
        side: "right",
        details: "Building production-grade web applications using React, Django, Node.js, and implementing deep learning algorithms — from wildfire prediction CNNs to an agentic deepfake audio detector.",
        accent: "#a78bfa",
    },
    {
        id: 3,
        title: "Open Source Contributor",
        institution: "GitHub Community",
        date: "2024 – Present",
        side: "left",
        details: "Contributing to Python libraries, fixing UI bugs in popular repositories, and writing clean, standardized code. GitHub: github.com/adarshraj2077",
        accent: "var(--ember)",
    },
];

function Timeline() {
    return (
        <section id="experience" style={{ padding: '100px 80px' }}>
            <span className="section-eyebrow">experience.journey</span>
            <h2 className="gradient-text section-title">My Journey</h2>
            <div className="section-divider" />

            <div className="timeline-container">
                {timelineList.map((item) => (
                    <div key={item.id} className={`timeline-item ${item.side}`}>
                        <div className="glass-card timeline-content" style={{
                            borderTop: `2px solid ${item.accent}`,
                        }}>
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                color: item.accent,
                                fontWeight: '600',
                                fontSize: '11px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                            }}>
                                {item.date}
                            </span>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '18px',
                                fontWeight: '700',
                                marginTop: '8px',
                                marginBottom: '4px',
                                color: 'var(--text-primary)',
                            }}>
                                {item.title}
                            </h3>
                            <h4 style={{
                                fontSize: '13px',
                                color: 'var(--mist)',
                                marginBottom: '12px',
                                fontWeight: '500',
                                fontFamily: 'var(--font-mono)',
                            }}>
                                {item.institution}
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
                                {item.details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Timeline;
