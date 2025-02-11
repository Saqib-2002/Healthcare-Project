import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Appointment() {
  const navigate = useNavigate(); // Initialize navigate function for redirection
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    fatherName: "",
    email: "",
    mobile: "",
    department: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/appointments/book", formData);
      console.log(response.data.message); // Handle success response
      navigate('/sucess'); // Navigate to success page
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Booking failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Book an Appointment</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaUser className="text-blue-500 mr-3 text-xl" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaCalendarAlt className="text-blue-500 mr-3 text-xl" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Father's Name Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaUser className="text-blue-500 mr-3 text-xl" />
            <input
              type="text"
              name="fatherName"
              placeholder="Father's Name"
              value={formData.fatherName}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaEnvelope className="text-blue-500 mr-3 text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaPhone className="text-blue-500 mr-3 text-xl" />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Department Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaBuilding className="text-blue-500 mr-3 text-xl" />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
