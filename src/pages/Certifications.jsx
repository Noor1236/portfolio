import React from "react";
import jsEssentials from "../assets/certifications/JS.jpg";
import mernTraining from "../assets/certifications/mern.jpg";
import laravelKics from "../assets/certifications/laravel.jpg";
import html5Umich from "../assets/certifications/html.jpg";

const certifications = [
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "Feb 15, 2024",
    description:
      "Completed a foundational course covering core JavaScript concepts including variables, functions, loops, conditionals, and DOM manipulation.",
    image: jsEssentials,
  },
  {
    title: "MERN Stack Web Development",
    issuer: "Youth Empowerment Training Program",
    date: "Feb 15, 2024",
    description:
      "Hands-on training with the MERN stack, built dynamic full-stack apps, REST APIs, and implemented CRUD and authentication.",
    image: mernTraining,
  },
  {
    title: "Advanced Web Application Development (Laravel)",
    issuer: "KICS, UET",
    date: "Sep 20, 2023",
    description:
      "Learned MVC, routing, migrations, middleware, and built Laravel apps with secure authentication.",
    image: laravelKics,
  },
  {
    title: "Introduction to HTML5",
    issuer: "University of Michigan",
    date: "Sep 11, 2023",
    description:
      "Explored semantic HTML5, form controls, and best practices for structure and accessibility.",
    image: html5Umich,
  },
];

const Certifications = () => {
  return (
    <section className="py-16 px-6 md:px-12 ">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12 text-[#800000] dark:text-rose-400">
          🏅 My Certifications
        </h1>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-md mb-4 shadow pointer-events-none select-none"
                draggable={false}
              />

              <h2 className="text-xl font-semibold text-[#800000] dark:text-rose-400 mb-1">
                {cert.title}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {cert.issuer}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {cert.date}
              </p>
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
