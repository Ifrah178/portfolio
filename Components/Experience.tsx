"use client";
import React from 'react';

const experiences = [
  {
    company: "Dr. Quran (UK)",
    role: "Social Media Manager & Web Developer",
    description: "Led social media strategy and web development initiatives",
  },
  {
    company: "HSH Clothing (Canada)",
    role: "Social Media Manager & Web Developer",
    description: "Managed online presence and e-commerce development",
  },
  {
    company: "Sheraz Properties (Dubai)",
    role: "Social Media Manager",
    description: "Handled digital marketing and social media campaigns",
  },
  {
    company: "Ansaarullah (Pakistan)",
    role: "Web Developer",
    description: "Developed and maintained web applications",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-blue-600"
            >
              <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
              <p className="text-blue-600 mt-1">{exp.role}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
