import React, { useState, useEffect } from "react";
import { FaUser, FaCalendarAlt, FaEnvelope, FaPhone, FaBuilding } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const departments = [
  "Neurology", "Orthopedics", "Cardiology", "Pediatrics", "Dermatology",
  "Ophthalmology", "Gastroenterology", "Psychiatry", "Pulmonology", "Nephrology",
  "Oncology", "Endocrinology"
];

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
      navigate("/success");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Booking failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-5 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Book an Appointment</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {[{ name: "name", type: "text", placeholder: "Your Name", icon: <FaUser /> },
            { name: "date", type: "date", placeholder: "", icon: <FaCalendarAlt /> },
            { name: "fatherName", type: "text", placeholder: "Father's Name", icon: <FaUser /> },
            { name: "email", type: "email", placeholder: "Your Email", icon: <FaEnvelope /> },
            { name: "mobile", type: "tel", placeholder: "Mobile Number", icon: <FaPhone /> },
          ].map(({ name, type, placeholder, icon }) => (
            <div key={name} className="flex items-center border-b border-blue-300 py-2 text-sm">
              <div className="text-blue-500 text-lg mr-2">{icon}</div>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-none text-gray-700 py-1 px-1 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
          ))}

          <div className="flex items-center border-b border-blue-300 py-2 text-sm">
            <FaBuilding className="text-blue-500 text-lg mr-2" />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-none text-gray-700 py-1 px-1 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="">Select Department</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept.toLowerCase()}>{dept}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-1 focus:ring-blue-400"
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
