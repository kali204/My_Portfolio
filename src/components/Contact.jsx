import React, { useState } from "react";
import CanvasModel from "./Canvas/CanvasModel";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
const Contact = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
 
const handleSubmit = (e) => {
  e.preventDefault(); // Prevents page reload

  // Create template params based on EmailJS template
  const templateParams = {
    from_name: formData.name,   // Ensure these match your EmailJS template keys
    from_email: formData.email,
    message: formData.message,
  };

  emailjs
    .send(
      "service_dbzi46d",   // Replace with actual EmailJS Service ID
      "template_uz1nrxc",  // Replace with actual EmailJS Template ID
      templateParams,
      "FoyxbiMQQAQbJATXs"       // Replace with actual EmailJS Public Key
    )
    .then((response) => {
      console.log("Email sent successfully!", response);
      alert("Your message has been sent successfully!"); // Show success message
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again later."); // Show error message
    });

  // Reset form after submission
  setFormData({ name: "", email: "", message: "" });
};

  return (
    <section className="contact">
      <h2 className="contact-title">GET IN TOUCH</h2>
      <div className="contact-container">
        {/* Left Side: Contact Form */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
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
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Side: 3D Model */}
        <motion.div
          className="contact-model"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CanvasModel />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
