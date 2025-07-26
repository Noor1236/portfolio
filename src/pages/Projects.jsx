import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio",
    stack: ["React.js", "Tailwind CSS"],
    description:
      "A fully responsive personal portfolio website built with React.js and Tailwind CSS. It features smooth animations, dark mode, project highlights, skills, certifications, and a downloadable resume to professionally showcase my developer profile.",
    code: "#",
    live: "#",
  },
  {
    title: "HooBook – Hotel Booking Platform",
    stack: ["React.js", "Tailwind CSS"],
    description:
      "A fully responsive hotel booking web app built with React.js and Tailwind CSS. Features hotel search, filtering, detailed hotel pages, booking forms, and user dashboards. Integrated admin panel for hotel management with React Router and Context API.",
    code: "#",
    live: "https://hoobook.vercel.app/",
  },
  {
    title: "Shoose – Shoe Brand E-Commerce Website",
    stack: ["React.js", "JavaScript"],
    description:
      "A sleek, responsive e-commerce platform for a fictional shoe brand. Built with React.js, HTML, and CSS. Includes dynamic product listing, filtering, shopping cart, and a component-based architecture.",
    code: "#",
    live: "https://e-commerce-shoe-website-mu.vercel.app/",
  },
  {
    title: "Microsoft Website Clone",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    description:
      "A pixel-perfect, responsive clone of Microsoft’s homepage. Developed using HTML, Tailwind CSS, and JavaScript with dark mode toggle and interactive UI.",
    code: "#",
    live: "https://microsoft-clone-lemon.vercel.app/",
  },
  {
    title: "Modern News Website",
    stack: ["React", "Bootstrap", "NewsAPI"],
    description:
      "A real-time news portal using React, Bootstrap, and NewsAPI. Features live news updates, category filtering, and a dark mode toggle for better user experience.",
    code: "#",
    live: "https://news-kappa-fawn.vercel.app/",
  },
  {
    title: "Wanderlust Adventures",
    stack: ["HTML", "CSS", "Flexbox"],
    description:
      "A visually appealing, responsive travel agency landing page built with HTML and CSS using Flexbox and CSS Grid. Features travel packages, testimonials, and contact form.",
    code: "#",
    live: "https://wonderlust-adventures.vercel.app/",
  },
  {
    title: "Internship Pakistan",
    stack: ["React", "CSS", "JavaScript"],
    description:
      "A responsive React web app built for Internship Pakistan. Designed with an intuitive UI, optimized performance, and mobile-friendly layout.",
    code: "#",
    live: "https://internship-pakistan.vercel.app/",
  },
  {
    title: "Maritime Education System & Job Portal",
    stack: ["Node.js", "Express.js", "MySQL"],
    description:
      "Backend for a web-based maritime education & job portal using Node.js, Express, and MySQL. Built RESTful APIs, managed databases, and ensured secure, scalable architecture.",
    code: "#",
    live: "#",
  },
  {
    title: "Chatbot Web Application",
    stack: ["MERN", "GroqAPI"],
    description:
      "A MERN-stack chatbot that takes crime/case input and returns summaries and applicable law sections using GroqAPI. Includes MongoDB backend and Express routing.",
    code: "https://github.com/Noor1236/chatbot_client",
    live: "https://chatbot-client-seven.vercel.app/",
  },
  {
    title: "MetaBlog",
    stack: ["MERN"],
    description:
      "A full-stack blog platform using the MERN stack. Features blog creation, editing, user auth, and clean UI for an optimized blogging experience.",
    code: "https://github.com/Noor1236/meta_client",
    live: "https://meta-client-mern.vercel.app/",
  },
  {
    title: "QuizHawk",
    stack: ["Laravel"],
    description:
      "A Laravel-powered quiz platform with roles for admin and users. Includes MCQs, timers, scoring, and leaderboard functionality.",
    code: "#",
    live: "#",
  },
  {
    title: "To-do App",
    stack: ["Laravel"],
    description:
      "A clean Laravel app to manage daily tasks. Features include CRUD operations, user-friendly UI, and responsive layout.",
    code: "https://github.com/Noor1236/CodeClauseInternship_To-do-App",
    live: "#",
  },
  {
    title: "Chrome Extensions",
    stack: ["JavaScript", "HTML", "CSS"],
    description:
      "Built and deployed two Chrome extensions using JavaScript. One for basic calculations, the other for email scraping within web pages.",
    code: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-[#800000] dark:text-rose-400 mb-12"
        >
          🚀 My Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-[#800000] dark:text-rose-400 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-300 dark:bg-gray-600 px-2 py-1 rounded-full text-xs text-gray-900 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {proj.code && (
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm px-3 py-1 bg-[#800000] text-white rounded-full hover:bg-rose-600"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
