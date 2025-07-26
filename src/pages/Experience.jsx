import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'Fiverr',
    duration: 'Present',
    description:
      'Offered web development services on Fiverr, specializing in responsive design, frontend (HTML, CSS, JavaScript, React.js), and backend integration (Node.js, Express, MongoDB). Helped clients optimize web applications for performance and usability.',
  },
  {
    role: 'Full Stack Developer',
    company: 'DevelopersHub Corporation',
    duration: 'Mar 2025 – May 2025',
    description:
      'Completed a remote internship focused on full-stack development using the MERN stack. Contributed to real-time web application features under mentor guidance, gaining experience in both backend and frontend development in a collaborative environment.',
  },
  {
    role: 'Frontend Developer',
    company: 'Internship Pakistan',
    duration: 'Jan 2025 – Mar 2025',
    description:
      'Built a responsive web application with optimized and reusable UI components. Utilized HTML, CSS, JavaScript, and modern frameworks to develop clean, user-friendly interfaces. Gained practical experience in frontend development and agile teamwork.',
  },
  {
    role: 'Web Developer Intern',
    company: 'CodeClause & CodSoft',
    duration: 'Aug 2023 – Dec 2023',
    description:
      'Completed web development internships, developing interactive websites using HTML, CSS, and JavaScript.',
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-r from-rose-50 to-white dark:from-gray-950 dark:to-gray-950 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-[#800000] dark:text-rose-400 mb-12"
        >
          My Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition relative border-l-4 border-rose-200 dark:border-rose-600 pl-6"
            >
              <span className="absolute left-[-10px] top-6 w-4 h-4 bg-[#800000] dark:bg-rose-400 rounded-full shadow-md"></span>
              <h3 className="text-xl font-semibold text-[#800000] dark:text-rose-400">
                {exp.role}
                <span className="text-gray-500 dark:text-gray-400"> @ {exp.company}</span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
