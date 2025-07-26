import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/certifications', text: 'Certifications' },
    { to: '/contact', text: 'Contact' },
    { to: '/blog', text: 'Blog' },
  ];

  return (
    <nav className="bg-[#800000] dark:bg-gray-800 text-white dark:text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <NavLink
            to="/"
            className="text-2xl italic font-semibold tracking-wide bg-gradient-to-r from-rose-300 to-pink-500 text-transparent bg-clip-text"
          >
            Noor Fatima
          </NavLink>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `mx-2 transition-all duration-300 font-medium ${
                    isActive
                      ? 'text-[#FFD1DC] dark:bg-gradient-to-r dark:from-rose-600 dark:to-pink-500 dark:bg-clip-text dark:text-transparent font-semibold'
                      : 'text-white hover:text-pink-300 dark:hover:text-rose-300'
                  }`
                }
              >
                {link.text}
              </NavLink>
            </motion.div>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-white dark:bg-gray-700 rounded-full"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-4 pb-4 space-y-2 bg-[#800000] dark:bg-gray-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={linkVariants}
              >
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 transition-all duration-300 ${
                      isActive
                        ? 'text-[#FFD1DC] font-semibold'
                        : 'text-white hover:text-pink-300 dark:hover:text-rose-300'
                    }`
                  }
                >
                  {link.text}
                </NavLink>
              </motion.div>
            ))}

            {/* Dark Mode Toggle for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setIsOpen(false);
                }}
                className="mt-2 p-2 bg-white dark:bg-gray-700 rounded-full w-full"
              >
                {darkMode ? '🌙' : '☀️'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
