import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { FaCheckCircle } from 'react-icons/fa'; // Icon for success

function Sucess() {
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    // Redirect to the home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to home page (adjust route if needed)
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-600 text-5xl" />
        </div>
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          Appointment Booked Successfully!
        </h2>
        <p className="text-center text-gray-700 mb-4">
          Your appointment has been successfully scheduled. You will be redirected to the home page shortly.
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

export default Sucess;
