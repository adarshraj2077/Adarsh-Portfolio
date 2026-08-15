function Navbar({ toggleTheme, theme }) {
    const navLinks = [
        { href: '#home',     label: 'Home' },
        { href: '#about',    label: 'About' },
        { href: '#skills',   label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact',  label: 'Contact' },
    ];

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '18px 80px',
            background: theme === 'dark'
                ? 'rgba(8, 12, 20, 0.9)'
                : 'rgba(240, 244, 252, 0.9)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--glass-border)',
        }}>
            {/* Logo mark — sharp rectangle (0px radius) + monospace identity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '0',           /* deliberate sharp corner */
                    background: 'var(--signal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '700',
                    fontSize: '14px',
                    color: 'var(--ink)',
                    letterSpacing: '-1px',
                    flexShrink: 0,
                }}>AR</div>
                <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.5px',
                }}>
                    Adarsh Raj
                </span>
            </div>

            {/* Nav links + actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                <ul style={{
                    display: 'flex',
                    gap: '28px',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    alignItems: 'center',
                }}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href} className="nav-link">{link.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Resume button — sharp corners matching logo */}
                <a
                    href="/resume.pdf"
                    download="Adarsh_Raj_Resume.pdf"
                    style={{
                        padding: '8px 18px',
                        background: 'transparent',
                        border: '1px solid var(--signal)',
                        color: 'var(--signal)',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '13px',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.04em',
                        transition: 'all 0.2s',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'var(--signal)';
                        e.currentTarget.style.color = 'var(--ink)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--signal)';
                    }}
                >
                    resume.pdf
                </a>

                {/* Theme toggle */}
                <div
                    className="theme-toggle-container"
                    onClick={toggleTheme}
                    role="button"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
                >
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