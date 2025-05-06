// src/components/AcademicSection.jsx
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';


const educationData = [
  {
    date: "2020 - 2024",
    degree: "Bachelor of Technology",
    institute: "RGPV University, Bhopal",
    description: "Completed B.Tech with Computer Science Branch.",
    icon: <FaGraduationCap />
  },
  {
    date: "2019 - 2020",
    degree: "Higher Secondary (HSC)",
    institute: "Govt. School For Excellence",
    description: "Completed 12th with Science stream.",
    icon: <FaSchool/>
  },
  {
    date: "2017 - 2018",
    degree: "Secondary (SSC)",
    institute: "Govt. School For Excellence",
    description: "Completed schooling with 89% marks.",
    icon: <PiStudentFill />
  },
];

const Education = () => {
  return (
    <section id="education" className=" p-8 py-6 px-[7vw] md:px-[7vw] lg:px-[8vw] font-sans mt-14 ms:mt-24 lg:mt-32 " data-aos='fade-up'>
       <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Acedmics</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>


      <VerticalTimeline>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={item.date}
            dateClassName="text-white"
            iconStyle={{ background: '#8245ec', color: '#fff' }}
            icon={item.icon}
            contentStyle={{ background: ' linear-gradient(to left, #93c5fd, #e9d5ff, #f9a8d4)', color: '#000' }}
            contentArrowStyle={{ borderRight: '10px solid  #f9f9f9' }}
          >
            <h3 className="vertical-timeline-element-title">{item.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">{item.institute}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
