function Hero() {
    return (
        <section id="home" className="animate-fade-in" style={{ padding: "120px 60px", textAlign: "center", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 className="gradient-text" style={{ fontSize: "64px", marginBottom: "20px" }}>Hello, I'm Adarsh Raj</h1>
            <h3 style={{ fontSize: "28px", color: "var(--text-secondary)", marginBottom: "30px", fontWeight: "400" }}>BTech CSE (AI & ML) Student</h3>
            <p style={{ fontSize: "18px", maxWidth: "600px", color: "var(--text-primary)", marginBottom: "40px" }}>I build intelligent AI solutions and modern, interactive Web applications.</p>
            
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                <a 
                    href="#projects" 
                    style={{ 
                        padding: "15px 40px", 
                        background: "var(--accent-gradient)", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "30px", 
                        fontWeight: "bold", 
                        fontSize: "18px", 
                        transition: "all 0.3s", 
                        display: "inline-block",
                        boxShadow: "0 4px 15px rgba(56, 189, 248, 0.2)"
                    }} 
                    onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(56, 189, 248, 0.35)';
                    }} 
                    onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(56, 189, 248, 0.2)';
                    }}
                >
                    View My Work
                </a>
                
                <a 
                    href="/resume.pdf" 
                    download="Adarsh_Raj_Resume.pdf"
                    style={{ 
                        padding: "15px 40px", 
                        background: "transparent", 
                        border: "2px solid var(--accent-color)", 
                        color: "var(--accent-color)", 
                        textDecoration: "none", 
                        borderRadius: "30px", 
                        fontWeight: "bold", 
                        fontSize: "18px", 
                        transition: "all 0.3s", 
                        display: "inline-block"
                    }} 
                    onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.background = 'rgba(56, 189, 248, 0.1)';
                    }} 
                    onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.background = 'transparent';
                    }}
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
}

export default Hero;
