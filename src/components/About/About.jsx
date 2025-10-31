import uLogo from "../../photos/new-u-logo.png";
import "./About.css";
import myResume from "../../assets/Umer_Shaikh_FullStack_Developer..pdf";
import { motion } from "framer-motion";
import { MdOutlineDownload } from "react-icons/md";
import { FaAngleDoubleDown } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";

function About() {
  const openResume = () => {
    window.open(myResume, "_blank");
  };

  return (
    <div className="flex py-12" id="about">
      <div className=" flex lg:pl-36 sm:pl-5 text-gray-300">
        <div>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4 }}
            className="lg:text-4xl sm:text-xl mb-2"
          >
            Hey, there <span className="inline-block">👋</span>
          </motion.h2>

          <motion.h1
            className="lg:text-7xl sm:text-3xl font-bold text-white "
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-[#85b3ca] to-[#47b8e9] bg-clip-text text-transparent">
              Umer Shaikh
            </span>
          </motion.h1>

          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="lg:text-7xl sm:text-3xl font-bold text-white mt-5 "
          >
            a Full Stack Developer
          </motion.h1>

          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="lg:text-xl sm:text-md text-gray-400 mt-4 leading-relaxed "
          >
            who develops scalable, high-performing web apps that blend <br />{" "}
            clean code, speed, and great user experience.
          </motion.p>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.2 }}
            className="flex gap-5 mt-8 "
          >
            <div
              className="text-md border border-[#90d4f6] py-2 px-5 cursor-pointer rounded-md 
    transition-all duration-500 ease-in-out
    hover:bg-gradient-to-r hover:from-[#90d4f6] hover:to-[#38bdf8] 
    hover:text-[#0b253b] hover:border-transparent hover:scale-105 flex justify-center items-center gap-1"
              onClick={openResume}
            >
              <MdOutlineDownload size={20} />
              <p>Download CV</p>
            </div>

            <a
              href="#aboutMe"
              className="text-md border border-[#90d4f6] py-2 px-5 cursor-pointer rounded-md 
    transition-all duration-500 ease-in-out
    hover:bg-gradient-to-r hover:from-[#90d4f6] hover:to-[#38bdf8] 
    hover:text-[#0b253b] hover:border-transparent hover:scale-105 flex justify-center items-center gap-1"
            >
              <p>Scroll Down</p>
              <FaAngleDoubleDown size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="ml-20 "
      >
        <RiCodeSSlashLine size={350} className=" text-[#90d4f6]" />
      </motion.div>
    </div>
  );
}

export default About;
