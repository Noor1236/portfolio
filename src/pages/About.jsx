import { motion } from 'framer-motion';
import Button from '../components/Button';
import profilePic from '../assets/mine.jpg'; // replace with your profile image path
import { Link } from 'react-router-dom';
import {
  SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiMysql,
  SiPhp, SiLaravel, SiWordpress, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiGithub, SiVercel, SiPostman,
} from "react-icons/si";
import resumeFile from '../assets/noor_cv.pdf';

const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Jquery", icon: <SiJquery /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "WordPress", icon: <SiWordpress /> },
  { name: "React Js", icon: <SiReact /> },
  { name: "Node Js", icon: <SiNodedotjs /> },
  { name: "Express Js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Postman", icon: <SiPostman /> },
  // { name: "Java", icon: <SiJava /> },
];

const About = () => {
  return (
    <section className="py-16 px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#800000] dark:text-rose-400"
        >
          About Me
        </motion.h1>

        {/* Intro + Image */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src={profilePic}
            alt="Noor Fatima"
            loading="lazy"
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-[#800000]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          >
            I’m <strong>Noor Fatima</strong>, a Software Engineering graduate with a strong foundation in full-stack development. I’m passionate about building efficient and beautiful digital experiences using modern tools like React, Node, and Tailwind. I love learning, solving real-world problems, and turning ideas into working code.
          </motion.p>
        </div>

        {/* Education Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 text-[#800000] dark:text-rose-400">🎓 University</h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Bachelor of Science in Software Engineering</strong><br />
              Virtual University of Pakistan<br />
              Graduation Year: <strong>2024</strong>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3 text-[#800000] dark:text-rose-400">🏫 College</h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Intermediate (ICS Computer Science)</strong><br />
              Lahore College for Women University
              <br />
              Graduation Year: <strong>2020</strong>
            </p>
          </div>
        </div>

        {/* FYP Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3 text-[#800000] dark:text-rose-400">💼 Final Year Project</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Maritime Education & Job Portal</strong><br />
            This project is a full-fledged web-based platform developed using <strong>React, Node.js, Express, and MySQL</strong>, aimed at bridging the gap between maritime education and job opportunities in the maritime industry. It includes features for course management, job posting, application tracking, messaging, and resume handling with role-based access control for different user types.
          </p>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Left Column: Education System */}
            <div>
              <h3 className="text-xl font-semibold text-[#800000] dark:text-rose-300 mb-2">📘 Maritime Education Module:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Course & Training Management</li>
                <li>Student Registration & Profiles</li>
                <li>Course Search with Filters</li>
                <li>Enrollment & Progress Tracking</li>
                <li>Internal Messaging & Notifications</li>
              </ul>
            </div>

            {/* Right Column: Job Portal */}
            <div>
              <h3 className="text-xl font-semibold text-[#800000] dark:text-rose-300 mb-2">💼 Maritime Job Portal Module:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Employer Registration & Job Posting</li>
                <li>Job Search with Advanced Filters</li>
                <li>Resume Upload & Job Applications</li>
                <li>Communication with Applicants</li>
                <li>Admin Oversight of Listings & Users</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with secure authentication (JWT), RESTful APIs, and a scalable architecture hosted on AWS/Azure.
            </p>
          </div>
        </div>

        {/* Highlight Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold text-center text-[#800000] dark:text-rose-400 mb-6">🚀 Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Personal Portfolio",
                description: "Responsive React + Tailwind portfolio to showcase skills, projects, and resume.",
                link: "/projects/portfolio",
              },
              {
                title: "QuizHawk – Quiz Platform",
                description: "Laravel app with timed MCQs, leaderboard, and roles for admin/users.",
                link: "/projects/quizhawk",
              },
            ].map((proj, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-2 text-[#800000] dark:text-rose-400">{proj.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{proj.description}</p>
                <Link
                  to={proj.link}
                  className="inline-block mt-4 text-[#800000] dark:text-rose-400 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button to="/projects">See All Projects</Button>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-semibold text-center text-[#800000] dark:text-rose-400 mb-6">🧠 Skills</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-800 dark:text-white shadow hover:scale-105 transition"
              >
                <span className="text-lg">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* short philosophy or motto about your work ethic or goals */}
        <div className="text-center mt-12 max-w-3xl mx-auto italic text-gray-600 dark:text-gray-400">
          “I believe creativity isn’t just for design — it’s for logic, problem-solving, and the magic that happens when ideas become real.”
        </div>


        {/* Certifications */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center text-[#800000] dark:text-rose-400 mb-8">
            🏆 Courses & Certifications 
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
            {[
              {
                title: "JavaScript Essentials 1",
                source: "Cisco Networking Academy",
                date: "Feb 15, 2024",
              },
              {
                title: "MERN Stack Web Development",
                source: "Youth Empowerment Training Program",
                date: "Feb 15, 2024",
              },
              {
                title: "Advanced Web Application Development (Laravel)",
                source: "KICS, UET",
                date: "Sep 20, 2023",
              },
              {
                title: "Introduction to HTML5",
                source: "University of Michigan",
                date: "Sep 11, 2023",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-[#800000] dark:text-rose-400 mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {cert.source}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button to="/certifications">View All Certifications</Button>
          </div>
        </div>


        {/* Fun Section – Outside of Code */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-[#800000] dark:text-rose-400 mb-4">🎨 Outside of Coding</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">

            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition">
              <span className="text-3xl">🌿</span>
              <h3 className="text-lg font-medium mt-2">Nature Walks</h3>
              <p className="text-sm mt-1">I love spending time in nature — it's refreshing and helps clear my mind.</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition">
              <span className="text-3xl">📖</span>
              <h3 className="text-lg font-medium mt-2">Reading & Poetry</h3>
              <p className="text-sm mt-1">Books and poetry are my escape — I enjoy words that heal, teach, and inspire.</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition">
              <span className="text-3xl">👨‍👩‍👧‍👦</span>
              <h3 className="text-lg font-medium mt-2">Time with Family & Friends</h3>
              <p className="text-sm mt-1">Nothing beats laughter and heartfelt moments shared with loved ones.</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition">
              <span className="text-3xl">✒️</span>
              <h3 className="text-lg font-medium mt-2">Calligraphy</h3>
              <p className="text-sm mt-1">Calligraphy is my peaceful art form — I love crafting beauty through every stroke.</p>
            </div>

          </div>
        </div>




        {/* Resume Download */}
        <div className="text-center mt-8">
          <Button href={resumeFile} download>
            Download Resume
          </Button>
        </div>

      </div>
    </section>
  );
};

export default About;
