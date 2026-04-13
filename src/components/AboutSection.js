function About() {
    return (
        <section id="about" style={{ padding: "100px 60px", textAlign: "center", background: "var(--bg-color)" }}>
            <h2 className="gradient-text" style={{ fontSize: "40px", marginBottom: "30px" }}>About Me</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px", background: "var(--glass-bg)", borderRadius: "20px", border: "1px solid var(--glass-border)" }}>
                <p style={{ fontSize: "20px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
                    I am a passionate BTech CSE student specializing in Artificial Intelligence & Machine Learning.
                    I enjoy bridging the gap between complex AI algorithms and intuitive, beautiful web applications.
                    Always eager to learn new technologies and build solutions that matter.
                </p>
            </div>
        </section>
    );
}

export default About;