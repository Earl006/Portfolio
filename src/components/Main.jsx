import React from 'react';
import { TypeAnimation } from 'react-type-animation';
 import {FaTwitter,FaLinkedin, FaTelegram, FaWhatsapp} from 'react-icons/fa'
function Main() {
  return (
    <div id="main" className="relative">
      <img
        className="w-full h-screen object-cover object-left"
        src="images/me.jpeg"
        alt="Background"
      />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">I'm Earljoe</h1>
          <h2 className="text-white text-2xl lg:text-4xl">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Developer',
                1000,
                'Coder',
                1000,
                'Tech Enthusiast',
                1000,
                'Network Engineer',
                1000
              ]}
              wrapper="div"
              speed={50}
              style={{
                display: 'inline-block',
                fontSize: '1em',
                paddingLeft: '5px',
                color: 'orange',
                fontWeight: 'bold',
                fontStyle: 'italic',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex items-center justify-center mt-4">
      <a href="https://twitter.com/Earljoe5" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="cursor-pointer text-white text-2xl lg:text-4xl mr-4" size={20} />
      </a>
      <a href="https://t.me/Earl" target="_blank" rel="noopener noreferrer">
        <FaTelegram className="cursor-pointer text-white text-2xl lg:text-4xl mr-4" size={20} />
      </a>
      <a href="https://www.linkedin.com/in/earljoe-kadima" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="cursor-pointer text-white text-2xl lg:text-4xl mr-4" size={20} />
      </a>
      <a href="https://wa.me/+254112272250" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="cursor-pointer text-white text-2xl lg:text-4xl mr-4" size={20} />
      </a>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
