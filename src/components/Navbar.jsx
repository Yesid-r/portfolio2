import React, { useState } from 'react';
import logoPng from '../assets/img/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className='flex'>
          <img src={logoPng} alt="Logo" className="w-12 h-12 object-contain" />
          <div className="text-slate-800 text-lg font-bold flex items-center justify-center">
            <p className="cursor-pointer ml-3">Fullstack developer</p>
          </div>
        </div>

        
        <button
          className="md:hidden text-slate-800 hover:text-gray-600"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden md:block">
            <ul className="flex space-x-4">
                <li>
                <a href="/" className="font-bold text-slate-800 hover:text-gray-600">
                    Home
                </a>
                </li>
                <li>
                <a href="#about" className="font-bold text-slate-800 hover:text-gray-600">
                    About
                </a>
                </li>
                <li>
                <a href="#tech" className="font-bold text-slate-800 hover:text-gray-600">
                    Technologies
                </a>
                </li>
                <li>
                <a href="#projects" className="font-bold text-slate-800 hover:text-gray-600">
                    Projects
                </a>
                </li>
                <li>
                <a href="#contact" className="font-bold text-slate-800 hover:text-gray-600">
                    Contact
                </a>
                </li>
            </ul>
            </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-white p-2 shadow-lg">
          <ul className="space-y-2">
            <li>
              <a href="/" className="font-bold text-slate-800 hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="font-bold text-slate-800 hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#tech" className="font-bold text-slate-800 hover:text-gray-600">
                Technologies
              </a>
            </li>
            <li>
              <a href="#projects" className="font-bold text-slate-800 hover:text-gray-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="font-bold text-slate-800 hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
