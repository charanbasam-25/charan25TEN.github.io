import React from 'react';
import resumeContent from '../utils/resumeContent.json';
import { motion } from 'framer-motion';

const Projects = () => {
  const { projects } = resumeContent;

  return (
    <div className="mt-16 lg:p-14 p-6 bg-black relative overflow-hidden">
      {/* Matrix green rain background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="matrix-rain text-green-400 font-mono text-sm leading-snug whitespace-pre">
          {Array(200).fill("01").join(" ")}
        </div>
      </div>

      <h1 className="text-5xl font-extrabold py-6 text-center text-green-400 tracking-widest z-10 relative drop-shadow-lg">
        Projects
      </h1>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="border border-green-700 p-6 my-6 rounded-xl bg-black/80 shadow-lg hover:shadow-green-500/50 
                     transform hover:scale-105 transition-transform duration-300 z-10 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-green-300 tracking-wide">
            {project.title}
          </h2>
          <p className="text-green-200/80 mb-4 font-mono">{project.description}</p>
          <div className="flex items-center justify-between flex-wrap">
            <ul className="flex flex-wrap">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="px-3 py-1 mr-2 mb-2 bg-green-900/40 text-green-300 border border-green-700 rounded-md 
                             text-xs font-mono tracking-wider animate-pulse hover:bg-green-700 hover:text-black"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              className="inline-block text-green-400 hover:text-green-200 font-semibold tracking-wider"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View Project ⚡
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
