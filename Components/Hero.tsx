"use client";
import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 pt-16">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="text-white space-y-8">
          <div className="space-y-2">
            <p className="text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold">HAREEM FAROOQI</h1>
            <h2 className="text-2xl md:text-3xl">Web Developer & Designer</h2>
          </div>
          <p className="max-w-2xl text-gray-200">
            A passionate web developer and designer with expertise in creating beautiful, 
            functional, and user-friendly websites. Specializing in modern web technologies 
            and creative design solutions.
          </p>
          <div className="flex space-x-6">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 border border-white hover:bg-white/10 rounded-full transition-colors"
            >
              Learn More
            </a>
          </div>
          <div className="flex space-x-6 pt-4">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://instagram.com" className="hover:text-blue-400 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
