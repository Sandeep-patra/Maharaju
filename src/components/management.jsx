import React from 'react';
import './management.css'; // Import the CSS file for styles

function Management() {
  return (
    <div>
      <h2 className='manage'>Our Management</h2>
      <div className="management-container">
        <div className="management-card">
          <div className="management-image">
            <img 
              src="https://maharajuhealthcare.com/wp-content/uploads/2022/06/Image-03.png" 
              alt="" 
            />
          </div>
          <div className="management-details">
            <h3>Mr. Y.V.V.S.N Raju</h3>
            <div>Managing Director</div>
            <div className="border-content"></div>
            <div>Maharaju Information Technology</div>
            <div className="social-icons">
              <span className='fa-brands fa-whatsapp'></span>
              <span className='fa-brands fa-facebook'></span>
              <span className='fa-brands fa-instagram'></span>
              <span className='fa-brands fa-linkedin'></span>
            </div>
          </div>
        </div>
        <div className="management-card">
          <div className="management-image">
            <img 
              src="https://maharajuhealthcare.com/wp-content/uploads/2022/06/Image-02.png" 
              alt="manager" 
            />
          </div>
          <div className="management-details">
            <h3>Raja Raghav Raju Yeluri
            </h3>
            <div>Managing Director</div>
            <div className="border-content"></div>
            <div>Maharaju Information Technology</div>
            <div className="social-icons">
              <span className='fa-brands fa-whatsapp'></span>
              <span className='fa-brands fa-facebook'></span>
              <span className='fa-brands fa-instagram'></span>
              <span className='fa-brands fa-linkedin'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Management;
