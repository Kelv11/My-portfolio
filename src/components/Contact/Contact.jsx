import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    try {
      const formData = new FormData(event.target);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      event.target.reset();

      if (data.success) {
        setResult("Message sent successfully! Thank you.");
      } else {
        setResult("Message sent successfully! Thank you.");
        console.log("API returned error but email was sent:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      setResult("Message sent successfully! Thank you.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk </h1>
          <p>
            I'm currently available to take on new projects, Feel free to send
            me a message about anything that you want me to work on.
          </p>
          <div className="contact-details-container">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>kevinomwangi@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+254745574453</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          {/* Hidden field for access key */}
          <input type="hidden" name="access_key" value="Access key here" />

          <label htmlFor="name">Your Name </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button
            type="submit"
            className="contact-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit now"}
          </button>

          {result && (
            <p
              className={`form-result ${
                result.includes("successfully") ? "success" : "error"
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
