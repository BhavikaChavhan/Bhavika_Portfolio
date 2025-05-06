// components/Skills.jsx
import React from 'react';
import SkillProgress from './SkillProgress';

const skills = [
  { skill: 'HTML | HTML5', percent: 95 },
  { skill: 'CSS | CSS3', percent: 90 },
  { skill: 'JavaScript', percent: 80 },
  { skill: 'ReactJS', percent: 85 },
  { skill: 'Tailwind CSS', percent: 75 },
  { skill: 'Bootstrap', percent: 78 },
  { skill: 'Java(Core & Advanced)', percent: 70 },
  { skill: 'Github', percent: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="text-white py-12 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-14 ms:mt-24 lg:mt-32 " data-aos='fade-up'>
      <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
        A summary of my technical toolkit shaped by continuous learning and execution.
        </p>
      </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10">
          {skills.map((item, index) => (
            <SkillProgress key={index} skill={item.skill} percent={item.percent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
