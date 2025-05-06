// src/components/ProjectSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import coffeeImage from '../../assets/coffee1.jpg';
import ecommerceImage from '../../assets/images.jpeg';
import momondoImage from '../../assets/momondo.png';
import projImage from '../../assets/proj.jpeg';


const projects = [
  {
    title: "Coffee-Shop Demo Website",
    description: "A stylish coffee shop landing page created using HTML, CSS, JavaScript, and Bootstrap. It features smooth scrolling, responsive layout, and a modern UI to showcase cafe offerings.",
    image: coffeeImage,
    link: "https://bhavikachavhan.github.io/coffee/"
  },
  {
    title: "E-commerce Demo",
    description: "Trendy-era is a e-commerce website demo project creating in HTML, CSS, JavaScript, TailwindCSS and Bootstrap with user friendly and interactive interface.",
    image: ecommerceImage,
    link: "https://bhavikachavhan.github.io/trendy_era/"
  },
  {
    title: "Momondo",
    description: "Fully responsive Travel package website using HTML, CSS, and JavaScript.",
    image: momondoImage,
    link: "https://bhavikachavhan.github.io/momondo1/"
  },
  {
    title: "Training Project",
    description: "Fully responsive Training projects using Reactjs, Redux, JavaScript, and Tailwind.",
    image: projImage,
    link: "https://backbuttonmedia.com/",
    
  },
  
  // Add more projects as needed
];

const Work = () => {
  return (
    <section id="work" className="py-16 px-[8vw] text-white" data-aos='fade-up'>
      <div className="text-center mb-16 mt-20">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
        A glimpse into the practical work I've done using modern web technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8" data-aos='fade-up' >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
          >
            <div data-aos='fade-up'>
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-purple-400 hover:underline text-sm"
              >
                View Project →
              </a>
              
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
   

  );
};
export default Work;
