import React from 'react'
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      title: "Java Fullstack Development Training",
      company: "CNC WEB WORLD, Pune",
      date: "Dec 2023 - Dec 2024",
      description: "Completed comprehensive training in Java Fullstack Development with a focus on building modern web applications.",
      aosEffect: "fade-left",
      skill: ["Java", "MySQL", "HTML", "CSS", "HTML5", "CSS3", "JavaScript", "Bootstrap", "ReactJS", "Tailwindcss" ]
    },
    {
      title: "Frontend Development",
      company: "Simplilearn",
      date: "Oct 2024",
      description: "Responsible for designing and developing interactive user interfaces with ReactJS.",
      aosEffect: "fade-left",
      skill: ["HTML","HTML5", "CSS","CSS3", "JavaScript"],
    },
    {
      title: "Java Course- Mastering the Fundamentals",
      company: "Scaler.com",
      date: "Dec 2023",
      description: "Responsible for designing and developing interactive user interfaces with ReactJS.",
      aosEffect: "fade-right",
      skill: ["Java", "OOPS", "DBMS"],
    },
    {
      title: "Web Design",
      company: "Universal IT Solution, Ujjain",
      date: "Aug 2021- Aug 2021",
      description: "Responsible for designing and developing interactive user interfaces.",
      aosEffect: "fade-right",
      skill: ["HTML", "CSS", "JavaScript", "JQuery", "Ajax"],
    },
  ];

  return (
    <section id='experience' className="p-8 py-5 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-14 ms:mt-24 lg:mt-32 " data-aos='fade-up'>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Internship & Experience</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
        Highlights of the roles I've played and the impact I've made through my work.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10 " data-aos='fade-up'>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            description={experience.description}
            aosEffect={experience.aosEffect}
            skill= {experience.skill}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;