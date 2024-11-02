import React, { useEffect, useState } from "react";
import "./mainone.css";

function MainOne() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="app-container">
      <div className={`left-section ${isVisible ? "visible" : "hidden-left"}`}>
        <h2>Our Mission</h2>
        <p>
          To enable innovation, enhance productivity, and support growth by
          delivering reliable and user-friendly IT solutions that meet the
          evolving needs of our organization.
        </p>
      </div>

      <div className={`right-section ${isVisible ? "visible" : "hidden-right"}`}>
        <h2>Welcome to Maharaju Health Care Application</h2>
        <p>
          We are the backbone of technology at Maharaju IT Department, dedicated
          to creating and maintaining secure, efficient, and innovative digital
          solutions that drive business success. Our team consists of skilled
          professionals in IT infrastructure, software development, data
          management, and technical support, Web Design. Together, we empower the
          organization by ensuring smooth operations, driving digital
          transformation, and providing our users with top-tier support and
          solutions.
        </p>
      </div>
    </div>
  );
}

export default MainOne;