import profileUrl from "../photos/developer-image.webp";
import { motion } from "framer-motion";
function AboutMe() {
  return (
    <div className="h-[90vh] mt-20 sm:mb-20 lg:mb-0" id="aboutMe">
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
            <button className="text-[16px] mt-5 w-32 h-8 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
              <span className="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Contact Me!
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
