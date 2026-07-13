function About() {
    const highlights = [
        { icon: "🎓", label: "MUJ, Jaipur" },
        { icon: "🤖", label: "AI & ML Enthusiast" },
        { icon: "💻", label: "Full-Stack Developer" },
        { icon: "🏆", label: "Problem Solver" }
    ];

    return (
        <section id="about" style={{ padding: "100px 60px", textAlign: "center" }}>
            <h2 className="gradient-text section-title">About Me</h2>
            <div className="section-divider" />

            <div style={{ maxWidth: "860px", margin: "0 auto" }}>
                <div className="glass-card" style={{ padding: "50px", textAlign: "left", marginBottom: "32px" }}>
                    <p style={{ fontSize: "19px", color: "var(--text-primary)", lineHeight: "1.9", opacity: 0.88 }}>
                        Aspiring Software Development Engineer passionate about
                        <span style={{ color: "var(--accent-color)", fontWeight: "600" }}> AI and Machine Learning</span>.
                        Skilled in Python, Django, React, and SQL. A quick learner with strong leadership, teamwork, and
                        problem-solving skills, eager to build
                        <span style={{ color: "#a78bfa", fontWeight: "600" }}> innovative software solutions</span> that create real-world impact.
                    </p>
                </div>

                {/* Highlight badges */}
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                    {highlights.map((h, i) => (
                        <div key={i} className="glass-card" style={{
                            padding: "16px 24px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            flexGrow: 1,
                            justifyContent: "center",
                            minWidth: "160px"
                        }}>
                            <span style={{ fontSize: "22px" }}>{h.icon}</span>
                            <span style={{ color: "var(--text-primary)", fontWeight: "600", fontSize: "15px" }}>{h.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;