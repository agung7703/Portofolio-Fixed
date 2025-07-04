import project1 from "../assets/projects/adoptWeb.webp";
import project2 from "../assets/projects/kobaraWeb.webp";
import project3 from "../assets/projects/adoptMobile.webp";
import project4 from "../assets/LogoKampus.webp";

export const HERO_CONTENT = `I am passionate about front-end development. I focus on creating interactive and intuitive user interfaces, primarily using React.js. I'm known for my quick adaptability, inclusive leadership, and strong public speaking skills. I'm also accustomed to working collaboratively within teams to deliver innovative and modern web solutions. My vision is to evolve into a competent Full-Stack Developer, as I believe that combining front-end and back-end expertise is crucial for creating fully responsive and functional web applications.`;

export const ABOUT_TEXT = ``;

export const EXPERIENCES = [
  {
    year: "Feb 2025 - Present",
    role: "Full Stack Developer Cohort",
    company: "Coding Camp Powered By DBS Foundation X Dicoding",
    description: `Participating in the Coding Camp powered by DBS Foundation, I significantly enhanced both my hard skills and soft skills, ranging from foundational web programming and front-end & back-end development to communication, stress management, and personal branding, all of which I'm eager to apply in my future career.`,
    technologies: ["HTML", "CSS", "Node.js", "Webpack", "Hapi.js", "React", "Vite", "Laravel" ],
  },
  {
    year: "Jun 2024",
    role: "Software Development Bootcamp",
    company: "Universitas Bina Sarana Informatika",
    description: `Led and managed project teams, ensuring effective problem-solving and work optimization. Contributed as a UI/UX Designer and refined project documentation.`,
    technologies: ["Figma", "HTML", "CSS", "PHP"],
  },
];

export const EDUCATION = [
  {
    year: "2020 - 2024",
    image: project4,
    degree: "Bachelor's Degree in Information Technology",
    institution: "Universitas Bina Sarana Informatika",
    description: `Studied a wide range of subjects, including computer systems, data structures, algorithms, computer networks, and software engineering.`,
    grade: "3.96"
  },
];

export const PROJECTS = [
  {
    title: "Adopt House Website",
    image: project1,
    link: "https://adoptpetproject.zeabur.app",
    description:
      "Adopt House is a smart and accessible web-based pet adoption platform, tackling the issue of stray animals by simplifying the digital adoption process through preference-based recommendation systems and CNN-powered animal image verification. The platform leverages a microservice architecture, integrating ML, a Laravel backend, React frontend, and MySQL for scalability and a user-friendly interface.",
    technologies: ["React", "Vite", "TailwindCSS", "MySQL", "Laravel", "CNN", "ML", "Python"],
  },
  {
    title: "KOBARA E-Commerce",
    image: project2,
    link: "https://github.com/agung7703/tokobajuolahraga.git",
    description:
      "The KOBARA Website is an e-commerce platform that connects users directly with products sold by KOBARA, simplifying the purchasing process.",
    technologies: ["React", "Bootstrap", "Node.Js"],
  },
  {
    title: "Adopt House Mobile",
    image: project3,
    link: "https://github.com/agung7703/Adopt_House.git",
    description:
      "Adopt House Mobile is a mobile application-based pet adoption platform designed to address the issue of stray animals. It streamlines the digital adoption process through a smart and accessible Android application. Built with React Native and Expo, Adopt House Mobile leverages Firebase as a cloud service to ensure optimal performance and development flexibility.",
    technologies: ["React Native", "Expo", "Firebase"],
  },
];

export const CONTACT = {
  address: "Jakarta Selatan, DKI Jakarta",
  phoneNo: "+62 857 7200 3192",
  email: "agungmaulana7703@gmail.com",
};
