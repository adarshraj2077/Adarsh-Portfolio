import { useState } from 'react';

const projectsList = [
    {
        id: 1,
        title: "Wildfire Prediction using Deep Learning",
        emoji: "🔥",
        description: "Developed a CNN model to predict wildfires using environmental data.",
        details: "An advanced Deep Learning project utilizing convolutional neural networks (CNNs) to process satellite imagery and weather variables to assess wildfire risk. Integrated GIS coordinates to map high-risk areas in real-time.",
        techStack: ["Python", "TensorFlow", "Keras", "GDAL", "GIS"],
        challenges: "Handling highly imbalanced datasets (few wildfire events vs many non-events) and processing massive satellite raster files efficiently in memory.",
        liveLink: "#"
    },
    {
        id: 2,
        title: "StudyTree – AI Assistant for Students",
        emoji: "📚",
        description: "Developed an AI student assistant focused on usability and productivity.",
        details: "StudyTree is a comprehensive hub for students that integrates calendar, task management, smart AI flashcard generation, and an interactive study chatbot that parses course syllabus PDFs.",
        techStack: ["React.js", "Node.js", "Express", "MongoDB", "OpenAI API"],
        challenges: "Designing context-aware chatbot memory while maintaining fast response times and ensuring secure parsing of multi-page user PDFs.",
        liveLink: "https://study-tree-one.vercel.app/"
    }
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" style={{ padding: "100px 60px", textAlign: "center" }}>
            <h2 className="gradient-text section-title">Featured Projects</h2>
            <div className="section-divider" />

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "32px",
                flexWrap: "wrap"
            }}>
                {projectsList.map((project) => (
                    <div
                        key={project.id}
                        className="glass-card"
                        style={{ padding: "36px", width: "360px", textAlign: "left", cursor: "pointer", position: "relative", overflow: "hidden" }}
                        onClick={() => setSelectedProject(project)}
                    >
                        {/* Glow accent top-right */}
                        <div style={{
                            position: "absolute", top: 0, right: 0,
                            width: "120px", height: "120px",
                            background: "radial-gradient(circle at top right, rgba(0,212,255,0.12), transparent 70%)",
                            pointerEvents: "none"
                        }} />

                        <div style={{ fontSize: "42px", marginBottom: "18px" }}>{project.emoji}</div>
                        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", marginBottom: "12px", color: "var(--text-primary)", fontWeight: "700", lineHeight: "1.3" }}>{project.title}</h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "15px" }}>{project.description}</p>

                        {/* Tech chips preview */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "20px", marginBottom: "20px" }}>
                            {project.techStack.slice(0, 3).map((t, i) => (
                                <span key={i} style={{
                                    padding: "4px 10px", borderRadius: "100px",
                                    background: "rgba(0,212,255,0.07)",
                                    border: "1px solid rgba(0,212,255,0.18)",
                                    color: "var(--accent-color)",
                                    fontSize: "11px", fontWeight: "600"
                                }}>{t}</span>
                            ))}
                        </div>

                        <div style={{ color: "var(--accent-color)", fontWeight: "700", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1.5px", display: "flex", alignItems: "center", gap: "6px" }}>
                            Read More
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Overlay */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                            &times;
                        </button>
                        <div style={{ fontSize: "52px", marginBottom: "12px" }}>{selectedProject.emoji}</div>
                        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "26px", marginBottom: "6px", color: "var(--text-primary)", fontWeight: "700" }}>
                            {selectedProject.title}
                        </h3>

                        <div style={{ textAlign: "left", marginTop: "24px" }}>
                            <h4 style={{ color: "var(--accent-color)", marginBottom: "8px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>Overview</h4>
                            <p style={{ color: "var(--text-primary)", lineHeight: "1.75", marginBottom: "22px", opacity: 0.9 }}>{selectedProject.details}</p>

                            <h4 style={{ color: "#f472b6", marginBottom: "8px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>Key Challenge</h4>
                            <p style={{ color: "var(--text-secondary)", lineHeight: "1.75", marginBottom: "22px" }}>{selectedProject.challenges}</p>

                            <h4 style={{ color: "#a78bfa", marginBottom: "10px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>Tech Stack</h4>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                                {selectedProject.techStack.map((tech, idx) => (
                                    <span key={idx} style={{
                                        background: "rgba(0, 212, 255, 0.08)",
                                        color: "var(--accent-color)",
                                        padding: "6px 14px",
                                        borderRadius: "100px",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        border: "1px solid rgba(0,212,255,0.2)"
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {selectedProject.liveLink !== "#" && (
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-block",
                                        padding: "12px 28px",
                                        background: "var(--accent-gradient)",
                                        color: "#060b18",
                                        fontWeight: "700",
                                        textDecoration: "none",
                                        borderRadius: "100px",
                                        boxShadow: "0 6px 20px rgba(0, 212, 255, 0.3)"
                                    }}
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
