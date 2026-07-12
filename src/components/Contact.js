import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('sending');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(null), 5000);
        }, 1500);
    };

    return (
        <section id="contact" style={{ padding: "100px 60px", textAlign: "center" }}>
            <h2 className="gradient-text" style={{ fontSize: "40px", marginBottom: "30px" }}>Get In Touch</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "50px", fontSize: "18px", maxWidth: "600px", margin: "0 auto 50px auto" }}>
                Have a question or want to work together? Drop a message below and I will get back to you as soon as possible.
            </p>

            <div className="glass-card" style={{ maxWidth: "600px", margin: "0 auto", padding: "40px", textAlign: "left" }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", color: "var(--text-primary)", fontWeight: "600", marginBottom: "8px" }}>Name</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name" 
                            className="contact-input" 
                        />
                        {errors.name && <span style={{ color: "#ef4444", fontSize: "14px", marginTop: "-15px", display: "block", marginBottom: "10px" }}>{errors.name}</span>}
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", color: "var(--text-primary)", fontWeight: "600", marginBottom: "8px" }}>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email Address" 
                            className="contact-input" 
                        />
                        {errors.email && <span style={{ color: "#ef4444", fontSize: "14px", marginTop: "-15px", display: "block", marginBottom: "10px" }}>{errors.email}</span>}
                    </div>

                    <div style={{ marginBottom: "30px" }}>
                        <label style={{ display: "block", color: "var(--text-primary)", fontWeight: "600", marginBottom: "8px" }}>Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can I help you?" 
                            className="contact-input" 
                            rows="5"
                            style={{ resize: "vertical" }}
                        />
                        {errors.message && <span style={{ color: "#ef4444", fontSize: "14px", marginTop: "-25px", display: "block", marginBottom: "10px" }}>{errors.message}</span>}
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <button 
                            type="submit" 
                            className="contact-submit-btn"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>

                {status === 'success' && (
                    <div style={{ 
                        marginTop: "25px", 
                        padding: "15px", 
                        background: "rgba(34, 197, 94, 0.1)", 
                        border: "1px solid rgba(34, 197, 94, 0.3)", 
                        color: "#22c55e", 
                        borderRadius: "8px", 
                        textAlign: "center",
                        fontWeight: "600"
                    }}>
                        Message sent successfully! Thank you for reaching out.
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact;
