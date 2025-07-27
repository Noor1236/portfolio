// src/pages/FinalYearProject.jsx

import { motion } from "framer-motion";
import Button from "../components/Button";

const FinalYearProject = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Title */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-[#800000] dark:text-rose-400 mb-4"
          >
            Final Year Project – Maritime Education & Job Portal
          </motion.h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A MERN-based web platform for managing maritime education and job opportunities, connecting institutions, students, and employers.
          </p>
        </div>

        {/* Intro & Purpose */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#800000] dark:text-rose-300 mb-2">📘 Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The Maritime Education System and Job Portal is a web-based platform designed to provide a comprehensive resource for maritime education and job opportunities within the maritime industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#800000] dark:text-rose-300 mb-2">🎯 Purpose</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This system allows administrators to manage courses and job listings, while students and job seekers can browse and apply for relevant opportunities.
            </p>
          </motion.div>
        </div>

        {/* Scope Section */}
        <div>
          <h2 className="text-2xl font-bold text-center text-[#800000] dark:text-rose-300 mb-6">📌 Scope of Project</h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li>Course and training program management</li>
              <li>User registration and profile creation</li>
              <li>Course search, filtering, and application</li>
              <li>Progress tracking, messaging, and notifications</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Job posting and filtering</li>
              <li>Employer registration and profile creation</li>
              <li>Resume upload and job application system</li>
              <li>Admin, Student, Employer & Job Seeker roles</li>
            </ul>
          </div>
        </div>

        {/* Functional Requirements */}
        <div>
          <h2 className="text-2xl font-bold text-center text-[#800000] dark:text-rose-300 mb-6">⚙️ Functional Requirements</h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#800000] dark:text-rose-400">📚 Maritime Education System</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Add/edit/delete courses & training programs</li>
                <li>User registration & profile management</li>
                <li>Course search & filtering</li>
                <li>Apply for courses & track progress</li>
                <li>Internal messaging & notifications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[#800000] dark:text-rose-400">💼 Maritime Job Portal</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Job posting & editing</li>
                <li>Employer registration & profiles</li>
                <li>Job search & filtering</li>
                <li>Application submissions</li>
                <li>Communication & resume uploads</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Roles */}
        <div>
          <h2 className="text-2xl font-bold text-center text-[#800000] dark:text-rose-300 mb-6">🧑‍💼 User Roles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-gray-700 dark:text-gray-300 font-semibold">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">Administrator</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">Student</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">Job Seeker</div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">Employer</div>
          </div>
        </div>

        {/* Non-Functional Requirements */}
        <div>
          <h2 className="text-2xl font-bold text-center text-[#800000] dark:text-rose-300 mb-6">🔒 Non-Functional Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            <li>JWT-based secure authentication</li>
            <li>RESTful API architecture (client-server)</li>
            <li>Database: PostgreSQL or MySQL</li>
            <li>Frontend: React + Tailwind CSS</li>
            <li>Backend: Node.js + Express.js</li>
            <li>Version control via Git</li>
            {/* <li>Hosting via AWS or Azure</li> */}
            <li>Scalable and secure design</li>
          </ul>
        </div>

        {/* Screenshots Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-[#800000] dark:text-rose-300 mb-8">📸 Project Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={`/screenshots/fyp-${img}.jpg`} // Place images in public/screenshots/
                  alt={`Screenshot ${img}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contribution Info */}
        <div className="text-center mt-16">
          <h2 className="text-xl font-bold text-[#800000] dark:text-rose-300 mb-2">👩‍💻 My Contribution</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            I worked on the complete backend of this project — setting up Node.js server, Express routes, database schema, authentication (JWT), and REST APIs. I also contributed to the system documentation, including SRS, system design, and architectural details.
          </p>
        </div>

        {/* Back to Projects or Live Demo */}
        <div className="mt-12 text-center flex flex-col sm:flex-row justify-center gap-4">
          <Button to="/projects">← Back to Projects</Button>
          <Button href="#" disabled outline>Live Demo Coming Soon</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalYearProject;
