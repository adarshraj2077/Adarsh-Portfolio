import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

const noHover = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

const projectsList = [
    {
        id: 1,
        title: "ScrapeFlow – Job Aggregation Platform",
        emoji: "⚙️",
        accentColor: "var(--signal)",
        accentRgb: "0, 229, 204",
        description: "Full-stack data scraping and job aggregation platform integrating Adzuna, Jooble, JSearch, and SerpAPI with job normalization and provider-priority ranking.",
        details: "Developed at Karmaa Lab & Plausibility Solutions. Built using Django, DRF, React, Vite, Tailwind CSS, and SQLite. Integrated multiple job APIs with normalization, deduplication, and provider-priority ranking. Built automated college, company, and LinkedIn scraping workflows with structured data extraction and JD matching. REST APIs and dashboard features for scraper management, search history, and centralized data storage.",
        techStack: ["Django", "DRF", "React", "Vite", "Tailwind CSS", "SQLite", "REST API"],
        challenges: "Integrating multiple job APIs with conflicting data schemas and implementing deduplication logic across providers while maintaining fast response times.",
        liveLink: "#",
        featured: false,
    },
    {
        id: 2,
        title: "StudyTree – AI Study Assistant",
        emoji: "📚",
        accentColor: "var(--signal)",
        accentRgb: "0, 229, 204",
        description: "Responsive React.js frontend for an AI-powered student assistant platform with study-organization features including calendar, tasks, and AI flashcard generation.",
        details: "StudyTree is a production-deployed full-stack app giving students a single workspace for study management. Features calendar, task management, AI flashcard generation (OpenAI API), and an interactive chatbot that parses multi-page course syllabus PDFs to answer context-aware questions.",
        techStack: ["React.js", "Node.js", "Express", "MongoDB", "OpenAI API"],
        challenges: "Designing context-aware chatbot memory while maintaining fast response times and ensuring secure parsing of multi-page user PDFs at scale.",
        liveLink: "https://study-tree-one.vercel.app/",
        featured: true,  // rendered as wide featured card
    },
    {
        id: 3,
        title: "Wildfire Prediction via Deep Learning",
        emoji: "🔥",
        accentColor: "#8b5cf6",
        accentRgb: "139, 92, 246",
        description: "CNN-based wildfire prediction model using Python, TensorFlow, Pandas, and NumPy. Achieved 88.73% validation accuracy through hyperparameter tuning.",
        details: "Developed a CNN-based wildfire prediction model by processing and analyzing environmental datasets through feature engineering and data preprocessing. Applied hyperparameter tuning to optimize model performance and achieved 88.73% validation accuracy. Integrated GIS coordinates for real-time high-risk area mapping.",
        techStack: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "GIS"],
        challenges: "Handling highly imbalanced datasets (few wildfire events vs. many non-events) and processing large environmental raster files efficiently in memory.",
        liveLink: "#",
        featured: false,
    },
    {
        id: 4,
        title: "LiveKit Meet – Video Conferencing App",
        emoji: "🎥",
        accentColor: "var(--ember)",
        accentRgb: "255, 107, 53",
        description: "Customized an existing LiveKit-based video conferencing platform using Next.js and TypeScript with company-specific meeting UI and administrative functionality.",
        details: "Customized a LiveKit-based video conferencing platform using Next.js and TypeScript to meet company-specific meeting requirements. Developed and integrated custom meeting UI, controls, and administrative functionality on top of the existing LiveKit infrastructure. Built during internship at Karmaa Lab & Plausibility Solutions.",
        techStack: ["Next.js", "TypeScript", "LiveKit", "React"],
        challenges: "Extending an existing LiveKit infrastructure without breaking core functionality while adding company-specific meeting controls and admin features.",
        liveLink: "#",
        featured: false,
    },
];

const featuredProject = projectsList.find(p => p.featured);
const regularProjects = projectsList.filter(p => !p.featured);

