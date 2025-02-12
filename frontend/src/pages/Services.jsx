import React from "react";
import Card from "../component/Card";
import CardContent from "../component/CardContent";

// ✅ List of 12 Medical Departments with images
const specialties = [
  {
    name: "Neurology",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    description: "Specialized care for brain and nervous system disorders.",
  },
  {
    name: "Orthopedics",
    image: "https://cdn-icons-png.flaticon.com/512/3143/3143627.png",
    description: "Expert care for bone, joint, and muscle conditions.",
  },
  {
    name: "Cardiology",
    image: "https://cdn-icons-png.flaticon.com/512/3771/3771518.png",
    description: "Advanced heart and vascular health services.",
  },
  {
    name: "Pediatrics",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    description: "Medical care for infants, children, and adolescents.",
  },
  {
    name: "Dermatology",
    image: "https://cdn-icons-png.flaticon.com/512/2867/2867356.png",
    description: "Diagnosis and treatment of skin disorders.",
  },
  {
    name: "Ophthalmology",
    image: "https://cdn-icons-png.flaticon.com/512/3456/3456522.png",
    description: "Specialized eye and vision care.",
  },
  {
    name: "Gastroenterology",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    description: "Treatment for digestive system diseases.",
  },
  {
    name: "Psychiatry",
    image: "https://cdn-icons-png.flaticon.com/512/2333/2333074.png",
    description: "Mental health diagnosis and therapy.",
  },
  {
    name: "Pulmonology",
    image: "https://cdn-icons-png.flaticon.com/512/3660/3660162.png",
    description: "Lung and respiratory system specialists.",
  },
  {
    name: "Nephrology",
    image: "https://cdn-icons-png.flaticon.com/512/2946/2946817.png",
    description: "Expert care for kidney diseases.",
  },
  {
    name: "Oncology",
    image: "https://cdn-icons-png.flaticon.com/512/3139/3139789.png",
    description: "Cancer diagnosis and treatment.",
  },
  {
    name: "Endocrinology",
    image: "https://cdn-icons-png.flaticon.com/512/3199/3199549.png",
    description: "Care for hormonal and metabolic disorders.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Medical Specialties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {specialties.map((specialty, index) => (
          <Card key={index} className="shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
            <img src={specialty.image} alt={specialty.name} className="w-full h-48 object-contain p-4" />
            <CardContent className="p-4 text-center">
              <h3 className="text-xl font-semibold">{specialty.name}</h3>
              <p className="text-gray-600 mt-2">{specialty.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
