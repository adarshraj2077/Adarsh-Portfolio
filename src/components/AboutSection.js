function About() {
    return (
        <section id="about" style={{ padding: "100px 60px", textAlign: "center", background: "var(--bg-color)" }}>
            <h2 className="gradient-text" style={{ fontSize: "40px", marginBottom: "30px" }}>About Me</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px", background: "var(--glass-bg)", borderRadius: "20px", border: "1px solid var(--glass-border)" }}>
                <p style={{ fontSize: "20px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
                    Aspiring Software Development Engineer passionate about AI and Machine Learning. Skilled in Python, Django, React, and SQL. A quick learner with strong leadership, teamwork, and problem-solving skills, eager to build innovative software solutions.
                </p>
            </div>
        </section>
    );
}

export default About;