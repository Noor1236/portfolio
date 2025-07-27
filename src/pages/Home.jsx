import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gif from '../assets/git.gif';
import { Typewriter } from 'react-simple-typewriter';
import Button from '../components/Button';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaChalkboardTeacher } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql } from 'react-icons/si';
import resumeFile from '../assets/noor_cv.pdf';


const name = "Noor Fatima";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 ">
                <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <motion.h1
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl sm:text-5xl font-bold mb-4"
                        >
                            Hi, I’m{" "}
                            <span className="inline-flex">
                                {[...name].map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={child}
                                        className="text-[#800000] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-rose-600 dark:to-pink-500 font-bold"
                                        style={{ whiteSpace: 'pre' }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h1>

                        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#800000] dark:text-rose-400">
                            <Typewriter
                                words={[
                                    'MERN Stack Developer 💻',
                                    'Software Engineer 🧠',
                                    'Problem Solver 🧩',
                                ]}
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={60}
                                delaySpeed={2000}
                            />
                        </h2>

                        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                            I build clean, responsive, and dynamic websites using the MERN stack. Passionate about modern web technologies and continuous learning.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button to="/projects">View Projects</Button>
                            <Button href={resumeFile} download outline>
                                Download Resume
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex-1 flex justify-center"
                    >
                        <img src={gif} alt="Hero Illustration" className="w-[300px] md:w-[400px]" />
                    </motion.div>
                </div>
            </section>

            {/* About Me Preview */}
            <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-white to-rose-50 dark:bg-gradient-to-r dark:from-gray-950 dark:to-gray-950">
                <h2 className="text-3xl font-bold text-center text-[#800000] dark:text-rose-400 mb-8">
                    About Me
                </h2>
                <p className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    I'm a passionate MERN Stack Developer with a degree in Software Engineering. I love turning complex problems into simple, beautiful, and intuitive digital solutions. From creating scalable web apps to responsive user interfaces — I strive to deliver clean and impactful code.
                </p>
                <div className="mt-8 text-center">
                    <Button to="/about">Read More →</Button>
                </div>
            </section>

            {/* What I Do / Services Section */}
            <section className="py-20 px-6 md:px-12 ">
                <h2 className="text-3xl font-bold text-center text-[#800000] dark:text-rose-400 mb-12">
                    Services I Offer
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {[{
                        icon: <FaReact className="text-cyan-500 text-4xl mb-4" />,
                        title: 'MERN Stack Development',
                        description:
                            'Building full-stack applications using MongoDB, Express, React, and Node.js for scalable, modern web experiences.',
                    },
                    {
                        icon: <FaWordpress className="text-blue-600 text-4xl mb-4" />,
                        title: 'WordPress Development',
                        description:
                            'Creating dynamic WordPress websites with custom themes, plugins, and eCommerce using WooCommerce.',
                    },
                    {
                        icon: <FaChalkboardTeacher className="text-yellow-500 text-4xl mb-4" />,
                        title: 'Mentorship & Teaching',
                        description:
                            'If you want to learn web development, I’ll teach you step-by-step — frontend, backend, and full-stack!',
                    },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-all text-center"
                        >
                            <div className="flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-[#800000] dark:text-rose-400 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button to="/services">Explore Services →</Button>
                </div>
            </section>



            {/* Skills Section */}
            <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-white to-rose-50 dark:from-gray-900 dark:to-gray-950">
                <h2 className="text-3xl font-bold text-center text-[#800000] dark:text-rose-400 mb-12">
                    Skills
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {[
                        { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-3xl mb-2" /> },
                        { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-3xl mb-2" /> },
                        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl mb-2" /> },
                        { name: "React", icon: <FaReact className="text-cyan-400 text-3xl mb-2" /> },
                        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl mb-2" /> },
                        { name: "Express", icon: <SiExpress className="text-gray-700 dark:text-gray-300 text-3xl mb-2" /> },
                        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl mb-2" /> },
                        { name: "MySQL", icon: <SiMysql className="text-blue-800 text-3xl mb-2" /> },
                    ].map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center font-semibold shadow-lg hover:scale-105 hover:shadow-xl dark:hover:shadow-rose-400/20 transition-all duration-300"
                        >
                            <div className="flex justify-center">{skill.icon}</div>
                            {skill.name}
                        </motion.div>
                    ))}
                </div>

                {/* More Button */}
                <div className="mt-12 text-center">
                    <Button to="/about">Learn More About Me →</Button>
                </div>
            </section>


            {/* Projects */}
            <section className="py-20 px-6 md:px-12 ">
                <h2 className="text-3xl font-bold text-center text-[#800000] dark:text-rose-400 mb-12">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Personal Portfolio",
                            description:
                                "A responsive developer portfolio built using React and Tailwind CSS showcasing my work, skills, and projects.",
                            link: "/projects",
                        },
                        {
                            title: "Maritime Education & Job Portal (FYP)",
                            description:
                                "A full-stack MERN system for maritime institutions and students, featuring course management, certifications, job listings, and application tracking.",
                            link: "/projects/final-year-project",
                        },
                        {
                            title: "QuizHawk – Online Quiz Platform",
                            description:
                                "Built with Laravel, features admin/user roles, timed MCQs, scoring system, and leaderboard.",
                            link: "/projects",
                        },
                    ].map((proj, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-bold mb-2 text-[#800000] dark:text-rose-400">
                                {proj.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">{proj.description}</p>
                            <Link
                                to={proj.link}
                                className="inline-block mt-4 text-[#800000] dark:text-rose-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:to-pink-500 transition-all duration-300"
                            >
                                View Details →
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button to="/projects">Explore All Projects</Button>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-white to-rose-50 dark:bg-gradient-to-r dark:from-gray-950 dark:to-gray-950">
                <h2 className="text-3xl font-bold text-center text-[#800000] dark:text-rose-400 mb-12">
                    Experience
                </h2>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {[
                        {
                            role: 'MERN Stack Developer',
                            company: 'Fiverr',
                            duration: 'Present',
                            description:
                                'Offered web development services specializing in responsive design, frontend (HTML, CSS, React), and backend (Node.js, Express, MongoDB). Helped clients optimize web apps for performance.',
                        },
                        {
                            role: 'Full Stack Developer',
                            company: 'DevelopersHub Corporation',
                            duration: 'Mar 2025 – May 2025',
                            description:
                                'Completed a remote internship using the MERN stack. Built real-time features under mentor guidance and collaborated on full-stack web app modules.',
                        },

                    ].map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition border-l-4 border-rose-200 dark:border-rose-600 pl-6 relative"
                        >
                            <span className="absolute left-[-10px] top-6 w-4 h-4 bg-[#800000] dark:bg-rose-400 rounded-full shadow-md"></span>
                            <h3 className="text-xl font-semibold text-[#800000] dark:text-rose-400">
                                {exp.role} <span className="text-gray-500 dark:text-gray-400">@ {exp.company}</span>
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button to="/experience">See Full Experience →</Button>
                </div>
            </section>


            {/* Contact Section */}
            <section className="py-16 text-center ">
                <h2 className="text-3xl font-bold text-[#800000] dark:text-rose-400 mb-4">
                    Have a project in mind?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Let's build something great together.
                </p>
                <Button to="/contact">Contact Me →</Button>
            </section>

        </>
    );
};

export default Home;
