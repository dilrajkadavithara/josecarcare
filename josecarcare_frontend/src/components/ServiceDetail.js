// Jose Car Care/josecarcare_frontend/src/components/ServiceDetail.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const apiUrl = `http://127.0.0.1:8000/api/services/${id}/`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setService(data);
      } catch (error) {
        setError(error);
        console.error("Failed to fetch service:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) {
    return <p>Loading service details...</p>;
  }

  if (error) {
    return (
      <p className="error-message">
        Error: {error.message}. Please ensure Django backend is running and CORS is configured.
      </p>
    );
  }

  if (!service) {
    return <p>No service found for this ID.</p>;
  }

  return (
    <>
      <Helmet>
        <title>{service.name} | Car Detailing & Coating | Jose Car Care Kerala</title>
        <meta
          name="description"
          content={service.meta_description || `Explore ${service.name} by Jose Car Care – expert car detailing, borophine and ceramic coating in Kerala.`}
        />
        <meta
          property="og:title"
          content={`${service.name} | Car Detailing & Coating | Jose Car Care Kerala`}
        />
        <meta
          property="og:description"
          content={service.meta_description || `Expert car detailing, borophine and ceramic coating in Kerala. Book ${service.name} by Jose Car Care today!`}
        />
        <meta
          property="og:image"
          content={
            service.image
              ? `http://localhost:8000${service.image}`
              : 'https://yourdomain.com/og-image.jpg'
}
        />
        <meta
          property="og:url"
          content={`https://yourdomain.com/services/${service.id}`}
        />
        <link
          rel="canonical"
          href={`https://yourdomain.com/services/${service.id}`}
        />
      </Helmet>

      <div className="service-detail-container">
        <Link to="/#services-section" className="back-to-services-link">
          &larr; Back to Services
        </Link>
        <div className="service-detail-card">
          {service.image && (
            <img
              src={`http://localhost:8000${service.image}`}
              alt={service.name || 'Service Image'}
              className="service-detail-image"
              loading="lazy"
            />
          )}
          <div className="service-detail-content">
            <h1 className="service-detail-title">{service.name}</h1>
            <p className="service-detail-description">{service.description}</p>
            {/* If you have more fields (price, features, etc.), add them here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
