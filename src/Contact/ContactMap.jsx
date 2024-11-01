import React from "react";
import "./contactmap.css";

export default function ContactMap() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4829240619465!2d78.44391147462801!3d17.436585201387054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e351b9cdeb%3A0x935c63c6ac6bf3a3!2sMaharaju%20Healthcare%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1729884332605!5m2!1sen!2sin"
        className="map-iframe"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

