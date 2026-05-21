import { FaReact, FaNodeJs, FaJava, FaDocker, FaAws, FaWpforms } from 'react-icons/fa';
import { SiRedis, SiCplusplus, SiKubernetes, SiDotnet, SiMongodb, SiMysql} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

export const personalInfo = {
  name: "Gabriel Chiriac",
  title: "Software Engineer II | Backend & Full-Stack Developer | AI-Assisted Engineering",
  email: "chiriac.gabriel21@yahoo.com",
  summary: "Software Engineer with strong expertise in the .NET ecosystem (C#, ASP.NET Core, SQL) and hands-on experience with React/TypeScript for modern web development. A dedicated and collaborative team player who consistently delivers value through commitment and technical excellence, with proven ability to optimize performance, improve reliability, and deliver end-to-end solutions that meet user and business requirements.",
  bio: "Software Engineer with strong expertise in the .NET ecosystem (C#, ASP.NET Core, SQL) and hands-on experience with React/TypeScript for modern web development. A dedicated and collaborative team player who consistently delivers value through commitment and technical excellence, with proven ability to optimize performance, improve reliability, and deliver end-to-end solutions that meet user and business requirements.",
  phone: "+40 740 666 402",
  location: "Iași, Romania",
  github: "https://github.com/Chiriac21",
  linkedin: "https://linkedin.com/in/gabriel-chiriac-b90361201",
};

export const skillGroups = [
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (Lambda, ECS, CloudWatch, IAM, S3)", icon: <FaAws className="text-orange-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
    ]
  },
  {
    category: "Backend & AI",
    skills: [
      { name: "C#/.NET (Expert)", icon: <TbBrandCSharp className="text-blue-500" /> },
      { name: "ASP.NET Core", icon: <SiDotnet className="text-red-500" /> },
      { name: "WPF", icon: <FaWpforms className="text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C/C++", icon: <SiCplusplus className="text-blue-700" /> },
    ]
  },
  {
    category: "Fullstack & Data",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-blue-400" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "SQL Server", icon: <DiMsqlServer className="text-red-600" /> },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Teacher-Pupil Management App",
    description: "A full-stack web application designed to connect teachers and pupils in a secure digital learning environment. The platform provides authentication, role-based access, and core education management features, including users, classes, assignments, and progress tracking. It was built with ASP.NET Core, Angular, TypeScript, and Entity Framework Core, with a focus on secure data handling and reliable end-to-end functionality.",
    tags: ["ASP.NET Core", "Angular", "Entity Framework", "JWT"],
    repoLink: "https://github.com/Chiriac21/PlatformaProfesori",
  },
  {
    id: 2,
    title: "Sto Vasilis – Restaurant Website",
    description: "A customer-facing website for a Greek restaurant in Chemnitz, Germany. The site features an animated hero section, a menu page with a protected WebP image viewer (no download access), an about page, a visit page with a Google Maps embed and opening hours, and a QR code generator for physical table menus — each QR code links directly to the menu viewer for customers to scan at their table.",
    tags: ["React", "Vite", "Framer Motion", "Lucide React", "Vanilla CSS"],
    repoLink: "https://github.com/Chiriac21",
  },
  {
    id: 3,
    title: "HoloLens 2 Control App",
    description: "A mixed-reality HoloLens 2 application developed in Unity and C# to control and visualize the Digital Twin of a holonomic robot. The application enabled real-time robot monitoring and interaction through REST APIs and persistent TCP/UDP communication. It was designed with optimized spatial UI, stable real-time data handling, and a modular architecture that can be extended to support additional robots, sensors, and control modes.",
    tags: ["C#", "Unity", "TCP/UDP", "REST API", "Digital Twin", "HoloLens 2"],
    repoLink: "https://github.com/Chiriac21/HoloLicenta",
  },
];

export const experience = [
  {
    year: "May 2024 – Present",
    role: "Software Engineer II",
    company: "Bentley Systems",
    bullets: [
      "System Simplification: Removed a legacy API from a multi-project desktop application, consolidating core services and reducing overall system complexity.",
      "Efficiency Gains: Re-architected workflows, database access, and inter-service communication, achieving a 15% improvement in operational efficiency.",
      "Desktop Application Engineering: Developed and maintained C#, .NET, and WPF applications with Entity Framework–backed data layers, contributing to a 20–25% increase in system stability and delivery speed.",
      "Code Quality Leadership: Drove pull request reviews and performance audits, reducing post-release defects by approximately 25%.",
      "Full-Stack Tooling: Built and enhanced internal tooling using React/TypeScript and secure REST APIs, improving scalability and boosting developer productivity by 15–20%.",
      "Client-Facing Delivery: Delivered a client-driven enhancement through continuous feedback and close collaboration, resulting in smooth delivery and high client satisfaction."
    ]
  },
  {
    year: "Jul 2022 – May 2024",
    role: "Software Engineer",
    company: "PREH Romania",
    bullets: [
      "Embedded Automotive Software: Developed embedded C software for automotive systems, supporting reliable real-time behavior in a safety-critical environment.",
      "CAN Bus Simulation: Built C#/.NET simulation tools to emulate CAN bus communication between vehicle modules, reducing reliance on physical hardware by 35–45% and accelerating validation workflows.",
      "Testing & Reliability: Integrated unit-tested modules, improving product robustness and reducing failure rates by approximately 20–30% under varied operating condition.",
      "Secure API Development: Implemented RESTful APIs with JWT-based authentication, enabling secure communication between automotive subsystems and external services."
    ]
  },
];

export const education = [
  {
    period: "2023 – 2025",
    degree: "Master in Engineering - Distributed Systems and Web Technologies",
    school: "Technical University Gheorghe Asachi Iași",
    location: "Iași, Romania"
  },
  {
    period: "2019 – 2023",
    degree: "Bachelor in Engineering - Computer Engineering",
    school: "Technical University Gheorghe Asachi Iași",
    location: "Iași, Romania"
  }
];

