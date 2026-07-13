function Hero() {
    const socials = [
        {
            href: "mailto:adarshin26@gmail.com",
            label: "Email",
            icon: (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
            )
        },
        {
            href: "https://github.com/adarshraj2077",
            label: "GitHub",
            icon: (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
            )
        },
        {
            href: "https://www.linkedin.com/in/adarsh-raj-129707364",
            label: "LinkedIn",
            icon: (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        }
    ];

    return (
        <section id="home" className="animate-fade-in" style={{
            padding: "130px 60px 100px",
            textAlign: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
        }}>
            {/* Tag line */}
            <div className="hero-tag">AI & Full-Stack Developer</div>

            <h1 className="gradient-text" style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "72px",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom: "20px",
                letterSpacing: "-1.5px"
            }}>
                Hello, I'm<br />Adarsh Raj
            </h1>

            <h3 style={{
                fontSize: "22px",
                color: "var(--text-secondary)",
                marginBottom: "18px",
                fontWeight: "400"
            }}>
                BTech CSE (AI &amp; ML) · Manipal University Jaipur
            </h3>

            <p style={{
                fontSize: "18px",
                maxWidth: "560px",
                color: "var(--text-primary)",
                marginBottom: "44px",
                opacity: 0.8,
                lineHeight: "1.75"
            }}>
                I build intelligent AI solutions and modern, interactive web applications that make a real difference.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "48px" }}>
                <a
                    href="#projects"
                    style={{
                        padding: "14px 38px",
                        background: "var(--accent-gradient)",
                        color: "#060b18",
                        textDecoration: "none",
                        borderRadius: "100px",
                        fontWeight: "700",
                        fontSize: "16px",
                        transition: "all 0.3s",
                        display: "inline-block",
                        boxShadow: "0 6px 24px rgba(0, 212, 255, 0.3)"
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.45)'; }}
                    onMouseOut={(e)  => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 212, 255, 0.3)'; }}
                >
                    View My Work
                </a>

                <a
                    href="/resume.pdf"
                    download="Adarsh_Raj_Resume.pdf"
                    style={{
                        padding: "14px 38px",
                        background: "transparent",
                        border: "2px solid rgba(0, 212, 255, 0.5)",
                        color: "var(--accent-color)",
                        textDecoration: "none",
                        borderRadius: "100px",
                        fontWeight: "700",
                        fontSize: "16px",
                        transition: "all 0.3s",
                        display: "inline-block"
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }}
                    onMouseOut={(e)  => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)'; }}
                >
                    Download Resume
                </a>
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                {socials.map(s => (
                    <a
                        key={s.label}
                        href={s.href}
                        target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="social-icon-link"
                        title={s.label}
                    >
                        {s.icon}
                    </a>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                opacity: 0.5
            }}>
                <div style={{
                    width: "1px",
                    height: "50px",
                    background: "linear-gradient(to bottom, var(--accent-color), transparent)",
                    animation: "floatY 2s ease-in-out infinite"
                }} />
            </div>
        </section>
    );
}

export default Hero;
