import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation to get state
import { FaCheckCircle } from 'react-icons/fa';

function Success() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Determine message based on where the user is coming from
  const successMessage = location.state?.from === "appointment"
    ? "Appointment Booked Successfully!"
    : "Message Sent Successfully!";
    
  const description = location.state?.from === "appointment"
    ? "Your appointment has been successfully scheduled. You will be redirected to the home page shortly."
    : "Your message has been successfully sent. We will get back to you soon.";

  useEffect(() => {
    // Redirect to the home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-600 text-5xl" />
        </div>
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          {successMessage}
        </h2>
        <p className="text-center text-gray-700 mb-4">
          {description}
        </p>
        <div className="flex justify-center">
          <div className="text-center text-sm text-gray-500">
            <span className="animate-pulse">Redirecting...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
