import React from "react";
import { motion } from "framer-motion";
import send_icon from "../assets/send-icon.png";
import todo_app from "../assets/todoapp.png";
import blog_api from "../assets/blogapi.png";
import doc_app from "../assets/doc_app.png";
import netflix_clone from "../assets/netflix_clone.png";

const Work = () => {
  // Animation variants for project cards and fade-in effect
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const projects = [
    {
      id: 1,
      title: "Todo App",
      type: "Full-stack Development",
      description: "A task management app with features to add, edit, and track tasks.",
      stack: ["EJS", "Node.js", "Express", "MongoDB"],
      image: todo_app,
      link: "https://todo-app-yg1v.onrender.com",
    },
    {
      id: 2,
      title: "Blog API",
      type: "Full-stack Development",
      description: "A RESTful API for managing blogs, including CRUD operations.",
      stack: ["Node.js", "Express", "MongoDB", "EJS"],
      image: blog_api,
      link: "https://bloggin-api-7vgm.onrender.com",
    },
    {
      id: 3,
      title: "Doc Appointment App",
      type: "Full-stack Development",
      description: "An application for booking and managing doctor appointments.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      image: doc_app,
      link: "https://prescripto-frontend-x1dv.onrender.com",
    },
    {
      id: 4,
      title: "Netflix Clone",
      type: "Full-stack Development",
      description: "A movie streaming platform showcasing a responsive and modern UI.",
      stack: ["React", "Firebase", "TMDb API", "Tailwind CSS"],
      image: netflix_clone,
      link: "https://netflix-clone-two-rho-90.vercel.app/",
    },
  ];

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial="initial"
      whileInView="whileInView"
      transition="transition"
      variants={fadeIn}
    >
      {/* Heading Section */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        {...fadeIn}
      >
        My portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        {...fadeIn}
      >
        My latest work
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        {...fadeIn}
      >
        Welcome to my portfolio! Explore a curated selection of projects
        highlighting my expertise in frontend and backend development.
      </motion.p>

      {/* Projects Grid Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10"
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="rounded-lg overflow-hidden shadow-md group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
              {...fadeIn}
            />
            {/* Project Details */}
            <motion.div className="bg-white p-5" {...fadeIn}>
              <motion.h3 className="font-semibold text-lg" {...fadeIn}>
                {project.title}
              </motion.h3>
              <motion.p className="text-sm text-gray-600" {...fadeIn}>
                {project.type}
              </motion.p>
              <motion.p className="text-sm text-gray-500 mt-2" {...fadeIn}>
                {project.description}
              </motion.p>

              {/* Tech Stack Section */}
              <motion.div className="mt-3" {...fadeIn}>
                <p className="text-sm font-semibold">Tech Stack:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {project.stack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Call to Action Section */}
              <motion.div className="mt-3 flex items-center justify-between" {...fadeIn}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </a>
                <img src={send_icon} alt="Send Icon" className="w-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