function ProjectModal({ project, onClose }) {
    if (!project) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                    &times;
                </button>
                <div style={{ fontSize: '44px', marginBottom: '12px' }}>{project.emoji}</div>
                <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    fontWeight: '800',
                    color: 'var(--text-primary)',
                    marginBottom: '24px',
                }}>
                    {project.title}
                </h3>
                <div style={{ textAlign: 'left' }}>
                    <h4 style={{ fontFamily: 'var(--font-mono)', color: 'var(--signal)', marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Overview
                    </h4>
                    <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', marginBottom: '24px', opacity: 0.9 }}>
                        {project.details}
                    </p>
                    <h4 style={{ fontFamily: 'var(--font-mono)', color: 'var(--ember)', marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Key Challenge
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
                        {project.challenges}
                    </p>
                    <h4 style={{ fontFamily: 'var(--font-mono)', color: '#a78bfa', marginBottom: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Tech Stack
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                        {project.techStack.map((tech, idx) => (
                            <span key={idx} style={{
                                background: 'rgba(0, 229, 204, 0.07)',
                                color: 'var(--signal)',
                                padding: '5px 12px',
                                borderRadius: '4px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '12px',
                                fontWeight: '600',
                                border: '1px solid rgba(0,229,204,0.15)',
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    {project.liveLink !== '#' && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block' }}>
                            View Live Site ↗
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [reducedMotion] = useState(
        () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
    const tiltEnabled = !noHover && !reducedMotion;

    return (
        <section id="projects" style={{ padding: '100px 80px' }}>
            <h2 className="gradient-text section-title">Featured Projects</h2>
            <div className="section-divider" />

            {/* ── FEATURED CARD (full-width horizontal) ──────────────── */}
            {featuredProject && (
                <div
                    id="studytree-project"
                    className="glass-card"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1.6fr',
                        gap: '0',
                        marginBottom: '28px',
                        borderTop: `2px solid ${featuredProject.accentColor}`,
                        cursor: 'pointer',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                    onClick={() => setSelectedProject(featuredProject)}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(featuredProject)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View details for ${featuredProject.title}`}
                >
                    {/* Left panel — identity */}
                    <div style={{
                        padding: '44px',
                        borderRight: '1px solid var(--glass-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        background: 'rgba(0,229,204,0.03)',
                        position: 'relative',
                    }}>
                        {/* Glow */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'radial-gradient(circle at 20% 50%, rgba(0,229,204,0.07), transparent 70%)',
                            pointerEvents: 'none',
                        }} />

                        <div>
                            {/* Featured badge */}
                            <div style={{
                                display: 'inline-block',
                                padding: '3px 10px',
                                borderRadius: '3px',
                                background: 'rgba(0,229,204,0.1)',
                                border: '1px solid rgba(0,229,204,0.25)',
                                color: 'var(--signal)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '10px',
                                fontWeight: '700',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginBottom: '20px',
                            }}>
                                ✦ Live Project
                            </div>

                            <div style={{ fontSize: '48px', marginBottom: '16px' }}>{featuredProject.emoji}</div>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '26px',
                                fontWeight: '800',
                                color: 'var(--text-primary)',
                                lineHeight: '1.2',
                                marginBottom: '16px',
                            }}>
                                {featuredProject.title}
                            </h3>
                        </div>

                        {/* Tech chips */}
                        <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                                {featuredProject.techStack.map((t, i) => (
                                    <span key={i} style={{
                                        padding: '4px 10px',
                                        borderRadius: '3px',
                                        background: 'rgba(0,229,204,0.07)',
                                        border: '1px solid rgba(0,229,204,0.2)',
                                        color: 'var(--signal)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '11px',
                                        fontWeight: '600',
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={featuredProject.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{ display: 'inline-block', fontSize: '13px', padding: '10px 24px' }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Live Site ↗
                            </a>
                        </div>
                    </div>

                    {/* Right panel — description */}
                    <div style={{
                        padding: '44px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <p style={{
                            fontSize: '16px',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.85',
                            marginBottom: '28px',
                        }}>
                            {featuredProject.details}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ height: '1px', flex: 1, background: 'var(--glass-border)' }} />
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '11px',
                                color: 'var(--mist)',
                                letterSpacing: '0.06em',
                            }}>
                                click to expand
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* ── 3 REGULAR CARDS ────────────────────────────────────── */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
            }}>
                {regularProjects.map((project) => (
                    <Tilt
                        key={project.id}
                        tiltEnable={tiltEnabled}
                        tiltMaxAngleX={7}
                        tiltMaxAngleY={7}
                        glareEnable={tiltEnabled}
                        glareMaxOpacity={0.09}
                        glareColor={project.accentColor === 'var(--signal)' ? '#00E5CC' : (project.accentColor === 'var(--ember)' ? '#FF6B35' : '#8b5cf6')}
                        glarePosition="all"
                        scale={1.02}
                        transitionSpeed={600}
                        style={{ borderRadius: '16px', height: '100%' }}
                    >
                        <div
                            className="glass-card"
                            style={{
                                padding: '28px',
                                textAlign: 'left',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100%',
                                borderTop: `2px solid ${project.accentColor}`,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            onClick={() => setSelectedProject(project)}
                            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                            tabIndex={0}
                            role="button"
                            aria-label={`View details for ${project.title}`}
                        >
                            {/* Glow */}
                            <div style={{
                                position: 'absolute', top: 0, right: 0,
                                width: '120px', height: '120px',
                                background: `radial-gradient(circle at top right, rgba(${project.accentRgb},0.1), transparent 70%)`,
                                pointerEvents: 'none',
                            }} />

                            <div style={{ fontSize: '32px', marginBottom: '14px' }}>{project.emoji}</div>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '18px',
                                fontWeight: '700',
                                marginBottom: '10px',
                                color: 'var(--text-primary)',
                                lineHeight: '1.3',
                            }}>
                                {project.title}
                            </h3>
                            <p style={{
                                color: 'var(--text-secondary)',
                                lineHeight: '1.7',
                                fontSize: '13.5px',
                                marginBottom: '20px',
                                flex: 1,
                            }}>
                                {project.description}
                            </p>

                            {/* Tech chips */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '20px' }}>
                                {project.techStack.slice(0, 3).map((t, i) => (
                                    <span key={i} style={{
                                        padding: '3px 9px',
                                        borderRadius: '3px',
                                        background: `rgba(${project.accentRgb}, 0.07)`,
                                        border: `1px solid rgba(${project.accentRgb}, 0.2)`,
                                        color: project.accentColor,
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '10px',
                                        fontWeight: '600',
                                    }}>
                                        {t}
                                    </span>
                                ))}
                                {project.techStack.length > 3 && (
                                    <span style={{
                                        padding: '3px 9px',
                                        borderRadius: '3px',
                                        background: 'rgba(122,144,184,0.07)',
                                        border: '1px solid rgba(122,144,184,0.15)',
                                        color: 'var(--mist)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '10px',
                                    }}>
                                        +{project.techStack.length - 3}
                                    </span>
                                )}
                            </div>

                            <div style={{
                                color: project.accentColor,
                                fontFamily: 'var(--font-mono)',
                                fontWeight: '600',
                                fontSize: '11px',
                                letterSpacing: '0.08em',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                marginTop: 'auto',
                            }}>
                                view_details
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
}

export default Projects;
