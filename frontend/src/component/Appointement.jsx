import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Appointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    fatherName: "",
    email: "",
    mobile: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/appointments/book", formData);
      console.log(response.data.message);
      navigate('/success');
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Booking failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
          Book an Appointment
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Input Fields */}
          {[
            { name: "name", type: "text", placeholder: "Your Name", icon: <FaUser /> },
            { name: "date", type: "date", placeholder: "", icon: <FaCalendarAlt /> },
            { name: "fatherName", type: "text", placeholder: "Father's Name", icon: <FaUser /> },
            { name: "email", type: "email", placeholder: "Your Email", icon: <FaEnvelope /> },
            { name: "mobile", type: "tel", placeholder: "Mobile Number", icon: <FaPhone /> },
          ].map(({ name, type, placeholder, icon }) => (
            <div key={name} className="flex items-center border-b-2 border-blue-200 py-3">
              <div className="text-blue-500 text-xl mr-3">{icon}</div>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none text-gray-700 py-2 px-2 text-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Department Select */}
          <div className="flex items-center border-b-2 border-blue-200 py-3">
            <FaBuilding className="text-blue-500 text-xl mr-3" />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-none text-gray-700 py-2 px-2 text-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
