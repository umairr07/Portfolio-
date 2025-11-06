import { useState } from "react";
import { ExternalLink, Github } from "lucide-react"; // install lucide-react for icons
import { majorProjects, minorProjects } from "./projectsdata";
import { motion } from "framer-motion";

const Projects = () => {
  const [majorProjectsState, setMajorProjectsState] = useState(true);
  const [minorProjectsState, setMinorProjectsState] = useState(false);

  const handleMajorProjects = () => {
    setMajorProjectsState(true);
    setMinorProjectsState(false);
  };

  const handleMinorProjects = () => {
    setMinorProjectsState(true);
    setMajorProjectsState(false);
  };

  return (
    <div className=" text-white py-16 lg:px-40 sm:px-10" id="projects">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="flex justify-around"
      >
        <span
          className={`text-xl cursor-pointer ${
            majorProjectsState ? "text-blue-400 " : ""
          }`}
          onClick={handleMajorProjects}
        >
          Major Projects
        </span>
        <div className="w-[2px] h-6 bg-gray-400"></div>
        <span
          className={`text-xl cursor-pointer ${
            minorProjectsState ? "text-blue-400 " : ""
          }`}
          onClick={handleMinorProjects}
        >
          Mini Projects
        </span>
      </motion.div>
      <div className="w-full h-[1px] bg-white/20 mt-3 mb-10"></div>

      {/* Projects List */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-12"
      >
        {majorProjectsState
          ? majorProjects?.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg"
              >
                {/* Left Image */}
                <div className="w-full md:w-[510px]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-xl w-[500px] object-cover border border-gray-700"
                  />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 space-y-5">
                  {/* Title and Icons */}
                  <div className="flex justify-between items-center">
                    <h2 className="lg:text-4xl sm:text-3xl font-bold">
                      {project.title}
                    </h2>
                    <div className="flex gap-3">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 
               hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 transform"
                      >
                        <ExternalLink size={20} />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 
               hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 transform"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-md text-xs tracking-wide font-medium uppercase hover:bg-white/20 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          : minorProjects?.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg"
              >
                {/* Left Image */}
                <div className="w-full md:w-[510px]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-xl w-[500px] object-cover border border-gray-700"
                  />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 space-y-5">
                  {/* Title and Icons */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-bold">{project.title}</h2>
                    <div className="flex gap-3">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 
               hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 transform"
                      >
                        <ExternalLink size={20} />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 
               hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 transform"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-md text-xs tracking-wide font-medium uppercase hover:bg-white/20 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
      </motion.div>
    </div>
  );
};

export default Projects;
