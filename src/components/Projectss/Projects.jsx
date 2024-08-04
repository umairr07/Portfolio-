import { useState } from "react";
import resume from "../../photos/resume.png";
import googledrive from "../../photos/googleDrive.png";
import pix from "../../photos/pix.png";
import geekFoody from "../../photos/geekfoods.png";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import {
  CSS_URL,
  FIREBASE_URL,
  GIT_URL,
  HTML_URL,
  JAVA_URL,
  JS_URL,
  REACT_URL,
  TAILWIND_URL,
} from "../../constants/url";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Google Drive Clone",
    description:
      "A sleek and responsive Google clone utilizing ReactJS, Firebase for backend services, and Tailwind CSS for modern styling.",
    imgURL: googledrive,
    react: REACT_URL,
    tailwind: TAILWIND_URL,
    firebase: FIREBASE_URL,
    github: "https://github.com/umairr07/Google-Drive-Clone",
    goLive: "https://google-drive-clone-phi.vercel.app/",
  },
  {
    id: 4,
    title: "GeekFoods",
    description:
      "Geekfoods: An e-commerce app offering a wide variety of delicious foods at your fingertips.",
    imgURL: geekFoody,
    github: "https://github.com/umairr07/GeekFoods",
    goLive: "https://geek-foods.vercel.app/",
  },
  {
    id: 2,
    title: "Pix transformer App",
    description:
      "A versatile Pix Transformer that seamlessly removes backgrounds and converts image file types with ease.",
    imgURL: pix,
    github: "https://github.com/umairr07/PixTransformer",
    goLive: "https://pix-transformer.vercel.app/",
  },
  {
    id: 3,
    title: "Interview Ready with AI",
    imgURL: resume,
    description:
      "Interview Ready with AI generates customized resumes and recommends job opportunities based on your skills.",
    github: "https://github.com/umairr07/Resume-Ai",
    goLive: "https://umairr07.github.io/Resume-Ai/",
  },
];

function Projects() {
  const [myProjects, setMyProjects] = useState(projects);
  return (
    <>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="font-bold lg:text-5xl sm:text-3xl text-center mb-20 lg:mt-32 sm:mt-[1150px]"
        id="projects"
      >
        PROJECTS
      </motion.h1>
      <div className="flex flex-wrap justify-around p-5 items-center gap-y-40 mb-10 ">
        {myProjects.map((project) => (
          <div key={project.id}>
            <div className="group flex flex-col justify-start items-start gap-2 lg:w-[500px] sm:w-[330px] lg:h-[300px] sm:h-[250px] duration-500 relative rounded-lg p-4 bg-slate-100 hover:-translate-y-2 hover:shadow-lg hover:shadow-slate-500 cursor-pointer sm:mr-10 lg:mr-0">
              <div
                className=" absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 lg:w-[350px] lg:h-1/2 rounded-lg bg-purple-400 sm:w-[200px] sm:h-[90px]"
                alt="image here"
              >
                <img src={project.imgURL} alt="" />
              </div>

              <div className="text-black">
                <div className="">
                  <h2 className="text-2xl font-bold mb-2 ">{project.title}</h2>
                  <p className="">{project.description}</p>
                </div>
                <div className="flex gap-3 mt-5">
                  <button className="Btn">
                    <FaGithub className="svgIcon" />
                    <a href={project.github} className="text" target="blank">
                      Github
                    </a>
                  </button>
                  <button className="Btn">
                    <FaLink className="svgIcon" />
                    <a href={project.goLive} className="text" target="blank">
                      Go Live
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
