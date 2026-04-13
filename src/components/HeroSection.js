function Hero() {
    return (
        <section id="home" className="animate-fade-in" style={{ padding: "120px 60px", textAlign: "center", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 className="gradient-text" style={{ fontSize: "64px", marginBottom: "20px" }}>Hello, I'm Adarsh Raj</h1>
            <h3 style={{ fontSize: "28px", color: "var(--text-secondary)", marginBottom: "30px", fontWeight: "400" }}>BTech CSE (AI & ML) Student</h3>
            <p style={{ fontSize: "18px", maxWidth: "600px", color: "var(--text-primary)", marginBottom: "40px" }}>I build intelligent AI solutions and modern, interactive Web applications.</p>
            <a href="#projects" style={{ padding: "15px 40px", background: "var(--accent-gradient)", color: "white", textDecoration: "none", borderRadius: "30px", fontWeight: "bold", fontSize: "18px", transition: "transform 0.3s", display: "inline-block" }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>View My Work</a>
        </section>
    );
}

export default Hero;
