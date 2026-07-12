const timelineList = [
    {
        id: 1,
        title: "BTech CSE (AI & ML)",
        institution: "Vellore Institute of Technology",
        date: "2023 - Present",
        side: "left",
        details: "Focusing on Deep Learning, Algorithms, Database Systems, and Neural Networks. Actively building projects with modern tech stacks."
    },
    {
        id: 2,
        title: "Full-Stack & ML Project Developer",
        institution: "Freelance / Open Source",
        date: "2024 - Present",
        side: "right",
        details: "Building production-grade web applications using React, Django, Node.js, and implementing deep learning algorithms for real-world datasets."
    },
    {
        id: 3,
        title: "Open Source Contributor",
        institution: "GitHub Community",
        date: "2024 - Present",
        side: "left",
        details: "Contributing to Python libraries, fixing UI bugs in popular repositories, and writing clean, standardized code."
    }
];

function Timeline() {
    return (
        <section id="experience" style={{ padding: "100px 60px", textAlign: "center" }}>
            <h2 className="gradient-text" style={{ fontSize: "40px", marginBottom: "50px" }}>My Journey</h2>

            <div className="timeline-container">
                {timelineList.map((item) => (
                    <div key={item.id} className={`timeline-item ${item.side}`}>
                        <div className="glass-card timeline-content">
                            <span style={{ color: "var(--accent-color)", fontWeight: "600", fontSize: "14px" }}>
                                {item.date}
                            </span>
                            <h3 style={{ fontSize: "20px", marginTop: "5px", marginBottom: "5px", color: "var(--text-primary)" }}>
                                {item.title}
                            </h3>
                            <h4 style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "15px", fontWeight: "500" }}>
                                {item.institution}
                            </h4>
                            <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6" }}>
                                {item.details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Timeline;
