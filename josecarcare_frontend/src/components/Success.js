import React from 'react';
import { Link } from 'react-router-dom';


function Success() {
  return (
    <div className="success-page-bg">
      <div className="success-card" tabIndex={0}>
        {/* Checkmark SVG Icon */}
        <div className="success-icon">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="30" fill="#18b751" />
            <path d="M18 31l8 8 16-16" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="success-heading">Thank You!</h2>
        <p className="success-message-text">
          Your request has been submitted successfully.<br />
          Our team will contact you shortly.
        </p>
        <Link to="/" className="success-home-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default Success;
