import { motion } from 'framer-motion';
import { FaCode, FaWordpress, FaMobileAlt, FaLaptopCode, FaServer, FaChalkboardTeacher } from 'react-icons/fa';
import Button from '../components/Button';

const services = [
    {
        title: 'MERN Stack Development',
        icon: <FaCode className="text-rose-400 text-4xl mb-4" />,
        description: 'Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js with secure APIs and modern practices.',
    },
    {
        title: 'Responsive Web Design',
        icon: <FaMobileAlt className="text-rose-400 text-4xl mb-4" />,
        description: 'Designing layouts that adapt seamlessly to mobile, tablet, and desktop devices.',
    },
    {
        title: 'Frontend Development',
        icon: <FaLaptopCode className="text-rose-400 text-4xl mb-4" />,
        description: 'Crafting interactive and beautiful UIs using HTML, CSS, JavaScript, React.js, and Tailwind CSS.',
    },
    {
        title: 'Backend Development',
        icon: <FaServer className="text-rose-400 text-4xl mb-4" />,
        description: 'Developing powerful server-side logic, APIs, and database management with Node.js and Express.',
    },
    {
        title: 'WordPress Development',
        icon: <FaWordpress className="text-rose-400 text-4xl mb-4" />,
        description: 'Creating responsive, SEO-friendly WordPress sites with custom themes, plugins, and content management.',
    },
    {
        title: 'Mentorship & Teaching',
        icon: <FaChalkboardTeacher className="text-rose-400 text-4xl mb-4" />,
        description: 'If you want to learn web development, I’ll teach you step-by-step — frontend, backend, and full-stack!',
    },
];

const Services = () => {
    return (
        <section className="min-h-screen px-6 py-16 bg-gradient-to-r from-rose-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-4 text-[#800000] dark:text-rose-400"
                >
                    My Services
                </motion.h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
                    From development to design, I offer everything you need to build, scale, or learn web technologies.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
                        >
                            <div className="flex flex-col items-center text-center">
                                {service.icon}
                                <h3 className="text-xl font-semibold text-[#800000] dark:text-rose-400">{service.title}</h3>
                                <p className="mt-2 text-gray-700 dark:text-gray-300">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12">
                    <Button to="/contact">Let's Work Together →</Button>
                </div>
            </div>
        </section>
    );
};

export default Services;
