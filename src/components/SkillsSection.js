const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "JavaScript", "C++", "C"]
    },
    {
        title: "Web Development",
        skills: ["React.js", "Node.js", "Django", "HTML5 / CSS3", "Full-Stack Development"]
    },
    {
        title: "AI & Machine Learning",
        skills: ["Machine Learning", "Pandas & NumPy", "Scikit-learn", "TensorFlow"]
    }
];

function Skills() {
    return (
        <section id="skills" style={{ padding: "100px 60px", textAlign: "center" }}>
            <h2 className="gradient-text" style={{ fontSize: "40px", marginBottom: "50px" }}>My Skills</h2>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                flexWrap: "wrap",
                maxWidth: "1200px",
                margin: "0 auto"
            }}>
                {skillCategories.map((category, index) => (
                    <div key={index} className="glass-card animate-fade-in" style={{ padding: "40px", width: "350px", textAlign: "left" }}>
                        <h3 style={{ fontSize: "24px", marginBottom: "25px", color: "var(--text-primary)" }}>
                            {category.title}
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                            {category.skills.map((skill, sIndex) => (
                                <span key={sIndex} className="skill-chip">
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