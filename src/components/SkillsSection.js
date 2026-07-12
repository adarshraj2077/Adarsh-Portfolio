const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "JavaScript", "C++", "C"],
        chipClass: "chip-cyan"
    },
    {
        title: "Web Development",
        skills: ["React.js", "Node.js", "Django", "HTML5 / CSS3", "Full-Stack Development"],
        chipClass: "chip-purple"
    },
    {
        title: "AI & Machine Learning",
        skills: ["Machine Learning", "Pandas & NumPy", "Scikit-learn", "TensorFlow"],
        chipClass: "chip-indigo"
    }
];

function Skills() {
    return (
        <section id="skills" style={{ padding: "100px 60px", textAlign: "center" }}>
            <h2 className="gradient-text" style={{ fontSize: "40px", marginBottom: "50px" }}>My Skills</h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "40px",
                maxWidth: "1100px",
                margin: "0 auto",
                width: "100%"
            }}>
                {skillCategories.map((category, index) => (
                    <div key={index} className="glass-card animate-fade-in" style={{ padding: "40px", textAlign: "left", display: "flex", flexDirection: "column" }}>
                        <h3 style={{ fontSize: "24px", marginBottom: "25px", color: "var(--text-primary)" }}>
                            {category.title}
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
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