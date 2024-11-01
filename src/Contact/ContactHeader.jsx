import './contact.css';

export default function ContactHeader() {
  return (
    <div className="contact-header-section">
      <img 
        src="contact.png" 
        alt="Contact Header" 
        className="contact-header-image" 
      />
      <div className="contact-header-text">
        <h1>Contact Us</h1>
      </div>
    </div>
  );
}
