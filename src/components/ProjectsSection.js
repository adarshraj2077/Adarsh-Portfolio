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
        isStrongest: false,
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
        isStrongest: true,
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
        isStrongest: false,
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
        isStrongest: false,
    },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [reducedMotion] = useState(
        () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    const tiltEnabled = !noHover && !reducedMotion;

    return (
        <section id="projects" style={{ padding: '100px 80px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="gradient-text section-title">Featured Projects</h2>
            <div className="section-divider" />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '28px',
            }}>
                {projectsList.map((project) => (
                    <Tilt
                        key={project.id}
                        tiltEnable={tiltEnabled}
                        tiltMaxAngleX={8}
                        tiltMaxAngleY={8}
                        glareEnable={tiltEnabled}
                        glareMaxOpacity={0.1}
                        glareColor={project.accentColor === 'var(--signal)' ? '#00E5CC' : '#FF6B35'}
                        glarePosition="all"
                        scale={1.02}
                        transitionSpeed={600}
                        style={{ borderRadius: '16px' }}
                    >
                        <div
                            id={project.isStrongest ? 'studytree-project' : undefined}
                            className="glass-card"
                            style={{
                                padding: '32px',
                                textAlign: 'left',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100%',
                                borderTop: `2px solid ${project.accentColor}`,
                            }}
                            onClick={() => setSelectedProject(project)}
                            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                            tabIndex={0}
                            role="button"
                            aria-label={`View details for ${project.title}`}
                        >
                            <div style={{
                                position: 'absolute', top: 0, right: 0,
                                width: '140px', height: '140px',
                                background: `radial-gradient(circle at top right, rgba(${project.accentRgb},0.1), transparent 70%)`,
                                pointerEvents: 'none',
                            }} />

                            <div style={{ fontSize: '36px', marginBottom: '16px' }}>{project.emoji}</div>
                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '20px',
                                fontWeight: '700',
                                marginBottom: '12px',
                                color: 'var(--text-primary)',
                                lineHeight: '1.3',
                            }}>
                                {project.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '14px', marginBottom: '20px' }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                                {project.techStack.slice(0, 3).map((t, i) => (
                                    <span key={i} style={{
                                        padding: '3px 10px',
                                        borderRadius: '3px',
                                        background: `rgba(${project.accentRgb}, 0.07)`,
                                        border: `1px solid rgba(${project.accentRgb}, 0.2)`,
                                        color: project.accentColor,
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '11px',
                                        fontWeight: '600',
                                    }}>
                                        {t}
                                    </span>
                                ))}
                                {project.techStack.length > 3 && (
                                    <span style={{
                                        padding: '3px 10px',
                                        borderRadius: '3px',
                                        background: 'rgba(122,144,184,0.07)',
                                        border: '1px solid rgba(122,144,184,0.15)',
                                        color: 'var(--mist)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '11px',
                                    }}>
                                        +{project.techStack.length - 3}
                                    </span>
                                )}
                            </div>

                            <div style={{
                                color: project.accentColor,
                                fontFamily: 'var(--font-mono)',
                                fontWeight: '600',
                                fontSize: '12px',
                                letterSpacing: '0.08em',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                            }}>
                                view_details
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close-btn"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        <div style={{ fontSize: '44px', marginBottom: '12px' }}>{selectedProject.emoji}</div>
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '24px',
                            fontWeight: '800',
                            color: 'var(--text-primary)',
                            marginBottom: '24px',
                        }}>
                            {selectedProject.title}
                        </h3>

                        <div style={{ textAlign: 'left' }}>
                            <h4 style={{
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--signal)',
                                marginBottom: '8px',
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}>
                                Overview
                            </h4>
                            <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', marginBottom: '24px', opacity: 0.9 }}>
                                {selectedProject.details}
                            </p>

                            <h4 style={{
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--ember)',
                                marginBottom: '8px',
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}>
                                Key Challenge
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
                                {selectedProject.challenges}
                            </p>

                            <h4 style={{
                                fontFamily: 'var(--font-mono)',
                                color: '#a78bfa',
                                marginBottom: '10px',
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}>
                                Tech Stack
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                                {selectedProject.techStack.map((tech, idx) => (
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

                            {selectedProject.liveLink !== '#' && (
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{ display: 'inline-block' }}
                                >
                                    View Live Site ↗
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
