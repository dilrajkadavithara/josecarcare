// Jose Car Care/josecarcare_frontend/src/components/ContactInfo.js

import React from 'react';
import { Helmet } from 'react-helmet';

function ContactInfo() {
  return (
    <>
      <Helmet>
        <title>Contact Jose Car Care | Book Car Detailing Kerala</title>
        <meta name="description" content="Contact Jose Car Care for premium car detailing, borophine, and ceramic coating services in Ernakulam and across Kerala. Call, WhatsApp, or visit us today!" />
        <meta name="keywords" content="contact car detailing Kerala, car wash phone Ernakulam, Jose Car Care contact, best car care Kerala" />
        <meta property="og:title" content="Contact Jose Car Care | Book Car Detailing Kerala" />
        <meta property="og:description" content="Contact Jose Car Care for premium car detailing, borophine, and ceramic coating services in Ernakulam and across Kerala. Call, WhatsApp, or visit us today!" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>

      <div className="contact-card">
        <p className="contact-lead">
          Have questions or need a personalized quote? Reach out to us directly!
        </p>
        <div className="contact-row">
          <span className="contact-icon" aria-label="Phone" role="img">📞</span>
          <a href="tel:+916238804932" className="contact-link">
            +91 62388 04932
          </a>
        </div>
        <div className="contact-row">
          <span className="contact-icon" aria-label="Email" role="img">✉️</span>
          <a href="mailto:info@josecarcare.com" className="contact-link">
            info@josecarcare.com
          </a>
        </div>
        <div className="contact-address-group">
          <div className="contact-address">
            <span className="contact-icon" aria-label="Location" role="img">📍</span>
            <span>
              Jos Car Care, Building no:5/390,<br/>
              Kandanad P O,<br/>
              Udayamperoor, Ernakulam, 682305
            </span>
          </div>
          <div className="contact-address">
            <span className="contact-icon" aria-label="Location" role="img">📍</span>
            <span>
              Jos Car Care, Opp: Cherupushpam Studio,<br/>
              Valiyakulam, Udayamperoor P O,<br/>
              Ernakulam, 682307
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
