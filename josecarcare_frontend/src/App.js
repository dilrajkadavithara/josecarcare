// Jose Car Care/josecarcare_frontend/src/App.js

import React from 'react';
import './App.css'; // This line correctly IMPORTS App.css, making its styles available
import { Routes, Route } from 'react-router-dom';
import Success from './components/Success';
import ServiceDetail from './components/ServiceDetail';
import { Helmet } from 'react-helmet';

import ServiceList from './components/ServiceList'; 
import InquiryForm from './components/InquiryForm'; 
import AboutUs from './components/AboutUs'; 
import ContactInfo from './components/ContactInfo'; 
import HeroHeader from './components/HeroHeader'; 

// Dedicated SEO Helmet component (prevents App name duplication)
function SeoHelmet() {
  return (
    <Helmet>
      <title>Jose Car Care | Premium Car Detailing, Borophine & Ceramic Coating Kerala</title>
      <meta name="description" content="Jose Car Care offers premium car detailing, borophine coating, and ceramic coating services across Kerala, with special focus on Ernakulam and Kochi. Trusted experts in vehicle protection, interior cleaning, and restoration. Book your appointment for a showroom finish, every time." />
      <meta name="keywords" content="Jose Car Care, car detailing Kerala, car detailing Ernakulam, car detailing Kochi, car wash Kerala, borophine coating Kerala, ceramic coating Kerala, car spa Kerala, car cleaning near me, premium auto detailing Kerala, best car detailing Ernakulam, vehicle detailing Kochi" />
      <meta name="author" content="Jose Car Care" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Jose Car Care | Premium Car Detailing, Borophine & Ceramic Coating Kerala" />
      <meta property="og:description" content="Premium car detailing, borophine and ceramic coating in Kerala and Ernakulam by trusted experts. Restore and protect your car's beauty—book now." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/" />
      <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jose Car Care | Premium Car Detailing, Borophine & Ceramic Coating Kerala" />
      <meta name="twitter:description" content="Premium car detailing, borophine and ceramic coating in Kerala and Ernakulam by trusted experts." />
      <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="canonical" href="https://yourdomain.com/" />
    </Helmet>
  );
}

function MainContent() {
  return (
    <div className="App">
      {/* --- SEO/Meta Tags --- */}
      <SeoHelmet />

      {/* --- Main Content Sections (Scrollable) --- */}
      <section className="section hero-section">
        <HeroHeader /> 
        <div className="hero-text-block"> 
          <h1 className="hero-title">Welcome to Jose Car Care!</h1> 
          <p className="hero-subtitle"> 
            Discover unmatched vehicle detailing that brings out the best in your car.
            Experience meticulous care and breathtaking results.
          </p>
        </div>
        <div className="hero-form-container">
          <InquiryForm /> 
        </div>
        <div className="scroll-indicator">
          <span className="scroll-arrow"></span>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </section>
      <section id="services-section" className="section services-section">
        <h2>Our Comprehensive Services</h2>
        <ServiceList /> 
      </section>
      <section id="about-section" className="section about-section">
        <h2>Who We Are</h2> 
        <AboutUs /> 
      </section>
      <section id="contact-section" className="section contact-section">
        <h2>Get In Touch</h2>
        <ContactInfo /> 
      </section>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Jose Car Care. All rights reserved.</p>
        <p>Crafted with Passion by You!</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/success" element={<Success />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
    </Routes>
  );
}

export default App;
