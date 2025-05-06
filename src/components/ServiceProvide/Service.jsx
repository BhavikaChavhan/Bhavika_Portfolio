// src/components/ServicesSection.jsx
import React from 'react';
import { FaCode, FaPaintBrush, FaLaptopCode, FaRocket, FaCodeBranch  } from 'react-icons/fa';
import { IoGrid } from "react-icons/io5";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-800" />,
    title: "Web Design",
    description: "Design user-friendly, visually appealing web interfaces.",
  },
  {
    icon: <IoGrid className="text-4xl text-pink-800" />,
    title: "Responsive Web Development",
    description: "Develop responsive websites with modern technologies.",
  },
  {
    icon: <FaCode className="text-4xl text-green-700" />,
    title: "Frontend Development",
    description: "Building clean and efficient user interfaces with React.",
  },
  {
    icon: <FaRocket className="text-4xl text-yellow-700" />,
    title: "Website Optimization",
    description: "Enhance website performance, accessibility, and SEO.",
  },
  {
    icon: <FaCodeBranch className="text-4xl text-purple-800" />,
    title: "Version Control",
    description: "Collaborate using Git and GitHub effectively.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-orange-700" />,
    title: "Prototyping",
    description: "Design interactive prototypes to visualize ideas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="p-8 py-6 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-14 ms:mt-24 lg:mt-32 " data-aos='fade-up'>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Services</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
        Offering a range of web development services to bring your ideas to life with modern, responsive designs.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 px-6">
        {services.map((service, index) => (
            <div data-aos='fade-up' className=''>
          <div
            key={index}
            className="bg-gradient-to-r from-[#111827] via-purple-400 to-gray-600 border shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300 text-center"
          >
            <div className=" mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
