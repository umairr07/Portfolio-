import profileUrl from "../photos/developer-image.webp";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
function AboutMe() {
  return (
    <div className="h-[90vh] mt-20" id="aboutMe">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="font-bold lg:text-5xl sm:text-3xl text-center"
        >
          About Me?
        </motion.h1>
      </div>
      <div className="lg:flex lg:flex-row lg:gap-20 md:flex  md:flex-row  md:gap-14  justify-center lg:mt-20 sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-1 sm:mt-8">
        <div>
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={profileUrl}
            alt=""
            className="lg:w-[400px] lg:h-[300px] object-cover rounded-xl sm:w-[300px] sm:h-[200px]"
          />
        </div>

        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="lg:w-[550px] sm:w-[300px]">
            <h1 className="font-bold lg:text-3xl sm:text-xl text-[#FFBD39] mt-5">
              Hello!! Welcome
            </h1>
            <p className="lg:text-lg md:text-[14px] mt-5 ">
              I’m a passionate Full Stack Developer specializing in the MERN
              stack, with a strong focus on creating dynamic, user-friendly web
              applications.Whether it's crafting intuitive frontend designs
              using React and Tailwind CSS or building robust backend systems
              with Node.js and MongoDB, I take pride in every step of the
              development process.
            </p>
          </div>
          <a href="#footer">
            <button className="relative flex items-center px-6 py-3 mt-5 overflow-hidden font-medium transition-all bg-[#FFBD39] rounded-md group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-600  rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-yellow-600 rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Contact Me!
              </span>
            </button>
          </a>

          {/* <div className="flex gap-5 mt-10 text-3xl ">
            <FaGithub className="cursor-pointer" />
            <CiLinkedin className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
