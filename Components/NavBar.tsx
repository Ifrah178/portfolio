// import Link from "next/link";

// export default function NavBar(){
//     return(
//         <div>
//             <ul className="nav">
//                 <Link className="nav-links" href="#introduction">Introduction</Link>
//                 <Link className="nav-links" href="#contact">Contact</Link>
//                 <Link className="nav-links" href="#skills">Skills</Link>
//                 <Link className="nav-links" href="#education">Education</Link>
//                 <Link className="nav-links" href="#experience">Experience</Link>
//                 <Link className="nav-links" href="#portfolio">Porfolio</Link>
//             </ul>
//         </div>
//     );
// }


"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">Hareem.dev</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <a href="#home" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#experience" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
