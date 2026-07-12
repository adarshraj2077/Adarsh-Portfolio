function Navbar({ toggleTheme, theme }) {
    return (
        <nav style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 60px",
            background: theme === 'dark' ? 'rgba(15, 23, 42, 0.85)' : 'rgba(248, 250, 252, 0.85)',
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid var(--glass-border)"
        }}>
            <h2 className="gradient-text" style={{ fontSize: "28px" }}>Portfolio</h2>

            <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                <ul style={{
                    display: "flex",
                    gap: "25px",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    alignItems: "center"
                }}>
                    <li><a href="#home" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Home</a></li>
                    <li><a href="#about" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>About</a></li>
                    <li><a href="#skills" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Skills</a></li>
                    <li><a href="#experience" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Experience</a></li>
                    <li><a href="#projects" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Projects</a></li>
                    <li><a href="#contact" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Contact</a></li>
                </ul>

                {/* Resume Download Button */}
                <a 
                    href="#resume" 
                    download="Resume.pdf"
                    style={{
                        padding: "8px 18px",
                        background: "transparent",
                        border: "1px solid var(--accent-color)",
                        color: "var(--accent-color)",
                        borderRadius: "20px",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "14px",
                        transition: "all 0.3s"
                    }}
                    onMouseOver={(e) => {
                        e.target.style.background = "var(--accent-gradient)";
                        e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.background = "transparent";
                        e.target.style.color = "var(--accent-color)";
                    }}
                >
                    Resume
                </a>

                {/* Dark/Light Toggle Switch */}
                <div className="theme-toggle-container" onClick={toggleTheme}>
                    <div className="theme-toggle-track">
                        <div className="theme-toggle-thumb">
                            {theme === 'dark' ? '🌙' : '☀️'}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;