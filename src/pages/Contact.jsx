import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 ">

      {/* LEFT SIDE: Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 mb-10 md:mb-0 md:pr-12 text-center md:text-left"
      >
        <h1 className="text-4xl font-bold mb-4 text-[#800000] dark:text-rose-400">
          Let’s Connect
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
          I'm always open to opportunities, collaborations, or just a friendly hello. Reach out and let’s build something great together!
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-6 text-2xl text-[#800000] dark:text-rose-400">
          <a href="mailto:dev.noor102@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/developer-noor-fatima" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://github.com/Noor1236" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:scale-110 transition-transform duration-200" />
          </a>
        </div>

      </motion.div>

      {/* RIGHT SIDE: Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-[#800000] hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-lg w-full transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
