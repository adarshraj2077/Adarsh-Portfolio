function Projects() {
    return (
        <section id="projects" style={{ padding: "100px 60px", textAlign: "center" }}>
            <h2 className="gradient-text" style={{ fontSize: "40px", marginBottom: "50px" }}>Featured Projects</h2>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                flexWrap: "wrap"
            }}>

                <div className="glass-card" style={{ padding: "40px", width: "350px", textAlign: "left" }}>
                    <div style={{ fontSize: "40px", marginBottom: "20px" }}>🔥</div>
                    <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "var(--text-primary)" }}>Wildfire Prediction using Deep Learning</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>Developed a CNN model to predict wildfires using environmental data.</p>
                    <div style={{ marginTop: "20px", color: "var(--accent-color)", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>View Live &rarr;</div>
                </div>

                <a 
                    href="http://localhost:5173/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ textDecoration: "none" }}
                >
                    <div className="glass-card" style={{ padding: "40px", width: "350px", textAlign: "left" }}>
                        <div style={{ fontSize: "40px", marginBottom: "20px" }}>📚</div>
                        <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "var(--text-primary)" }}>StudyTree – AI Assistant for Students</h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>Developed an AI student assistant focused on usability and productivity.</p>
                        <div style={{ marginTop: "20px", color: "var(--accent-color)", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>View Live &rarr;</div>
                    </div>
                </a>

            </div>
        </section>
    );
}

export default Projects;
