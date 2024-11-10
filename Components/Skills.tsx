"use client";
import React from 'react';

const skills = [
  {
    title: "Programming Languages",
    items: ["C", "C#", "C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Web Development",
    items: ["DreamWeaver", "Wordpress", "React.js", "Next.js"],
  },
  {
    title: "Design",
    items: ["Photoshop", "Illustrator", "Premiere Pro"],
  },
  {
    title: "Social Media Management",
    items: ["Instagram", "Facebook", "TikTok", "YouTube", "Pinterest", "X"],
  },
  {
    title: "3D Game Development",
    items: ["Unity3D", "Unreal Engine"],
  },
  {
    title: "Digital Marketing",
    items: ["SEO", "Content Marketing", "Social Media Marketing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{skillGroup.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
