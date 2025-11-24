// ContactForm.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./helpdesk.css";

export default function HelpDesk() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // simple anti-spam hidden field
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  // Replace these with your EmailJS values
  const SERVICE_ID = "service_xuey6ic";
  const TEMPLATE_ID = "template_dal0nuu";
  const PUBLIC_KEY = "IStWkpLTErGOLGur2"; // sometimes called userID / public key

  // basic validation
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else {
      // simple email regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(form.email)) e.email = "Enter a valid email.";
    }
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // honeypot: if filled, likely a bot — silently ignore
    if (form.honeypot) {
      setStatus({ loading: false, success: false, error: "Spam detected." });
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus({ loading: true, success: null, error: null });

    // prepare template params — map to EmailJS template variables
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
      // emailjs.send(serviceID, templateID, templateParams, publicKey)
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log("EmailJS response:", res);
      setStatus({ loading: false, success: "Message sent. Thank you!", error: null });
      setForm({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        loading: false,
        success: null,
        error: "Unable to send your message. Please try again later.",
      });
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <div className="left">
          {/* Logo image: using your uploaded image path */}
          <img
            className="logo"
            src="/mnt/data/IMG-20251124-WA0079.jpg"
            alt="Logo"
            onError={(e) => {
              // fallback if path not available in user's environment
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/120x120.png?text=Logo";
            }}
          />
          <h1>Contact Me</h1>
          <p className="lead">
            Have questions, feedback, or opportunities? Fill the form and I’ll reply as soon as I can.
          </p>

          <div className="meta">
            <div><strong>Email</strong><br/>you@yourdomain.com</div>
            <div><strong>Availability</strong><br/>Open for engineering internships</div>
          </div>
        </div>

        <form className="right" onSubmit={handleSubmit} noValidate>
          {/* honeypot hidden field */}
          <input
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
            className="hp"
            placeholder="Leave blank"
          />

          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} />
            {errors.name && <small className="error">{errors.name}</small>}
          </label>

          <label>
            Email
            <input name="email" value={form.email} onChange={handleChange} />
            {errors.email && <small className="error">{errors.email}</small>}
          </label>

          <label>
            Subject
            <input name="subject" value={form.subject} onChange={handleChange} />
            {errors.subject && <small className="error">{errors.subject}</small>}
          </label>

          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange} rows="6" />
            {errors.message && <small className="error">{errors.message}</small>}
          </label>

          <button type="submit" disabled={status.loading} className="btn">
            {status.loading ? "Sending..." : "Send Message"}
          </button>

          {status.success && <div className="success">{status.success}</div>}
          {status.error && <div className="error">{status.error}</div>}

          <div className="notes">
            <small>
              We use EmailJS to send messages without a backend. Replace the service/template/public keys in the component.
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}