import { useState } from "react";
import resume from "../photos/resume.png";
import googledrive from "../photos/googleDrive.png";
import pix from "../photos/pix.png";
import {
  CSS_URL,
  FIREBASE_URL,
  GIT_URL,
  HTML_URL,
  JAVA_URL,
  JS_URL,
  REACT_URL,
  TAILWIND_URL,
} from "../constants/url";

const projects = [
  {
    id: 1,
    title: "Google Drive Clone",
    imgURL: googledrive,
    react: REACT_URL,
    tailwind: TAILWIND_URL,
    firebase: FIREBASE_URL,
    github: "https://github.com/umairr07/Google-Drive-Clone",
    goLive: "https://google-drive-clone-phi.vercel.app/",
  },
  {
    id: 2,
    title: "Pix transformer App",
    imgURL: pix,
    github: "https://github.com/umairr07/PixTransformer",
    goLive: "https://pix-transformer.vercel.app/",
  },
  {
    id: 3,
    title: "Interview Ready with AI",
    imgURL: resume,
    github: "https://github.com/umairr07/Resume-Ai",
    goLive: "https://umairr07.github.io/Resume-Ai/",
  },
];

function Projects() {
  const [myProjects, setMyProjects] = useState(projects);
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl text-center mt-20">PROJECTS</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {myProjects.map((project) => (
          <div key={project.id}>
            <div className="border-2 p-3 bg-[#fff] text-black w-[500px]   m-5 ">
              <img src={project.imgURL} alt="" className="w-[500px]" />
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">{project.title}</h1>
                <div className="flex gap-5">
                  <img src={project.react} alt="" className="h-7" />
                  <img src={project.tailwind} alt="" className="h-7" />
                  <img src={project.firebase} alt="" className="h-7 " />
                </div>
              </div>
              <div className="flex gap-5 justify-center mt-5">
                <a href={project.github}>Github</a>
                <a href={project.goLive}>Go Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
