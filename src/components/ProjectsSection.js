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
            <h2 className="gradient-text" style={{ fontSize: "40px", marginBottom: "50px" }}>Featured Projects</h2>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                flexWrap: "wrap"
            }}>
                {projectsList.map((project) => (
                    <div 
                        key={project.id}
                        className="glass-card" 
                        style={{ padding: "40px", width: "350px", textAlign: "left", cursor: "pointer" }}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div style={{ fontSize: "40px", marginBottom: "20px" }}>{project.emoji}</div>
                        <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "var(--text-primary)" }}>{project.title}</h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{project.description}</p>
                        <div style={{ marginTop: "20px", color: "var(--accent-color)", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
                            Read More &rarr;
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Overlay */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()} style={{ background: "var(--bg-color)" }}>
                        <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                            &times;
                        </button>
                        <div style={{ fontSize: "50px", marginBottom: "15px" }}>{selectedProject.emoji}</div>
                        <h3 style={{ fontSize: "28px", marginBottom: "15px", color: "var(--text-primary)" }}>{selectedProject.title}</h3>
                        
                        <div style={{ textAlign: "left", marginTop: "20px" }}>
                            <h4 style={{ color: "var(--accent-color)", marginBottom: "8px" }}>Project Details</h4>
                            <p style={{ color: "var(--text-primary)", lineHeight: "1.6", marginBottom: "20px" }}>{selectedProject.details}</p>
                            
                            <h4 style={{ color: "var(--accent-color)", marginBottom: "8px" }}>Key Challenge Overcome</h4>
                            <p style={{ color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "20px" }}>{selectedProject.challenges}</p>

                            <h4 style={{ color: "var(--accent-color)", marginBottom: "10px" }}>Tech Stack</h4>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "30px" }}>
                                {selectedProject.techStack.map((tech, idx) => (
                                    <span 
                                        key={idx} 
                                        style={{ 
                                            background: "rgba(56, 189, 248, 0.1)", 
                                            color: "var(--accent-color)", 
                                            padding: "6px 12px", 
                                            borderRadius: "15px", 
                                            fontSize: "12px", 
                                            fontWeight: "600" 
                                        }}
                                    >
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
                                        padding: "12px 30px",
                                        background: "var(--accent-gradient)",
                                        color: "white",
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                        borderRadius: "25px",
                                        boxShadow: "0 4px 12px rgba(56, 189, 248, 0.3)"
                                    }}
                                >
                                    View Live Site
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
