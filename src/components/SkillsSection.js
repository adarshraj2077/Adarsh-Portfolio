const skillCategories = [
    {
        title: "Programming",
        icon: "⌨️",
        skills: ["Python", "JavaScript", "C++", "C"],
        chipClass: "chip-cyan"
    },
    {
        title: "Web Development",
        icon: "🌐",
        skills: ["React.js", "Node.js", "Django", "HTML5 / CSS3", "Full-Stack Development"],
        chipClass: "chip-purple"
    },
    {
        title: "AI & Machine Learning",
        icon: "🤖",
        skills: ["Machine Learning", "Pandas & NumPy", "Scikit-learn", "TensorFlow"],
        chipClass: "chip-indigo"
    }
];

function Skills() {
    return (
        <section id="skills" style={{ padding: "100px 60px", textAlign: "center" }}>
            <h2 className="gradient-text section-title">My Skills</h2>
            <div className="section-divider" />

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "28px",
                maxWidth: "1100px",
                margin: "0 auto",
                width: "100%"
            }}>
                {skillCategories.map((category, index) => (
                    <div key={index} className="glass-card" style={{ padding: "36px", textAlign: "left", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
                            <span style={{ fontSize: "26px" }}>{category.icon}</span>
                            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", color: "var(--text-primary)", fontWeight: "700" }}>
                                {category.title}
                            </h3>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                            {category.skills.map((skill, sIndex) => (
                                <span key={sIndex} className={`skill-chip ${category.chipClass}`}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;