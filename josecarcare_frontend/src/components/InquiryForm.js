import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- Added

function InquiryForm() {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate(); // <--- Added

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]{1,20}$/;
    if (!nameRegex.test(customerName)) {
      setMessage('Name must be 1-20 characters, containing only letters and spaces.');
      setIsSuccess(false);
      return false;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setMessage('Phone number must be 10 digits, starting with 6, 7, 8, or 9.');
      setIsSuccess(false);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setMessage('');
    try {
      const response = await fetch('http://127.0.0.1:8000/api/inquiries/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_name: customerName,
          phone_number: phoneNumber,
        }),
      });
      if (response.ok) {
        setMessage('Inquiry submitted successfully! We will call you soon.');
        setIsSuccess(true);
        setCustomerName('');
        setPhoneNumber('');
        // --- Redirect to Success page:
        navigate('/success');
        return;
      } else {
        const errorData = await response.json();
        if (errorData) {
          let errorString = '';
          for (const key in errorData) {
            errorString += `${key}: ${errorData[key].join(', ')} `;
          }
          setMessage(`Submission failed: ${errorString}`);
        } else {
          setMessage(`Submission failed with status: ${response.status}.`);
        }
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setMessage('An unexpected error occurred. Please try again later.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="inquiry-form-wrapper">
      <h2 className="hero-form-header">
        Get a call
      </h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="customerName">Name</label>
        <input
          id="customerName"
          type="text"
          value={customerName}
          onChange={e => setCustomerName(e.target.value)}
          maxLength={20}
          required
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          maxLength={10}
          required
        />
        {message && (
          <div className={isSuccess ? "success-message" : "error-message"} role="alert">
            {message}
          </div>
        )}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Request Callback"}
        </button>
      </form>
    </div>
  );
}

export default InquiryForm;
