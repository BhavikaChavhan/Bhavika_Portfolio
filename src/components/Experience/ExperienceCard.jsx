import React from 'react'

const ExperienceCard = ({ title, company, date, description, aosEffect, skill=[] }) => {
    return (
        <div data-aos={aosEffect}>
        <div  className={` bg-gradient-to-br from-blue-300 via-purple-200 to-pink-100 shadow-lg rounded-lg p-6 mb-4 
      transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl`}>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-800 font-semibold">{company}</p>
        <p className="text-gray-700 text-sm">{date}</p>
        <p className="text-gray-800 mt-2 mb-2">{description}</p>
        <p className='font-bold'>Skills:</p>
        <div className="flex flex-wrap gap-2">
        {skill.map((item, idx) => (
          <span
            key={idx}
            className= "mt-2 px-3 py-1 text-sm text-white bg-[#8245ec] rounded"
          data-aos='fade-down'>
            {item}
          </span>
        ))}
      </div>
      </div>
      </div>
    );
  };
export default ExperienceCard;