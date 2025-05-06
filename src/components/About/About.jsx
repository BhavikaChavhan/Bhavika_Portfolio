import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/mypic.png';
import { FaFileDownload } from "react-icons/fa";

const About = () =>{
    return(
        <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-16 ms:mt-24 lg:mt-32' data-aos='fade-up'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                {/* left side */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                    {/* greeting */}
                    <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
                        Hi, I'm
                    </h1>
                    {/* name */}
                    <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-300 to-pink-400 bg-clip-text text-transparent  mb-4 leading-tight' data-aos='fade-right'>
                        Bhavika Chavhan
                    </h2>
                    {/* skills heading with typing effect */}
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                        <span className='text-white'>
                            I am a&nbsp;
                        </span>
                        <ReactTypingEffect text={[
                            'Frontend Developer',
                            'Web Developer',
                            'Web Designer',
                            'React Developer'
                        ]}
                        speed={100}
                        eraseSpeed={50}
                        typingDelay={500}
                        eraseDelay={2000}
                        cursorrenderer={(cursor)=>(
                            <span className='text-[#8245ec]'>{cursor}</span>
                        )}/>                       
                    </h3>

                    {/* about me paragraph */}
                    <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
                        I'm a passionate Frontend Developer with 1 year of hands-on training experience in building responsive and user-friendly web interfaces. Skilled in HTML, CSS, JavaScript, and modern frameworks like ReactJS. I love turning design ideas into functional, interactive websites with clean code and smooth animations.
                    </p>

                    <a href="https://drive.google.com/file/d/1wly9S4NQ-6k4rgmCzAKFzWeNahFBz8_W/view?usp=drivesdk" 
                    target='_blank'
                    rel='noopener noreferrer' 
                    className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold tranition duration-300 transform hover:scale-105'
                    style={{
                        backgound: 'linear-gradient(90deg, #8245ec, #a855f7)',
                        boxShadow: '0 0 2px 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                    }}
                    data-aos='fade-up'>
                        Download
                       Resume
                    </a>
                </div>
                {/* Right side for image */}
                <div className='md:w-1/2 flex md:justify-end flex items-center justify-center' data-aos='fade-left'>
                    <Tilt className='w-48 h-48 sm:h-64 md:w-[18rem] md:h-[18rem] border-purple-700 rounded-full'
                    style={{
                        backgound: 'linear-gradient(90deg, #8245ec, #a855f7)',
                        boxShadow: '0 0 2px 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                    }}
                    tiltMaxAngleX={20}
                    tilt>
                        <img src={profileImage} alt="Bhavika Chavhan" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
                    </Tilt>
                </div>
            </div>
        </section>
    );
}
export default About;