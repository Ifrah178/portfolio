"use client";
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/api/placeholder/400/400" 
              alt="Profile" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6 text-gray-600">
            <p>
              Alhamdulillah I am a dedicated professional with experience in social media management, 
              graphic design, video editing, and web development.
            </p>
            <p>
              Alhamdulillah With a solid foundation in programming languages like Java, 
              JavaScript, TypeScript, HTML, and CSS.
            </p>
            <p>
              Passionate about continuous learning, I aim to contribute my diverse expertise in web 
              development, design, and social media management.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-900">Name:</strong> Ifrah Farooqi
              </div>
              <div>
                <strong className="text-gray-900">Email:</strong> farooqiiafra@gmail.com
              </div>
              <div>
                <strong className="text-gray-900">From:</strong> Pakistan
              </div>
              <div>
                <strong className="text-gray-900">Phone:</strong> +92 331 3417127
              </div>
            </div>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
