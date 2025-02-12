import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const doctors = [
  {
    name: "Dr. Daryl Cornelius",
    specialty: "Implantologist",
    description:
      "Dr. Daryl Cornelius is a renowned dental surgeon and a certified dental implantologist. He is the director of Doc.DMD dental, USA. As an implantologist, Dr. Daryl Cornelius has got tremendous experience of dental implants for over more than 19 years.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCTtFCFHbRQiMhFtUxpaib4DNzhq_R8CCkg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L5Tx2XtPn9mFr0cvC9n4NLsaroBYvhFyxg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9PWlCR_Yy-tpo3UOiRoNOG6tigV5enSItg&s"
    ]
  },
  {
    name: "Dr. Douglas Lyphe",
    specialty: "MDS Orthodontics",
    description:
      "Dr. Douglas Lyphe is a highly skilled orthodontist with years of experience in dental alignment and braces.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L5Tx2XtPn9mFr0cvC9n4NLsaroBYvhFyxg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9PWlCR_Yy-tpo3UOiRoNOG6tigV5enSItg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCTtFCFHbRQiMhFtUxpaib4DNzhq_R8CCkg&s"
    ]
  },
  {
    name: "Dr. Sarah Johnson",
    specialty: "Periodontist",
    description:
      "Dr. Sarah Johnson specializes in treating gum diseases and dental implants with extensive expertise.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9PWlCR_Yy-tpo3UOiRoNOG6tigV5enSItg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCTtFCFHbRQiMhFtUxpaib4DNzhq_R8CCkg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L5Tx2XtPn9mFr0cvC9n4NLsaroBYvhFyxg&s"
    ]
  }
];

const DoctorTeam = () => {
  const [currentDoctor, setCurrentDoctor] = useState(doctors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const doctorInterval = setInterval(() => {
      setCurrentDoctor(prev => {
        const nextIndex = (doctors.findIndex(doc => doc.name === prev.name) + 1) % doctors.length;
        return doctors[nextIndex];
      });
    }, 3000);

    return () => clearInterval(doctorInterval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % currentDoctor.images.length);
    }, 1500);

    return () => clearInterval(imageInterval);
  }, [currentDoctor]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-8 max-w-6xl mx-auto mt-20 pt-24">
      <div className="md:w-1/3 text-center md:text-left">
        <p className="text-teal-500 font-semibold">PROFESSIONAL DENTISTS</p>
        <h2 className="text-3xl font-bold">Highly Qualified Team</h2>
        <h3 className="text-xl font-semibold mt-4">{currentDoctor.name}</h3>
        <p className="text-teal-500">{currentDoctor.specialty}</p>
        <p className="mt-4 text-gray-600">{currentDoctor.description}</p>
       <Link to={"/appointment"}><button className="mt-6 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">Make Appointment</button></Link>
      </div>
      <div className="md:w-1/3 flex justify-center sticky top-24">
        {currentDoctor.images.length > 0 && (
          <img
            src={currentDoctor.images[currentImageIndex]}
            alt={currentDoctor.name}
            className="border-4 border-teal-500 rounded-lg w-[333px] h-[488px] object-cover transition-opacity duration-500"
          />
        )}
      </div>
      <div className="md:w-1/3 flex flex-col items-center md:items-start gap-4">
        {doctors.map((doctor, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-4 p-4 cursor-pointer border-2 rounded-lg w-64 transition-all duration-300 hover:shadow-lg ${
              currentDoctor.name === doctor.name ? "border-teal-500 bg-gray-100" : "border-gray-300"
            }`}
            onClick={() => setCurrentDoctor(doctor)}
          >
            <img
              src={doctor.images[currentImageIndex % doctor.images.length]}
              alt={doctor.name}
              className="w-16 h-16 object-cover rounded-full transition-opacity duration-500"
            />
            <div>
              <p className="font-semibold">{doctor.name}</p>
              <p className="text-teal-500 text-sm">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorTeam;