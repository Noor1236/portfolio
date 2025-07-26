import { useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reload

    const formData = new FormData(formRef.current);

    try {
      // Send form data using fetch to FormSubmit
      await fetch("https://formsubmit.co/ajax/dev.noor102@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      toast.success("✅ Message sent successfully!");
      formRef.current.reset(); // clear form
    } catch (error) {
      toast.error("❌ Something went wrong!");
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 ">
      <ToastContainer />

      {/* LEFT: Info */}
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
          I'm always open to opportunities, collaborations, or just a friendly hello.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-6 text-2xl text-[#800000] dark:text-rose-400">
          <a href="mailto:dev.noor102@gmail.com" target="_blank"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/developer-noor-fatima" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/Noor1236" target="_blank"><FaGithub /></a>
        </div>
      </motion.div>

      {/* RIGHT: Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded border bg-white dark:bg-gray-700"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded border bg-white dark:bg-gray-700"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded border bg-white dark:bg-gray-700"
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
