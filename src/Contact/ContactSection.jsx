import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contactsection.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="container">
      <div className="content-grid">
        {/* Left Section - Form */}
        <div className="form-section" data-aos="fade-up">
          <h2 className="form-heading">Get in touch</h2>
          <h1 className="form-subheading">For Software Related Queries</h1>

          <form className="form">
            <label>Full Name *</label>
            <input type="text" className="input-field" />
            
            <label>Email *</label>
            <input type="email" className="input-field" />
            
            <label>Mobile *</label>
            <input type="number" className="input-field" />
            
            <label>Select *</label>
            <select className="input-field">
              <option value="option1">Sales</option>
              <option value="option2">HR</option>
            </select>
            
            <label>Message *</label>
            <textarea rows="4" className="textarea"></textarea>
            
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        {/* Right Section - Cards */}
        <div className="card-section" data-aos="fade-up">
          <div className="card">
            <h3 className="card-title">Sales: +917799988139</h3>
            <h3 className="card-title">HR: +91834153460, +918687678678</h3>
          </div>

          <a href="tel:+1234567890" className="call-link" data-aos="fade-up">
            <h3>Call Now</h3>
            <span>→</span>
          </a>

          <div className="card">
            <h3 className="card-title">E-Mail</h3>
            <p className="card-text">Sales@maharajuhealthcaretechnology.com</p>
            <p className="card-text">info@maharajutechnology@gmail.com</p>
          </div>

          <div className="card">
            <h3 className="card-title">Address</h3>
            <p className="card-text">
              Aditya Trade Center, 6th Floor, 604C, Hyderabad, Telangana 500016
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
