import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-[#800000] dark:bg-gray-800 text-white dark:text-gray-300 mt-12 pt-10 pb-4 px-6 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-base font-medium">
          <NavLink
            to="/"
            className="hover:text-rose-300 dark:hover:text-rose-400 transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className="hover:text-rose-300 dark:hover:text-rose-400 transition-colors"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-rose-300 dark:hover:text-rose-400 transition-colors"
          >
            Contact
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Noor1236"
            target="_blank"
            rel="noreferrer"
            className="hover:text-rose-300 dark:hover:text-rose-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/developer-noor-fatima"
            target="_blank"
            rel="noreferrer"
            className="hover:text-rose-300 dark:hover:text-rose-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dev.noor102@gmail.com"
            className="hover:text-rose-300 dark:hover:text-rose-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white dark:border-gray-600 pt-4 text-sm text-gray-200 dark:text-gray-400 w-full">
          © {new Date().getFullYear()} Noor Fatima. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
