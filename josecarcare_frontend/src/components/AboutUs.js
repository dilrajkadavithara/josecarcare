// Jose Car Care/josecarcare_frontend/src/components/AboutUs.js

import React from 'react';
import { Helmet } from 'react-helmet';

function AboutUs() {
  // If you only have the filename, use this:
  const imageUrlBase = 'http://localhost:8000/media/about_us_images/';

  return (
    <>
      <Helmet>
        <title>About Jose Car Care | Premium Car Detailing Kerala</title>
        <meta
          name="description"
          content="Learn about Jose Car Care—Ernakulam’s trusted auto detailing experts, providing premium car care, borophine coating, and ceramic coating across Kerala."
        />
        <meta name="keywords" content="about car detailing Kerala, about Jose Car Care, best car care Kerala, Ernakulam car detailing team" />
        <meta property="og:title" content="About Jose Car Care | Premium Car Detailing Kerala" />
        <meta
          property="og:description"
          content="Learn about Jose Car Care—Ernakulam’s trusted auto detailing experts, providing premium car care, borophine coating, and ceramic coating across Kerala."
        />
        <meta property="og:image" content={`${imageUrlBase}about_us_lg.jpg`} />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>

      <div className="about-us-container">
        <div className="about-us-content-wrapper">
          <p className="about-us-paragraph">
            At Jose Car Care, our journey began in 2002, born from a deep-seated passion for automotive perfection.
            For over two decades, our team of certified detailing professionals has meticulously transformed
            thousands of vehicles, combining expert craftsmanship with cutting-edge techniques. We pride ourselves
            on unwavering quality, integrity, and a genuine love for every car that enters our care. Our mission is
            simple: to deliver unparalleled brilliance and protection, ensuring your vehicle doesn't just look clean,
            but truly reflects its ultimate shine and your discerning taste.
          </p>
        </div>

        <div className="about-us-image-wrapper">
          <img
            src={`${imageUrlBase}about_us_lg.jpg`}
            alt="Detailer meticulously polishing a car surface"
            className="about-us-image"
            srcSet={`
              ${imageUrlBase}about_us_xs.jpg 320w,
              ${imageUrlBase}about_us_sm.jpg 480w,
              ${imageUrlBase}about_us_md.jpg 768w,
              ${imageUrlBase}about_us_lg.jpg 1200w
            `}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
