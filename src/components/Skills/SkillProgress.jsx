// components/SkillProgress.jsx
import React, { useEffect, useState } from 'react';
import useInView from './useInView';

const SkillProgress = ({ skill, percent }) => {
  const [ref, inView] = useInView();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      setProgress(percent);
    }
  }, [inView, percent]);

  return (
    <div className="mb-6" data-aos="fade-up" ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-sm font-semibold">{percent}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-l from-blue-400 via-purple-400 to-pink-300 h-2 rounded-full transition-all duration-[2000ms] ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;
