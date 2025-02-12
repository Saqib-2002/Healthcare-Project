import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Card } from '../component/Card.jsx';
import {CardContent} from '../component/CardContent';

const doctors = [
  { name: "Dr. John Doe", specialty: "Neurology", yearsExperience: 15, image: "/src/Doctors/doctor1.jpg" },
  { name: "Dr. Sarah Smith", specialty: "Orthopedics", yearsExperience: 12, image: "/src/Doctors/doctor14.jpg" },
  { name: "Dr. James Wilson", specialty: "Cardiology", yearsExperience: 20, image: "/src/Doctors/doctor3.jpg" },
  { name: "Dr. Lisa Brown", specialty: "Pediatrics", yearsExperience: 8, image: "/src/Doctors/doctor4.jpg" },
  { name: "Dr. Mark Davis", specialty: "Dermatology", yearsExperience: 10, image: "/src/Doctors/doctor5.jpg" },
  { name: "Dr. Emma Johnson", specialty: "Ophthalmology", yearsExperience: 14, image: "/src/Doctors/doctor6.jpg" },
  { name: "Dr. Robert White", specialty: "Gastroenterology", yearsExperience: 18, image: "/src/Doctors/doctor7.jpg" },
  { name: "Dr. Olivia Taylor", specialty: "Psychiatry", yearsExperience: 11, image: "/src/Doctors/doctor8.jpg" },
  { name: "Dr. William Hall", specialty: "Pulmonology", yearsExperience: 16, image: "/src/Doctors/doctor9.jpg" },
  { name: "Dr. Sophia Allen", specialty: "Nephrology", yearsExperience: 13, image: "/src/Doctors/doctor10.jpg" },
  { name: "Dr. Henry Clark", specialty: "Oncology", yearsExperience: 22, image: "/src/Doctors/doctor11.jpg" },
  { name: "Dr. Amelia Martinez", specialty: "Endocrinology", yearsExperience: 9, image: "/src/Doctors/doctor12.jpg" },
  { name: "Dr. Ethan Thomas", specialty: "Neurology", yearsExperience: 17, image: "/src/Doctors/doctor13.jpg" },
  { name: "Dr. Mia Walker", specialty: "Orthopedics", yearsExperience: 7, image: "/src/Doctors/doctor14.jpg" },
  { name: "Dr. Noah Young", specialty: "Cardiology", yearsExperience: 19, image: "/src/Doctors/doctor25.jpg" },
  { name: "Dr. Charlotte King", specialty: "Pediatrics", yearsExperience: 15, image: "/src/Doctors/octor16.jpg" },
  { name: "Dr. Liam Wright", specialty: "Dermatology", yearsExperience: 11, image: "/src/Doctors/doctor17.jpg" },
  { name: "Dr. Emily Scott", specialty: "Ophthalmology", yearsExperience: 13, image: "/src/Doctors/doctor18.jpg" },
  { name: "Dr. Daniel Green", specialty: "Gastroenterology", yearsExperience: 21, image: "/src/Doctors/doctor19.jpg" },
  { name: "Dr. Ava Adams", specialty: "Psychiatry", yearsExperience: 16, image: "/src/Doctors/doctor20.jpg" }
];

const DoctorTeam = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', ...new Set(doctors.map(doctor => doctor.specialty))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our team of experienced medical professionals is dedicated to providing you with the highest quality healthcare.
        </p>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
        >
          {specialties.map(specialty => (
            <option key={specialty} value={specialty}>{specialty}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDoctors.map((doctor, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mb-4">{doctor.yearsExperience} years of experience</p>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                  onClick={() => {
                    // Navigate to appointment page
                    console.log(`Booking appointment with ${doctor.name}`);
                  }}
                >
                  Book Appointment
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No doctors found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default DoctorTeam;