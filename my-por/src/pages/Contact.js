import React, { useState } from "react";
import "../assets/style/ContactForm.css";
import myportrait from "../assets/img/portrait.png";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="contact-form-container">
      <div className="contain form-input">
        <h1>Hire Me.</h1>
        <p>
          <b>
            I am available for freelance work. Connect with me via phone:
            <span className="bold-white"> 0909617596</span> or email:
            <span className="bold-white"> admin@example.com</span>
          </b>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Write a Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-submit">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="contain form-img">
        <div>
          <img src={myportrait} alt="My personal"></img>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
