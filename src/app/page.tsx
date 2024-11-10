"use client";
import React, { useState } from 'react';
import './globals.css'; 
import Image from 'next/image';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const skills = [
    {
      title: "Programming Languages",
      items: ["JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "Web Development",
      items: ["DreamWeaver", "Wordpress", "React.js", "Next.js"]
    },
    {
      title: "Design",
      items: ["Photoshop", "Illustrator", "Premiere Pro"]
    },
    {
      title: "Social Media Management",
      items: ["Instagram", "Facebook", "TikTok", "YouTube", "Pinterest", "X"]
    },
    {
      title: "Digital Marketing",
      items: ["SEO", "Content Marketing", "Social Media Marketing"]
    },
    {
      title: "Taleem al Quran",
      items: ["Tajweed", "Tafseer","Seearah tun Nabi","Seerah tun Sahabaiyat","and many other books"]
    },
  ];

  const experiences = [

    {
      company: "Alhuda International (karachi)",
      role: "Computer Operator, Receptionist, Course In-charge Assistant",
      description: "All computer related work i.e Para Test Typing.,All kind of reports i.e Monthly and annual reports., All kind of PPTs for di erent sessions"
    },
    {
      company: " Home Tutoring (karachi)",
      role: " Tajweed Teacher, Tafseer Teacher"
    },
    {
      company: " On-line Tutoring (WorldWide)",
      role: "Tajweed Teacher, Tafseer Teacher",
      description: " I've so many former Students across the World Alhumdulillah. Former students from Kuwait, America, Turkey, India, Canada, UK, Dubai,Africa, Malaysia, Oman and Saudia Arabia. Now I'm teaching students here in Pakistan. Alhumdulillah he Katheera. "
    },
    {
      company: " Islamic Reminder ( On-line Islamic Platform,America )",
      role: " Graphic Designer (Remote)",
    },
    {
      company: " Faith Mission ( On-line Islamic Platform, Karachi )",
      role: " Graphic Designer, Counselor (Remote)",
    },
    {
      company: " Youth Club (karachi)",
      role: " Graphic Designer (Remote)",
    },
    {
      company: " Deen e Insaniyat ( On-line Organization,karachi)",
      role: " Founder, Tajweed Teacher, Tafseer Teacher, Motivational Speaker, Graphic, Designer, Writer, Content Writer.",
      description: "handling all matters"
    },
    {
      company: "Noor al Islam Madrasa (karachi)",
      role: " Tajweed Teacher",
    },
     {
      company: " Zikra Institute (karachi)",
      role: " Computer Person (Remote)",
    },
     {
      company: " On-line",
      role: "Freelancer, Graphic Designing Tutor",
    },
    {
      company: "Dr. Quran (UK)",
      role: "Voice Over Artist & Volunteer",
      description: " Charity projects in Khairpur Nathan Shah Sindh."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-flex">
            

            <div className="desktop-menu">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="menu-item"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="hamburger"></div>
              <div className="hamburger"></div>
              <div className="hamburger"></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="mobile-menu">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="mobile-menu-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div id="home" className="hero-section">
        <div className="overlay" />
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-heading">
              <p className="hero-subheading">Hello, I'm</p>
              <h1 className="hero-title">IFRAH FAROOQI</h1>
              <h2 className="hero-role">Web Developer, Designer & Aalimah</h2>
            </div>

            <Image
            src="/profile1.jpg"
            alt="arrow-down"
            width={200}
            height={200}
            className="hero-image"
            priority={true}
          />
            <p className="hero-description">
            "A passionate Aalimah with expertise in teaching Quran and Sunnah to both children and adults. I am also a web developer and designer, skilled in creating beautiful, functional, and user-friendly websites. I specialize in modern web technologies and innovative design solutions."
            </p>
            <div className="hero-buttons">
              <a 
                href="#contact" 
                className="contact-button"
              >
                Contact Me
              </a>
              <a 
                href="#about" 
                className="learn-more-button"
              >
                Learn More
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Ifrah178" className="social-link">GitHub</a>
              <a href="https://www.instagram.com/ifrah.farooqi" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-content">
            
            <div className="about-text">
              <p>
              Alhamdulillah, I am a dedicated teacher with a strong background in Quranic education, specializing in Tajweed, Tafseer, and Islamic studies. My passion for teaching extends to students of all ages, aiming to inspire a deep connection with the Quran and Sunnah.</p>
              <p>
              In addition to my Islamic teaching expertise, I have substantial experience in social media management, graphic design, video editing, and web development. My technical skills include proficiency in Java, JavaScript, TypeScript, HTML, and CSS, as well as experience with frameworks like React and Next.js.</p>
              <p>
              I am committed to continuous learning, always seeking to expand my knowledge and enhance my skills. Whether it's creating impactful digital content or delivering enriching educational experiences, I strive to bring creativity and excellence to every project I undertake.</p>
              <p>
                Passionate about continuous learning, I aim to contribute my diverse expertise in web 
                development, design, and social media management.
              </p>
              <div className="contact-info">
                <div><strong>Name:</strong> Ifrah Farooqi</div>
                <div><strong>Email:</strong> farooqiiafra@gmail.com</div>
                <div><strong>From:</strong> Pakistan</div>
                <div><strong>Phone:</strong> +92 331 3417127</div>
              </div>
              <a 
                href="#contact" 
                className="contact-me-button"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.title} className="skill-card">
                <h3 className="skill-title">{skillGroup.title}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((item) => (
                    <span 
                      key={item} 
                      className="skill-item"
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

      <section id="experience" className="experience-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="experience-list">
            {experiences.map((exp) => (
              <div 
                key={exp.company} 
                className="experience-item"
              >
                <h3 className="experience-title">{exp.company}</h3>
                <p className="experience-role">{exp.role}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Contact Me</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-heading">Get In Touch</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="contact-details">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:farooqiiafra@gmail.com" className="contact-link">farooqiiafra@gmail.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+923242762668" className="contact-link">+92 331 3417127</a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="contact-form">
              <p className="contact-form-heading">Send me a message:</p>
              <form action="#" method="POST" className="form">
                <input 
                  type="text" 
                  name="name" 
                  className="form-input" 
                  placeholder="Your Name" 
                  required
                />
                <input 
                  type="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="Your Email" 
                  required
                />
                <textarea 
                  name="message" 
                  className="form-input" 
                  placeholder="Your Message" 
                  required
                />
                <button type="submit" className="form-submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section> */}



<section id="contact" className="contact-section">
  <div className="contact-container">
    <div className="contact-header">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-underline"></div>
    </div>
    <div className="contact-grid">
      <div className="contact-info">
        <h3 className="contact-subtitle">Get In Touch</h3>
        <p className="contact-text">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <div className="contact-details">
            <h4>Email</h4>
            <a href="mailto:farooqiiafra@gmail.com" className="contact-link">
              farooqiiafra@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">📱</div>
          <div className="contact-details">
            <h4>Phone</h4>
            <a href="tel:+923313417127" className="contact-link">
              +92 331 3417127
            </a>
          </div>
        </div>
        <div className="social-links">
          <a href="https://github.com/Ifrah178" className="social-icon github">GH</a>
          <a href="https://www.instagram.com/ifrah.farooqi" className="social-icon instagram">IG</a>
        </div>
      </div>





<div className="contact-form">
        <form className="space-y-6">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea"></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
