import React from "react";
import { motion } from "framer-motion";
import bugDetectiveImage from "../assets/blog/bug.png";
import consistencyImage from "../assets/blog/consistency.png";
import creativeCodingImage from "../assets/blog/creative.jpg";


const blogPosts = [
  {
    title: "Debugging Like a Detective: How to Solve Bugs Efficiently",
    date: "August 5, 2025",
    excerpt:
      "Debugging isn’t just about fixing errors — it's an investigative art. Learn how to approach bugs methodically, stay calm, and trace problems like a digital Sherlock Holmes.",
    image: bugDetectiveImage, // e.g., import bugDetectiveImage from '../assets/blog/bug.jpg'
    link: "#",
  },
  {
    title: "The Silent Power of Consistency in Learning to Code",
    date: "July 30, 2025",
    excerpt:
      "You don’t need to code 10 hours a day to grow — you need to code *daily*. Discover why showing up consistently trumps intense but irregular study sessions.",
    image: consistencyImage, // e.g., import consistencyImage from '../assets/blog/consistency.jpg'
    link: "#",
  },
  {
    title: "Creative Coding: Turning Ideas into Interactive Web Experiences",
    date: "July 20, 2025",
    excerpt:
      "Coding isn’t only logical — it’s expressive. Explore how blending creativity with code leads to unique digital products that delight users and stand out online.",
    image: creativeCodingImage, // e.g., import creativeCodingImage from '../assets/blog/creative.jpg'
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="py-16 px-6 md:px-12 ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-[#800000] dark:text-rose-400 mb-12"
      >
        📝 Blog
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-[#800000] dark:text-rose-400 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <a
              href={post.link}
              className="inline-block text-[#800000] dark:text-rose-400 hover:underline text-sm font-medium"
            >
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
