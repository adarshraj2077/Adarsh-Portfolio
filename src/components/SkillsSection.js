function Skills() {
    return (
        <section id="skills" style={{ padding: "100px 60px", textAlign: "center" }}>
            <h2 className="gradient-text" style={{ fontSize: "40px", marginBottom: "50px" }}>My Skills</h2>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                flexWrap: "wrap"
            }}>

                <div className="card" style={{ padding: "40px", width: "280px", textAlign: "left" }}>
                    <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "var(--text-primary)" }}>Programming</h3>
                    <p style={{ color: "var(--accent-color)", fontWeight: "600", marginBottom: "10px" }}>Python</p>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "10px" }}>JavaScript</p>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "10px" }}>C++</p>
                </div>

                <div className="card" style={{ padding: "40px", width: "280px", textAlign: "left" }}>
                    <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "var(--text-primary)" }}>AI / ML</h3>
                    <p style={{ color: "var(--accent-color)", fontWeight: "600", marginBottom: "10px" }}>Pandas & NumPy</p>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "10px" }}>Scikit-learn</p>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "10px" }}>TensorFlow</p>
                </div>

                <div className="card" style={{ padding: "40px", width: "280px", textAlign: "left" }}>
                    <h3 style={{ fontSize: "24px", marginBottom: "20px", color: "var(--text-primary)" }}>Web Dev</h3>
                    <p style={{ color: "var(--accent-color)", fontWeight: "600", marginBottom: "10px" }}>React.js</p>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "10px" }}>HTML5 / CSS3</p>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "10px" }}>Node.js</p>
                </div>

            </div>
        </section>
    );
}

export default Skills;