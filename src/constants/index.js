import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import elitefaceImg from "../assets/projects/eliteface.jpg";
import laxmiglassImg from "../assets/projects/laxmiglass.jpg";
import watchpartyImg from "../assets/projects/watchparty.jpg";
import taskmanagerImg from "../assets/projects/taskmanager.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With  hands-on experience, I have honed my skills in front-end technologies like React , as well as back-end technologies like Node.js, Express.js, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Express.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  
 
  {
    year: "2021 - 2022",
    role: " Frontend Developer",
    company: "Nova Tech",
    description: `Developed and maintained web applications using JavaScript, React.js,  Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: [ "HTML", " TailwindCSS" ,"React.js", "JavaScript"],
  },
  {
    year: "2020 - 2021",
    role: "Summer Internship",
    company: "Asian Institute of Technology",
    description: `– Selected among top 15 of 800+ applicants to attend a 15-day International Innovation Camp.
– Worked on a mini innovation project using AI technologies.
– Explored technologies like Remote Sensing, ChatGPT, and Generative AI.
– Collaborated in a team to design innovative solutions and learned about marketing and business.
– Presented project outcomes and secured 1st place in the Mini Innovation Project Competition.
.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    id: "eliteface",
    title: "Elite Face India",
    category: "Commercial Production",
    tagline: "Modeling Auditions & National Talent Hunt Web Portal",
    image: elitefaceImg,
    description:
      "A high-performance digital portal engineered for India's premier modeling and talent hunt show. Features multi-city audition registration (Chandigarh, Delhi, Jaipur, Bengaluru & Mumbai), celebrity judge profiles, dynamic event schedules, automated submission validation, and an opulent dark-gold aesthetic tailored for high-fashion talent discovery.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "REST APIs", "Modern UI/UX"],
    liveLink: "https://elitefaceindia.com",
    github: "https://github.com/Abhi-ishek",
    featured: true,
    badge: "Live in Production",
  },
  {
    id: "laxmiglass",
    title: "Laxmi Glass House",
    category: "Client Enterprise Web",
    tagline: "Modern Modular Kitchen & Architectural Glass Showcase",
    image: laxmiglassImg,
    description:
      "An official corporate web platform for Laxmi Glass House (Himachal Pradesh), specializing in modern modular kitchens, toughened architectural glass, custom wardrobes, and interior woodwork. Features interactive service showcases, localized SEO architecture, instant quotation enquiry channels, and a luxury catalog.",
    technologies: ["React.js", "Tailwind CSS", "Vite", "Local SEO", "Interactive UI", "Glassmorphism"],
    liveLink: "https://laxmiglasshouse.com",
    github: "https://github.com/Abhi-ishek",
    featured: true,
    badge: "Client Production",
  },
  {
    id: "watchparty",
    title: "Watch Party",
    category: "Real-Time Web Application",
    tagline: "Synchronized YouTube Video Streaming with Live Chat",
    image: watchpartyImg,
    description:
      "A real-time collaborative entertainment web app enabling friends and communities to watch YouTube videos in perfect synchronization. Built with WebSocket / Socket.io server communication on Render, instant private room creation, room code sharing, live chat messaging, and seamless multi-user playback state syncing.",
    technologies: ["React.js", "Socket.io", "Node.js", "WebSockets", "YouTube API", "Tailwind CSS"],
    liveLink: "https://newwatchparty.vercel.app/",
    github: "https://github.com/Abhi-ishek",
    featured: true,
    badge: "Real-Time Sync",
  },
  {
    id: "taskmanager",
    title: "Task Management App",
    category: "Productivity Web App",
    tagline: "Sprint Workflow Tracker with Daily Motivation API",
    image: taskmanagerImg,
    description:
      "An intuitive productivity web application for organizing daily tasks, sprints, and priorities. Features Kanban-style workflow columns, priority tagging, task lifecycle transitions (Pending, In Progress, Completed), automated daily motivational quote integration via external REST API, and persistent local state management.",
    technologies: ["React.js", "Tailwind CSS", "REST APIs", "State Management", "Vite", "JavaScript"],
    liveLink: "https://taskmanagement-topaz.vercel.app/",
    github: "https://github.com/Abhi-ishek",
    featured: true,
    badge: "Web Application",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    category: "Personal Branding",
    tagline: "Modern Developer Portfolio with Motion Animations",
    image: project3,
    description:
      "A personal portfolio website showcasing real-world projects, technical skills, professional experience, and direct contact channels. Features sleek dark mode aesthetics, interactive navigation, and smooth Framer Motion entrance transitions.",
    technologies: ["React.js", "Tailwind CSS", "Motion", "Vite", "JavaScript"],
    liveLink: "https://github.com/Abhi-ishek",
    github: "https://github.com/Abhi-ishek",
    featured: false,
    badge: "Portfolio",
  },
  {
    id: "blogging-platform",
    title: "Blogging Platform",
    category: "Content Management System",
    tagline: "Modern Article Publishing & Community Hub",
    image: project4,
    description:
      "A scalable platform for creating and publishing technical and lifestyle articles, with rich markdown formatting, interactive commenting, author dashboards, category filtering, and user authentication.",
    technologies: ["HTML5", "CSS3", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    liveLink: "https://github.com/Abhi-ishek",
    github: "https://github.com/Abhi-ishek",
    featured: false,
    badge: "Full Stack",
  },
];

export const CONTACT = {
  address: "New Delhi , India",
  phoneNo: "+91-9161772464 ",
  email: "worktoabhishek@gmail.com",
};
