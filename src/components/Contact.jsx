import React, { useState } from "react";
import CanvasModel from "./Canvas/CanvasModel";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ sending: false, message: "", error: false });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({ sending: true, message: "", error: false });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_dbzi46d",   // replace with your EmailJS Service ID
        "template_uz1nrxc",  // replace with your EmailJS Template ID
        templateParams,
        "FoyxbiMQQAQbJATXs" // replace with your EmailJS Public Key
      )
      .then(() => {
        setStatus({ sending: false, message: "Your message has been sent successfully!", error: false });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({ sending: false, message: "Failed to send message. Please try again later.", error: true });
      });
  };

  return (
    <section id="contact" className="contact" aria-label="Contact section">
      <h2 className="contact-title">GET IN TOUCH</h2>
      <div className="contact-container">
        {/* Left Side: Contact Form */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} noValidate aria-describedby="form-status">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="Your name"
                disabled={status.sending}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="your.email@example.com"
                disabled={status.sending}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="Write your message here..."
                disabled={status.sending}
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={status.sending} aria-busy={status.sending}>
              {status.sending ? "Sending..." : "Send Message"}
            </button>

            {status.message && (
              <p
                id="form-status"
                role="alert"
                style={{ color: status.error ? "#FF6B6B" : "#4BB543", marginTop: "12px" }}
              >
                {status.message}
              </p>
            )}
          </form>
        </motion.div>

        {/* Right Side: 3D Model */}
        <motion.div
          className="contact-model"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CanvasModel />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
