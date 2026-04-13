function Navbar() {
    return (
        <nav style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 60px",
            background: "rgba(15, 23, 42, 0.8)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid var(--glass-border)"
        }}>
            <h2 className="gradient-text" style={{ fontSize: "28px" }}>Portfolio</h2>

            <ul style={{
                display: "flex",
                gap: "40px",
                listStyle: "none",
                margin: 0
            }}>
                <li><a href="#home" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Home</a></li>
                <li><a href="#about" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>About</a></li>
                <li><a href="#skills" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Skills</a></li>
                <li><a href="#projects" style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 600, transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;