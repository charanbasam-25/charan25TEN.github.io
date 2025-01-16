import React from 'react';
import resumeContent from '../utils/resumeContent.json';

const Projects = () => {
  const { projects } = resumeContent;

  return (
    <div className="mt-16 lg:p-14 p-6 bg-gradient-to-b from-gray-800 to-teal-900">
      <h1 className="text-4xl font-bold py-4 text-center text-white mb-10 tracking-wide">
        Projects
      </h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-gray-700 p-6 my-6 rounded-lg bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="flex items-center justify-between">
            <ul className="flex flex-wrap">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="px-3 py-1 mr-2 mb-2 bg-indigo-100 text-indigo-800 rounded-md text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              className="inline-block text-blue-700 hover:text-blue-900 font-semibold"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View Project
              <img
                className="ml-2 h-4 w-4 inline-block"
                alt="project link icon"
                src="https://i.imgur.com/LPziCTQ.png"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
