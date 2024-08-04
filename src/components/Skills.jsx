import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3, SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoIosGitMerge } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { CSS_URL, HTML_URL, JS_URL } from "../constants/url";
import { SiMongodb } from "react-icons/si";
import tailwind from "../assets/tailwincss.svg";
import git from "../assets/git.svg";
import java from "../assets/java.svg";
import react from "../assets/react.svg";

import firebase from "../photos/firebaseImage-removebg-preview.png";
import nodejs from "../assets/nodejs.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div>
      <div className="p-10 h-screen w-full" id="skills">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="font-bold lg:text-5xl sm:text-3xl text-center mb-10"
        >
          SKILLS
        </motion.p>
        <div className="p-2 flex flex-wrap justify-center gap-10">
          <Card title="HTML" href="#" Icon={ImHtmlFive2} image={HTML_URL} />
          <Card title="CSS" href="#" Icon={SiCss3} image={CSS_URL} />
          <Card title="JavaScript" Icon={IoLogoJavascript} image={JS_URL} />
          <Card title="React" Icon={IoLogoReact} image={react} />
          <Card title="Node JS" Icon={FaNodeJs} image={nodejs} />
          <Card title="Express JS" Icon={SiExpress} image={express} />
          <Card title="Mongo DB" Icon={SiMongodb} image={mongodb} />
          <Card title="Tailwind" Icon={SiTailwindcss} image={tailwind} />
          <Card title="Git" Icon={IoIosGitMerge} image={git} />
          <Card title="Java" Icon={FaJava} image={java} />
          <Card title="Firebase" Icon={IoLogoFirebase} image={firebase} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, Icon, image }) => {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="lg:w-[400px] sm:w-[300px]  p-4 rounded border-[1px] border-slate-500 relative overflow-hidden group text-white cursor-pointer shadow-2xl "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-gray-800 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

        <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-300 group-hover:text-white group-hover:rotate-12 transition-transform duration-300" />
        {/* <Icon className="mb-2 text-3xl text-violet-300 group-hover:text-white transition-colors relative z-10 duration-300" /> */}
        <img
          src={image}
          alt=""
          className="w-[35px] roup-hover:text-white transition-colors relative z-10 duration-300 mb-2"
        />
        <h3 className="font-medium text-xl  group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
      </motion.div>
    </div>
  );
};

export default Skills;
