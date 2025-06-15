// Jose Car Care/josecarcare_frontend/src/components/ServiceList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ServiceList() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const apiUrl = 'http://127.0.0.1:8000/api/services/';
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        setError(error);
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) {
    return <p>Loading services...</p>;
  }

  if (error) {
    return (
      <p className="error-message">
        Error: {error.message}. Please ensure Django backend is running and CORS is configured.
      </p>
    );
  }

  return (
    <>
      <Helmet>
        <title>Our Car Detailing & Coating Services | Jose Car Care Kerala</title>
        <meta name="description" content="Explore our comprehensive range of premium car detailing, borophine coating, ceramic coating, and vehicle restoration services in Kerala and Ernakulam. Trust Jose Car Care for expert protection and a lasting shine." />
        <meta name="keywords" content="car detailing Kerala, borophine coating Kerala, ceramic coating Ernakulam, car spa Kochi, vehicle detailing Kerala, best car detailing Ernakulam, Jose Car Care services" />
        <meta property="og:title" content="Our Car Detailing & Coating Services | Jose Car Care Kerala" />
        <meta property="og:description" content="Explore Jose Car Care’s premium car detailing, borophine, and ceramic coating services in Kerala. Book now for the best care and protection." />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta name="twitter:title" content="Our Car Detailing & Coating Services | Jose Car Care Kerala" />
        <meta name="twitter:description" content="Explore Jose Car Care’s premium car detailing, borophine, and ceramic coating services in Kerala. Book now for the best care and protection." />
        <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
        <link rel="canonical" href="https://yourdomain.com/services" />
      </Helmet>
      <div className="service-list-container">
        {services.length === 0 ? (
          <p className="no-services-message">
            No services added yet in the Django admin. Please add some!
          </p>
        ) : (
          <ul className="service-cards-grid">
            {services.map(service => (
              <li key={service.id} className="service-card">
                {service.image && (
                  console.log("Service image path from API (ServiceList):", service.image), 
                  <img
                    src={service.image}
                    alt={service.name || 'Service Image'}
                    className="service-card-image"
                  />
                )}
                <div className="service-card-content">
                  <Link to={`/services/${service.id}`} className="service-card-title-link">
                    <h3 className="service-card-title">{service.name}</h3>
                  </Link>
                  <p className="service-card-description">{service.short_description}</p>
                  <Link to={`/services/${service.id}`} className="service-card-button">Learn More</Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ServiceList;
