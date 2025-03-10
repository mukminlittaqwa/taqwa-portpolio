import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a versatile Software Engineer & Mobile Developer with a passion for building efficient, scalable, and automated solutions. With 5 years of experience, I specialize in crafting seamless digital experiences, ensuring that applications run smoothly and effectively on auto-pilot. My expertise spans both web and mobile development, allowing me to create powerful, user-centric solutions that drive business growth effortlessly.`;

export const ABOUT_TEXT = `I am a results-driven software engineer with a passion for turning ideas into impactful digital solutions. With a strong foundation in problem-solving and innovation, I thrive in fast-paced environments where adaptability and creativity are key. My expertise lies not just in writing clean and efficient code, but in understanding user needs, optimizing experiences, and driving projects to success. I take pride in my ability to collaborate across teams, bridge the gap between technical and business goals, and deliver solutions that truly make a difference. Whether it’s improving workflows, enhancing user engagement, or streamlining complex processes, I am committed to building technology that creates real value.`;

export const EXPERIENCES = [
  {
    "year": "2023 - Present",
    "role": "Software Engineer",
    "company": "PT. Ilmu Untuk Bangsa",
    "description": "Contributed to the development and maintenance of Ilmu.com, a leading educational marketplace in Indonesia. Developed key features to help students discover universities, courses, and career opportunities. Collaborated with cross-functional teams to ensure efficient system integration and optimal user experience.",
    "technologies": ["JavaScript", "Golang", "Svelte", "Flutter", "GCP"]
  },  
  {
    "year": "2021 - 2023",
    "role": "Software Engineer",
    "company": "PT. Widya Imersif Teknologi",
    "description": "Developed and maintained health-focused IoT solutions, including Health Smartwatch, Health Kiosk, and Face & Thermal Recognition devices. Collaborated with cross-functional teams to integrate AI and IoT technologies, enhancing health monitoring capabilities. Focused on improving user experience and system reliability in healthcare applications.",
    "technologies": ["PHP", "Python", "JavaScript", "IoT", "AI"]
  },
  {
    "year": "2017 - 2021",
    "role": "Software Engineer & Project Manager",
    "company": "Trackend.id",
    "description": "Co-founded a software house with colleagues, focusing on projects in the construction and sales marketing sectors. Led the development of custom software solutions, ensuring scalability and efficiency. Managed end-to-end project execution, collaborating with clients to deliver high-quality digital solutions.",
    "technologies": ["PHP", "Python", "JavaScript"]
  }  
];

export const PROJECTS = [
  {
    title: "Virtual Poison Center",
    image: project1,
    description:
      "A digital platform designed to provide instant information and emergency response guidance for poisoning cases. The system helps users identify symptoms, take first-aid measures, and connect with medical professionals.",
    technologies: ["React", "Node.js","flutter", "MongoDB", "Express", "AWS", "socket.io", "firebase"],
  },
  {
    title: "Mimpy - Career Interest Test App",
    image: project1,
    description:
      "An interactive mobile application built with Flutter to help users discover their interests and career inclinations through structured tests and personalized recommendations.",
    technologies: ["Flutter", "Dart", "Firebase", "GCP","golan", "svelt js"],
  },
  {
    title: "Kuis.ilmu.com",
    image: project1,
    description:
      "An online platform for creating and taking quizzes, including career interest tests. It provides an intuitive interface for users to generate, customize, and analyze their quiz results.",
    technologies: ["Svelte", "Node.js", "PostgreSQL", "GCP", "golang", "python"],
  },
  {
    title: "Kios Sehat - IoT Health Check Device",
    image: project1,
    description:
      "An IoT-based health monitoring device designed to measure vital signs such as blood sugar levels, heart rate, and blood pressure, providing instant feedback and integration with medical records.",
    technologies: ["Python", "Flask", "Raspberry Pi", "MQTT", "influxDB"],
  },
  {
    title: "Smart Watch - Health Tracking & Analysis",
    image: project1,
    description:
      "A wearable device for tracking and analyzing health data such as heart rate, sleep patterns, and physical activity. The smartwatch syncs with a mobile app for real-time monitoring and insights.",
    technologies: ["Embedded C", "Bluetooth LE", "Flutter", "Firebase", "kotlin", "express", "aws", "laravel", "php"],
  },
  {
    title: "Fatmor - Face Recognition & Thermal Screening",
    image: project1,
    description:
      "An AI-powered IoT device that utilizes face recognition and thermal imaging to enhance security and health monitoring, widely used for workplace and public safety.",
    technologies: ["Python", "Raspberry Pi", "MQTT", "codeigniter"],
  },
  {
    title: "Wika Gedung Project - Monitoring & Archiving App",
    image: project1,
    description:
      "A comprehensive web and mobile application for monitoring construction progress, managing documents, and archiving project data efficiently.",
    technologies: ["React", "Node.js", "MongoDB", "GCP", "MySql", "laravel"],
  },
  {
    title: "POS System - Point of Sales Application (Sampoerna)",
    image: project1,
    description:
      "A robust point-of-sales system designed for retail businesses, enabling real-time inventory tracking, sales analytics, and seamless payment processing.",
    technologies: ["Vue.js", "Node js", "MySQL", "Redis", "express js", "electron", "mongoDB"],
  },
  {
    title: "Jaya Property - Asset & Maintenance Tracking",
    image: project1,
    description:
      "A digital solution for tracking real estate assets, managing property maintenance requests, and ensuring efficient facility operations.",
    technologies: ["React", "Laravel", "PostgreSQL", "AWS"],
  },
  {
    title: "SFA Jamkrida - Sales Tracking & Reporting App",
    image: project1,
    description:
      "A mobile and web application for tracking sales activities, managing daily reports, and assigning tasks to sales representatives in real-time.",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "sails js"],
  },
];
