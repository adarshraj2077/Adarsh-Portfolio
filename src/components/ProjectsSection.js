import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

// Detect touch / no-hover devices to disable tilt
const noHover = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

const projectsList = [
    {
        id: 1,
        title: "Deepfake Audio Detection",
        emoji: "🎙️",
        accentColor: "var(--ember)",
        accentRgb: "255, 107, 53",
        description: "Real-time AI agent that detects AI-generated (deepfake) audio with MCP tool integration and explainable confidence scores.",
        details: "An agentic AI system for detecting deepfake/AI-generated audio. Built with a custom MCP server exposing analysis tools, a LangGraph-powered agent that reasons step-by-step, and a Flask web interface. Uses RawNet2/MFCC feature extraction with a deep learning classifier trained on ASVspoof2019.",
        techStack: ["Python", "Flask", "LangGraph", "MCP", "PyTorch", "MFCC"],
        challenges: "Designing an agent reasoning loop that produces meaningful explanations (not just a binary label), and achieving low latency inference on audio streams while the LangGraph agent chain runs concurrently.",
        liveLink: "#",
        isStrongest: false,
    },
    {
        id: 2,
        title: "StudyTree — AI Study Assistant",
        emoji: "📚",
        accentColor: "var(--signal)",
        accentRgb: "0, 229, 204",
        description: "Full-stack AI study hub: calendar, tasks, smart flashcard generation, and a chatbot that parses your course syllabus PDFs.",
        details: "StudyTree is a production-deployed full-stack app giving students a single workspace for study management. It integrates calendar, task management, AI flashcard generation (OpenAI API), and an interactive chatbot that parses multi-page course syllabus PDFs to answer context-aware questions.",
        techStack: ["React.js", "Node.js", "Express", "MongoDB", "OpenAI API"],
        challenges: "Designing context-aware chatbot memory while maintaining fast response times and ensuring secure parsing of multi-page user PDFs at scale.",
        liveLink: "https://study-tree-one.vercel.app/",
        isStrongest: true,   // "View My Work" anchor lands here
    },
    {
        id: 3,
        title: "Wildfire Prediction via CNN",
        emoji: "🔥",
        accentColor: "#8b5cf6",
        accentRgb: "139, 92, 246",
        description: "CNN model predicting wildfire risk from satellite imagery and environmental variables, with real-time GIS mapping.",
        details: "An advanced Deep Learning project using convolutional neural networks to process satellite raster imagery and weather variables for wildfire risk assessment. Integrated GIS coordinates to map high-risk areas in real-time, handling imbalanced wildfire vs non-wildfire datasets.",
        techStack: ["Python", "TensorFlow", "Keras", "GDAL", "GIS"],
        challenges: "Handling highly imbalanced datasets (few wildfire events vs. many non-events) and processing massive satellite raster files efficiently in memory.",
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
            {/* Section header — left-aligned */}
            <span className="section-eyebrow">projects.featured</span>
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
                            {/* Glow accent */}
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

                            {/* Tech chips */}
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
                                {'// Overview'}
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
                                {'// Key Challenge'}
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
                                {'// Tech Stack'}
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
